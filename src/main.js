import Vue from 'vue'
import App from './App.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'; // https://www.npmjs.com/package/vue2-smooth-scroll

Vue.config.productionTip = false

Vue.use(vueSmoothScroll)

new Vue({
  render: h => h(App),
}).$mount('#app')
