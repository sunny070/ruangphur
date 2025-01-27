<template>
    <div>
        <div class="navbar navbar-default navbar-static-top heading_anchor">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand heading_anchor" href="#">Search on Map</a>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <p>Welcome to SEARCH ON MAP Panel, Just Enter your origin point and your Destination where you want
                        to go.</p>
                    <div class="well define_height">
                        <form @submit.prevent="submitForm">
                            <div class="form-group">
                                <label>Enter Origin</label>
                                <input id="from_places" v-model="origin" class="form-control"
                                    placeholder="Enter Origin" />
                                <a @click="getCurrentPosition">Set Current Location</a>
                            </div>
                            <div class="form-group">
                                <label>Enter Destination</label>
                                <input id="to_places" v-model="destination" class="form-control"
                                    placeholder="Enter Destination" />
                            </div>
                            <div class="form-group">
                                <label>Travel Mode</label>
                                <select v-model="travelMode" class="form-control">
                                    <option value="DRIVING">Driving</option>
                                    <option value="WALKING">Walking</option>
                                    <option value="BICYCLING">Bicycle</option>
                                    <option value="TRANSIT">Transit</option>
                                </select>
                            </div>
                            <input class="btn btn-primary" type="submit" value="Find"
                                style="background: #8142b1; width: 100%; border: 0px;" />
                        </form>
                        <div class="row" style="padding-top: 20px;">
                            <div class="container">
                                <p id="in_mile">Distance in Mile: <span class="badge badge-pill badge-secondary">{{
                                    distanceInMile }}</span></p>
                                <p id="in_kilo">Distance in KM: <span class="badge badge-pill badge-secondary">{{
                                    distanceInKilo }}</span></p>
                                <p id="duration_text">Duration: <span class="badge badge-pill badge-success">{{
                                    durationText }}</span></p>
                            </div>
                            <div>
                                <button @click="toggleInputMode" class="btn btn-secondary">
                                    Toggle to {{ isSettingOrigin ? 'Set Destination' : 'Set Origin' }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-8">
                    <noscript>
                        <div class="alert alert-info">
                            <h4>Your JavaScript is disabled</h4>
                            <p>Please enable JavaScript to view the map.</p>
                        </div>
                    </noscript>
                    <div id="map" style="height: 500px; width: 100%"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const origin = ref('');
const destination = ref('');
const travelMode = ref('DRIVING');
const distanceInMile = ref(0);
const distanceInKilo = ref(0);
const durationText = ref('');
let map = null;
let directionsService = null;
let directionsDisplay = null;
let isSettingOrigin = true;

onMounted(() => {
    initMap();
    setDestination();
});

function initMap() {
    const myLatLng = { lat: 20.5937, lng: 78.9629 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng,
    });

    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer({ draggable: false });

    // Add a click event listener to the map
    map.addListener('click', (event) => {
        const latLng = event.latLng;
        reverseGeocode(latLng, (address) => {
            if (isSettingOrigin) {
                origin.value = address;
            } else {
                destination.value = address;
            }
        });
    });
}

function reverseGeocode(latLng, callback) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === "OK" && results[0]) {
            callback(results[0].formatted_address);
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}

function toggleInputMode() {
    isSettingOrigin = !isSettingOrigin;
    alert(isSettingOrigin ? "Click to set Origin" : "Click to set Destination");
}
function setDestination() {
    const fromPlaces = new google.maps.places.Autocomplete(document.getElementById('from_places'));
    const toPlaces = new google.maps.places.Autocomplete(document.getElementById('to_places'));

    fromPlaces.addListener('place_changed', () => {
        const fromPlace = fromPlaces.getPlace();
        if (fromPlace && fromPlace.formatted_address) {
            origin.value = fromPlace.formatted_address;
        }
    });

    toPlaces.addListener('place_changed', () => {
        const toPlace = toPlaces.getPlace();
        if (toPlace && toPlace.formatted_address) {
            destination.value = toPlace.formatted_address;
        }
    });
}

function submitForm() {
    displayRoute(travelMode.value, origin.value, destination.value);
    calculateDistance(travelMode.value, origin.value, destination.value);
}

function displayRoute(travelMode, origin, destination) {
    directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode[travelMode],
        avoidTolls: true,
    }, (response, status) => {
        if (status === 'OK') {
            directionsDisplay.setMap(map);
            directionsDisplay.setDirections(response);
        } else {
            directionsDisplay.setMap(null);
            alert('Could not display directions due to: ' + status);
        }
    });
}

function calculateDistance(travelMode, origin, destination) {
    const distanceMatrixService = new google.maps.DistanceMatrixService();
    distanceMatrixService.getDistanceMatrix({
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode[travelMode],
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false,
    }, saveResults);
}

function saveResults(response, status) {
    if (status !== google.maps.DistanceMatrixStatus.OK) {
        alert('Error: ' + status);
    } else {
        const originAddress = response.originAddresses[0];
        const destinationAddress = response.destinationAddresses[0];
        if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
            alert("Sorry, not available to use this travel mode between " + originAddress + " and " + destinationAddress);
        } else {
            const distance = response.rows[0].elements[0].distance;
            const duration = response.rows[0].elements[0].duration;
            distanceInKilo.value = (distance.value / 1000).toFixed(2);
            distanceInMile.value = (distance.value / 1609.34).toFixed(2);
            durationText.value = duration.text;
        }
    }
}

function getCurrentPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setCurrentPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function setCurrentPosition(pos) {
    const geocoder = new google.maps.Geocoder();
    const latlng = { lat: parseFloat(pos.coords.latitude), lng: parseFloat(pos.coords.longitude) };
    geocoder.geocode({ 'location': latlng }, (responses) => {
        if (responses && responses.length > 0) {
            origin.value = responses[1].formatted_address;
        } else {
            alert("Cannot determine address at this location.");
        }
    });
}
</script>

<style scoped>
.heading_anchor {
    background: #8142b1 !important;
    color: #fff !important;
}

.define_height {
    height: 450px;
}
</style>