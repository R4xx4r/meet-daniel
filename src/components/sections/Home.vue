<template>
  <section class="block block--home home" id="home">
    
    <SectionObserver>

      <div class="canvas" id="particles-js"></div>

      <div class="home__content-wrapper content-wrapper">
        <div class="home__content content">

          <div class="content__text">
            Hallo, Ich heiße <span class="highlight underline">Daniel Murth</span>
            und bin Web Developer.
          </div>
          <div class="content__button button">
            <a class="button__link link" href="#projects" v-smooth-scroll="{duration: 1200, offset: -60}">
              Zu meinen Projekten
              <svgicon class="icon icon--arrow" name="arrow"></svgicon>
            </a>
          </div>
        </div>

      </div>
    </SectionObserver>

    <Navigation class="home__navigation" :class="{'home__navigation--sticky': navSticky}" :menu="menu" />

  </section>
</template>

<script>
  import SectionObserver from '../observer/SectionObserver';
  import Navigation from '../partials/Navigation';
  
  import '../icons/arrow';
  
  import 'particles.js';

  export default {
    name: 'md-home',
    components: {
      SectionObserver,
      Navigation
    },
    data() {
      return {
        navPosition: 0,
        navSticky: false,
        menu: {
          identifier: 'main',
          items:[
            {
             title: 'Home',
             href: '#home'
            },
            {
             title: 'Über mich',
             href: '#about'
            },
            {
             title: 'Projekte',
             href: '#projects'
            },
            {
             title: 'Kontakt',
             href: '#contact' 
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
      initParticles() {
        window.particlesJS("particles-js", {
          "particles": {
            "number": {
              "value": 360,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "",
                "width": 170,
                "height": 50
              }
            },
            "opacity": {
              "value": 0.6313181133058181,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 0.8791208791208792,
                "opacity_min": 0,
                "sync": false
              }
            },
            "size": {
              "value": 4,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "top",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "repulse"
              },
              "onclick": {
                "enable": false,
                "mode": "repulse"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
              },
              "repulse": {
                "distance": 400,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
      },
      checkStickyNav(currentScrollPosition) {
        if(currentScrollPosition == this.navPosition || currentScrollPosition > this.navPosition) {
          this.navSticky = true;
        } else {
          this.navSticky = false;
        }
      },
      onScroll() {
        // Get the current scroll position
        let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        this.checkStickyNav(currentScrollPosition);
      }
    },
    created() {
      window.addEventListener('scroll', this.onScroll);
    },
    mounted() {
      this.initParticles();
      this.navPosition = document.querySelector('.home__navigation').offsetTop;
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    }
  }
</script>

<style lang="scss" scoped>
  .block--home {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh + #{$height-nav-main});
    color: $color-white;
    padding: 0;
  }

  .canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $color-black;
  }

  .home__content-wrapper {
    max-width: 700px;
    position: relative;
  }

  .content {
    text-align: center;
    transform: translateY(-$height-nav-main);
  }

  .content__text {
    font-weight: $font-weight-bold;
    font-size: 38px;
    line-height: 42px;
    padding: 0 10px;
    user-select: none;

    @media(min-width: $breakpoint-tablet) {
      font-size: 48px;
      line-height: 54px;
      padding: 0;
    }
  }

  .content__button {
    margin-top: 35px;
  }

  .button__link {
    position: relative;
    padding: 12px 30px;
    width: 290px;
    margin: 0 auto;
    border: 2px solid $color-white;
    background-color: transparent;
    font-size: 20px;
    text-align: left;
    transition: background-color .25s ease-in-out,
                border .25s ease-in-out;

    &:hover {
      background-color: $color-new-grass;
      border-color: $color-new-grass;
    }
  }

  .icon--arrow {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    transition: transform .35s ease-in-out;
  }
  .button__link:hover .icon--arrow {
    transform: translateY(-50%) rotate(90deg);
  }

  .home__navigation--sticky {
    position: fixed;
    top: 0;
    z-index: 20;
  }
</style>