<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
      integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY="
      crossorigin="anonymous"
    />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title title-left text-center text-lg-left">
            <h2 class="top-sep">Profile</h2>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4 mb-30">
          <router-link to="/member-search">
            <div class="team-item">
              <div class="mb-30 position-relative d-flex align-items-center">
                <span class="socials d-inline-block">
                  <a href="#" class="zmdi zmdi-facebook"></a>
                  <a href="#" class="zmdi zmdi-twitter"></a>
                  <a href="#" class="zmdi zmdi-google"></a>
                  <a href="#" class="zmdi zmdi-instagram"></a>
                </span>
                <span class="img-holder d-inline-block">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="Team"
                  />
                </span>
              </div>
              <div class="team-content">
                <p class="text-uppercase mb-0">Search Profile</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-6 col-lg-4 mb-30">
          <router-link to="/memberssearch">
            <div class="team-item">
              <div class="mb-30 position-relative d-flex align-items-center">
                <span class="socials d-inline-block">
                  <a href="#" class="zmdi zmdi-facebook"></a>
                  <a href="#" class="zmdi zmdi-twitter"></a>
                </span>
                <span class="img-holder d-inline-block">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="Team"
                  />
                </span>
              </div>
              <div class="team-content">
                <p class="text-uppercase mb-0 lText">Billing</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin-top: 20px;
  background: #eee;
}

/* ===== ABOUT PAGE ===== */
.team-item {
  padding: 35px;
  padding-right: 0;
  position: relative;
  z-index: 0;
}

.team-item:after,
.team-item:before {
  content: "";
  position: absolute;
  -webkit-box-shadow: 0 5px 30px 0 rgba(39, 39, 39, 0.15);
  box-shadow: 0 5px 30px 0 rgba(39, 39, 39, 0.15);
  border-radius: 10px;
  z-index: -1;
}

.team-item:before {
  height: 100%;
  background-color: #fff;
  left: 0;
  top: 0;
  right: 30px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.team-item:after {
  height: 6px;
  width: calc(100% - 30px);
  background-color: #4e63d7;
  left: 0;
  bottom: 0;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.team-item:hover:after {
  height: 100%;
}

.team-item .img-holder {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-shadow: 0 0 20px 0 rgba(51, 51, 51, 0.2);
  box-shadow: 0 0 20px 0 rgba(51, 51, 51, 0.2);
  border-radius: 10px;
  width: calc(100% - 70px);
  margin-left: 70px;
  overflow: hidden;
}

.team-item .img-holder img {
  border-radius: 10px;
  width: 100%;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
}

.team-item:hover .img-holder img {
  -webkit-transform: scale(1);
  transform: scale(1);
}

.team-item .socials {
  position: absolute;
}

.team-item .socials a {
  display: block;
  margin-right: 0;
  margin-bottom: 15px;
  -webkit-box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.12);
}

.team-item .socials a:last-of-type {
  margin-bottom: 0;
}

.team-item .team-content {
  margin-right: 70px;
  text-align: center;
}

.team-item .team-content h5 {
  color: #101f41;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.team-item .team-content p {
  color: #4e63d7;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  font-weight: 600;
  font-size: 14px;
}

.team-item:hover .team-content h5,
.team-item:hover .team-content p {
  color: #fff;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.d-inline-block {
  display: inline-block !important;
}

.socials a {
  width: 35px;
  height: 35px;
  background-color: #6893e1;
  border-radius: 50%;
  -webkit-box-shadow: 0 3px 2px 0 #516cd9;
  box-shadow: 0 3px 2px 0 #516cd9;
  text-align: center;
  color: #fff;
  padding-top: 10px;
  font-size: 16px;
  margin-right: 10px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}

h5 {
  font-size: 21px;
}

.mb-30 {
  margin-bottom: 30px;
}
</style>
