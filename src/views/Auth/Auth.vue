<template>
  <div>
    <AuthSignIn />
  </div>
  <!-- <div>
    <AuthSignUp v-if="isSignUp" />
    <AuthSignIn v-else />
    <button @click="isSignUp = !isSignUp">
      {{
        isSignUp
          ? "Already have an account? Sign In"
          : "Don't have an account yet? Sign Up"
      }}
    </button>
  </div> -->
</template>

<script>
import { ref } from "vue";
import AuthSignUp from "./AuthSignUp.vue";
import AuthSignIn from "./AuthSignIn.vue";
export default {
  components: { AuthSignUp, AuthSignIn },
  setup() {
    const isSignUp = ref(true);

    return {
      isSignUp,
    };
  },
};
</script>

<style scoped></style>
