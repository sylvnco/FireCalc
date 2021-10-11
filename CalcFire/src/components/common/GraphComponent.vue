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
  props: ['amount'],
  setup(props) {

      const options = ref({
      responsive: true,
    });

    const testData = computed(() => ({
      labels: [...Array(props.amount.length).keys()].map(x => "Year " + x++),
      datasets: [
        {
            label: 'Savings',
            data: props.amount,
           borderColor: '#10B981',
            backgroundColor: '#10B981',
        },
      ],
    }));

    return { testData, options };
  },
});
</script>
