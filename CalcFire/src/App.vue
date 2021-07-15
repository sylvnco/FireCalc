<template>
  <div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
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
            <b class="text-green-500">how much do you need to live</b> you plan
            to have and all the <b class="text-green-500">contribution</b> you
            make <b class="text-green-500">each month</b> to your investment
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/2 sm:w-1/1 w-full">
            <div class="relative border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                @click="edit()"
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
                  v-model="targetRent"
                  type="number"
                />
              </h2>
              <p class="leading-relaxed">How much do I need to live</p>
            </div>
          </div>
          <div class="p-4 md:w-1/2 sm:w-1/1 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
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
                Total savings needed following the 4% rules
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

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
            @click="editInflation = !editInflation"
            class="font-bold text-green-400 inline align-middle"
            >{{ getInflationRateLabel }}
          </span>

          <input
            v-if="editInflation"
            type="number"
            v-model="inflation"
            @blur="editInflation = !editInflation"
          />
          <svg
            @click="editInflation = !editInflation"
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

      <input
        type="button"
        value="Calculer"
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
      />
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
                class="border-collapse border border-green-800 table-cell py-2"
              >
                Year
              </div>
              <div
                class="border-collapse border border-green-800 table-cell py-2"
              >
                Savings
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
                class="border-collapse border border-green-800 table-cell py-2"
              >
                {{ item.index }}
              </div>
              <div
                class="border-collapse border border-green-800 table-cell py-2"
              >
                <currency-amount-component :amount="item.value" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IncomeSourceListComponent from "./components/IncomeSourceListComponent.vue";
import currencyAmountComponent from "./components/common/currencyAmountComponent.vue";
import {IApp} from "../src/interfaces/IApp"

import { useStore } from "vuex";
import { IStore, key } from './../store/store'
import { IIncomeSource } from "./interfaces/IIncomeSource";

let store: IStore;

export default defineComponent({
  name: "App",
  setup() {
    store = useStore(key);
  },
  data() {
    return {
      targetYear: 0,
      targetRent: 0,
      plan: [],
      ans: 0,
      isEditMode: false,
      inflation: 2,
      isInflationAdjusted: true,
      editInflation: false,
    } as IApp;
  },
  mounted() {
   if (localStorage.getItem('sources')) {
      try {
        const local: any = localStorage.getItem('sources');
        const sources: JSON = JSON.parse(local);
        //@ts-ignore
        store.dispatch('set', sources);
      } catch(e) {
        localStorage.removeItem('sources');
      }
    }
    const targetRent: number = Number(localStorage.getItem('targetRent'));
    if (targetRent) {
      try {
        this.targetRent = targetRent;
      } catch(e: any) {
        localStorage.removeItem('targetRent');
      }
    }
  },
  methods: {
    edit(): void{
      this.isEditMode = !this.isEditMode;
      if(!this.isEditMode){
        localStorage.setItem('targetRent', this.targetRent.toString());
      }
    },
    calculate(index: number, savings: number, roi: number, initial: number = 0) : number {
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
      const resContribution = (PMT * a) / interestRate;
      return resInitial + resContribution;
    },
    //@ts-ignore
    calculateUntilYears(): void {
      let sum: number = 0;
      this.plan = [];

      for (let i: number = 0; i <= 99; i++) {
        const values = store.state.sources.map((source: IIncomeSource) => {
          const tempSum = Math.round(
            this.calculate(i, source.savings, source.roi, source.initial)
          );
          return tempSum;
        });
        sum = values.reduce((acc: number, val: number) => {
          return acc + val;
        });

        this.plan.push({
          index: i,
          value: sum,
        });

        if (sum >= this.getTargetPatrimony) {
          this.targetYear = i;
          break;
        }
      }
    },
    
  },
  computed: {
    getTargetPatrimony(): number {
      return this.targetRent * 12 * 25;
    },
    getInflationRateLabel(): string {
      return `${this.inflation} %`;
    },
    // getCompoundInterestRateFormula(): number {
    //   // a = P(1 + r/n)^nt + (PMT(1+r/n)^nt - 1) / (r/n)
    //   // https://www.bizskinny.com/Finance/Compound-Interest/compound-interest-with-monthly-contributions.php
    //   const PMT = this.monthlySaving * 12;
    //   const a = Math.pow(1 + this.interestRate, 10) - 1;
    //   return (PMT * a) / this.interestRate;
    // },
  },
  components: { IncomeSourceListComponent, currencyAmountComponent },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
