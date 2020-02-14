import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const state = {
  modalVisible: false
}

export const modal = new Vuex.Store({
  state
});