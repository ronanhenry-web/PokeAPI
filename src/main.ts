import 'primevue/resources/themes/lara-light-teal/theme.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
// import { createI18n } from 'vue-i18n'
import messages from '@/locales/Locales'

const pinia = createPinia()
const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.use(pinia)

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages,
  silentTranslationWarn: true,
})

app.use(i18n)
app.mount('#app')
