<template>
  <div>
    <router-view />
  </div>
</template>
<!-- 
<script>
import { user } from "./user";
import { supabase } from "./supabase";
import HomeLayout from "./views/Home/HomeLayout.vue";
import Auth from "./view./views/Home/HomeMainPage.vue

export default {
  components: {
    HomeLayout,
    Auth,
  },

  setup() {
    user.user = supabase.auth.user();
    supabase.auth.onAuthStateChange((_, session) => {
      user.user = session.user;
    });

    return {
      user,
    };
  },
};
</script> -->
