<template>
  <div class="observer observer--section" ref="observe">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'md-section-observer',
    mounted() {
      if (process.browser) {
        let section = this.$refs.observe;
        
        let observer = new IntersectionObserver(this.observerCallback, {
          threshold: [
            0.25, 0.5, 0.75, 1
          ]
        });

        observer.POLL_INTERVAL = 100;
        observer.observe(section);
      }
    },
    methods: {
      observerCallback(entries) {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.25) {
            let sectionId = this.$parent.$options._parentVnode.elm.id;
            this.$store.state.inSection = sectionId;
          }
        });
      }
    }
  }
</script>