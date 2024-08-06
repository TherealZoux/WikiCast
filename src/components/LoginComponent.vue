<template>
  <v-app>
    <v-card class="card m-auto">
      <v-btn class="card" color="success" @click="authenticateWithSpotify"
        >Connect with spoyify</v-btn
      >
    </v-card>
  </v-app>
</template>

<script setup>
import { authenticateWithSpotify } from "@/services/AuthService";
</script>

<style lang="scss" scoped></style>
