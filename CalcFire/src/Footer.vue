<template>
<footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />

      </svg>
      <span class="ml-3 text-xl">Fire Calculator</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 Fire Calculator —
      Made for <a target="_blank" href="https://www.millenial-independant.com">Le millenial indépendant</a> by
      <a href="https://twitter.com/sylvnco" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@sylvnco</a>
    </p>
  </div>
</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "footer",
  computed: {
  },
});
</script>