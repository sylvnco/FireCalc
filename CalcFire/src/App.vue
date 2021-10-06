<template>
  <div>
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import footerComponent from "./footerComponent.vue";
import headerComponent from "./headerComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    footerComponent,
    headerComponent,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
