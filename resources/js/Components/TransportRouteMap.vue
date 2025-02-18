<template>
    <GoogleMap :center="mapCenter" :zoom="zoomLevel" style="height: 100%; width: 100%" @load="onMapLoad">
        <!-- Source Marker -->
        <Marker v-if="validSource" :position="sourceCoords" :options="{
            label: 'S',
            title: 'Source',
            icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
        }" />

        <!-- Destination Marker -->
        <Marker v-if="validDestination" :position="destinationCoords" :options="{
            label: 'D',
            title: 'Destination',
            icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
        }" />

        <!-- Route -->
        <Polyline v-if="showRoute" :path="routePath" :options="{
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 4,
            geodesic: true
        }" />
    </GoogleMap>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { GoogleMap, Marker, Polyline } from 'vue3-google-map';
import { Loader } from '@googlemaps/js-api-loader';

const props = defineProps({
    transport: Object
});

// Reactive state
const map = ref(null);
const directionsService = ref(null);
const directionsRenderer = ref(null);
const mapCenter = ref({ lat: 23.1645, lng: 92.9376 });
const zoomLevel = ref(7);
const routePath = ref([]);


const emit = defineEmits(['route-error']);
const routeError = ref(null);
// Coordinate validation
const validSource = computed(() => {
    return isValidCoordinate(
        props.transport?.source_lat,
        props.transport?.source_lng
    );
});

const validDestination = computed(() => {
    return isValidCoordinate(
        props.transport?.destination_lat,
        props.transport?.destination_lng
    );
});

const showRoute = computed(() => validSource.value && validDestination.value);

// Coordinate conversion
const sourceCoords = computed(() => ({
    lat: Number(props.transport?.source_lat),
    lng: Number(props.transport?.source_lng)
}));

const destinationCoords = computed(() => ({
    lat: Number(props.transport?.destination_lat),
    lng: Number(props.transport?.destination_lng)
}));

// Helpers
const isValidCoordinate = (lat, lng) => {
    const numLat = Number(lat);
    const numLng = Number(lng);
    return (
        !isNaN(numLat) &&
        !isNaN(numLng) &&
        numLat >= -90 &&
        numLat <= 90 &&
        numLng >= -180 &&
        numLng <= 180
    );
};

// Map initialization

const initializeMap = async () => {
    try {
        const loader = new Loader({
            apiKey: 'AIzaSyAGK-HMMYfseKAJY356jUJLnz2ILC5bN_g', // REPLACE WITH REAL KEY
            libraries: ['places'],
            version: 'weekly',
        });

        await loader.load();
        directionsService.value = new google.maps.DirectionsService();
        directionsRenderer.value = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            preserveViewport: true
        });
        updateMap();
    } catch (error) {
        console.error('Google Maps initialization failed:', error);
        routeError.value = 'Failed to load Google Maps';
    }
};


// Route calculation
const calculateRoute = async () => {
    try {
        if (!directionsService.value || !validSource.value || !validDestination.value) {
            throw new Error('Missing required parameters for route calculation');
        }

        const result = await directionsService.value.route({
            origin: sourceCoords.value,
            destination: destinationCoords.value,
            travelMode: google.maps.TravelMode.DRIVING
        });

        directionsRenderer.value.setDirections(result);
        routePath.value = result.routes[0].overview_path;
        routeError.value = null;
        emit('route-error', null);
    } catch (error) {
        console.error('Directions request failed:', error);
        routeError.value = error.message;
        emit('route-error', error.message);
        routePath.value = [];
    }
};

// Map load handler
const onMapLoad = (mapInstance) => {
    map.value = mapInstance;
    directionsRenderer.value?.setMap(mapInstance);
};

// Update map when props change
const updateMap = () => {
    if (!validSource.value || !validDestination.value) {
        console.log('Invalid coordinates - skipping map update');
        return;
    }

    mapCenter.value = {
        lat: (sourceCoords.value.lat + destinationCoords.value.lat) / 2,
        lng: (sourceCoords.value.lng + destinationCoords.value.lng) / 2
    };
    zoomLevel.value = 10;
    calculateRoute();
};

// Watchers
watch(() => props.transport, updateMap, { deep: true, immediate: true });
onMounted(initializeMap);
</script>

<style scoped>
.map-container {
    height: 100%;
    width: 100%;
    min-height: 400px;
}
</style>