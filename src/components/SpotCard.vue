<template>
  <RouterLink :to="`/show/${posterId}`" class="mb-8">
  <v-card class="spotify-card">
    <v-img
      :src="posterImg"
      style="border-radius: 6px; box-shadow: 1px 1px 4px black"
    ></v-img>
    <v-card-title class="text-base p-1">{{ posterName }}</v-card-title>
    <v-card-subtitle class="text-[#b3b3b3] m-0 p-0 mb-4">{{ posterCreator }}</v-card-subtitle>
  </v-card>
    </RouterLink>
</template>

<script setup>
// import { defineProps } from "vue";
import {RouterLink} from 'vue-router'
const props = defineProps([
  "posterImg",
  "imageWidth",
  "imageHight",
  "posterName",
  "posterCreator",
  "posterId",
]);
</script>

<style  scoped>
.spotify-card {
  width: 170px;
  height: 240px;
  padding: 0.5rem;
  background:rgba(179, 179, 179, 0.1);
}
.spotify-card:hover{
  cursor:pointer;
  background:rgba(179, 179, 179, 0.3) ;
}


</style>




