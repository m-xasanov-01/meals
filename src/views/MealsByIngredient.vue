<template>
  <h1 class="font-bold text-center text-4xl my-7 mb-3">Meals by ingredient</h1>

  <Meals :meals="meals" />
</template>
<script setup>
import Meals from "../components/Meals.vue";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchByIngredient", route.params.ingredient);
});
</script>
<style></style>
