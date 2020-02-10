<template>
  <footer class="footer">
    <div class="footer__content-wrapper content-wrapper">
      <div class="footer__content content">
        
        <div class="content__back-to-top" title="Zurück zum Start" @click="scrollToTop()">
          <svg class="icon icon--arrow-to-top" xmlns="http://www.w3.org/2000/svg" width="220.682" height="220.682" viewBox="0 0 220.682 220.682"><path fill="currentColor" d="M99.702 210.043l28.284-28.285-71.417-71.417 71.417-71.417-28.284-28.285L0 110.341z"/><path fill="currentColor" d="M192.398 10.639l-99.703 99.702 99.703 99.702 28.284-28.285-71.418-71.417 71.418-71.417z"/></svg>
        </div>

        <Navigation class="footer__nav" :menu="menu" />

        <div class="content__copyright">
          <span class="highlight" v-html="getCopyright()"></span> Daniel Murth
        </div>
      
      </div>
    </div>
  </footer>
</template>

<script>
  import Navigation from '../partials/Navigation';

  export default {
    name: 'md-footer',
    components: {
      Navigation
    },
    data() {
      return {
        menu: {
          identifier: 'social',
          items:[
            {
              title: 'LinkedIn',
              href: 'https://www.linkedin.com/in/daniel-murth-b6b86a188/'
            },
            {
              title: 'Github',
              href: 'https://github.com/R4xx4r/'
            },
            {
              title: 'Twitter',
              href: 'https://twitter.com/R4xx4r/'
            },
            {
              title: 'Instagram',
              href: 'https://www.instagram.com/r4xx4r/'
            }
          ]
        } 
      }
    },
    props: {
      menuItems: {
        type: Array,
        default: () => {[
          {
            title: '',
            href:''
          }
        ]}
      }
    },
    methods: {
      scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
      },
      getCopyright() {
        return '&copy; ' + this.getYear();
      },
      getYear() {
        return new Date().getFullYear();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    padding: 75px 0 35px;
    background-color: $color-evening;
    color: $color-clean;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .content__back-to-top {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -200%);
    background-color: $color-coral;
    color: $color-white;
    width: 40px;
    height: 50px;
    cursor: pointer;
    transition: background-color .25s ease-in-out;

    &:hover {
      background-color: darken($color-coral, 3);
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    transition: transform .25s ease-in-out;
  }
  .content__back-to-top:hover .icon {
    transform: translate(-50%, -60%) rotate(90deg);
  }

  .content__copyright { 
    font-size: 14px;
    text-transform: uppercase;
    margin-top: 35px;
    opacity: .5;
  }

  .highlight {
    color: $color-coral;
  }
</style>