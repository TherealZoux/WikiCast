<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const user = computed(() => store.getters.profile);

</script>

<template>
  <div class="max-w-xs" v-if="user.id">
    <div class="bg-[#121212] shadow-xl rounded-lg py-3">
      <div class="photo-wrapper p-2">
        <img
          class="w-32 h-32 rounded-full mx-auto"
          :src="user.images[1].url"
          alt="user image"
        />
      </div>
      <div class="p-2">
        <h3 class="text-center text-xl font-medium leading-8">
          {{ user.display_name }}
        </h3>
        <div class="text-center text-gray-400 text-xs font-semibold">
          <p>User</p>
        </div>
        <table class="text-xs my-3 mt-6">
          <tbody>
            <tr>
              <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
              <td class="px-2 py-2">{{ user.email }}</td>
            </tr>
            <tr>
              <td class="px-2 py-2 text-gray-500 font-semibold">country</td>
              <td class="px-2 py-2">{{ user.country }}</td>
            </tr>

            <tr>
              <td class="px-2 py-2 text-gray-500 font-semibold">Id</td>
              <td class="px-2 py-2">{{ user.id }}</td>
            </tr>
            <tr>
              <td class="px-2 py-2 text-gray-500 font-semibold">
                Subscription
              </td>
              <td class="px-2 py-2">{{ user.product }}</td>
            </tr>
          </tbody>
        </table>

        <div class="text-center my-3">
          <a
            class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
            :href="user.external_urls.spotify"
            >View Profile</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
