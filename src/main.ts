import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { vuetify } from './plugins/vuetify'

// Components
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
