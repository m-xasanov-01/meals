<template>
  <ul v-if="meals?.length" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
    <MealItem v-for="meal in meals" :meal="meal" :key="meal.idMeal" />
  </ul>
  <div v-else class="pt-10">
    <p class="text-center text-gray-600">There are no meals</p>
  </div>
</template>
<script setup>
import MealItem from "./MealItem.vue";

const { meals } = defineProps(["meals"]);
</script>
