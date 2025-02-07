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
                    <div class="border w-[412px] h-[1100px] rounded-[10px] p-[23px]">
                        <q-form @submit.prevent="submitForm" class="q-gutter-md">
                            <!-- Source Section -->
                            <div class="q-mb-sm">
                                <p class="text-[#61646B]">Ruang phurh tanna hmun</p>
                                <div>
                                    <div class="text-sm font-medium text-black q-mb-xs">District</div>
                                    <q-select dense outlined v-model.number="form.source_district"
                                        label="Select Source District" :options="district" behavior="menu"
                                        :error="!!form.errors.source_district"
                                        :error-message="form.errors.source_district?.[0] || 'Source District is Required'" />
                                </div>

                                <div class="pt-2">
                                    <div class="text-sm font-medium text-black q-mb-xs">Veng/Khua</div>
                                    <div class="flex items-center gap-2">
                                        <q-input outlined v-model="source_locality" label="Source Locality"
                                            ref="sourceInput" @click="showSourceDialog = true" class="cursor-pointer">
                                            <template v-slot:append>
                                                <q-icon name="map" class="cursor-pointer text-black"
                                                    @click="showSourceDialog = true" />
                                            </template>
                                        </q-input>
                                    </div>
                                    <div v-if="form.errors.source_locality" class="text-red-500 text-sm">
                                        {{ form.errors.source_locality }}
                                    </div>
                                </div>
                            </div>

                            <!-- Destination Section -->
                            <div class="pt-5">
                                <p class="text-[#61646B]">Ruang dahna tur hmun</p>
                                <div>
                                    <div class="text-sm font-medium text-black q-mb-xs">District</div>
                                    <q-select dense outlined v-model.number="form.destination_district"
                                        label="Select Destination District" :options="district" behavior="menu"
                                        :error="!!form.errors.destination_district"
                                        :error-message="form.errors.destination_district?.[0] || 'Destination District is Required'" />
                                </div>

                                <div class="pt-2">
                                    <div class="text-sm font-medium text-black q-mb-xs">Veng/Khua</div>
                                    <div class="flex items-center gap-2">
                                        <q-input outlined v-model="destination_locality" label="Destination Locality"
                                            ref="destInput" @click="showDestinationDialog = true"
                                            class="cursor-pointer">
                                            <template v-slot:append>
                                                <q-icon name="map" class="cursor-pointer text-black"
                                                    @click="showDestinationDialog = true" />
                                            </template>
                                        </q-input>
                                    </div>
                                    <div v-if="form.errors.destination_locality" class="text-red-500 text-sm">
                                        {{ form.errors.destination_locality }}
                                    </div>
                                </div>
                            </div>

                            <div class="pt-5">
                                <div class="text-sm font-medium text-black q-mb-xs">
                                    Kilometer zat
                                </div>
                                <q-input v-model="form.distance" id="distance" type="number" outlined
                                    label="Distance (in km)" readonly />
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
                                <input type="tel" placeholder="Motor neitu/khalhtu biak pawh theihna tur"
                                    id="from_places" v-model="form.driver_phone" class="form-control" :class="[
                                        'border p-2 w-full rounded-lg',
                                        form.errors.driver_phone
                                            ? 'border-red-500'
                                            : 'border-gray-300',
                                    ]" maxlength="10" @input="
                                        form.driver_phone = form.driver_phone
                                            .replace(/\D/g, '')
                                            .slice(0, 10)
                                        " />
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

                <!-- Source Map Dialog -->
                <q-dialog v-model="showSourceDialog" @show="initializeMap('source')">
                    <q-card style="width: 90vw; max-width: 600px">
                        <q-card-section>
                            <h6>Select Source Location</h6>
                            <q-input outlined v-model="sourceSearch" placeholder="Search Source Location"
                                @update:model-value="searchLocation($event, 'source')" />
                            <div class="map-container">
                                <GoogleMap :center="mapCenter" :zoom="15" @map-ready="onMapReady">
                                    <Marker v-if="sourceCoords" :position="sourceCoords"
                                        :options="{ draggable: true, label: 'S' }"
                                        @dragend="(event) => updateCoords(event, 'source')" />
                                    <Marker v-if="destinationCoords" :position="destinationCoords"
                                        :options="{ draggable: true, label: 'D' }"
                                        @dragend="(event) => updateCoords(event, 'destination')" />
                                    <Polyline v-if="showRoute" :path="routePath" :options="polylineOptions" />
                                </GoogleMap>
                            </div>
                        </q-card-section>
                        <q-card-section align="right">
                            <q-btn flat color="red" label="Cancel" @click="showSourceDialog = false" />
                            <q-btn flat label="Confirm" color="green" @click="showSourceDialog = false" />
                        </q-card-section>
                    </q-card>
                </q-dialog>

                <!-- Destination Map Dialog -->
                <q-dialog v-model="showDestinationDialog" @show="initializeMap('destination')">
          <q-card style="width: 90vw; max-width: 600px">
            <q-card-section>
              <h6>Select Destination Location</h6>
              <q-input outlined v-model="destinationSearch" placeholder="Search Destination Location"
                @update:model-value="searchLocation($event, 'destination')" />
              <div class="map-container">
                <GoogleMap
                  :center="mapCenter"
                  :zoom="15"
                  @map-ready="onMapReady"
                >
                  <Marker v-if="sourceCoords" :position="sourceCoords"
                    :options="{ draggable: true, label: 'S' }"
                    @dragend="(event) => updateCoords(event, 'source')" />
                  <Marker v-if="destinationCoords" :position="destinationCoords"
                    :options="{ draggable: true, label: 'D' }"
                    @dragend="(event) => updateCoords(event, 'destination')" />
                  <Polyline v-if="showRoute" :path="routePath" :options="polylineOptions" />
                </GoogleMap>
              </div>
            </q-card-section>
            <q-card-section align="right">
              <q-btn flat color="red" label="Cancel" @click="showDestinationDialog = false" />
              <q-btn flat label="Confirm" color="green" @click="showDestinationDialog = false" />
            </q-card-section>
          </q-card>
        </q-dialog>

                <!-- Preview Dialog -->
                <q-dialog v-model="preview">
                    <div>
                        <q-card class="w-[411px] h-[900px] rounded-t-lg">
                            <q-card-section class="">
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
                                <div class="flex gap-10 justify-evenly items-center">
                                    <div class="leading-[2px] pt-4">
                                        <p class="text-bold text-[18px] text-center">
                                            {{ form.distance }}
                                        </p>
                                        <p class="text-[#61646B]">Kilometer</p>
                                    </div>
                                    <div class="leading-[2px] pt-4">
                                        <p class="text-bold text-[18px] text-center">
                                            {{ form.transport_cost }}
                                        </p>
                                        <p class="text-[#61646B]">
                                            Motor hman man
                                        </p>
                                    </div>
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
                            </q-card-section>

                            <q-card-actions class="ml-[22px] pt-[35px]">
                                <q-btn style="
                                        padding: 10px 28px;
                                        border-radius: 12px;
                                    " class="text-black" color="white" label="Edit" v-close-popup />
                                <q-btn style="
                                        padding: 10px 80px;
                                        border-radius: 12px;
                                    " label="Approve & Next" color="black" @click="submitForm" />
                            </q-card-actions>
                        </q-card>
                    </div>
                </q-dialog>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useQuasar } from 'quasar';
import { GoogleMap, Marker, Polyline } from 'vue3-google-map';
import { useForm } from '@inertiajs/vue3';
import WebLayout from '@/Layouts/WebLayout.vue';

defineOptions({
  layout: WebLayout,
});

const $q = useQuasar();
const preview = ref(false);
const ratePerKm = 40;

const props = defineProps(["form", "districts"]);

// Refs for map components
const mapInstance = ref(null);
const mapCenter = ref({ lat: 23.164543, lng: 92.9375739 });
const sourceCoords = ref(null);
const destinationCoords = ref(null);
const sourceSearch = ref("");
const destinationSearch = ref("");
const showRoute = ref(false);
const routePath = ref([]);
const polylineOptions = ref({
  strokeColor: "#FF0000",
  strokeOpacity: 1.0,
  strokeWeight: 2,
  geodesic: true
});

// Form initialization
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

// Initialize Google Maps services
onMounted(() => {
  if (typeof google !== "undefined") {
    autocompleteService.value = new google.maps.places.AutocompleteService();
    placesService.value = new google.maps.places.PlacesService(document.createElement("div"));
    distanceMatrixService.value = new google.maps.DistanceMatrixService();
  }
});

// Map initialization
const initializeMap = (type) => {
  nextTick(() => {
    if (mapInstance.value) {
      mapInstance.value.panTo(mapCenter.value);
      if (type === 'source' && sourceCoords.value) {
        mapInstance.value.setCenter(sourceCoords.value);
      } else if (type === 'destination' && destinationCoords.value) {
        mapInstance.value.setCenter(destinationCoords.value);
      }
    }
  });
};

// Handle map ready event
const onMapReady = (map) => {
  mapInstance.value = map;
};

// Handle marker drag updates
const updateCoords = (event, type) => {
  const coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
  if (type === 'source') {
    sourceCoords.value = coords;
  } else {
    destinationCoords.value = coords;
  }
  getAddressFromCoords(coords, type);
  calculateDistanceAndCost();
};

// Calculate distance and cost
const calculateDistanceAndCost = () => {
  if (!sourceCoords.value || !destinationCoords.value) return;

  distanceMatrixService.value.getDistanceMatrix(
    {
      origins: [new google.maps.LatLng(sourceCoords.value)],
      destinations: [new google.maps.LatLng(destinationCoords.value)],
      travelMode: "DRIVING",
    },
    (response, status) => {
      if (status === "OK") {
        const element = response.rows[0].elements[0];
        if (element.status === "OK") {
          const distance = element.distance.value / 1000;
          form.distance = distance.toFixed(2);
          form.transport_cost = (distance * ratePerKm).toFixed(2);
          routePath.value = [sourceCoords.value, destinationCoords.value];
          showRoute.value = true;
          fitMapBounds();
        } else {
          $q.notify({
            type: "negative",
            message: "Route not found between selected locations",
          });
        }
      } else {
        $q.notify({
          type: "negative",
          message: "Failed to calculate distance. Please try again.",
        });
      }
    }
  );
};

// Fit map bounds
const fitMapBounds = () => {
  if (mapInstance.value && sourceCoords.value && destinationCoords.value) {
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(sourceCoords.value);
    bounds.extend(destinationCoords.value);
    mapInstance.value.fitBounds(bounds, { padding: 50 });
  }
};

// Submit form
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
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
  position: relative;
}

.gm-style-iw {
  min-width: 200px;
  padding: 10px;
}
</style>