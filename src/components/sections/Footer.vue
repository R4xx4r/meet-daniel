<template>
  <footer class="footer">
    <div class="footer__content-wrapper content-wrapper">
      <div class="footer__content content">
        
        <div class="content__back-to-top" title="Zurück zum Start" @click="scrollToTop()">
          <svgicon class="icon icon--arrow-top" name="arrow-top"></svgicon>
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
  import '../icons/arrow-top';

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
    background-color: $color-new-grass;
    color: $color-white;
    width: 40px;
    height: 50px;
    cursor: pointer;
    transition: background-color .25s ease-in-out;

    &:hover {
      background-color: darken($color-new-grass, 5);
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
    color: $color-new-grass;
  }
</style>