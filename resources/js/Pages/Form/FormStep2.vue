<template>
    <q-layout>
        <q-page-container>
            <q-page padding>
                <div class="flex flex-col justify-center items-center gap-6">
                    <div
                        class="border-2 border-gray-200 bg-[#E9F4FF] flex-shrink-0 rounded-[10px] text-center items-center">
                        <!-- <h5>Step 2: Ruang Phurh leh Motor Chungchang</h5> -->
                        <img id="background" class="w-[412px] h-[193px]"
                            src="image/Vertical Stepper with numbers2.png" />
                    </div>
                    <div class="border w-[412px] h-[1100px] rounded-[10px] p-[23px]">
                        <q-form @submit.prevent="submitForm" class="q-gutter-md">


                            <div class="pb-3 flex items-center gap-2">
                                <div class="w-[3px] h-[19px] flex-shrink-0 bg-black"></div>
                                <h6>Ruang Phurh leh Motor Chungchang</h6>
                            </div>
                            <div class="q-mb-sm">
                                <p class="text-[#61646B]">
                                    Ruang phurh tanna hmun
                                </p>
                                <div>
                                    <div class="text-sm font-medium text-black q-mb-xs">
                                        District
                                    </div>
                                    <q-select dense outlined="" v-model.number="form.source_district"
                                        label="Select Source District" :options="district" behavior="menu"
                                        :error="form.errors.source_district" :error-message="form.errors.source_district
                                            ? form.errors.source_district[0]
                                            : 'Source District is Required'
                                            " />
                                    <div v-if="
                                        $page.props.errors.source_district
                                    " class="text-red">
                                        {{ $page.props.errors.source_district }}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="text-sm font-medium text-black q-mb-xs">
                                    Veng/Khua
                                </div>
                            </div>
                            <q-input outlined v-model="source_locality" label="Source Locality" readonly
                                @click="showSourceDialog = true" />
                            <!-- <q-input outlined v-model="source_locality" label="Source Locality" readonly
                                @click="showSourceDialog = true" /> -->
                            <div v-if="form.errors.source_locality" class="text-red-500 text-sm">
                                {{ form.errors.source_locality }}
                            </div>

                            <div class="pt-5">
                                <div>
                                    <p class="text-[#61646B]">
                                        Ruang dahna tur hmun
                                    </p>

                                    <q-select dense outlined="" v-model.number="form.destination_district
                                        " label="Select Source District" :options="district" behavior="menu" :error="form.errors.destination_district
                                            " :error-message="form.errors.destination_district ||
                                                ''
                                                " />
                                    <div v-if="
                                        $page.props.errors
                                            .destination_district
                                    " class="text-red">
                                        {{
                                            $page.props.errors
                                                .destination_district
                                        }}
                                    </div>
                                </div>
                            </div>

                            <div>


                                <q-input outlined v-model="destination_locality" label="Destination Locality" readonly
                                    @click="showDestinationDialog = true" />

                                <div v-if="form.errors.destination_locality" class="text-red-500 text-sm">
                                    {{ form.errors.destination_locality }}
                                </div>


                            </div>
                            <!-- <q-btn label="calculate" color="black" @click="calculateDistance" /> -->

                            <div class="pt-5">
                                <div class="text-sm font-medium text-black q-mb-xs">
                                    Kilometer zat
                                </div>
                                <q-input v-model="form.distance" id="distance" type="number" outlined
                                    label="Distance (in km)" readonly />
                                <!-- <input type="text" placeholder="Distance (in km)" id="from_places"
                                    v-model="form.distance" class="form-control" :class="[
                                        'border p-2 w-full rounded-lg',
                                        form.errors.distance
                                            ? 'border-red-500'
                                            : 'border-gray-300',
                                    ]" /> -->
                                <div v-if="form.errors.distance" class="text-red-500 text-sm">
                                    {{ form.errors.distance }}
                                </div>
                            </div>


                            <div class="pt-5">
                                <p class="text-[#61646B]">
                                    Ruang phurhna motor
                                </p>
                                <div class="text-sm font-medium text-black q-mb-xs">
                                    Motor hman man (Rs)
                                </div>
                                <q-input v-model="form.transport_cost" id="transport-cost" type="number" outlined
                                    label="Transport Cost (₹)" readonly />
                                <!-- <input type="text" placeholder="Motor hman man" id="transport_cost"
                                    v-model="form.transport_cost" class="form-control" :class="[
                                        'border p-2 w-full rounded-lg',
                                        form.errors.transport_cost
                                            ? 'border-red-500'
                                            : 'border-gray-300',
                                    ]" /> -->
                                <div v-if="form.errors.transport_cost" class="text-red-500 text-sm">
                                    {{ form.errors.transport_cost }}
                                </div>
                            </div>



                            <div>
                                <div class="text-sm font-medium text-black q-mb-xs">
                                    Motor neitu/khalhtu hming
                                </div>
                                <input type="text" placeholder="Motor neitu/khalhtu hming pum" id="from_places"
                                    v-model="form.driver_name" class="form-control" :class="[
                                        'border p-2 w-full rounded-lg',
                                        form.errors.driver_name
                                            ? 'border-red-500'
                                            : 'border-gray-300',
                                    ]" />
                                <div v-if="form.errors.driver_name" class="text-red-500 text-sm">
                                    {{ form.errors.driver_name }}
                                </div>
                            </div>


                            <div>
                                <div class="text-sm font-medium text-black q-mb-xs">
                                    Motor neitu/khalhtu phone number
                                </div>
                                <input type="text" placeholder="Motor neitu/khalhtu biak pawh theihna tur"
                                    id="from_places" v-model="form.driver_phone" class="form-control" :class="[
                                        'border p-2 w-full rounded-lg',
                                        form.errors.driver_phone
                                            ? 'border-red-500'
                                            : 'border-gray-300',
                                    ]" />
                                <div v-if="form.errors.driver_phone" class="text-red-500 text-sm">
                                    {{ form.errors.driver_phone }}
                                </div>
                            </div>

                            <div>
                                <div class="text-sm font-medium text-black q-mb-xs">
                                    Motor registration number
                                </div>
                                <input type="text" placeholder="Ruang phurhna motor registration number"
                                    id="from_places" v-model="form.vehicle_number" class="form-control" :class="[
                                        'border p-2 w-full rounded-lg',
                                        form.errors.vehicle_number
                                            ? 'border-red-500'
                                            : 'border-gray-300',
                                    ]" />
                                <div v-if="form.errors.vehicle_number" class="text-red-500 text-sm">
                                    {{ form.errors.vehicle_number }}
                                </div>
                            </div>


                            <q-btn style="padding: 10px 24px; border-radius: 12px" outline unelevated text-color="black"
                                label="Preview" color="white" @click="preview = true" />
                            <q-btn unelevated label="Next" color="black" @click="submitForm"
                                style="padding: 10px 95px; border-radius: 12px" />

                        </q-form>
                    </div>
                </div>
                <!-- Map Dialog -->
                <q-dialog v-model="showSourceDialog">
                    <q-card style="width: 90vw; max-width: 600px;">
                        <q-card-section>
                            <h6>Select Source Location</h6>
                            
                            <GoogleMap :center="center" :zoom="7" class="map-container"
                                @click="(event) => handleMapClick(event, 'source')">
                                <Marker v-if="sourceCoords" :position="sourceCoords"
                                    :options="{ position: sourceCoords, label: 'S' }"
                                    @dragend="(event) => handleMapClick(event, 'source')" />
                            </GoogleMap>
                            <q-input outlined v-model="sourceSearch" placeholder="Search Source Location"
                                @update:model-value="searchLocation($event, 'source')" />
                        </q-card-section>
                        <q-card-section align="right">
                            <q-btn flat color="red" label="Cancel" @click="showSourceDialog = false" />
                            <q-btn flat label="Confirm" color="green" @click="showSourceDialog = false" />
                        </q-card-section>
                    </q-card>
                </q-dialog>

                <q-dialog v-model="showDestinationDialog">
                    <q-card style="width: 90vw; max-width: 600px;">
                        <q-card-section>
                            <h6>Select Destination Location</h6>
                            <q-input outlined v-model="destinationSearch" placeholder="Search Destination Location"
                                @update:model-value="searchLocation($event, 'destination')" />
                            <GoogleMap :center="center" :zoom="7" class="map-container"
                                @click="(event) => handleMapClick(event, 'destination')">
                                <Marker v-if="sourceCoords" :position="sourceCoords"
                                    :options="{ position: sourceCoords, label: 'S' }" />
                                <Marker v-if="destinationCoords" :position="destinationCoords"
                                    :options="{ position: destinationCoords, label: 'D' }"
                                    @dragend="(event) => handleMapClick(event, 'destination')" />
                                <Polyline v-if="sourceCoords && destinationCoords"
                                    :path="[sourceCoords, destinationCoords]"
                                    :options="{ strokeColor: '#FF0000', strokeOpacity: 1.0, strokeWeight: 2 }" />
                            </GoogleMap>
                        </q-card-section>
                        <q-card-section align="right">
                            <q-btn flat label="Cancel" color="red" @click="showDestinationDialog = false" />
                            <q-btn flat label="Confirm" color="green" @click="showDestinationDialog = false" />
                        </q-card-section>
                    </q-card>
                </q-dialog>


                <!-- dialogue -->
                <q-dialog v-model="preview">
                    <div>
                        <!-- <hr class="my-4 border-border" /> -->
                        <q-card class="w-[411px] h-[822px] rounded-md">
                            <q-card-section class="">
                                <p
                                    class="text-center w-[242px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8">
                                    Ruang Phurh leh Motor Chungchang
                                </p>
                                <p class="mb-8">Ruang phurh tanna</p>
                                <div class="leading-[2px] pl-5">
                                    <p class="text-[#61646B]">District</p>
                                    <p>{{ form.source_district["label"] }}</p>
                                </div>
                                <div class="leading-[2px] pt-4 pl-5">
                                    <p class="text-[#61646B]">Veng/Khua</p>
                                    <p>{{ form.source_locality }}</p>
                                </div>
                                <hr class="my-4 border-border" />
                                <p class="mb-8 mt-8 text-[#363636]">
                                    Ruang dahna tur hmun
                                </p>
                                <div class="leading-[2px] pt-4 pl-5">
                                    <p class="text-[#61646B]">District</p>
                                    <p>
                                        {{ form.destination_district["label"] }}
                                    </p>
                                </div>
                                <div class="leading-[2px] pt-4 pl-5">
                                    <p class="text-[#61646B]">Veng/Khua</p>
                                    <p>
                                        {{ form.destination_locality }}
                                    </p>
                                </div>
                                <hr class="my-4 border-border" />

                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">Kilometer</p>
                                    <p>{{ form.distance }}</p>
                                </div>
                                <hr class="my-4 border-border" />
                                <p class="mb-8 mt-8">Ruang phurhna motor</p>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">
                                        Motor registration number
                                    </p>
                                    <p>{{ form.vehicle_number }}</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">Motor hming</p>
                                    <p>{{ form.vehicle_name }}</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">
                                        Motor neitu/khalhtu hming
                                    </p>
                                    <p>{{ form.driver_name }}</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">
                                        Motor neitu/khalhtu phone number
                                    </p>
                                    <p>{{ form.driver_phone }}</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">
                                        Motor hman man (Rs)
                                    </p>
                                    <p>{{ form.transport_cost }}</p>
                                </div>
                            </q-card-section>

                            <q-card-actions align="right">
                                <q-btn class="text-black" color="white" label="Edit" v-close-popup />
                                <q-btn label="Approve & Next" color="black" @click="submitForm" />
                            </q-card-actions>
                        </q-card>
                    </div>
                </q-dialog>

            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import WebLayout from "@/Layouts/WebLayout.vue";
import { ref, nextTick } from "vue";
import { computed, onMounted, watch } from "vue";
import { useQuasar } from "quasar";
import { GoogleMap, Marker, Polyline } from "vue3-google-map"

defineOptions({
    layout: WebLayout,
});
const $q = useQuasar();
const preview = ref(false);

const props = defineProps(["form", "districts"]);

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
const distance = ref(0); // Distance in kilometers
const transport_cost = ref(0); // Transport cost in currency
// Dialog visibility
const showSourceDialog = ref(false);
const showDestinationDialog = ref(false);


const sourceSearch = ref("");
const destinationSearch = ref("");
const autocomplete = ref(null);
// Google Maps Geocoder
const geocoder = ref(null);

// Initialize Google Maps Geocoder
onMounted(() => {
    nextTick(() => {
        if (typeof google !== "undefined") {
            geocoder.value = new google.maps.Geocoder();
            autocomplete.value = new google.maps.places.AutocompleteService();
        } else {
            console.error("Google Maps API not loaded.");
        }
    });
});

const form = useForm({
    source_district: props.form.source_district || "",
    source_locality: props.form.source_locality || "",
    source_lat: props.form.source_lat || "",
    source_lng: props.form.source_lng || "",
    destination_district: props.form.destination_district || "",
    destination_locality: props.form.destination_locality || "",
    destination_lat: props.form.destination_lat || "",
    destination_lng: props.form.destination_lng || "",
    distance: props.form.distance || "",
    vehicle_number: props.form.vehicle_number || "",
    vehicle_name: props.form.vehicle_name || "",
    driver_name: props.form.driver_name || "",
    driver_phone: props.form.driver_phone || "",
    transport_cost: props.form.transport_cost || "",
});

const district = ref(props.districts || []);

const submitForm = () => {
    form.post(route("form.storeStep2"), {
        onError: (errors) => {
            console.log(errors); // Log errors to check the format
            form.errors = errors; // Assign errors to form.errors
            preview.value = false;
        },
        onSuccess: () => {
            preview.value = false; // Close the preview dialog if open

            // Optional: Display a success notification
            $q.notify({
                type: "positive",
                message: "Form 2 submitted successfully!",
                position: "top-right",
            });
        },
    });
};


const searchLocation = (query, type) => {
    if (autocomplete.value) {
        autocomplete.value.getPlacePredictions({ input: query }, (predictions, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && predictions.length) {
                getCoordsFromPlaceId(predictions[0].place_id, type);
            }
        });
    }
};

const getCoordsFromPlaceId = (placeId, type) => {
    const placesService = new google.maps.places.PlacesService(document.createElement("div"));
    placesService.getDetails({ placeId }, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            const location = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            };
            if (type === "source") {
                sourceCoords.value = location;
                source_locality.value = place.formatted_address;
                source_lat.value = location.lat;
                source_lng.value = location.lng;
                form.source_locality = place.formatted_address;
                form.source_lat = location.lat;
                form.source_lng = location.lng;
            } else if (type === "destination") {
                destinationCoords.value = location;
                destination_locality.value = place.formatted_address;
                destination_lat.value = location.lat;
                destination_lng.value = location.lng;
                form.destination_locality = place.formatted_address;
                form.destination_lat = location.lat;
                form.destination_lng = location.lng;
            }
            calculateDistanceAndCost();
        }
    });
};

// const handleMapClick = (event, type) => {
//   const clickedLocation = {
//     lat: event.latLng.lat(),
//     lng: event.latLng.lng(),
//   };

//   if (type === "source") {
//     sourceCoords.value = clickedLocation;
//     getAddressFromCoords(clickedLocation, "source");
//   } else if (type === "destination") {
//     destinationCoords.value = clickedLocation;
//     getAddressFromCoords(clickedLocation, "destination");
//   }
// };



const getAddressFromCoords = (coords, type) => {
    if (geocoder.value) {
        geocoder.value.geocode({ location: coords }, (results, status) => {
            if (status === "OK" && results[0]) {
                const address = results[0].formatted_address;
                if (type === "source") {
                    source_locality.value = address;
                    source_lat.value = coords.lat;
                    source_lng.value = coords.lng;
                    form.source_locality = address;
                    form.source_lat = coords.lat;
                    form.source_lng = coords.lng;
                } else if (type === "destination") {
                    destination_locality.value = address;
                    destination_lat.value = coords.lat;
                    destination_lng.value = coords.lng;
                    form.destination_locality = address;
                    form.destination_lat = coords.lat;
                    form.destination_lng = coords.lng;
                }
                calculateDistanceAndCost(); // Recalculate distance and cost when coordinates are updated
            } else {
                console.error("Geocoder failed due to:", status);
            }
        });
    }
};

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
        calculateDistanceAndCost(); // Recalculate distance and cost when destination is updated
    }
};

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
        form.distance = (R * c).toFixed(2); // Calculate distance in km and round to 2 decimal places

        form.transport_cost = (form.distance * ratePerKm).toFixed(2); // Calculate transport cost
    }
};

const degToRad = (deg) => {
    return deg * (Math.PI / 180);
};

const backToStep1 = () => window.history.back(); // Navigate back
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