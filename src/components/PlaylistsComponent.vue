<script setup>
import { computed } from "vue";

import { useStore } from "vuex";

const store = useStore();
const playlists = computed(() => store.getters.playlists);
const validPlaylists = computed(()=>playlists.value.filter((playlist)=> playlist.images != null))
const loading = computed(() => store.getters.isLoading);
</script>


<template>
  <section
    class=" flex items-center justify-center bg-[#121212] gap-4  p-4 rounded-2xl"
  >
    <ul class="flex flex-wrap gap-4 w-full">
      <showComponent
        v-for="playlist in validPlaylists"
        :showName="playlist.name"
        :showImg="playlist.images[0].url"
        :showArtist="playlist.owner.display_name"
        :showUrl="playlist.external_urls.spotify"
      />
    </ul>
  </section>
</template>


