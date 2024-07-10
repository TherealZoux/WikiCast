<script setup>
import { useStore } from "vuex";
import {computed, onMounted, ref} from 'vue'
import {  useRouter } from "vue-router";
const store = useStore();


const shows = computed(()=> store.getters.shows);
const loading = ref(true);
const error = computed(()=> store.getters.error);
const screenWidth = ref(window.screen.width);

const router = useRouter();

if(localStorage.getItem('access_token') === null){
	router.push('/login');
}
onMounted(  () => {

  store.dispatch('fetchData');

})

</script>

<template>
      <h1 v-if="error">{{error.value}}</h1>
    <div class="flex justify-center items-center flex-column mb-4 mt-16"   >
      <img src="../assets/avatar2.png" alt="login" class="w-[15rem] "  />
      <div v-if="!shows" class="flex flex-column items-center justify-center gap-4 ">
      <h2 class="text-4xl text-[#ffffffa1] text-center roboto-bold" >Hi!, please sign in to see podcasts</h2>
      <v-btn color="green" width="8rem" v-if="screenWidth < 1280" >
          <router-link to="/login" >Go to login</router-link>
      </v-btn>
      </div>
      <h2 class="text-4xl roboto-bold text-[#ffffffa1]" v-else>Hi!, enjoy with:</h2>
    </div>
    <section class="w-full" v-if="shows">
      <h1 class=" text-4xl font-bold  text-center mb-8 ">Popular Podcasts! </h1>
      <div
        class="flex gap-4 sm:gap-6 flex-wrap justify-center items-center w-full pl-4 sm:pl-4  "
    >
      <SpotCard
	v-model="shows"
        v-for="show in shows"
        :key="show.id"
        :posterImg="show.images[0].url"
        :imageWidth="show.images[0].width"
        :imageHight="show.images[0].height"
        :posterName="show.name"
        :posterCreator="show.publisher"
        :posterId="show.id"
      ></SpotCard>
    </div>
  </section>
</template>

<style scoped>

.v-container{
  margin:0;
}
h1{
  background: linear-gradient(#FFCD39, #4DD4AC);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>

