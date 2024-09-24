<template>
  <header
    class="bg-white shadow-md h-16 flex justify-between sticky top-0 items-center sm:items-stretch"
  >
    <router-link
      :to="{ name: 'home' }"
      class="flex items-center px-5 h-full hover:bg-orange-100"
    >
      Home
    </router-link>

    <div @click="isMenuOpened = !isMenuOpened" class="sm:hidden mr-5">
      <i class="fa-solid fa-bars"></i>
    </div>
    <div
      v-if="isMenuOpened"
      class="absolute right-5 top-10 bg-white shadow-md rounded-md px-1 py-2"
    >
      <ul>
        <li>
          <router-link
            :to="{ name: 'byName' }"
            class="flex items-center px-2 h-full transition-colors hover:bg-purple-100"
            >Search Meals</router-link
          >
        </li>
        <hr class="opacity-70"/>
        <li>
          <router-link
            :to="{ name: 'byLetter' }"
            class="flex items-center px-2 h-full transition-colors hover:bg-purple-100"
            >Meals by Letters</router-link
          >
        </li>
        <hr class="opacity-70"/>
        <li>
          <router-link
            :to="{ name: 'ingredients' }"
            class="flex items-center px-2 h-full transition-colors hover:bg-purple-100"
            >Meals by Ingredients</router-link
          >
        </li>
      </ul>
    </div>
    <div class="items-center gap-1 hidden sm:flex">
      <router-link
        :to="{ name: 'byName' }"
        class="flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        >Meals by Letters</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        >Meals by Ingredients</router-link
      >
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";

const isMenuOpened = ref(false);
</script>
