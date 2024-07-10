
<template>
  <section class="flex show-info flex-row gap-4 m-[2rem] bg-[#3ba84ed9] p-[2rem] rounded">
    <img :src="show.images[0].url" :width="show.images[0].width - 450" :height="show.images[0].height - 450" />
    <div class="flex flex-column gap-6">
      <span class="text-[#d9d9d9]">Podcast</span>
      <h1 class="text-[2rem] roboto-bold">{{ show.name }}</h1>
      <p class="text-[22px] text-medium text-[#d9d9d9]">{{ show.publisher }}</p>
    </div>
  </section>
  <div class="h-full" v-if="spin">
    <img src="../assets/spin.svg" class="bg-red m-auto mt-8" />
    </div>
  <section class="flex gap-4 flex-column">
    <div class="p-4">
      <h1 class="text-2xl roboto-bold text-[#d9d9d9] pb-2">About</h1>
      <p class="text-[#a3a3a3] roboto-regular rounded tracking-[0.3px] border-[4px] border-[#262626] p-[10px] bg-[#262626]">{{ show.description }}</p>
    </div>

    <div>
      <h1 class="text-2xl p-4 roboto-bold text-[#d9d9d9]">Episodes: {{ show.total_episodes }}</h1>

      <div v-if="!episodes.length" class="flex flex-column items-center">
          <img src="../assets/avatar.png" alt="you didn't have a token anymore" width="300rem" />
          <h1  class="text-center roboto-bold text-[#f90f20] text-4xl mt-8 mb-8">You've miss a token, please login again</h1>
      <v-btn color="green">
          <router-link to="/login" >Go to login</router-link>
      </v-btn>
    </div>


      <v-list lines="two" v-else class="bg-black">
        <v-list-item v-model="episodes" v-for="episode in episodes" :key="episode.id" :title="episode.name" :subtitle="episode.description" :prepend-avatar="episode.images[0]?.url" class="m-2" style="background:#121212;">
        </v-list-item>
        <v-card class="flex bg-black pb-16 items-center justify-center mt-4" style="display:flex;" >
         <v-btn class="mx-auto mt-8" color="success" @click="goToShow">Listen on Spotify =></v-btn>
      </v-card>
      </v-list>


       </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';

const showId = window.location.href.split('/')[4];
const show = computed(() => store.getters.shows.filter(show => show.id === showId)[0]);
const error = computed(() => store.getters.error);
const episodes = computed(() => store.getters.episodes);
const spin = ref(true);

const goToShow = () => {
  window.location.href = `https://open.spotify.com/show/${showId}`;
};

onMounted(() => {
   window.scrollTo({
        top: 0,
        behavior: 'smooth' // For smooth scrolling behavior
    });
  store.dispatch('fetchEpisodes', showId);
});

setTimeout(()=>{
  spin.value = false
}, 1000)


</script>

<style lang="css" scoped >
.v-list-item-subtitle {
  margin-top: 5px;
}

@media screen and (max-width:600px){
  .show-info{
    flex-direction: column !important;
    padding:0;
    margin:0;
    img{
      width:100%;
    }
    div{
      text-align:center;
      span{
        font-weight:600;
      }
    }

  }
}
</style>

