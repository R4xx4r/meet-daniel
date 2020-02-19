import Vue from 'vue';

export const mixins = Vue.mixin({
  methods: {
    mixinGetImageSrc(image) {
      return require(`@/assets/images/${image}`);
    },
    mixinGetIconName(name) {
      return name.toLowerCase();
    }
  }
});