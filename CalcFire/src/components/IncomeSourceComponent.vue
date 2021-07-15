<template>
  <div class="xl:w-1/3 md:w-1/2 w-full p-4">
    <div class="relative border border-gray-200 p-6 rounded-lg">
      <svg
        @click="edit()"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 absolute top-2 right-2 cursor-pointer"
        v-bind:class="[isEditMode ? 'text-green-400' : 'text-gray-300']"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
      <div
        class="
          w-10
          h-10
          inline-flex
          items-center
          justify-center
          rounded-full
          bg-green-100
          text-green-500
          mb-4
        "
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <h2 v-if="!isEditMode" class="text-lg text-gray-900 font-medium title-font mb-2">
        #{{ index }} - {{ source.name }}
      </h2>
      <h2 v-else class="text-lg text-gray-900 font-medium title-font mb-2">
        #{{ index }} - <input v-model="source.name" class="bg-green-100"/>
      </h2>
      <p class="leading-relaxed text-base" v-if="!isEditMode">
        With
        <span v-if="source.initial > 0"
          ><currency-amount-component class="text-green-500 font-bold" :amount="source.initial" /> Then</span
        ><currency-amount-component
         class="text-green-500 font-bold"
          :amount="source.savings"
          :recurring="true"
        />
        at <span class="text-green-500 font-bold">{{source.roi}}</span> %
      </p>
      <p class="leading-relaxed text-base" v-else>
        With <input class="bg-green-100" type="number" v-model="source.initial" />
        Then <input class="bg-green-100" type="number" v-model="source.savings" /> € / month
         at <input class="bg-green-100" v-model="source.roi"/> %
      </p>
      <svg
        v-if="isEditMode"
        @click="remove()"
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer h-6 w-6 absolute bottom-2 right-2 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import currencyAmountComponent from "./common/currencyAmountComponent.vue";
import { IStore, key } from './../../store/store'


import { useStore } from "vuex";
let store: IStore;
export default defineComponent({
  name: "IncomeSource",
  props: {
    source: { type: Object },
    index: { type: Number },
  },
  setup() {
    store = useStore(key);
  },
  data() {
    return {
      isEditMode: false,
      source: {ype: Object},
      index: {type: Number}
    };
  },
  methods: {
    remove() {
        //@ts-ignore
      store.dispatch("remove", this.index);
    },
    edit() {
      this.isEditMode = !this.isEditMode;
      const parsed = JSON.stringify(store.state.sources);
      localStorage.setItem('sources', parsed);
    },
  },
  computed: {},
  components: { currencyAmountComponent },
});
</script>