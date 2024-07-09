<template>
  <v-app>
    <v-layout>
      <NavigationComponent />
      <v-main>
        <div class="h-full" v-if="spin">
          <img src="./assets/spin.svg" class="bg-red m-auto mt-16" />
        </div>

        <RouterView></RouterView>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import {  ref  } from "vue";
import store from "./store";
import {  RouterView } from "vue-router";
import NavigationComponent from '@/components/NavigationComponent'


const spin = ref(true);


setTimeout(()=>{
  spin.value = false
}, 1000)


</script>
<style scoped>
a {
  text-decoration: none;
}

p {
  font-size: 22px;
}
span {
  color: rgb(133, 133, 133);
}
.card {
  width: 176px;
  margin: auto;
  display: flex;
  justify-content: center;
  height: 4rem;
}
*{
    font-family: "Roboto", sans-serif;

}

.v-main{
--v-layout-left: 240px !important;
--v-layout-right: 0px !important;
--v-layout-top: 80px !important;
--v-layout-bottom: 0px !important;
}

@media screen and (max-width: 1280px){
.v-main{
--v-layout-left: 0px !important;
--v-layout-right: 0px !important;
--v-layout-top: 60px !important;
--v-layout-bottom: 0px !important;
}
}
</style>
