<template>
  <div>
    <HomeLayout v-if="user.user" />
    <Auth v-else />
  </div>
</template>

<script>
import { user } from "./user";
import { supabase } from "./supabase";
import HomeLayout from "./views/Home/HomeLayout.vue";
import Auth from "./views/Auth/Auth.vue";

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
</script>
