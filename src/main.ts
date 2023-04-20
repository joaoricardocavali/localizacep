import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
// import Maska from 'maska'

import './assets/main.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const app = createApp(App)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

// app.use(Maska)
app.use(router)

app.mount('#app')
