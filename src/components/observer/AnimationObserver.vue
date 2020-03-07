<template>
  <div class="observer observer--animation" :class="{'animate': startAnimation}" ref="animate">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'md-animation-observer',
    props: {
      intersectionRatio: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        startAnimation: false
      }
    },
    mounted() {
      if (process.browser) {
        let animations = this.$refs.animate;
        
        let observer = new IntersectionObserver(this.observerCallback, {
          threshold: [
            0, 0.5, 0.75, 1
          ]
        });

        observer.POLL_INTERVAL = 100;
        observer.observe(animations);
      }
    },
    methods: {
      observerCallback(entries, observer) {
        entries.forEach(entry => {  
          if (entry.intersectionRatio >= parseFloat(this.intersectionRatio)) {
            this.startAnimation = true;
            observer.unobserve(entry.target);
          }
        });
      }
    }
  }
</script>