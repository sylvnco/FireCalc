<template>
  <LineChart :chartData="testData" :options="options" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { Chart, registerables } from "chart.js";
import { LineChart } from "vue-chart-3";

Chart.register(...registerables);

export default defineComponent({
  name: "Chart",
  components: { LineChart },
  props: ['amount', "baseAmount"],
  setup(props) {

      const options = ref({
      responsive: true,
    });

    const testData = computed(() => ({
      labels: [...Array(props.amount.length).keys()].map(x => "Year " + x++),
      datasets: [
        {
          label: 'Capital + Savings + Interest',
          data: props.amount,
          borderColor: '#10B981',
        },
        {
            label: 'Capital + Savings',
            data: props.baseAmount,
           borderColor: '#3B82F6',
        },
      ],
    }));

    return { testData, options };
  },
});
</script>
