<script setup>
import { computed, onMounted } from "vue";

import { useStore } from "vuex";

const store = useStore();
const artists = computed(() => store.getters.artists);
const loading = computed(() => store.getters.isLoading);

onMounted(() => {
  store.commit("SET_LOADING", false);
});
</script>

<template>
  <loadingComponent v-if="loading" />
  <section
    class="w-full flex flex-wrap items-center justify-center bg-[#121212] gap-4  p-4 rounded-2xl"
    v-else 
  >
    <a  v-for="artist in artists"  :href="artist.external_urls.spotify">
    <img
      :src="artist.images[0].url"
      class="rounded-[50%] w-[4rem] h-[4rem]"
    />
    </a>
  </section>

</template>
