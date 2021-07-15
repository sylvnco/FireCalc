<template>
  <p>
    <span>{{ amountFormated }}</span>
    <span class="text-xs">{{ recurring ? " / month" : "" }}</span>
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "currencyAmount",
  props: ['amount','recurring'],
  computed: {
    amountFormated(): string {
      var formatter = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      });

      return formatter.format(this.amount);
    },
  },
});
</script>