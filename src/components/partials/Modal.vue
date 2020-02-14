<template>
  <div class="modal">
    
    <div class="modal__content">
      {{ title }} <br>
      {{ intro }} <br>
      {{ description }}
    </div>

  </div>
</template>

<script>
  export default {
    name: 'modal',
    props: {
      title: {
        type: String,
        required: true
      },
      intro: String,
      description: String,
      images: {
        type: Array,
        required: true
      }
    },
    created() {
      const escapeHandler = (e) => {
        if (e.key === 'Escape') {
          this.$emit('closed');
        }
      };
      document.addEventListener('keydown', (e) => {
         if (e.key === 'Escape') {
          this.$emit('closed');
        }
      });
      document.addEventListener('keydown', escapeHandler);
      this.$once('hook:destroyed', () => {
        document.removeEventListener('keydown', escapeHandler);
      });
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba($color-black, .8);
  }
  
  .modal__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $color-white;
  }
</style>