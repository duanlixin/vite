import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueAwesomeSwiper from'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'

const app = createApp(App)
app.use(router)
app.mount('#app')