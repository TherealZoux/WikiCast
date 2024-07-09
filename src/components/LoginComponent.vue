<template>
  <v-app>
    <v-card class="card m-auto">
          <v-btn class="card" color="success" @click="authenticateWithSpotify">Connect with spoyify</v-btn>
    </v-card>
  </v-app>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount } from 'vue'
import { authenticateWithSpotify } from "@/services/AuthService"
import store from '../store'

const userName = ref('');
const error = ref('');

const firstNameRules = [
  value => {
    if (value?.length > 3) return true
    return 'First name must be at least 3 characters.'
  },
]

if(localStorage.getItem('username')){
  userName.value = localStorage.getItem('username');
}



</script>

<style lang="scss" scoped></style>
