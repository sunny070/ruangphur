<template>
    <q-layout>
        <q-page-container>
            <q-page padding>
                <div class="flex flex-col justify-center items-center gap-6">
                    <div
                        class="border-2 border-gray-200 bg-[#E9F4FF] flex-shrink-0 rounded-[10px] text-center items-center">
                        <img id="background" class="w-[412px] h-[193px]"
                            src="image/Vertical Stepper with numbers2.png" />
                    </div>
                    <div class="border w-[412px] h-[1200px] rounded-[10px] p-[23px]">
                        <q-form @submit.prevent="submitForm" class="q-gutter-md">
                            <!-- Source District -->
                            <div class="pb-3 flex items-center gap-2">
                                <div class="w-[3px] h-[19px] flex-shrink-0 bg-black"></div>
                                <h6>Ruang Phurh leh Motor Chungchang</h6>
                            </div>
                            <div class="q-mb-sm">
                                <p class="text-[#61646B]">Ruang phurh tanna hmun</p>
                                <div>
                                    <div class="text-sm font-medium text-black q-mb-xs">District</div>
                                    <q-select color="dark" dense outlined v-model.number="form.source_district"
                                        label="Select Source District" :options="district" behavior="menu"
                                        :error="!!form.errors.source_district"
                                        :error-message="form.errors.source_district ? form.errors.source_district[0] : 'Source District is Required'" />
                                </div>
                            </div>

                            <!-- Source Locality -->
                            <div>
                                <div class="text-sm font-medium text-black q-mb-xs">Veng/Khua</div>
                                <q-input color="dark" outlined v-model="form.source_locality" label="Source Locality" readonly
                                    @click="showSourceDialog = true" />
                                <div v-if="form.errors.source_locality" class="text-red-500 text-sm">
                                    {{ form.errors.source_locality }}
                                </div>
                            </div>

                            <!-- Destination District -->
                            <div class="pt-5">
                                <p class="text-[#61646B]">Ruang dahna tur hmun</p>
                                <q-select color="dark" dense outlined v-model.number="form.destination_district"
                                    label="Select Destination District" :options="district" behavior="menu"
                                    :error="!!form.errors.destination_district"
                                    :error-message="form.errors.destination_district || ''" />
                            </div>

                            <!-- Destination Locality -->
                            <div>
                                <q-input color="dark" outlined v-model="form.destination_locality" label="Destination Locality"
                                    readonly @click="showDestinationDialog = true" />
                                <div v-if="form.errors.destination_locality" class="text-red-500 text-sm">
                                    {{ form.errors.destination_locality }}
                                </div>
                            </div>

                            <!-- Distance -->
                            <div class="pt-5">
                                <div class="text-sm font-medium text-black q-mb-xs">Kilometer zat</div>
                                <q-input color="dark" v-model="form.distance" id="distance" type="number" outlined
                                    label="Distance (in km)" readonly />
                                <div v-if="form.errors.distance" class="text-red-500 text-sm">
                                    {{ form.errors.distance }}
                                </div>
                            </div>

                            <!-- Transport Cost -->
                            <div class="pt-5">
                                <p class="text-[#61646B]">Ruang phurhna motor</p>
                                <div class="text-sm font-medium text-black q-mb-xs">Motor hman man (Rs)</div>
                                <q-input color="dark" v-model="form.transport_cost" id="transport-cost" type="number" outlined
                                    label="Transport Cost (₹)" readonly />
                                <div v-if="form.errors.transport_cost" class="text-red-500 text-sm">
                                    {{ form.errors.transport_cost }}
                                </div>
                            </div>

                            <!-- Driver Name -->
                            <div>
                                <div class="text-sm font-medium text-black q-mb-xs">Motor neitu/khalhtu hming</div>
                                <q-input color="dark" outlined v-model="form.driver_name" label="Driver Name" />
                                <div v-if="form.errors.driver_name" class="text-red-500 text-sm">
                                    {{ form.errors.driver_name }}
                                </div>
                            </div>

                            <!-- Driver Phone -->
                            <div>
                                <div class="text-sm font-medium text-black q-mb-xs">Motor neitu/khalhtu phone number
                                </div>
                                <q-input color="dark"  outlined v-model="form.driver_phone" label="Driver Phone" mask="##########" />
                                <div v-if="form.errors.driver_phone" class="text-red-500 text-sm">
                                    {{ form.errors.driver_phone }}
                                </div>
                            </div>

                            <!-- Vehicle Number -->
                            <div>
                                <div class="text-sm font-medium text-black q-mb-xs">Motor registration number</div>
                                <q-input color="dark" outlined v-model="form.vehicle_number" label="Vehicle Number" />
                                <div v-if="form.errors.vehicle_number" class="text-red-500 text-sm">
                                    {{ form.errors.vehicle_number }}
                                </div>
                            </div>

                            <!-- Buttons -->
                            <div class="flex justify-between mt-6">
                                <q-btn style="padding: 10px 24px; border-radius: 12px" outline unelevated
                                    text-color="black" label="Preview" @click="preview = true" />
                                <q-btn style="padding: 10px 95px; border-radius: 12px" unelevated label="Next"
                                    color="black" @click="submitForm" />
                            </div>
                        </q-form>
                    </div>
                </div>

                <!-- Map Dialogs -->
                <q-dialog v-model="showSourceDialog" maximized>
                    <q-card style="width: 90vw; max-width: 600px;height: auto;" >
                        <q-card-section>
                            <div class="flex gap-4 mb-4">
                                <q-input outlined v-model="sourceSearch" placeholder="Search location..."
                                    class="flex-grow" @update:model-value="debouncedSearch($event, 'source')" />
                                <q-btn icon="gps_fixed" @click="locateUser('source')" />
                            </div>
                            <div class="autocomplete-list" v-if="sourcePredictions.length">
                                <q-list bordered>
                                    <q-item v-for="prediction in sourcePredictions" :key="prediction.place_id" clickable
                                        @click="selectPrediction(prediction, 'source')">
                                        <q-item-section>
                                            <q-item-label>{{ prediction.description }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </div>
                            <GoogleMap :center="mapCenter" :zoom="7" style="height: 60vh"
                                @click="(event) => handleMapClick(event, 'source')">
                                <Marker v-if="sourceCoords" :position="sourceCoords" draggable
                                    @dragend="(event) => handleMarkerDrag(event, 'source')" />
                            </GoogleMap>
                            <div class="distance-preview" v-if="form.source_locality">
                                Selected: {{ form.source_locality }}
                            </div>
                        </q-card-section>
                        <q-card-section align="right">
                            <q-btn flat color="red" label="Cancel" @click="showSourceDialog = false" />
                            <q-btn flat label="Confirm" color="green" @click="showSourceDialog = false" />
                        </q-card-section>
                    </q-card>
                </q-dialog>

                <q-dialog v-model="showDestinationDialog">
                    <q-card style="width: 90vw; max-width: 600px">
                        <q-card-section>
                            <div class="flex gap-4 mb-4">
                                <q-input outlined v-model="destinationSearch" placeholder="Search location..."
                                    class="flex-grow" @update:model-value="debouncedSearch($event, 'destination')" />
                                <q-btn icon="gps_fixed" @click="locateUser('destination')" />
                            </div>
                            <div class="autocomplete-list" v-if="destinationPredictions.length">
                                <q-list bordered>
                                    <q-item v-for="prediction in destinationPredictions" :key="prediction.place_id"
                                        clickable @click="selectPrediction(prediction, 'destination')">
                                        <q-item-section>
                                            <q-item-label>{{ prediction.description }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </div>
                            <GoogleMap :center="mapCenter" :zoom="7" class="map-container" @click="(event) =>
                                handleMapClick(event, 'destination')
                                ">
                                <Marker v-if="sourceCoords" :position="sourceCoords" :options="{
                                    position: sourceCoords,
                                    label: 'S',
                                }" />
                                <Marker v-if="destinationCoords" :position="destinationCoords" :options="{
                                    position: destinationCoords,
                                    label: 'D',
                                }" @dragend="(event) =>
                                    handleMapClick(event, 'destination')
                                    " />
                                <Polyline v-if="sourceCoords && destinationCoords"
                                    :path="[sourceCoords, destinationCoords]" :options="{
                                        strokeColor: '#FF0000',
                                        strokeOpacity: 1.0,
                                        strokeWeight: 2,
                                    }" />
                            </GoogleMap>
                        </q-card-section>
                        <q-card-section align="right">
                            <q-btn flat label="Cancel" color="red" @click="showDestinationDialog = false" />
                            <q-btn flat label="Confirm" color="green" @click="showDestinationDialog = false" />
                        </q-card-section>
                    </q-card>
                </q-dialog>

                <!-- Preview Dialog -->
                <q-dialog v-model="preview">
                    <q-card class="w-[411px] h-[900px] rounded-t-lg">
                        <q-card-section>
                            <p class="text-center w-[242px] h-[17px] flex-shrink-0 rounded-[20px] mb-8">
                                Ruang Phurh leh Motor Chungchang
                            </p>
                            <p class="mb-8">Ruang phurh tanna</p>
                            <div class="leading-[2px] pl-5">
                                <p class="text-[#61646B]">District</p>
                                <p>{{ form.source_district["label"] }}</p>
                            </div>
                            <div class="leading-3 pt-4 pl-5">
                                <p class="text-[#61646B]">Veng/Khua</p>
                                <p>{{ form.source_locality }}</p>
                            </div>
                            <hr class="my-4 border-border" />
                            <p class="mb-8 mt-8 text-[#363636]">Ruang dahna tur hmun</p>
                            <div class="leading-[2px] pt-4 pl-5">
                                <p class="text-[#61646B]">District</p>
                                <p>{{ form.destination_district["label"] }}</p>
                            </div>
                            <div class="leading-[2px] pt-4 pl-5">
                                <p class="text-[#61646B]">Veng/Khua</p>
                                <p>{{ form.destination_locality }}</p>
                            </div>
                            <hr class="my-4 border-border" />
                            <div class="flex gap-10 justify-evenly items-center">
                                <div class="leading-[2px] pt-4">
                                    <p class="text-bold text-[18px] text-center">{{ form.distance }}</p>
                                    <p class="text-[#61646B]">Kilometer</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-bold text-[18px] text-center">{{ form.transport_cost }}</p>
                                    <p class="text-[#61646B]">Motor hman man</p>
                                </div>
                            </div>
                            <hr class="my-4 border-border" />
                            <p class="mb-8 mt-8">Ruang phurhna motor</p>
                            <div class="leading-[2px] pt-4">
                                <p class="text-[#61646B]">Motor registration number</p>
                                <p>{{ form.vehicle_number }}</p>
                            </div>
                            <div class="leading-[2px] pt-4">
                                <p class="text-[#61646B]">Motor hming</p>
                                <p>{{ form.vehicle_name }}</p>
                            </div>
                            <div class="leading-[2px] pt-4">
                                <p class="text-[#61646B]">Motor neitu/khalhtu hming</p>
                                <p>{{ form.driver_name }}</p>
                            </div>
                            <div class="leading-[2px] pt-4">
                                <p class="text-[#61646B]">Motor neitu/khalhtu phone number</p>
                                <p>{{ form.driver_phone }}</p>
                            </div>
                        </q-card-section>
                        <q-card-actions class="ml-[22px] pt-[35px]">
                            <q-btn style="
                                        padding: 10px 28px;
                                        border-radius: 12px;
                                    " class="text-black" color="white" label="Edit" v-close-popup />
                            <q-btn style="
                                        padding: 10px 60px;
                                        border-radius: 12px;
                                    " label="Approve & Next" color="black" @click="submitForm" />
                        </q-card-actions>
                    </q-card>
                </q-dialog>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import { ref, onMounted, watch } from "vue";
import { useQuasar } from "quasar";
import { GoogleMap, Marker, Polyline } from "vue3-google-map";
import { debounce } from 'lodash';
import WebLayout from "@/Layouts/WebLayout.vue";

defineOptions({
    layout: WebLayout,
});


const $q = useQuasar();
const preview = ref(false);

const props = defineProps(["form", "districts"]);

const distanceMatrixService = ref(null);
const autocompleteService = ref(null);
const sourcePredictions = ref([]);
const destinationPredictions = ref([]);
const loadingDistance = ref(false);

const mapCenter = ref({ lat: 23.164543, lng: 92.9375739 });
const sourceCoords = ref(null);
const destinationCoords = ref(null);

const source_locality = ref("");
const destination_locality = ref("");
const ratePerKm = 40;

const showSourceDialog = ref(false);
const showDestinationDialog = ref(false);

const sourceSearch = ref("");
const destinationSearch = ref("");

const form = useForm({
    source_district: props.form.source_district || "",
    source_locality: props.form.source_locality || "",
    destination_district: props.form.destination_district || "",
    destination_locality: props.form.destination_locality || "",
    distance: props.form.distance || "",
    vehicle_number: props.form.vehicle_number || "",
    vehicle_name: props.form.vehicle_name || "",
    driver_name: props.form.driver_name || "",
    driver_phone: props.form.driver_phone || "",
    transport_cost: props.form.transport_cost || "",
    source_lat: props.form.source_lat || "",
    source_lng: props.form.source_lng || "",

    destination_lat: props.form.destination_lat || "",
    destination_lng: props.form.destination_lng || "",


});

const district = ref(props.districts || []);

const submitForm = () => {
    form.post(route("form.storeStep2"), {
        onError: (errors) => {
            form.errors = errors;
            preview.value = false;
        },
        onSuccess: () => {
            preview.value = false;
            $q.notify({
                type: "positive",
                message: "Form 2 submitted successfully!",
                position: "top-right",
            });
        },
    });
};
const handleMapClick = async (event, type) => {
    const clickedLocation = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
    };

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${clickedLocation.lat},${clickedLocation.lng}&key=YOUR_API_KEY`
        );
        const data = await response.json();

        if (data.results[0]) {
            const address = data.results[0].formatted_address;
            if (type === 'source') {
                form.source_locality = address;
                sourceCoords.value = clickedLocation;
            } else {
                form.destination_locality = address;
                destinationCoords.value = clickedLocation;
            }
            calculateDistanceAndCost();
        }
    } catch (error) {
        console.error('Geocoding error:', error);
        $q.notify('Error getting address from coordinates');
    }
};

const debouncedSearch = debounce((query, type) => {
    if (!query) {
        if (type === 'source') sourcePredictions.value = [];
        else destinationPredictions.value = [];
        return;
    }

    autocompleteService.value.getPlacePredictions(
        { input: query, componentRestrictions: { country: 'in' } },
        (predictions, status) => {
            if (status === 'OK') {
                if (type === 'source') {
                    sourcePredictions.value = predictions;
                } else {
                    destinationPredictions.value = predictions;
                }
            }
        }
    );
}, 300);


// Modified selectPrediction function
const selectPrediction = async (prediction, type) => {
    try {
        const place = await getPlaceDetails(prediction.place_id);
        const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
        };

        if (type === 'source') {
            sourceCoords.value = location;
            form.source_locality = prediction.description;
            sourceSearch.value = '';
        } else {
            destinationCoords.value = location;
            form.destination_locality = prediction.description;
            destinationSearch.value = '';
        }

        calculateDistanceAndCost();
        if (type === 'source') showSourceDialog.value = false;
        if (type === 'destination') showDestinationDialog.value = false;
    } catch (error) {
        console.error('Error selecting prediction:', error);
        $q.notify('Error loading location details');
    }
};

// Add this watch to update form fields when coordinates change
watch([sourceCoords, destinationCoords], async () => {
    if (sourceCoords.value) {
        form.source_lat = sourceCoords.value.lat;
        form.source_lng = sourceCoords.value.lng;
    }
    if (destinationCoords.value) {
        form.destination_lat = destinationCoords.value.lat;
        form.destination_lng = destinationCoords.value.lng;
    }
});
const getPlaceDetails = (placeId) => {
    return new Promise((resolve, reject) => {
        const placesService = new google.maps.places.PlacesService(document.createElement('div'));
        placesService.getDetails({ placeId }, (place, status) => {
            if (status === 'OK') {
                resolve(place);
            } else {
                reject(new Error('Place details request failed'));
            }
        });
    });
};
const calculateDistanceAndCost = async () => {
    if (!sourceCoords.value || !destinationCoords.value) return;

    loadingDistance.value = true;

    distanceMatrixService.value.getDistanceMatrix({
        origins: [new google.maps.LatLng(sourceCoords.value)],
        destinations: [new google.maps.LatLng(destinationCoords.value)],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
    }, (response, status) => {
        loadingDistance.value = false;

        if (status === 'OK' && response.rows[0].elements[0].status === 'OK') {
            const distance = response.rows[0].elements[0].distance.value / 1000;
            const duration = response.rows[0].elements[0].duration.text;

            form.distance = distance.toFixed(2);
            form.transport_cost = (distance * ratePerKm).toFixed(2);

            $q.notify({
                message: `Distance: ${form.distance}km, Estimated time: ${duration}`,
                color: 'positive',
            });
        } else {
            $q.notify({
                message: 'Could not calculate route. Please check locations.',
                color: 'negative',
            });
        }
    });
};

const locateUser = (type) => {
    if (!navigator.geolocation) {
        $q.notify('Geolocation is not supported by your browser');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const coords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            if (type === 'source') {
                sourceCoords.value = coords;
                getAddressFromCoords(coords, 'source');
            } else {
                destinationCoords.value = coords;
                getAddressFromCoords(coords, 'destination');
            }
        },
        (error) => {
            $q.notify(`Unable to get location: ${error.message}`);
        }
    );
};

const getAddressFromCoords = async (coords, type) => {
    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=AIzaSyAGK-HMMYfseKAJY356jUJLnz2ILC5bN_g`
        );
        const data = await response.json();

        if (data.results[0]) {
            const address = data.results[0].formatted_address;
            if (type === 'source') {
                form.source_locality = address;
                sourceSearch.value = address;
            } else {
                form.destination_locality = address;
                destinationSearch.value = address;
            }
        }
    } catch (error) {
        console.error('Geocoding error:', error);
    }
};

watch([sourceCoords, destinationCoords], ([source, dest]) => {
    if (source && dest) {
        const bounds = new google.maps.LatLngBounds();
        bounds.extend(new google.maps.LatLng(source));
        bounds.extend(new google.maps.LatLng(dest));
        mapCenter.value = bounds.getCenter();
    } else if (source) {
        mapCenter.value = source;
    } else if (dest) {
        mapCenter.value = dest;
    }
});

onMounted(() => {
    if (typeof google !== "undefined") {
        distanceMatrixService.value = new google.maps.DistanceMatrixService();
        autocompleteService.value = new google.maps.places.AutocompleteService();
    } else {
        console.error("Google Maps API not loaded.");
    }
});
</script>

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

.map-container {
    width: 100%;
    height: 400px;
}
</style>