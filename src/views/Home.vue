<template>
  <h1 class="font-bold text-3xl text-center py-5">Categories</h1>
  <ul class="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 pb-5">
    <li v-for="meal in meals" class="bg-white rounded-md p-5">
      <router-link
        :to="{ name: 'byCategory', params: { category: meal.strCategory } }"
      >
        <div class="flex justify-center mb-5">
          <img
            class="w-[320px] h-[200px]"
            :src="meal.strCategoryThumb"
            :alt="meal.strCategory"
          />
        </div>
      </router-link>
      <h3 class="font-bold text-xl mb-3">{{ meal.strCategory }}</h3>
      <p>{{ meal.strCategoryDescription?.slice(0, 230) }}...</p>
    </li>
  </ul>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const meals = ref([]);

onMounted(async () => {
  try {
    const response = await axiosClient.get("/categories.php");

    meals.value = response?.data.categories;
  } catch (error) {}
});
</script>
