<template>
  <div class="bg-white">
    <div class="container">
      <div class="text-center py-5">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar6.png"
          alt
          class="ui-w-100 rounded-circle"
        />

        <div class="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto">
          <h4 class="font-weight-bold my-4">
            Mike Greene <a href="#" class="btn btn-success btn-sm"> Active </a>
          </h4>
          <div class="row">
            <div class="col">
              <div class="row mb-4">
                <div class="col-md-3 text-muted">Birthday:</div>
                <div class="col-md-9">May 3, 1995</div>
              </div>

              <div class="row mb-4">
                <div class="col-md-3 text-muted">Country:</div>
                <div class="col-md-9">
                  <a href="javascript:void(0)" class="text-body">Canada</a>
                </div>
              </div>
            </div>
            <div class="col"></div>
            <div class="col">
              <div class="row mb-4">
                <div class="col-md-3 text-muted">Birthday:</div>
                <div class="col-md-9">May 3, 1995</div>
              </div>

              <div class="row mb-4">
                <div class="col-md-3 text-muted">Country:</div>
                <div class="col-md-9">
                  <a href="javascript:void(0)" class="text-body">Canada</a>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="text-muted mb-4">
            Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad
            harum primis electram duo, porro principes ei has.
          </div> -->
        </div>

        <div class="text-center">
          <a
            href="#"
            class="btn icon-btn borderless btn-outline-twitter btn-lg btn-round"
          >
            <span class="ion ion-logo-twitter"></span>
          </a>
          <a
            href="#"
            class="btn icon-btn borderless btn-outline-facebook btn-lg btn-round"
          >
            <span class="ion ion-logo-facebook"></span>
          </a>
          <a
            href="#"
            class="btn icon-btn borderless btn-outline-instagram btn-lg btn-round"
          >
            <span class="ion ion-logo-instagram"></span>
          </a>
        </div>
      </div>
    </div>
    <hr class="m-0" />

    <ul class="nav nav-tabs tabs-alt justify-content-center">
      <li class="nav-item">
        <a
          class="nav-link py-4"
          :class="{ active: activeBtn === 'btn1' }"
          @click="activeBtn = 'btn1'"
          href="#"
          >Profile</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link py-4"
          :class="{ active: activeBtn === 'btn2' }"
          @click="activeBtn = 'btn2'"
          href="#"
          >MBL Monitoring</a
        >
      </li>
    </ul>
    <div class="container">
      <div v-if="activeBtn == 'btn1'">
        <ViewProfileVue />
      </div>
      <div v-else>MblMonitoringVue</div>
    </div>
  </div>
</template>

<script>
import ViewProfileVue from "./subcomponents/ViewProfile.vue";
import MblMonitoringVue from "./subcomponents/MblMonitoring.vue";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const activeBtn = ref("btn1");

    return {
      activeBtn,
    };
  },
  components: {
    ViewProfileVue,
    MblMonitoringVue,
  },
};
</script>
<style>
.text-white {
  color: #fff !important;
}
.ui-bg-overlay-container,
.ui-bg-video-container {
  position: relative;
}
.ui-bg-cover {
  background-color: transparent;
  background-position: center center;
  background-size: cover;
}
.ui-bg-overlay-container .ui-bg-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
}

.bg-dark {
  background-color: rgba(24, 28, 33, 0.9) !important;
}
.opacity-50 {
  opacity: 0.5 !important;
}
.bg-dark {
  background-color: rgba(24, 28, 33, 0.9) !important;
}
.ui-bg-overlay-container > *,
.ui-bg-video-container > * {
  position: relative;
}
@media (min-width: 992px) {
  .container,
  .container-fluid {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
.media,
.media > :not(.media-body),
.jumbotron,
.card {
  -ms-flex-negative: 1;
  flex-shrink: 1;
}
.d-flex,
.d-inline-flex,
.media,
.media > :not(.media-body),
.jumbotron,
.card {
  -ms-flex-negative: 1;
  flex-shrink: 1;
}
.ui-w-100 {
  width: 100px !important;
  height: auto;
}
.font-weight-bold {
  font-weight: 700 !important;
}
.opacity-75 {
  opacity: 0.75 !important;
}
.tabs-alt.nav-tabs .nav-link.active,
.tabs-alt.nav-tabs .nav-link.active:hover,
.tabs-alt.nav-tabs .nav-link.active:focus,
.tabs-alt > .nav-tabs .nav-link.active,
.tabs-alt > .nav-tabs .nav-link.active:hover,
.tabs-alt > .nav-tabs .nav-link.active:focus {
  -webkit-box-shadow: 0 -2px 0 #26b4ff inset;
  box-shadow: 0 -2px 0 #26b4ff inset;
}

.nav-tabs:not(.nav-fill):not(.nav-justified) .nav-link,
.nav-pills:not(.nav-fill):not(.nav-justified) .nav-link {
  margin-right: 0.125rem;
}
.nav-tabs.tabs-alt .nav-link,
.tabs-alt > .nav-tabs .nav-link {
  border-width: 0 !important;
  border-radius: 0 !important;
  background-color: transparent !important;
}
.nav-tabs .nav-link.active {
  border-bottom-color: #fff;
}
</style>
