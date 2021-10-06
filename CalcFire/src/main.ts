import { createApp, h } from 'vue'

import {store, key} from './../store/store'
import App from './App.vue'
import './index.css'
import router from './router'

const app = createApp(App)
app.use(store,key)
app.use(router)
app.mount('#app')
