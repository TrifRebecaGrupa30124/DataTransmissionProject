import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/products",
    name: "products",
    component: () => import("./components/ProductsList.vue"),
  },
  {
    path: "/",
    alias: "/customers",
    name: "customers",
    component: () => import("./components/CustomersList.vue"),
  },
  {
    path: "/",
    alias: "/reviews",
    name: "reviews",
    component: () => import("./components/ReviewList.vue"),
  },

  {
    path: "/products/:id",
    name: "product-details",
    component: () => import("./components/ProductDetails.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddProduct.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
