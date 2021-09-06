<template>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Let's stay in touch !</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Join our list and get notified when we update this tool.</p>
    </div>
    <div class="flex lg:w-1/2 w-full sm:flex-row flex-col mx-auto px-8 mb-4 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div class="relative flex-grow w-full">
        <input type="email" v-model="email" placeholder="elon.musk@tesla.com" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <button @click="saveEmail" class="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Register</button>
    </div>
     <transition name="fade">
    <span class="text-green-500 mt-2" v-if="show">You are in !</span>
    </transition>
  </div>
</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "email",
  setup() {
  },
   data() {
    return {
      email: '',
      show: false
    };
  },
  methods: {
    saveEmail(): void {
        const that = this;
    const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({ email: this.email })
  };
  fetch("http://localhost:3080/api/mail", requestOptions)
    .then((response) => {
        if(response){
            that.show = true;
            setTimeout(() => {
                that.show = false;
            }, 2000);
        }
    })
    },
  },
});
</script>