<template>
  <section
    class="flex show-info mt-[4rem] flex-row gap-4 bg-gradient-to-r from-[#360033] to-[#0b8793] p-[2rem] rounded"
  >
    <img
      :src="show.images[0].url"
      :width="show.images[0].width - 300"
      :height="show.images[0].height - 450"
    />
    <div class="flex flex-column justify-around">
      <span class="text-[#d9d9d9]">Podcast</span>
      <h1
        class="text-[4rem] md:text-[7rem] h-[7rem] md:h-[12rem] roboto-bold overflow-hidden"
      >
        {{ show.name }}
      </h1>
      <p class="text-[22px] text-medium text-[#d9d9d9]">{{ show.publisher }}</p>
    </div>
  </section>
  <div class="h-full flex items-center justify-center" v-if="spin">
    <loadingComponent />
  </div>
  <section class="flex gap-4 flex-column" v-else>
    <div class="p-4">
      <h1 class="text-2xl roboto-bold text-[#d9d9d9] pb-2">About</h1>
      <p
        class="text-[#a3a3a3] roboto-regular rounded tracking-[0.3px] border-[4px] border-[#262626] p-[10px] bg-[#262626]"
      >
        {{ show.description }}
      </p>
    </div>

    <div>
      <h1 class="text-2xl p-4 roboto-bold text-[#d9d9d9]">
        Episodes: {{ show.total_episodes }}
      </h1>

      <v-list lines="two" class="bg-black">
        <v-list-item
          v-model="episodes"
          v-for="episode in episodes"
          :key="episode.id"
          :title="episode.name"
          :subtitle="episode.description"
          :prepend-avatar="episode.images[0].url"
          class="m-2"
          style="background: #121212"
        >
        </v-list-item>
        <v-card
          class="flex bg-black pb-16 items-center justify-center mt-4"
          style="display: flex"
        >
          <v-btn class="mx-auto mt-8" color="success" @click="goToShow"
            >Listen on Spotify =></v-btn
          >
        </v-card>
      </v-list>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const showId = window.location.href.split("/")[4];
const show = computed(
  () => store.getters.shows.filter((show) => show.id === showId)[0],
);
const episodes = computed(() => store.getters.episodes);
const spin = computed(()=>store.getters.isLoading);

const goToShow = () => {
  window.location.href = `https://open.spotify.com/show/${showId}`;
};

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // For smooth scrolling behavior
  });
  store.dispatch("fetchEpisodes", showId);
});

setTimeout(() => {
  spin.value = false;
}, 500);
</script>

<style scoped>
.v-list-item-subtitle {
  margin-top: 5px;
}

@media screen and (max-width: 600px) {
  .show-info {
    flex-direction: column !important;
    padding: 0;
    margin: 0;
    margin-top: 4rem;

    img {
      width: 100%;
    }
    div {
      text-align: center;
      span {
        font-weight: 600;
      }
    }
  }
}
</style>
