import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = {
  modalVisible: false
}

export const modal = new Vuex.Store({
  state
});