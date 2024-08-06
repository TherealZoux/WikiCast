<template>
  <header
    class="flex flex-col lg:flex-row items-center fixed w-full bg-[#121212] z-10 justify-between whitespace-nowrap border-b border-solid border-b-[#292929] px-10 py-3"
  >
    <div class="flex flex-col lg:flex-row items-center lg:w-[40%] w-full  gap-4 lg:gap-16">
      <div
        class="flex items-center justify-between w-full md:w-full gap-4  text-[#FFFFFF]"
      >
        <div class="flex items-center w-full gap-3">
          <div class="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="1.4rem"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <router-link
            to="/"
            class=" logo text-header-color text-3xl font-bold leading-tight tracking-[-0.015em]"
          >
            Spodcast
          </router-link>
        </div>
        <v-btn v-if="screen" @click="menu = !menu">
          <span class="mdi mdi-menu" v-if="menu === false"></span>
          <span class="mdi mdi-close" v-else></span>
        </v-btn>
      </div>
      <Transition name="fade">
        <div class="flex items-center gap-8 md:absolute lg:left-[20%] lg:gap-9" v-if="menu">
          <router-link
            to="/dashboard"
            class="text-header-color opacity-75  text-lg font-medium leading-normal"
            >Dashbord</router-link
          >
          <router-link
            to="/favorite"
            class="text-header-color line-through opacity-75 text-lg font-medium leading-normal"
            >My list</router-link
          >
          <router-link
            to="/"
            class="text-header-color text-lg font-medium opacity-75 leading-normal"
            >Discover podcasts</router-link
          >
        </div>
      </Transition>
    </div>

    <Transition name="fade">
      <div class="flex flex-1 justify-end gap-8 mt-4 md:!mt-0" v-if="menu">
        <label class="flex flex-col min-w-40 !h-10 max-w-64">
          <div class="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div
              class="text-[#C4C4C4] flex border-none bg-[#292929] items-center justify-center pl-4 rounded-l-xl border-r-0"
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                ></path>
              </svg>
            </div>
            <input
              v-model="query"
              placeholder="Search"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-[0.75rem] text-[#FFFFFF] focus:outline-0 focus:ring-0 border-none bg-[#292929] focus:border-none h-full placeholder:text-[#C4C4C4] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              @input="onInput"
            />
          </div>
        </label>
        <div
          class="bg-center bg-[#252525] flex items-center justify-center rounded-full size-10"

          v-if="profile.id"
        >
          <img  :src="profile.images[1].url" class="size-8 rounded-full"/>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const screen = ref(window.innerWidth < 1024 ? true : false);
const menu = ref(!screen.value);
const query = ref("");
const profile = computed(()=> store.getters.profile)
const onInput = () => {
  store.dispatch("setSearchQuery", query.value);
};


</script>
<style>
input:focus {
  outline: none;
}
a {
  position: relative;
}

/* Pseudo-element for the sliding border effect */
a::after {
  content: "";
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  height: 2px;
  background: #3498db;
  transform: scaleX(0);
  transform-origin: bottom left;
  transition: transform 0.3s ease-in-out;
}

.logo{
position: relative;
}
.logo::after {
  content: "";
  position: absolute;
  left: 100% ;
  top: 100%;
  width: 0;
  height: 0 !important;
  background: #121212;
  transform: scaleX(0);
  transform-origin: bottom left;
  transition: transform 0.3s ease-in-out;
}


/* Active link */
.active-link::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media (min-width: 1024px) {
  .lg\:mt-0 {
    margin-top: 0px !important;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
