<template>
  <header class="my-4 container">
    <nav class=" flex flex-row-reverse items-center">
      <a
        class="
          text-white
          bg-green-500
          border-0
          py-2
          px-8
          focus:outline-none
          hover:bg-green-600
          rounded
          text-lg
        "
        href="mailto:hello@sylvn.co?subject=I have a suggestion"
        >Give feedback</a
      >
      <router-link class="focus:outline-none mx-4 text-green-500 text-lg hover:underline"  to="/news">What's new ?</router-link>
      <router-link class="focus:outline-none mx-4 text-green-500 text-lg hover:underline" to="/">Home</router-link>
    </nav>
  </header>
</template>


<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "headerComponent",
});
</script>