import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const theme = {
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

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: theme
})
