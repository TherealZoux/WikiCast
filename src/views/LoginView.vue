<template>
  <v-app>
    <v-card class="card m-auto mb-[35rem] flex-column" style="background:none; display:flex;">
    <img src="../assets/avatar(1).png" width="300rem " class=" mb-4"></img>
          <v-btn class="card" color="success" @click="authenticateWithSpotify">Connect with spotify</v-btn>
    </v-card>
  </v-app>
</template>

<script setup>
import {ref, onMounted } from 'vue'
import {  useRouter } from "vue-router";
import { authenticateWithSpotify } from "@/services/AuthService"
import store from '../store'
  
const router = useRouter();
if(localStorage.getItem('access_token') !== null){
  router.push('/');
}




</script>

<style lang="scss" scoped></style>
