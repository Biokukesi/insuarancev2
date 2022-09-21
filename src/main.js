import {createApp} from 'vue';

import App from './App.vue'
import router from './router'
import './assets/formulate.css'
import { plugin, defaultConfig } from '@formkit/vue'

import '@formkit/themes/genesis';

// Vue navbar
import VueNavigationBar from 'vue-navigation-bar';
import 'vue-navigation-bar/dist/vue-navigation-bar.css';





createApp(App).use(plugin,
     defaultConfig,
      router,
      'vue-navigation-bar', 
      VueNavigationBar).mount('#app')

  
