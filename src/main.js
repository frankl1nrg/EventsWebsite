import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import AmplifyVue from '@aws-amplify/ui-vue';
import { ThemeProvider } from '@aws-amplify/ui-react';

Amplify.configure(awsExports);

const app = createApp(App)

app.use(router)
app.use(AmplifyVue);
app.mount('#app')

import '@aws-amplify/ui-vue/styles.css';