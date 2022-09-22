<template>
  <section class="container">
    <br />
    <div class="row">
      <article class="card fl-left cardAnimation">
        <router-link
          to="/dashboard"
          style="text-decoration: none; color: inherit"
        >
          <section class="date">
            <time datetime="23th feb"
              ><i class="material-icons lIcon">dashboard</i>
            </time>
          </section>
          <section class="card-cont">
            <h1 style="color: #1f1d36">Dashboard</h1>
            <div class="even-info">
              <i class="fa fa-map-marker"></i>
              <p class="inv">nexen square for people australia, sydney</p>
            </div>
            <a href="#">tickets</a>
          </section>
        </router-link>
      </article>

      <article class="card fl-left cardAnimation">
        <router-link
          to="/members"
          style="text-decoration: none; color: inherit"
        >
          <section class="date">
            <time datetime="23th feb">
              <i class="material-icons" style="color: #7fb5ff; font-size: 150px"
                >assignment_ind</i
              >
            </time>
          </section>
          <section class="card-cont">
            <h1 style="color: #1f1d36">MEMBER PROFILE</h1>
            <div class="even-info">
              <i class="fa fa-map-marker"></i>
              <p class="inv">nexen square for people australia, sydney</p>
            </div>
            <a href="#">tickets</a>
          </section>
        </router-link>
      </article>
    </div>
    <div class="row">
      <article class="card fl-left cardAnimation">
        <router-link
          to="/reports"
          style="text-decoration: none; color: inherit"
        >
          <section class="date">
            <time datetime="23th feb">
              <i class="material-icons" style="color: #577bc1; font-size: 150px"
                >assessment</i
              ></time
            >
          </section>
          <section class="card-cont">
            <h1 style="color: #1f1d36">Reports</h1>
            <div class="even-info">
              <i class="fa fa-map-marker"></i>
              <p class="inv">nexen square for people australia, sydney</p>
            </div>
            <a href="#">booked</a>
          </section>
        </router-link>
      </article>
      <article class="card fl-left cardAnimation">
        <router-link
          to="/billing"
          style="text-decoration: none; color: inherit"
        >
          <section class="date">
            <time datetime="23th feb">
              <i class="material-icons" style="color: #577bc1; font-size: 150px"
                >attach_money</i
              >
            </time>
          </section>
          <section class="card-cont">
            <h1 style="color: #1f1d36">Billing</h1>
            <div class="even-info">
              <i class="fa fa-map-marker"></i>
              <p class="inv">nexen square for people australia, sydney</p>
            </div>
            <a href="#">cancel</a>
          </section>
        </router-link>
      </article>
    </div>
    <div class="row">
      <article class="card fl-left cardAnimation">
        <router-link to="/loa" style="text-decoration: none; color: inherit">
          <section class="date">
            <time datetime="23th feb">
              <i class="material-icons lIcon">assignment</i></time
            >
          </section>
          <section class="card-cont">
            <h1 style="color: #1f1d36">LOA</h1>
            <div class="even-info">
              <i class="fa fa-map-marker"></i>
              <p class="inv">nexen square for people australia, sydney</p>
            </div>
            <a href="#">booked</a>
          </section>
        </router-link>
      </article>
      <article class="card fl-left cardAnimation">
        <router-link to="/noa" style="text-decoration: none; color: inherit">
          <section class="date">
            <time datetime="23th feb">
              <i class="material-icons" style="color: #577bc1; font-size: 150px"
                >library_books</i
              >
            </time>
          </section>
          <section class="card-cont">
            <h1 style="color: #1f1d36">NOA</h1>
            <div class="even-info">
              <i class="fa fa-map-marker"></i>
              <p class="inv">nexen square for people australia, sydney</p>
            </div>
            <a href="#">cancel</a>
          </section>
        </router-link>
      </article>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.card {
  display: table-row;
  width: 49%;
  background-color: #fff;
  color: #989898;
  margin-bottom: 10px;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  border-radius: 4px;
  position: relative;
}

.card + .card {
  margin-left: 2%;
}

.date {
  display: table-cell;
  width: 25%;
  position: relative;
  text-align: center;
  border-right: 2px dashed #dadde6;
}

.date:before,
.date:after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  background-color: #dadde6;
  position: absolute;
  top: -15px;
  right: -15px;
  z-index: 1;
  border-radius: 50%;
}

.date:after {
  top: auto;
  bottom: -15px;
}

.date time {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.date time span {
  display: block;
}

.date time span:first-child {
  color: #2b2b2b;
  font-weight: 600;
  font-size: 250%;
}

.date time span:last-child {
  text-transform: uppercase;
  font-weight: 600;
  margin-top: -10px;
}

.card-cont {
  display: table-cell;
  width: 75%;
  font-size: 85%;
  padding: 10px 10px 30px 50px;
}

.card-cont h3 {
  color: #3c3c3c;
  font-size: 130%;
}

.card-cont > div {
  display: table-row;
}

.card-cont .even-date i,
.card-cont .even-info i,
.card-cont .even-date time,
.card-cont .even-info p {
  display: table-cell;
}

.card-cont .even-date i,
.card-cont .even-info i {
  padding: 5% 5% 0 0;
}

.card-cont .even-info p {
  padding: 30px 50px 0 0;
}

.card-cont .even-date time span {
  display: block;
}

.card-cont a {
  display: block;
  text-decoration: none;
  width: 80px;
  height: 30px;
  background-color: #d8dde0;
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 2px;
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.row:last-child .card:first-child .card-cont a {
  background-color: #037fdd;
}

.row:last-child .card:last-child .card-cont a {
  background-color: #f8504c;
}

@media screen and (max-width: 860px) {
  .card {
    display: block;
    float: none;
    width: 100%;
    margin-bottom: 10px;
  }
  .card + .card {
    margin-left: 0;
  }
  .card-cont .even-date,
  .card-cont .even-info {
    font-size: 75%;
  }
}

.inv {
  color: transparent;
}
.cardAnimation {
  background-color: #eff6ff;
  transition: transform 0.3s;
}

.cardAnimation:hover {
  transform: scale(1.1);
  background-color: #c4ddff;
  cursor: pointer;
}
.cardAnimation:hover p {
  color: gray;
}
.lIcon {
  font-size: 150px;
  color: #646fd4;
}
</style>
