<script setup>
import { ref, watch, onMounted,defineEmits  } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const props = defineProps({
    transport: Object, // Expecting { source_locality, destination_locality }
});


const emit = defineEmits([
    'update:source-locality',
    'update:destination-locality',
    'update:distance',
    'update:transport-cost',
    'maps-loaded'
]);


// Map and Directions API references
const map = ref(null);
const directionsService = ref(null);
const directionsRenderer = ref(null);
const sourceCoords = ref(null);
const destinationCoords = ref(null);
const routeError = ref(null);

const googleMapsApiKey = "AIzaSyAGK-HMMYfseKAJY356jUJLnz2ILC5bN_g"; // Replace with your API key

// Load Google Maps and initialize
const initializeMap = async () => {
    try {
        const loader = new Loader({
            apiKey: googleMapsApiKey,
            libraries: ["places", "geometry"],
            version: "weekly",
        });

        await loader.load();

        directionsService.value = new google.maps.DirectionsService();
        directionsRenderer.value = new google.maps.DirectionsRenderer({
            suppressMarkers: true, // Disable default markers
            polylineOptions: {
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 5,
            },
        });

        console.log("Google Maps Initialized!");
        emit('maps-loaded');
    } catch (error) {
        console.error("Google Maps failed to initialize:", error);
        routeError.value = "Failed to load Google Maps";
    }
};
// Custom markers
let startMarker = null;
let endMarker = null;
// Update markers with draggable functionality
const updateMarkers = (start, end) => {
    if (startMarker) startMarker.setMap(null);
    if (endMarker) endMarker.setMap(null);

    startMarker = new google.maps.Marker({
        position: start,
        map: map.value,
        draggable: true,
    });

    endMarker = new google.maps.Marker({
        position: end,
        map: map.value,
        draggable: true,
    });

    // Handle marker drag events
    startMarker.addListener('dragend', async (e) => {
        const newPos = e.latLng;
        const address = await geocodeLatLng(newPos);
        emit('update:source-locality', address);
        sourceCoords.value = newPos;
        calculateRoute();
    });

    endMarker.addListener('dragend', async (e) => {
        const newPos = e.latLng;
        const address = await geocodeLatLng(newPos);
        emit('update:destination-locality', address);
        destinationCoords.value = newPos;
        calculateRoute();
    });
};
// Geocode coordinates to address
const geocodeLatLng = (latLng) => {
    return new Promise((resolve) => {
        new google.maps.Geocoder().geocode({ location: latLng }, (results, status) => {
            if (status === 'OK' && results[0]) {
                resolve(results[0].formatted_address);
            }
        });
    });
};



// Get Coordinates from address/locality
const getCoordinates = async (place) => {
    return new Promise((resolve, reject) => {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: place }, (results, status) => {
            if (status === "OK" && results.length > 0) {
                resolve(results[0].geometry.location);
            } else {
                reject(`Geocode failed for ${place}: ${status}`);
            }
        });
    });
};

// Calculate route between source & destination
const calculateRoute = async () => {
    if (!directionsService.value || !sourceCoords.value || !destinationCoords.value) {
        console.error("Directions service or coordinates not ready");
        return;
    }

    try {
        console.log("Calculating Route...");
        const response = await directionsService.value.route({
            origin: sourceCoords.value,
            destination: destinationCoords.value,
            travelMode: google.maps.TravelMode.DRIVING,
        });
        directionsRenderer.value.setDirections(response);
        console.log("Route Response:", response);
         // Update markers
         const leg = response.routes[0].legs[0];
        updateMarkers(leg.start_location, leg.end_location);
        // Emit distance and cost
        const distanceKm = (leg.distance.value / 1000).toFixed(2);
        const ratePerKm = 80; // Adjust your rate here
        emit('update:distance', distanceKm);
        emit('update:transport-cost', (distanceKm * ratePerKm).toFixed(2));
        if (response.routes.length > 0) {
            directionsRenderer.value.setDirections(response);
            routeError.value = null;
        } else {
            console.error("No route found.");
            routeError.value = "No route found.";
        }
    } catch (error) {
        console.error("Route calculation failed:", error);
        routeError.value = "Route calculation failed.";
    }
};

// Update Map when props.transport changes
const updateMap = async () => {
    if (!props.transport?.source_locality || !props.transport?.destination_locality) {
        console.warn("Missing source or destination locality.");
        return;
    }

    try {
        console.log("Fetching Coordinates for:", props.transport.source_locality, props.transport.destination_locality);

        // Get source & destination coordinates
        sourceCoords.value = await getCoordinates(props.transport.source_locality);
        destinationCoords.value = await getCoordinates(props.transport.destination_locality);

        console.log("Source Coordinates:", sourceCoords.value);
        console.log("Destination Coordinates:", destinationCoords.value);

        // Initialize map only once
        if (!map.value) {
            map.value = new google.maps.Map(document.getElementById("map"), {
                center: sourceCoords.value,
                zoom: 12,
            });
        }

        // Attach map to directions renderer
        directionsRenderer.value.setMap(map.value);

        // Calculate and show route
        await calculateRoute();
    } catch (error) {
        console.error("Error updating map:", error);
        routeError.value = "Failed to update map.";
    }
};

// Watch for transport updates
watch(
    () => props.transport,
    (newTransport) => {
        console.log("Transport Props Updated:", newTransport);
        updateMap();
    },
    { deep: true, immediate: true }
);

onMounted(async () => {
    await initializeMap();
    updateMap();
});
</script>

<template>
    <div>
        <h2 class="text-lg font-semibold mb-2">Transport Route Map</h2>
        <div v-if="routeError" class="text-red-500 text-sm mb-2">
            {{ routeError }}
        </div>
        <div id="map" class="w-full h-96"></div>
    </div>
</template>

<style scoped>
#map {
    width: 100%;
    height: 500px;
    border-radius: 10px;
}
</style>
