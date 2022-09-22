<template>
  <div>
    <div class="container" style="margin-top: 3%">
      <div class="row align-items-center">
        <h1>Reports</h1>
        <div class="col-6 col-lg-3">
          <div class="border-primary border rounded text-center py-3 mb-3">
            <h5 class="card-title text-primary mb-1">₱4000</h5>
            <p class="text-primary mb-0">Sales</p>
          </div>
          <div class="border-success border rounded text-center py-3 mb-3">
            <h5 class="card-title text-success mb-1">₱2000</h5>
            <p class="text-success mb-0">Revenue</p>
          </div>
          <div class="border-warning border rounded text-center py-3">
            <h5 class="card-title text-warning mb-1">₱200</h5>
            <p class="text-warning mb-0">Refund</p>
          </div>
        </div>
        <div class="col-6 col-lg-9">
          <p>Ramiro Hospital <span class="float-right">55%</span></p>
          <div class="progress mb-3" style="height: 5px">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 55%"
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p>HNU hospital (HNUMCI) <span class="float-right">20%</span></p>
          <div class="progress mb-3" style="height: 5px">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style="width: 20%"
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p>Borja Family Hospital <span class="float-right">15%</span></p>
          <div class="progress mb-3" style="height: 5px">
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              style="width: 15%"
              aria-valuenow="15"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p>ACE Medical Center Bohol <span class="float-right">10%</span></p>
          <div class="progress" style="height: 5px">
            <div
              class="progress-bar bg-info"
              role="progressbar"
              style="width: 10%"
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <ReportBoxVue />
    </div>
  </div>
</template>

<script>
import ReportBoxVue from "./ReportBox.vue";
export default {
  components: {
    ReportBoxVue,
  },
};
</script>

<style scoped>
body {
  background: #eee;
  margin-top: 20px;
}
.card-header {
  border-bottom: 1px solid transparent;
  background-color: transparent;
}
</style>
