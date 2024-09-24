<template>
  <h1 class="font-bold text-center text-4xl py-7">Ingredients</h1>
  <div class="px-5">
    <input
      type="text"
      v-model="search"
      class="rounded border-2 border-gray-300 w-full"
      placeholder="Search for Ingredient..."
      @change="changeSearch"
    />
  </div>
  <div class="p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
    <router-link
      v-for="ingredient in searchedIngredient"
      :key="ingredient.idIngredient"
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      class="bg-white rounded-md p-5 mb-3 shadow"
    >
      <h3 class="font-bold">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const search = ref("");
const ingredients = ref([]);
const searchedIngredient = computed(() => {
  if (!ingredients.value) return ingredients;

  return ingredients.value.filter((ingredient) =>
    ingredient.strIngredient.toLowerCase().includes(search.value.toLowerCase())
  );
});

onMounted(() => {
  axiosClient.get(`/list.php?i=list`).then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
<style></style>
