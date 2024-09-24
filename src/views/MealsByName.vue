<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="search"
      class="rounded border-2 border-gray-300 w-full"
      placeholder="Search for Meals..."
      @change="changeSearch"
    />
  </div>

  <Meals :meals="meals" />
</template>
<script setup>
import { computed, onMounted, onUpdated, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Meals from "../components/Meals.vue";
import store from "../store";

const route = useRoute(); // get URL infos
const router = useRouter(); // do action URL infos
const meals = computed(() => store.state.searchedMeals);
const search = ref("");

function changeSearch() {
  if (search.value) {
    store.dispatch("searchMeals", search.value);
  } else {
    store.commit("setSearchedMeals", []);
  }

  router.push({
    params: {
      name: search.value,
    },
  });
}

onMounted(() => {
  search.value = route.params.name;

  if (search.value) {
    changeSearch();
  } else {
    store.commit("setSearchedMeals", []);
  }
});
</script>
<style></style>
