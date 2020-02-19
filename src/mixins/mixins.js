import Vue from 'vue';

export const imageProcessingMixin = Vue.mixin({
  methods: {
    mixinGetImageSrc(image) {
      return require(`@/assets/images/${image}`);
    }
  }
});