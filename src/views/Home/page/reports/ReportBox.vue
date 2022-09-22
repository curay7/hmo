<template>
  <div>
    <link
      rel="stylesheet"
      type="text/css"
      href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
    />
    <link
      href="http://getbootstrap.com/examples/jumbotron-narrow/jumbotron-narrow.css"
      rel="stylesheet"
    />
    <div class="container bootstrap snippets bootdey" style="margin-top: 3%">
      <div class="list-content">
        <div class="row social-resume">
          <div class="col-lg-6 col-sm-6">
            <section class="panel">
              <div class="icon-content facebook">
                <i class="fa fa-male"></i>
              </div>
              <div class="value">
                <h1 class="count">523</h1>
                <p>Male</p>
              </div>
            </section>
          </div>
          <div class="col-lg-6 col-sm-6">
            <section class="panel">
              <div class="icon-content google-plus">
                <i class="fa fa-female"></i>
              </div>
              <div class="value">
                <h1 class="count2">234</h1>
                <p>Female</p>
              </div>
            </section>
          </div>
          <!-- <div class="col-lg-6 col-sm-6">
            <section class="panel">
              <div class="icon-content twitter">
                <i class="fa fa-twitter"></i>
              </div>
              <div class="value">
                <h1 class="count3">2.000</h1>
                <p>Followers</p>
              </div>
            </section>
          </div>
          <div class="col-lg-6 col-sm-6">
            <section class="panel">
              <div class="icon-content youtube">
                <i class="fa fa-youtube"></i>
              </div>
              <div class="value">
                <h1 class="count4">25</h1>
                <p>Videos</p>
              </div>
            </section>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.jumbotron h1,
.jumbotron .h1 {
  font-size: 25px;
}
.social-resume .facebook {
  background: #3b5998;
}

.social-resume .google-plus {
  background: #dd4b39;
}

.social-resume .twitter {
  background: #00acee;
}

.social-resume .youtube {
  background: #c4302b;
}
.social-resume .icon-content,
.social-resume .value {
  display: inline-block;
  text-align: center;
}

.social-resume .value {
  float: right;
}

.social-resume .value h1,
.social-resume .value p {
  margin: 0;
  padding: 0;
  color: #c6cad6;
}

.social-resume .value h1 {
  font-weight: 300;
}

.social-resume .icon-content i {
  color: #fff;
  font-size: 50px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  -webkit-border: 2px solid #fff;
  -moz-border: 2px solid #fff;
  -ms-border: 2px solid #fff;
  -o-border: 2px solid #fff;
  border: 2px solid #fff;
  width: 85px;
  height: 85px;
  padding-top: 17px;
  box-shadow: 3px 3px 3px #000000;
}

.social-resume .icon-content {
  width: 40%;
  padding: 25px 15px;
  -webkit-border-radius: 4px 0px 0px 4px;
  -moz-border-radius: 4px 0px 0px 4px;
  -ms-border-radius: 4px 0px 0px 4px;
  -o-border-radius: 4px 0px 0px 4px;
  border-radius: 4px 0px 0px 4px;
}

.social-resume .value {
  width: 58%;
  padding-top: 31px;
}

.social-resume section.panel {
  border: none;
}
</style>
