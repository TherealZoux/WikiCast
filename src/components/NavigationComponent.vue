<template>
      <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :mini-variant-width="56"
      style="position:fixed; width:240px;">
        <v-list-item
          prepend-icon="mdi-spotify"
          class="mt-2 mb-2 roboto-black text-2xl"
        > WikiCast</v-list-item>
        <v-divider />
        <v-list color="transparent">
          <router-link to="/">
            <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>
          </router-link>
          <router-link to="/search">
            <v-list-item prepend-icon="mdi-magnify" title="Search"></v-list-item>
          </router-link>
          <router-link to="favorite">
            <v-list-item prepend-icon="mdi-heart" title="Favorite"></v-list-item>
          </router-link>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <router-link to="/login">
              <v-btn block class="bg-green"> Login </v-btn>
          </router-link>
          </div>
        </template>
      </v-navigation-drawer>
  <v-app-bar app v-if="!screenWidth">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>WikiCast</v-toolbar-title>
    </v-app-bar>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';

const screenWidth = ref(window.innerWidth >= 1280? true:false);

const drawer = ref(true);
const miniVariant = ref(false);


</script>

<style lang="css" scoped>
img{
  width:2rem;
  height: 2rem;
  border-radius: 50%
}
.v-list-item{
  padding:0.5rem;
  margin:0.5rem;
}

.v-icon{
  font-size:1.5rem;
}
.v-list-item--link:hover{
  background:#2d2d2dba;
}
.active-link{
  color: #000;
  background: #43e843d1;
}
.active-link .v-list-item{
  color: #000;
  background: #43e843d1;

}
</style>
