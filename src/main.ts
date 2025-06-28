import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// Components
import App from './App.vue'
import router from './router'

import './assets/main.css'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#c7f563',
          secondary: '#6da1ed',
          info: '#b85ff6',
          surface: '#262931',
          background: '#173241'
        }
      }
    }
  }
})

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
