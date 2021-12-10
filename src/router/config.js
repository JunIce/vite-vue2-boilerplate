import Home from "@/pages/home/home.vue";
import OtherComponent from "@/pages/other/other.js";

export default [
  {
    path: "/other",
    name: "other",
    component: OtherComponent,
  },
  {
    path: "/",
    component: Home,
  },
];
