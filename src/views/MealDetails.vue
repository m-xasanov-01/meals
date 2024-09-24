<template>
  <div
    v-if="!loader"
    class="mx-auto p-5 pt-5 w-[100vw] sm:w-[80vw] md:w-[60vw]"
  >
    <img
      class="rounded w-[100vw] sm:w-[80vw] md:w-[60vw] object-cover h-[60vh]"
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
    />
    <h1 class="text-4xl font-bold mt-7 mb-3">{{ meal.strMeal }}</h1>
    <p>{{ meal.strInstructions }}</p>
    <div class="flex gap-4 justify-between flex-wrap text-lg py-2 mt-10 mb-5">
      <p class="text-lg" v-if="meal.strCategory">
        <strong>Category:</strong> {{ meal.strCategory }}
      </p>
      <p class="text-lg" v-if="meal.strArea">
        <strong>Area:</strong> {{ meal.strArea }}
      </p>
      <p class="text-lg" v-if="meal.strTags">
        <strong>Tags:</strong> {{ meal.strTags?.split(",")?.join(", ") }}
      </p>
    </div>
    <div class="grid grid-cols-2 justify-between">
      <div>
        <h2 class="text-lg font-bold mb-1">Ingredients</h2>
        <ul>
          <template v-for="(el, i) of new Array(20)">
            <li
              v-if="String(meal[`strIngredient${i + 1}`]).trim()"
              class="capitalize"
            >
              {{ i + 1 }}. {{ meal[`strIngredient${i + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-lg font-bold mb-1">Measures</h2>
        <ul>
          <template v-for="(el, i) of new Array(20)">
            <li
              v-if="String(meal[`strMeasure${i + 1}`]).trim()"
              class="capitalize"
            >
              {{ i + 1 }}. {{ meal[`strMeasure${i + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="flex justify-between mt-10 pb-10">
      <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
      <a :href="meal.strSource" target="_blank">
        <button class="px-4 text-white bg-indigo-600 py-2 rounded">
          Source
        </button>
      </a>
    </div>
  </div>

  <div v-else><Loader /></div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import { Loader, YoutubeButton } from "../ui-components";

const route = useRoute();
const meal = ref({});
const loader = ref(false);

onMounted(() => {
  loader.value = true;

  axiosClient.get(`/lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data?.meals[0] || {};

    loader.value = false;
  });
});
</script>
