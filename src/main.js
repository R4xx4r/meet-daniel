require('intersection-observer'); // https://www.npmjs.com/package/intersection-observer

import Vue from 'vue';
import App from './App.vue';

import { store } from './store/store';
import { mixins } from './mixins/mixins';

import vueSmoothScroll from 'vue2-smooth-scroll'; // https://www.npmjs.com/package/vue2-smooth-scroll
import SvgIcon from 'vue-svgicon'; // https://www.npmjs.com/package/vue-svgicon
import VueAwesomeSwiper from 'vue-awesome-swiper'; // https://github.com/surmon-china/vue-awesome-swiper
import Vuelidate from 'vuelidate'; // https://github.com/vuelidate/vuelidate

Vue.config.productionTip = false;

Vue.use(vueSmoothScroll);
Vue.use(VueAwesomeSwiper);
Vue.use(Vuelidate);
Vue.use(SvgIcon, {
  tagName: 'svgicon',
  classPrefix: 'svgicon-'
});

new Vue({
  store,
  mixins: [mixins],
  render: h => h(App),
}).$mount('#app');
