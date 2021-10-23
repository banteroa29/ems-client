import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
import PrimeVue from 'primevue/config';

import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/atlantis.css';

// import '@/assets/js/jquery.3.2.1.min.js'
// import '@/assets/js/popper.min.js'
// import '@/assets/js/bootstrap.min.js'
// import '@/assets/js/atlantis.js'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Badge from 'primevue/badge';
import Toolbar from 'primevue/toolbar'
import Dialog from 'primevue/dialog'
import Textarea from 'primevue/textarea'
import MultiSelect from 'primevue/multiselect'
import Avatar from 'primevue/avatar'
import Menu from 'primevue/menu';
import TabMenu from 'primevue/tabmenu';
import Panel from 'primevue/panel'
import Steps from 'primevue/steps'
import RadioButton from 'primevue/radiobutton'
import InputMask from 'primevue/inputmask'
import Chips from 'primevue/chips';
import InputNumber from 'primevue/inputnumber';
import CascadeSelect from 'primevue/cascadeselect';

import mitt from 'mitt';
const emitter = mitt();

const app = createApp(App)
app.config.globalProperties.emitter = emitter
app.use(store)
    .use(router)
    .use(PrimeVue)
    .use(PerfectScrollbar)
    .mount("#app");


app.component('DataTable',DataTable);
app.component('Column',Column);
app.component('Dropdown',Dropdown);
app.component('Button',Button);
app.component('InputText',InputText);
app.component('Badge',Badge);
app.component('Toolbar',Toolbar);
app.component('Dialog',Dialog);
app.component('Textarea',Textarea);
app.component('MultiSelect',MultiSelect);
app.component('Avatar',Avatar)
app.component('Menu',Menu)
app.component('TabMenu',TabMenu)
app.component('Panel',Panel)
app.component('Steps',Steps)
app.component('RadioButton',RadioButton)
app.component('InputMask',InputMask)
app.component('Chips',Chips)
app.component('CascadeSelect',CascadeSelect)
app.component('InputNumber',InputNumber)

