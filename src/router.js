import Vue from "vue";
import Router from "vue-router";
import Presentation from "./views/Presentation.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Presentation",
      component: Presentation
    },
    {
      path: "/Musiques",
      name: "Musiques",
      // route level code-splitting
      // this generates a separate chunk (Musiques.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "Musiques" */ "./views/Musiques.vue")
    }
  ]
});
