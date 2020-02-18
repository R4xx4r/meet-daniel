import Vue from 'vue';
import App from './App.vue';

import { modal } from './store/modal';

import vueSmoothScroll from 'vue2-smooth-scroll'; // https://www.npmjs.com/package/vue2-smooth-scroll
import SvgIcon from 'vue-svgicon'; // https://www.npmjs.com/package/vue-svgicon
import VueAwesomeSwiper from 'vue-awesome-swiper'; // https://github.com/surmon-china/vue-awesome-swiper

Vue.config.productionTip = false;

Vue.use(vueSmoothScroll);
Vue.use(VueAwesomeSwiper)
Vue.use(SvgIcon, {
  tagName: 'svgicon',
  classPrefix: 'svgicon-'
});

new Vue({
  store: modal,
  render: h => h(App),
}).$mount('#app');
