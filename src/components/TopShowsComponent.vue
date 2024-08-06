<template>
  <section
    class=" flex items-center justify-center bg-[#121212] p-4 rounded-2xl"
  >
    <ul class="w-full flex flex-wrap gap-2 w-full">
      <showComponent
        v-for="show in shows"
        :showImg="show.album.images[0].url"
        :showName="show.name"
        :showArtist="show.artists[0].name"
        :showUrl="show.external_urls.spotify"
      />
    </ul>
  </section>
</template>

<script setup>
import { computed } from "vue";

import { useStore } from "vuex";

const store = useStore();
const shows = computed(() => store.getters.topShows);
const loading = computed(() => store.getters.isLoading);
</script>
