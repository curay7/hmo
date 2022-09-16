<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Profile v-if="user.user" />
    <Auth v-else />
  </div>
</template>

<script>
import { user } from "./user";
import { supabase } from "./supabase";
import Profile from "./views/Home/Profile.vue";
import Auth from "./views/Auth/Auth.vue";

export default {
  components: {
    Profile,
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
