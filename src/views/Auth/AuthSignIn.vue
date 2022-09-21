<template>
  <div>
    <div class="col-12 col-lg-6 col-xl-6 px-5">
      <div class="row vh-100">
        <div class="col align-self-center p-5 w-100">
          <h3 class="fw-bolder">WELCOME BACK !</h3>
          <p class="fw-lighter fs-6">
            Don't have an account,
            <span id="signUp" role="button" class="text-primary">Sign Up</span>
          </p>
          <!-- form login section -->
          <form action="" class="mt-5" @submit.prevent="handleSignin">
            <div class="mb-3">
              <label for="username" class="form-label">Email</label>
              <input
                type="email"
                class="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                placeholder="name@example.com"
                v-model="email"
              />
            </div>
            <div class="mb-3">
              <label for="username" class="form-label">Password</label>
              <div class="d-flex position-relative">
                <input
                  type="password"
                  class="form-control text-indent auth__password shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                  v-model="password"
                />
                <span
                  class="password__icon text-primary fs-4 fw-bold bi bi-eye-slash"
                ></span>
              </div>
            </div>
            <div class="col text-center">
              <button
                type="submit"
                class="btn btn-outline-dark btn-lg rounded-pill mt-4 w-100"
              >
                Login
              </button>
            </div>
          </form>
          <p class="mt-5 text-center">Or Sign in with social platforms</p>
          <div class="row text-center">
            <div class="col mt-3">
              <a href="" class="btn btn-outline-dark border-2 rounded-circle"
                ><i class="bi bi-facebook fs-5"></i
              ></a>
            </div>
            <div class="col mt-3">
              <a href="" class="btn btn-outline-dark border-2 rounded-circle"
                ><i class="bi bi-linkedin fs-5"></i
              ></a>
            </div>
            <div class="col mt-3">
              <a href="" class="btn btn-outline-dark border-2 rounded-circle"
                ><i class="bi bi-twitter fs-5"></i
              ></a>
            </div>
            <div class="col my-3">
              <a href="" class="btn btn-outline-dark border-2 rounded-circle"
                ><i class="bi bi-google fs-5"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-none d-lg-block col-lg-6 col-xl-6 p-5">
      <div class="row vh-100 p-5">
        <div class="col align-self-center p-5 text-center">
          <img src="@/assets/images/login.png" class="bounce" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../../supabase";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSignin = async () => {
      try {
        // Use the Supabase provided method to handle the signin
        const { error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
      } catch (error) {
        alert(error.error_description || error.message);
      }
    };

    return {
      email,
      password,
      handleSignin,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
body {
  font-family: "Poppins", sans-serif !important;
}

/* add padding on input */

.text-indent {
  text-indent: 0.5rem;
}

/* add password hide and show icon */

.password__icon {
  position: absolute;
  right: 0;
  padding: 15px 20px;
  cursor: pointer;
}

/* backgroun grey */

.bg-grey-light {
  background: #f0f0f0;
}

.bg-grey-light:focus {
  background: #f0f0f0;
}

@media (min-width: 1024px) {
  body {
    overflow-y: hidden;
  }
  /* add circle blue background */
  .ball {
    overflow: hidden;
    transition: margin 1s;
    width: 600px;
    height: 600px;
  }
  .ball.login {
    margin-left: 50%;
    margin-top: 5%;
  }
  .ball.register {
    margin-left: 14%;
    margin-top: 6%;
  }
  /* bouncing effect */
  .bounce {
    animation: bounce 2s infinite alternate;
    -webkit-animation: bounce 2s infinite alternate;
  }
  @keyframes bounce {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-35px);
    }
  }
  @-webkit-keyframes bounce {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-35px);
    }
  }
  /* register form active */
  .register__form.active {
    margin-left: 10% !important;
    opacity: 1;
  }
  /* login form active */
  .login__form.active {
    opacity: 1;
    margin-left: 10% !important;
  }
}

@media (max-width: 768px) {
  .container .col-12.p-5 {
    padding: 0px !important;
  }
  body {
    overflow-x: hidden;
  }
}

/* register default */

.register__form {
  position: absolute;
  width: 100%;
  height: 100vh;
  margin-left: -100%;
  opacity: 0;
  transition: margin 1s, opacity 0.5s;
  z-index: 1;
}

/* register form active */

.register__form.active {
  margin-left: 0%;
  opacity: 1;
}

/* login form default */

.login__form {
  position: absolute;
  width: 100%;
  height: 100vh;
  margin-left: -100%;
  opacity: 0;
  transition: margin 1s, opacity 0.5s;
  z-index: 1;
}

/* login form active */

.login__form.active {
  opacity: 1;
  margin-left: 0%;
}
</style>
<!-- <template>
  <div>
    <h2>Sign in to your account</h2>
    <form @submit.prevent="handleSignin">
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <div>
        <button type="submit">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../../supabase";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSignin = async () => {
      try {
        // Use the Supabase provided method to handle the signin
        const { error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
      } catch (error) {
        alert(error.error_description || error.message);
      }
    };

    return {
      email,
      password,
      handleSignin,
    };
  },
};
</script> -->
