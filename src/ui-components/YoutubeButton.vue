<template>
  <a :href="props.href" target="_blank">
    <button class="bg-orange-600 text-white rounded px-4 p-2">
      <slot></slot>
    </button>
  </a>
</template>
<script setup>
const props = defineProps(["href"]);
</script>
