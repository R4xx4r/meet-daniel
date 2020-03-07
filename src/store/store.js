import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = {
  modalVisible: false,
  inSection: ''
}

export const store = new Vuex.Store({
  state
});