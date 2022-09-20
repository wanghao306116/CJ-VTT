import { createApp } from 'vue'

import { router } from "./router"

// import './assets/main.css'
//导入 elementPlass
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const AppNew = createApp(App);
AppNew.use(router);
AppNew.use(ElementPlus);

AppNew.mount("#app")


