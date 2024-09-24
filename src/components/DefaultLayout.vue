<template>
  <div class="bg-gray-100 min-h-full h-full">
    <Navbar />
    <main class="min-h-[calc(100vh-96px)]">
      <router-view />
    </main>
  </div>
</template>
<script setup>
import Navbar from "./Navbar.vue";
</script>
