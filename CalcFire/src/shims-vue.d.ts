import Vue from 'vue'

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


// declare module 'vue/types/vue' {
//   interface Vue {
//     $route: Route
//   }
// }