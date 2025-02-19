<script setup>
import { ref, onMounted, watch } from "vue";
import { useLoadScript } from "@vue-google-maps/place";

const apiKey = "AIzaSyAGK-HMMYfseKAJY356jUJLnz2ILC5bN_g"; // Replace with your API key
const map = ref(null);
const directionsRenderer = ref(null);
const transport = ref({
  source_lat: 23.7244777,
  source_lng: 92.7194931,
  destination_lat: 23.7262770,
  destination_lng: 92.7095716,
  distance: "",
  transport_cost: "",
});

// Load Google Maps script
const { isLoaded } = useLoadScript({
  googleMapsApiKey: apiKey,
  libraries: ["places"],
});

// Function to calculate and render the route
const drawRoute = () => {
  if (!isLoaded.value || !map.value) return;

  const directionsService = new google.maps.DirectionsService();
  if (!directionsRenderer.value) {
    directionsRenderer.value = new google.maps.DirectionsRenderer();
    directionsRenderer.value.setMap(map.value);
  }

  const request = {
    origin: new google.maps.LatLng(
      transport.value.source_lat,
      transport.value.source_lng
    ),
    destination: new google.maps.LatLng(
      transport.value.destination_lat,
      transport.value.destination_lng
    ),
    travelMode: google.maps.TravelMode.DRIVING,
  };

  directionsService.route(request, (result, status) => {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsRenderer.value.setDirections(result);
      const route = result.routes[0].legs[0];

      // Update distance & cost
      transport.value.distance = route.distance.text;
      const distanceInKm = route.distance.value / 1000;
      transport.value.transport_cost = (distanceInKm * 40).toFixed(2);
    } else {
      console.error("Directions request failed:", status);
    }
  });
};

// Watch for changes in locations & update route
watch(
  () => [
    transport.value.source_lat,
    transport.value.source_lng,
    transport.value.destination_lat,
    transport.value.destination_lng,
  ],
  () => {
    drawRoute();
  },
  { deep: true }
);

// Initialize map when loaded
onMounted(() => {
  if (isLoaded.value) {
    map.value = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: transport.value.source_lat,
        lng: transport.value.source_lng,
      },
      zoom: 14,
    });
    drawRoute();
  }
});
</script>

<template>
  <div>
    <div id="map" style="height: 400px;"></div>
    <p><strong>Distance:</strong> {{ transport.distance }}</p>
    <p><strong>Estimated Transport Cost:</strong> ₹{{ transport.transport_cost }}</p>
  </div>
</template>

<style>
#map {
  width: 100%;
  height: 400px;
}
</style>
