<script setup>
import { ref, onMounted, nextTick } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { QPage, QInput, QDialog, QCard, QCardSection, QCardActions, QBtn } from "quasar";
import WebLayout from "@/Layouts/WebLayout.vue";

defineOptions({
    layout: WebLayout,
});

// Map-related refs
const center = ref({ lat: 23.164543, lng: 92.9375739 }); // Default map center
const sourceCoords = ref(null);
const destinationCoords = ref(null);

// Form fields
const source_locality = ref("");
const source_lat = ref("");
const source_lng = ref("");
const destination_locality = ref("");
const destination_lat = ref("");
const destination_lng = ref("");
const ratePerKm = 40; // Rate per kilometer
const distanceKm = ref(0); // Distance in kilometers
const transportCost = ref(0); // Transport cost in currency

// Dialog visibility
const showSourceDialog = ref(false);
const showDestinationDialog = ref(false);

// Google Maps Geocoder
const geocoder = ref(null);


onMounted(() => {
    nextTick(() => {
        if (typeof google !== "undefined") {
            geocoder.value = new google.maps.Geocoder();
        } else {
            console.error("Google Maps API not loaded.");
        }
    });
});
// Fetch address from coordinates
const getAddressFromCoords = (coords, type) => {
    if (geocoder.value) {
        geocoder.value.geocode({ location: coords }, (results, status) => {
            if (status === "OK" && results[0]) {
                const address = results[0].formatted_address;
                if (type === "source") {
                    source_locality.value = address;
                    source_lat.value = coords.lat;
                    source_lng.value = coords.lng;
                } else if (type === "destination") {
                    destination_locality.value = address;
                    destination_lat.value = coords.lat;
                    destination_lng.value = coords.lng;
                }
                calculateDistanceAndCost(); // Recalculate distance and cost when coordinates are updated
            } else {
                console.error("Geocoder failed due to:", status);
            }
        });
    }
};
// Handle map click to set location
const handleMapClick = (event, type) => {
    const clickedLocation = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
    };

    if (type === "source") {
        sourceCoords.value = clickedLocation;
        getAddressFromCoords(clickedLocation, "source");
    } else if (type === "destination") {
        destinationCoords.value = clickedLocation;
        getAddressFromCoords(clickedLocation, "destination");
    }
};



// Calculate distance using Haversine formula
const calculateDistanceAndCost = () => {
    if (sourceCoords.value && destinationCoords.value) {
        const R = 6371; // Earth's radius in kilometers
        const dLat = degToRad(destinationCoords.value.lat - sourceCoords.value.lat);
        const dLng = degToRad(destinationCoords.value.lng - sourceCoords.value.lng);
        const lat1 = degToRad(sourceCoords.value.lat);
        const lat2 = degToRad(destinationCoords.value.lat);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        distanceKm.value = (R * c).toFixed(2); // Calculate distance in km and round to 2 decimal places

        transportCost.value = (distanceKm.value * ratePerKm).toFixed(2); // Calculate transport cost
    }
};

// Convert degrees to radians
const degToRad = (deg) => {
    return deg * (Math.PI / 180);
};
</script>
<template>
    <q-page padding>
        <div class="container">
            <h2>Transportation Map</h2>

            <!-- Input Fields -->
            <div class="input-container">
                <QInput v-model="source_locality" label="Source Locality" readonly @click="showSourceDialog = true" />
                <QInput v-model="destination_locality" label="Destination Locality" readonly
                    @click="showDestinationDialog = true" />
            </div>

            <!-- Distance and Cost Display -->
            <div class="info-container">
                <p>Distance: {{ distanceKm }} km</p>
                <p>Transport Cost: ₹{{ transportCost }}</p>
            </div>

            <!-- Dialog for Source Selection -->
            <QDialog v-model="showSourceDialog">
                <QCard style="width: 90vw; max-width: 600px;">
                    <QCardSection>
                        <h6>Select Source Location</h6>
                        <GoogleMap :center="center" :zoom="7" class="dialog-map"
                            @click="(event) => handleMapClick(event, 'source')">
                            <Marker v-if="sourceCoords" :position="sourceCoords"
                                :options="{ position: sourceCoords, label: 'S' }"
                                @dragend="(event) => handleMapClick(event, 'source')" />
                        </GoogleMap>
                    </QCardSection>
                    <QCardActions align="right">
                        <QBtn flat label="Cancel" @click="showSourceDialog = false" />
                        <QBtn flat label="Confirm" color="primary" @click="showSourceDialog = false" />
                    </QCardActions>
                </QCard>
            </QDialog>

            <!-- Dialog for Destination Selection -->
            <QDialog v-model="showDestinationDialog">
                <QCard style="width: 90vw; max-width: 600px;">
                    <QCardSection>
                        <h6>Select Destination Location</h6>
                        <GoogleMap :center="center" :zoom="7" class="dialog-map"
                            @click="(event) => handleMapClick(event, 'destination')">
                            <Marker v-if="destinationCoords" :position="destinationCoords"
                                :options="{ position: destinationCoords, label: 'D' }"
                                @dragend="(event) => handleMapClick(event, 'destination')" />
                        </GoogleMap>
                    </QCardSection>
                    <QCardActions align="right">
                        <QBtn flat label="Cancel" @click="showDestinationDialog = false" />
                        <QBtn flat label="Confirm" color="primary" @click="showDestinationDialog = false" />
                    </QCardActions>
                </QCard>
            </QDialog>
        </div>
    </q-page>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 600px;
}

.info-container {
    margin-top: 20px;
    text-align: center;
}

.dialog-map {
    width: 100%;
    height: 400px;
}
</style>
