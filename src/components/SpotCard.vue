<template>
  <RouterLink :to="`/show/${posterId}`" class="mb-8">
    <v-card class="card">
      <v-img
        :src="posterImg" eager
        style="border-radius: 6px; box-shadow: 1px 1px 4px black"
      ></v-img>
      <v-card-title class="text-base p-1">{{ posterName }}</v-card-title>
      <v-card-subtitle class="text-[#b3b3b3] m-0 p-0 mb-4">{{
        posterCreator
      }}</v-card-subtitle>
    </v-card>
  </RouterLink>
</template>

<script setup>
// import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps([
  "posterImg",
  "imageWidth",
  "imageHight",
  "posterName",
  "posterCreator",
  "posterId",
]);
</script>

<style scoped>
.card {
  width: 240px;
  height: 340px;
  padding: 0.5rem;
  background: #121212;
  direction: rtl;
}
.card:hover {
  cursor: pointer;
  background: rgba(179, 179, 179, 0.3);
}
</style>
