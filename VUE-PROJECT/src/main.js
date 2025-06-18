import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 함수 주소값(속성). 정확히 작성

import App from './App.vue'
import router from './router'
// 객체 주소값, 이름 달리 해도 됨

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
