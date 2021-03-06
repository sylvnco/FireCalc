<template>
  <div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-8 md:py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1
            class="
              sm:text-3xl
              text-2xl
              font-medium
              title-font
              mb-4
              text-gray-900
            "
          >
            When will you be able to <b class="text-green-500">retire</b>...
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            ...depending on
            <b class="text-green-500">how much do you need to live</b> and all
            the <b class="text-green-500">contribution</b> you make
            <b class="text-green-500">each month</b> to your investment
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/2 sm:w-1/1 w-full">
            <div class="relative border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                @click="isEditMode = !isEditMode"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 absolute top-2 right-2"
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
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-green-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                <currency-amount-component
                  v-if="!isEditMode"
                  class="text-lg block p-4 font-semibold"
                  :amount="targetRent"
                  :recurring="true"
                />
                <input
                  v-else
                  class="w-full bg-green-100"
                  :value="targetRent"
                  @blur="edit"
                  type="number"
                />
              </h2>
              <p class="leading-relaxed">How much do I need to live</p>
            </div>
          </div>
          <div class="p-4 md:w-1/2 sm:w-1/1 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg relative">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-green-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"
                ></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                <currency-amount-component
                  class="text-lg block p-4 font-semibold"
                  :amount="getTargetPatrimony"
                />
              </h2>
              <p class="leading-relaxed">
                Total savings needed following a
                <span v-if="!isEditSwrMode">{{ swr }}</span>
                <input
                  class="bg-green-100 w-4"
                  v-else
                  :value="swr"
                  @blur="editSwr"
                />
                % safe withdrawal rate
                <svg
                  @click="isEditSwrMode = !isEditSwrMode"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 absolute top-2 right-2"
                  v-bind:class="[
                    isEditSwrMode ? 'text-green-400' : 'text-gray-300',
                  ]"
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <email-component />

    <div>
      <income-source-list-component />
    </div>

    <div>
      <div class="text-xl">
        <p class="relative">
          Adjust to inflation ?
          <input
            type="checkbox"
            class="checked:bg-green-600 checked:border-transparent"
            v-model="isInflationAdjusted"
          />
        </p>
        <p class="my-4" v-if="isInflationAdjusted">
          <span
            v-if="!editInflation"
            @click="editInf"
            class="font-bold text-green-400 inline align-middle"
            >{{ getInflationRateLabel }}
          </span>

          <input
            v-if="editInflation"
            type="number"
            :value="inflation"
            @blur="editInf"
          />
          <svg
            @click="editInf"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 relative inline"
            v-bind:class="[editInflation ? 'text-green-400' : 'text-gray-300']"
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
        </p>
      </div>

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
        @click="calculateUntilYears"
      >
        Calculate
      </button>

      <div v-if="plan.length > 0">
        <p class="m-8">
          You will reach your target of
          <currency-amount-component
            class="font-semibold"
            :amount="targetRent"
            :recurring="true"
          />
          with a total savings of
          <currency-amount-component
            class="font-semibold"
            :amount="getTargetPatrimony"
          />
          in {{ targetYear }} years.
        </p>

        <div
          class="
            flex
            lg:w-1/2
            my-4
            w-full
            sm:flex-row
            flex-col
            mx-auto
            place-content-center
          "
        >
          <button
            @click="displayMode = 0"
            :class="{
              'text-green-500 border-b-2 font-medium border-green-500':
                displayMode === 0,
            }"
            class="
              text-gray-600
              py-4
              px-6
              block
              hover:text-green-500
              focus:outline-none
            "
          >
            Graph
          </button>
          <button
            @click="displayMode = 1"
            :class="{
              'text-green-500 border-b-2 font-medium border-green-500':
                displayMode === 1,
            }"
            class="
              text-gray-600
              py-4
              px-6
              block
              hover:text-green-500
              focus:outline-none
            "
          >
            Table
          </button>
        </div>
        <div>
          <graph-component
            class="lg:w-1/2 justify-items-center mx-auto"
            v-show="displayMode === 0"
            :amount="getAmounts"
            :baseAmount="getBaseAmounts"
          />
          <div
            v-show="displayMode === 1"
            class="
              table
              w-8/12
              justify-items-center
              mx-auto
              text-green-800
              font-semibold
            "
          >
            <div class="table-row-group">
              <div class="table-row">
                <div
                  class="
                    border-collapse border border-green-800
                    table-cell
                    py-2
                  "
                >
                  Year
                </div>
                <div
                  class="
                    border-collapse border border-green-800
                    table-cell
                    py-2
                  "
                >
                  Base capital + Savings
                </div>
                <div
                  class="
                    border-collapse border border-green-800
                    table-cell
                    py-2
                  "
                >
                  Interest
                </div>
                <div
                  class="
                    border-collapse border border-green-800
                    table-cell
                    py-2
                  "
                >
                  Total
                </div>
              </div>
              <div
                class="table-row font-semibold text-white"
                v-bind:class="[
                  item.index % 2 == 0 ? 'bg-green-400' : 'bg-green-300',
                ]"
                v-for="item in plan"
                :key="item.index"
              >
                <div
                  class="
                    border-collapse border border-green-800
                    table-cell
                    py-2
                  "
                >
                  {{ item.index }}
                </div>
                <div
                  class="
                    border-collapse border border-green-800
                    table-cell
                    py-2
                  "
                >
                  <currency-amount-component :amount="item.baseCapital" />
                </div>

                <div
                  class="
                    border-collapse border border-green-800
                    table-cell
                    py-2
                  "
                >
                  <currency-amount-component :amount="item.value - item.baseCapital" />
                </div>
                <div
                  class="
                    border-collapse border border-green-800
                    table-cell
                    py-2
                  "
                >
                  <currency-amount-component :amount="item.value" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <share-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IncomeSourceListComponent from "./../components/IncomeSourceListComponent.vue";
import CurrencyAmountComponent from "./../components/common/currencyAmountComponent.vue";
import GraphComponent from "./../components/common/GraphComponent.vue";
import ShareComponent from "./../components/ShareComponent.vue";
import EmailComponent from "./../components/EmailComponent.vue";

import { IApp } from "./../interfaces/IApp";

import { useStore } from "vuex";
import { IStore, key } from "./../../store/store";
import { IIncomeSource } from "./../interfaces/IIncomeSource";
import { Buffer } from "buffer";

let store: IStore;

export default defineComponent({
  name: "Home",
  setup() {
    store = useStore(key);
  },
  data() {
    return {
      targetYear: 0,
      startAge: 30,
      plan: [],
      ans: 0,
      isEditMode: false,
      isInflationAdjusted: true,
      editInflation: false,
      isEditSwrMode: false,
      displayMode: 0,
    } as IApp;
  },
  mounted() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    const p = params.get("plan");
    if (p) {
      let base64ToString = Buffer.from(p, "base64").toString();
      base64ToString = JSON.parse(base64ToString);

      //@ts-ignore
      store.dispatch("set", base64ToString.sources);
      //@ts-ignore
      store.dispatch("setInflation", base64ToString.inflation);
      //@ts-ignore
      store.dispatch("setSwr", base64ToString.swr);
      //@ts-ignore
      store.dispatch("setTargetRent", base64ToString.targetRent);
    } else {
      if (localStorage.getItem("sources")) {
        try {
          const local: any = localStorage.getItem("sources");
          const sources: JSON = JSON.parse(local);
          //@ts-ignore
          store.dispatch("set", sources);
        } catch (e) {
          localStorage.removeItem("sources");
        }
      }
      const targetRent: number = Number(localStorage.getItem("targetRent"));
      if (targetRent) {
        try {
          //@ts-ignore
          store.dispatch("setTargetRent", targetRent);
        } catch (e: any) {
          localStorage.removeItem("targetRent");
        }
      }
      const swr: number = Number(localStorage.getItem("swr"));
      if (swr) {
        try {
          //@ts-ignore
          store.dispatch("setSwr", swr);
        } catch (e: any) {
          localStorage.removeItem("swr");
        }
      }
    }
  },
  methods: {
    edit(e: any): void {
      this.isEditMode = !this.isEditMode;
      if (!this.isEditMode) {
        //@ts-ignore
        store.dispatch("setTargetRent", e.target.value);
        localStorage.setItem("targetRent", e.target.value);
      }
    },
    editSwr(e: any): void {
      this.isEditSwrMode = !this.isEditSwrMode;
      if (!this.isEditSwrMode) {
        //@ts-ignore
        store.dispatch("setSwr", e.target.value);
        localStorage.setItem("swr", e.target.value);
      }
    },
    editInf(e: any): void {
      this.editInflation = !this.editInflation;
      if (!this.editInflation) {
        //@ts-ignore
        store.dispatch("setInflation", e.target.value);
        localStorage.setItem("inflation", e.target.value);
      }
    },
    calculate(
      index: number,
      savings: number,
      roi: number,
      initial: number = 0
    ): number {
      let interestRate = 0;
      if (this.isInflationAdjusted) {
        interestRate = (1 + roi / 100) / (1 + this.inflation / 100) - 1;
      } else {
        interestRate = roi / 100;
      }

      const PMT = savings * 12;
      //principal
      const resInitial = initial * Math.pow(1 + interestRate, index);
      //monthly contribution
      const a = Math.pow(1 + interestRate, index) - 1;
      const minInterestRate = interestRate === 0 ? 0.01 : interestRate;
      const resContribution = (PMT * a) / minInterestRate;
      return resInitial + resContribution;
    },
    //@ts-ignore
    calculateUntilYears(): void {
      let sum: number = 0;
      this.plan = [];

      for (let i: number = 0; i <= 99; i++) {
        let initialAmount: number = 0;
        let savingsAmount: number = 0;

        const values = store.state.sources.map((source: IIncomeSource) => {
          const tempSum = Math.round(
            this.calculate(i, source.savings, source.roi, source.initial)
          );
          initialAmount += Number(source.initial);
          savingsAmount += Number(source.savings);
          return tempSum;
        });
        sum = values.reduce((acc: number, val: number) => {
          return acc + val;
        });

        this.plan.push({
          index: i,
          value: sum,
          baseCapital: initialAmount + savingsAmount * 12 * i,
        });

        if (sum >= this.getTargetPatrimony) {
          this.targetYear = i;
          break;
        }
      }
    },
  },
  computed: {
    targetRent() {
      return store.state.targetRent;
    },
    swr() {
      return store.state.swr;
    },
    inflation() {
      return store.state.inflation;
    },
    getTargetPatrimony(): number {
      const v = this.swr === 0 ? 1 : this.swr;
      const r = Math.round(100 / v);

      return this.targetRent * 12 * r;
    },
    getInflationRateLabel(): string {
      return `${this.inflation} %`;
    },
    getAmounts(): number[] {
      return this.plan.map((x) => x.value);
    },
    getBaseAmounts(): number[] {
      return this.plan.map((x) => x.baseCapital);
    },
  },
  components: {
    IncomeSourceListComponent,
    CurrencyAmountComponent,
    ShareComponent,
    EmailComponent,
    GraphComponent,
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
