<template>
  <Meals :meals="meals" />
</template>
<script setup>
import Meals from "../components/Meals.vue";
import { computed, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const meals = computed(() => store.state.mealsByCategory);
const route = useRoute();

onMounted(() => {
  store.dispatch("mealsByCategory", route.params.category);
});
</script>
