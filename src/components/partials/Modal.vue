<template>
  <div class="modal">
    
    <div class="modal__content content">
      
      <div class="content__images-container">
        <img class="content__image" :src="images[0]" :alt="title" />
      </div>

      <div class="content__text-container">
        <h3 class="content__headline headline headline--3" v-text="title"></h3>
        
        <div class="content__intro" v-text="intro"></div>
       
        <div class="content__description" v-html="description"></div>
        
        <a class="content__link link" :href="href" target="_blank" v-if="href">
          <svgicon class="icon icon--link" name="link"></svgicon>
          zur Seite
        </a>
        
        <div class="content__close" @click="closeModal()">
          <svgicon class="icon icon--close" name="close" title="Schließen" ></svgicon>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
  import '../icons/close';
  import '../icons/link';

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

      const clickHandler = (e) => {
        if(e.target.getAttribute('class') === 'modal') {
          this.$emit('closed');
        }
      };

      document.addEventListener('keydown', escapeHandler);
      document.addEventListener('click', clickHandler);
      
      this.$once('hook:destroyed', () => {
        document.removeEventListener('keydown', escapeHandler);
        document.removeEventListener('click', clickHandler);
      });
    },
    methods: {
      closeModal() {
        this.$emit('closed');
      }
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
    width: 100%;
    max-width: 375px;
    height: 650px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $color-white;
    
    @media(min-width: $breakpoint-tablet) {
      max-width: 100%;
      width: 650px;
      height: 650px;
    }
  }
  
  .content__images-container {
    height: 50%;
    border-bottom: 5px solid $color-black;
    background-color: $color-clean;
    position: relative;
    @media(min-width: $breakpoint-tablet) {
      height: 55%;
    }
  }

  .content__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }

  .content__text-container {
    position: relative;
    height: 50%;
    padding: 20px 25px;
    @media(min-width: $breakpoint-tablet) {
      height: 45%;
    }
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
    position: absolute;
    width: 150px;
    bottom: 20px;
    left: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 30px 12px 25px;
    color: $color-white;
    background-color: $color-new-grass;
    transition: background-color .25s ease-in-out,
                color .25s ease-in-out;
    
    @media(min-width: $breakpoint-tablet) {
      padding: 12px 30px 12px 25px;
    }

    &:hover {
      background-color: transparent;
      color: $color-new-grass;
    }
  }

  .content__close {
    position: absolute;
    bottom: 20px;
    right: 25px;
    cursor: pointer;
  }

  .icon--close {
    transform: rotate(0);
    transition: transform .25s ease-in-out,
                fill .25s ease-in-out;

    &:hover {
      transform: rotate(90deg);
      fill: $color-new-grass;
    }
  }

  .icon--link {
    transition: fill .25s ease-in-out;
  }

  .content__link:hover .icon--link {
    fill: $color-new-grass;
  }
</style>