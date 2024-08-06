<template>
  <main
    class="flex flex-col justify-center lg:justify-start items-center lg:items-start lg:flex-row p-4 mt-[4rem]"
  >
    <ProfileComponent />
    <loadingComponent v-if="loading" class="flex m-auto" />
    <section
      v-else
      class="m-4 flex gap-4 flex-col justify-between items-center p-4 bg-[#1a1a1a] rounded w-full"
    >
      <div class="w-full flex flex-row h-full flex-wrap">
        <h1 class="text-[1.5rem] mb-2 ml-[0.5rem] roboto-bold">Following</h1>
        <FollowingComponent />
      </div>
      <section
        class="flex flex-col lg:flex-row gap-4 lg:gap-[5rem] justify-center w-full"
      >
        <div class="">
          <h1 class="text-[1.5rem] roboto-bold mb-2 l-[0.5rem]">Top Shows</h1>
          <TopShowsComponent />
        </div>
        <div class="w-full">
          <h1 class="text-[1.5rem] roboto-bold mb-2 ml-[0.5rem]">Playlists</h1>
          <PlaylistsComponent />
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const loading = computed(() => store.getters.isLoading);
store.dispatch("userProfile");
</script>

<style lang="scss" scoped></style>
