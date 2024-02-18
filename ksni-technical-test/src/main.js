import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//components
import TextField from './components/TextField.vue'
import TextAreaField from './components/TextAreaField.vue'
import DateField from './components/DateField.vue'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)

app
  .component('TextField', TextField)
  .component('TextAreaField', TextAreaField)
  .component('DateField', DateField)
  .mount('#app')
