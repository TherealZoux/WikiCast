<template>
  <v-container class="mt-5">
    <v-text-field
      v-model="searchQuery"
      label="Search for tracks"
      @keyup.enter="performSearch"
      class="my-4"
    ></v-text-field>
    <v-btn @click="performSearch" color="primary">Search</v-btn>

    <div v-if="loading" class="mt-5 text-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>

    <v-list v-if="!loading && tracks.length" class="mt-5">
      <v-list-item
        v-for="(track, index) in tracks"
        :key="index"
      >
        <v-list-item-content>
          <v-list-item-title>{{ track.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ track.artists.map(artist => artist.name).join(', ') }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar>
          <v-img :src="track.album.images[0].url"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import store from "../store";


const searchQuery = ref('');
const shows = computed(()=> store.getters.shows);
const loading = ref(false);
const tracks = ref([]);

const performSearch = async () => {
  if (searchQuery.value.trim() === '') return;

  loading.value = true;

  tracks.value = shows.find(show => show.name === searchQuery.value) ;

  };


</script>

<style scoped>
.mt-5 {
  margin-top: 2rem;
}
.my-4 {
  margin: 1rem 0;
}
</style>

