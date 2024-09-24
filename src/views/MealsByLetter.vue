<template>
  <div>
    <div class="flex mt-8 justify-center">
      <router-link
        v-for="letter in letters"
        :to="{ name: 'byLetter', params: { letter } }"
        :key="letter"
        class="font-bold"
      >
        <span class="hover:bg-sky-200 rounded px-2 p-1">{{ letter }}</span>
      </router-link>
    </div>

    <Meals :meals="meals" />
  </div>
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);
const route = useRoute();

watch(route, () => {
  store.dispatch("searchByLetter", route.params.letter || null);
});

onMounted(() => {
  store.dispatch("searchByLetter", route.params.letter || null);
});
</script>
<style></style>
