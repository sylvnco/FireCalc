<template>
<div>
<button
    class="
      flex
      mx-auto
      my-4
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
    @click="buildUrl"
  >Share plan</button>
  <transition name="fade">
    <span class="text-green-500" v-if="show">Copied to the clipboard !</span>
    </transition>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IStore, key } from "./../../store/store";
import { useStore } from "vuex";
import { Buffer } from "buffer";
let store: IStore;

export default defineComponent({
  name: "share",
  setup() {
    store = useStore(key);
  },
   data() {
    return {
      show: false,
    };
  },
  methods: {
    buildUrl(): void {
      const self = this;
      const s = store.state.sources;
      let objJsonStr = JSON.stringify(s);
      let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
      let base64ToString = Buffer.from(objJsonB64, "base64").toString();
      base64ToString = JSON.parse(base64ToString);
      navigator.clipboard.writeText(document.location.origin + "?plan=" + objJsonB64).then(
        function () {
          self.show = true;
          setTimeout(function() {
            self.show = false;
          }, 2000);
        },
        function () {
          self.show = false;
          /* clipboard write failed */
        }
      );
    },
  },
});
</script>