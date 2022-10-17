import { createWebHistory, createRouter } from "vue-router";
import LoginView from "../views/LoginView.vue";
import PasswordsView from "../views/PasswordsView.vue";

const routes = [
  {
    path: "/",
    component: PasswordsView,
    name: "Passwords",
  },
  {
    path: "/login",
    component: LoginView,
    name: "Login",
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
