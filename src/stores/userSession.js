import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const userSessionStore = defineStore({
  id: "userSession",
  state: () => ({
    session: false,
  }),
  actions: {
    sessionLogout() {
      console.log("Test Session");
      try {
        // loading.value = true;
        let { error } = supabase.auth.signOut();
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      } finally {
        //loading.value = false;
      }
    },
  },
});
