<template>
  <div class="modal">
    
    <div class="modal__content content">
      
      <div class="content__images-container">

      </div>

      <div class="content__text-container">
        <h3 class="content__headline headline headline--3" v-text="title"></h3>
        <div class="content__intro" v-text="intro"></div>
        <div class="content__description" v-html="description"></div>
        <a class="content__link link" :href="href" target="_blank" v-if="href">zur Seite</a>
      </div>

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
      href: String,
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
    background-color: rgba($color-black, .65);
  }
  
  .modal__content {
    position: relative;
    max-width: 650px;
    min-height: 650px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $color-white;
  }
  
  .content__images-container {
    height: 350px;
    background-color: green;
  }

  .content__text-container {
    padding: 20px 25px;
  }
  
  .content__headline {
    align-items: flex-start;
    text-transform: none;
    margin-bottom: 7px;
  }

  .content__intro {
    width: 100%;
    position: relative;
    margin-bottom: 35px;
    text-transform: uppercase;
    color: rgba($color-stormy, .4);

    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: rgba($color-stormy, .2);
    }
  }

  .content__description {
    color: $color-dark-gray;
    margin-bottom: 25px;
  }

  .content__link {
    position: relative;
    padding: 12px 45px 12px 30px;
    width: 150px;
    color: $color-white;
    background-color: $color-new-grass;
    transition: background-color .25s ease-in-out,
                color .25s ease-in-out;

    @media(min-width: $breakpoint-tablet) {
      padding: 12px 30px;
    }

    &:hover {
      background-color: transparent;
      color: $color-new-grass;
    }
  }
</style>