<template>
  <li class="bg-white shadow rounded-md">
    <router-link
      v-if="meal.strMealThumb"
      :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
    >
      <img
        class="w-full object-cover rounded-t-md h-64"
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
      />
    </router-link>
    <h3 class="px-5 pt-3 font-bold" v-if="meal.strMeal">{{ meal.strMeal }}</h3>
    <p class="p-2 px-5" v-if="meal.strInstructions">
      {{ meal.strInstructions?.slice(0, 220) }}...
    </p>
    <div class="p-5 px-5 pb-3 flex gap-3 justify-between">
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <button
          class="border transition-colors border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded px-4 p-1"
        >
          View
        </button>
      </router-link>
      <YoutubeButton v-if="meal.strYoutube" :href="meal.strYoutube"
        >Youtube</YoutubeButton
      >
    </div>
  </li>
</template>
<script setup>
import { YoutubeButton } from "../ui-components";

const { meal } = defineProps(["meal"]);
</script>
