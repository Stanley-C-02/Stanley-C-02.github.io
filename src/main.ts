import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

// Components
import App from './App.vue'
import router from './router'

import './assets/main.css'

const vuetify = createVuetify()

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
