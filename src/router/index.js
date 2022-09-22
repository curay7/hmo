import { createRouter, createWebHistory } from "vue-router";
import HomeMainPage from "../views/Home/HomeMainPage.vue";
import AuthSignIn from "../views/Auth/AuthSignIn.vue";

import HomeDashboard from "../views/Home/page/HomeDashboard.vue";

import MemberProfile from "../views/Home/page/member/MemberProfile.vue";
import MemberSearch from "../views/Home/page/member/MemberSearch.vue";
import MemberViewProfile from "../views/Home/page/member/MemberViewProfile.vue";

import Reports from "../views/Home/page/reports/Reports.vue";
import Billing from "../views/Home/page/billing/Billing.vue";
import BillingSearch from "../views/Home/page/billing/BillingSearch.vue";

import HomeNoa from "../views/Home/page/HomeNoa.vue";
import HomeLoa from "../views/Home/page/HomeLoa.vue";
import page404 from "../views/page404.vue";

//import Protected from "../views/Protected.vue";
import { userSessionStore } from "../stores/userSession";
import { supabase } from "../supabase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/login",
      name: "home",
      component: AuthSignIn,
    },
    {
      path: "/",
      name: "dashboard",
      component: HomeMainPage,

      meta: {
        requiresAuth: true,
      },
      children: [
        {
          name: "Menu",
          path: "dashboard",
          component: HomeDashboard,
        },
        //Member
        {
          name: "Member Profile",
          path: "members",
          component: MemberProfile,
        },
        {
          name: "Member Search",
          path: "member-search",
          component: MemberSearch,
        },
        {
          name: "Member View",
          path: "member-view",
          component: MemberViewProfile,
        },
        //Billing
        {
          name: "Billing",
          path: "billing",
          component: Billing,
        },
        {
          name: "Billing Search",
          path: "billing-search",
          component: BillingSearch,
        },
        {
          name: "Reports",
          path: "reports",
          component: Reports,
        },
        {
          name: "LOA",
          path: "loa",
          component: HomeLoa,
        },
        {
          name: "NOA",
          path: "noa",
          component: HomeNoa,
        },
      ],
    },
    { path: "/:catchAll(.*)", component: page404 },
  ],
});

router.beforeEach(async (to, from, next) => {
  const userSession = supabase.auth.session();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if ((to.path === "/login" || to.path === "/register") && userSession) {
    next("/");
  } else if (requiresAuth && !userSession) {
    next("login");
  } else {
    next();
  }
});

// router.beforeEach((to, from, next) => {
//   const userSession = userSessionStore();

//   if (to.meta.needsAuth) {
//     if (userSession.session) {
//       return next();
//     } else {
//       return next("/login");
//     }
//   }

//   return next();
// });

export default router;

// import { createRouter, createWebHistory } from "vue-router";
// import HomeLayout from "../views/Home/HomeLayout.vue";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: HomeLayout,
//     },
//     {
//       path: "/about",
//       name: "about",
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import("../views/Auth/Auth.vue"),
//     },
//   ],
// });

// export default router;
