<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="flex flex-wrap w-full mb-20 flex-col items-center text-center"
      >
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
        >
          Add your different source of savings
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Add all your <b class="text-green-500">contribution</b> to the different investment you are <b class="text-green-500">planning</b> to have
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <income-source-component
          :source="source"
          :index="index"
          v-for="(source, index) in sources"
          :key="index"
        />
        <div class="xl:w-1/3 md:w-1/2 w-full p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <button
            @click="add"
            class="
              flex
              mx-auto
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
          >
            Add an investment
          </button>
        </div>
      </div>
      </div>
      
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import IncomeSourceComponent from "./IncomeSourceComponent.vue";
let store;
export default defineComponent({
  name: "IncomeSourceList",
  setup() {
    store = useStore();
  },
  data() {
    return {
      //   sources,
    };
  },
  methods: {
    add() {
      store.dispatch("add", {
        name: "Savings",
        savings: 100,
        roi: 10,
        initial: 1000,
      });
    },
  },
  computed: {
    sources() {
      return store.state.sources;
    },
  },
  components: {
    IncomeSourceComponent,
  },
});
</script>