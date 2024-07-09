<template>
  <v-app-bar class="p-2" dark style="left: 210px; width: calc(100% - 210px);">
    <v-container class="flex gap-2">
      <v-btn
        icon
        class="bg-[rgba(0,0,0,.7)] w-4 h-4"
        width="40px"
        height="40px"
      >
         <v-icon>mdi mdi-chevron-left</v-icon>
      </v-btn>

      <v-btn
        icon
        class="bg-[rgba(0,0,0,.7)] w-4 h-4"
        width="40px"
        height="40px"
      >
        <v-icon>mdi mdi-chevron-right</v-icon>
      </v-btn>
    </v-container>
    <v-spacer></v-spacer>

    <v-btn>
      <v-icon>
        <img src="https://i.scdn.co/image/ab67757000003b8264820a9ab02f3bfae1176c78" />
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import store from '../store'
</script>

<style scoped>
img{
  width:2rem;
  height: 2rem;
  border-radius: 50%
}
</style>
