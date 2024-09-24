import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import {
  Home,
  MealDetails,
  MealsByIngredient,
  MealsByLetter,
  MealsByName,
  Ingredients,
  MealsByCategory,
} from "../views";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      },
      {
        path: "/by-category/:category?",
        name: "byCategory",
        component: MealsByCategory,
      },
    ],
  },
  {
    path: "/auth",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
