import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { Quasar, Notify, Dialog, Dark } from 'quasar';
import quasarLang from 'quasar/lang/ru';
import quasarIconSet from 'quasar/icon-set/material-symbols-outlined';

import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css';
import 'quasar/src/css/index.sass';

import '@/assets/style/global.scss';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(Quasar, {
  plugins: { Notify, Dialog, Dark },
  config: {
    dark: 'auto',
  },
  lang: quasarLang,
  iconSet: quasarIconSet,
});

app.mount('#app');
