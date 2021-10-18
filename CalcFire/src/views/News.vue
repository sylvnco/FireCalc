<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-8 md:py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          What's new ?
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          This tool will be <b class="text-green-500">update regularly</b>, here
          you will see what I am currently working on and what are the recent
          changes. Don't forget you can
          <b class="text-green-500">register to the mailing list</b> (at the
          bottom of the page) if you want to be updated directly by mail.
        </p>

        <h2
          class="text-left text-3xl font-medium title-font my-12 text-gray-900"
        >
          What's in the pipe :
        </h2>

        <div class="text-left">
          <ul>
            <li>
              - <b class="text-green-500">[Improvement]</b> User account system
              to be able to save your plan
            </li>
            <li>
              - <b class="text-green-500">[Improvement]</b> A graph for a better
              visualization of your data
              <b class="text-green-500">In progress</b>
            </li>
            <li>
              - <b class="text-green-500">[Bugfixes]</b> Apply inflation to the
              total savings
            </li>
            <li>
              - <b class="text-green-500">[Improvement]</b> Handle multi
              currency
            </li>
            <li>
              - <b class="text-green-500">[Improvement]</b> Handle ceiling for
              account
            </li>
            <li>- <b class="text-green-500"></b> ...and many more</li>
          </ul>
        </div>

        <h2
          class="text-left text-3xl font-medium title-font my-12 text-gray-900"
        >
          Recent changes
        </h2>

        <div class="text-left">
          <b class="text-green-500">10/18/22</b>
          <ul>
            <li>
              - The graph is now drawing two lines. One with the total amount (base capital + savings + interest) and another one with only the base capital + savings.
            </li>
            <li>
                 - The table displays these datas too.
            </li>
          </ul>
        </div>
        <hr class="mx-8 my-8" />
        <div class="text-left">
          <b class="text-green-500">10/12/22</b>
          <ul>
            <li>
              -You can now see the evolution of your savings on a simple graph
            </li>
          </ul>
        </div>
        <hr class="mx-8 my-8" />
        <div class="text-left">
          <b class="text-green-500">10/06/22</b>
          <ul>
            <li>-"Give Feedback" button to be able to provide ...Feedback</li>
            <li>
              -Add the "what's news" page to be able to communicate on what's i
              am working on
            </li>
          </ul>
        </div>

        <emailComponent />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import emailComponent from "./../components/EmailComponent.vue";

export default defineComponent({
  name: "news",
  components: {
    emailComponent,
  },
});
</script>