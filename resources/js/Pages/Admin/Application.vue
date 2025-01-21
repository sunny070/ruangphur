<template>
  <q-page padding>
    <!-- Flash Success/Error Messages -->
    <q-banner v-if="flash.success" class="bg-green-4 text-white" dense>
      {{ flash.success }}
    </q-banner>
    <q-banner v-if="flash.error" class="bg-red-4 text-white" dense>
      {{ flash.error }}
    </q-banner>

    <!-- Search Bar -->
    <div class="q-my-md flex items-center gap-2">
      <q-input v-model="searchQuery" placeholder="Search by Applicant ID or Name" outlined dense clearable
        class="w-full max-w-md" />
    </div>

    <!-- Status Filters -->
    <div class="q-my-md flex gap-16">
      <q-btn label="All" flat :class="currentFilter === 'All' ? 'active-button' : 'inactive-button'"
        @click="setFilter('All')" />
      <q-btn label="Incoming" flat :class="currentFilter === 'Incoming' ? 'active-button' : 'inactive-button'"
        @click="setFilter('Incoming')" />
      <q-btn label="Approved" flat :class="currentFilter === 'Approved' ? 'active-button' : 'inactive-button'"
        @click="setFilter('Approved')" />
      <q-btn label="Rejected" flat :class="currentFilter === 'Rejected' ? 'active-button' : 'inactive-button'"
        @click="setFilter('Rejected')" />
    </div>

    <!-- Applications Table -->
    <div class="table-responsive">
      <table class="q-table q-table__grid q-mb-lg ">
        <thead class="bg-[#3A424A] text-white font-bold h-[30px] w-full text-[11px]">
          <tr>
            <th>APPLICANT ID</th>
            <th>MITTHI HMING</th>
            <th>MITTHI KHUA</th>
            <th>KILOMETER</th>
            <th>AMOUNT</th>
            <th>DIL SAKTU</th>
            <th>DILTU PHONE NO</th>
            <th>STATUS</th>
            <th>DIL NI</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="application in filteredApplications" :key="application.id">
            <td>{{ application?.application_no }}</td>
            <td>{{ application?.deceased?.name }}</td>
            <td>{{ application?.deceased?.district?.name }}</td>
            <td>{{ application?.transport?.distance  }}</td>
            <td>{{ application?.transport?.transport_cost }}</td>
            <td>{{ application?.applicant?.name }}</td>
            <td>{{ application?.applicant?.mobile }}</td>
            <td>
              <div :class="{
                'status-incoming': application?.status === 'Pending',
                'status-rejected': application?.status === 'Rejected',
                'status-approved': application?.status === 'Approved',
              }" class="status-badge">
                {{ application?.status }}
              </div>
            </td>
            <td>{{ application?.created_at }}</td>
            <td>


              
              <q-btn icon="more_vert" :style="buttonStyle" />
              <q-menu>
                <q-list>
                  <q-item clickable class="action-btn" @click="viewApplication(application.id)">
                    <q-item-section>View</q-item-section>
                  </q-item>
                  <q-item class="action-btn" @click="editApplication(application.id)">
                    <q-item-section>Edit/Update</q-item-section>
                  </q-item>
                  <q-item class="action-btn" @click="deleteApplication(application.id)">
                    <q-item-section>Delete</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </q-page>
</template>


<script setup>
import { defineProps, ref, computed } from "vue";
import { router as $inertia } from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";

defineOptions({
  layout: AdminLayout,
});

// Props passed from the parent (admin controller)
const props = defineProps({
  applications: Array,
  flash: Object,
});

// Reactive data for search query and filter
const searchQuery = ref("");
const currentFilter = ref("All");

// Filtered applications based on search and status filter
const filteredApplications = computed(() => {
  let filtered = props.applications;

  // Apply status filter
  if (currentFilter.value === "Incoming") {
    filtered = filtered.filter((application) => application.status === "Pending");
  } else if (currentFilter.value === "Approved") {
    filtered = filtered.filter((application) => application.status === "Approved");
  } else if (currentFilter.value === "Rejected") {
    filtered = filtered.filter((application) => application.status === "Rejected");
  }

  // Apply search query filter
  if (searchQuery.value) {
    filtered = filtered.filter(
      (application) =>
        application.application_no.toString().includes(searchQuery.value) ||
        application.deceased.name
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
    );
  }

  return filtered;
});

// Set the current filter
const setFilter = (filter) => {
  currentFilter.value = filter;
};

const viewApplication = (applicationId) => {
  $inertia.get(route('applications.show', applicationId));
};


const editApplication = (applicationId) => {
  console.log("Edit application:", applicationId);
  // Navigate to edit page or show edit form
};

const deleteApplication = (applicationId) => {
  console.log("Delete application:", applicationId);
  // Call API or show confirmation dialog to delete
};
</script>


<style>
.table-responsive {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f8f9fa;
  font-weight: bold;
}

.q-btn {
  margin-right: 4px;
}

.active-button {
  width: 63px;
  height: 30px;
  flex-shrink: 0;
  background: #3a424a;
  color: #ffffff;
  border-radius: 8px;
  border: 1px solid #5b656f;
  font-size: 12px;
}

.inactive-button {
  width: 63px;
  height: 30px;
  flex-shrink: 0;
  background: transparent;
  color: #5b656f;
  border-radius: 8px;
}

.action-btn {
  width: 129px;
  height: 34px;
  flex-shrink: 0;
  /* border-radius: 12px; */
  border: 1px solid #eee;
  background: #fff;
}

.action-btn:hover {
  background: #e9f4ff;
}

.status-badge {
  width: 80px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
}

.status-incoming {
  background: #FAEADC;
  color: #FD7900;
}

.status-rejected {
  background: #FFF2F2;
  color: #FE6262;
}

.status-approved {
  background: #DCFAEE;
  color: #4CAF50;
  /* Adjusted to a green shade for "Approved" */
}
</style>
