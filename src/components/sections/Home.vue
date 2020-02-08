<template>
  <section class="block block--home" id="home">
    
    <div class="canvas" id="particles-js"></div>

    <div class="content-wrapper content">
      <div class="content__text">
        Hallo, Ich heiße <span class="highlight underline">Daniel Murth</span>
        und bin Web Developer.
      </div>
      <div class="content__button button">
        <a class="button__link link" href="#projects" v-smooth-scroll="{duration: 1200}">
          Zu meinen Projekten

          <svg class="icon icon--arrow" xmlns="http://www.w3.org/2000/svg" width="44.952" height="44.952" viewBox="0 0 44.952 44.952"><path fill="currentColor" d="M44.952 22.108c0-1.25-.478-2.424-1.362-3.308L30.627 5.831a2.5 2.5 0 00-3.536 0 2.511 2.511 0 000 3.546l10.574 10.57H2.484C1.102 19.948 0 21.081 0 22.464v.028c0 1.382 1.102 2.523 2.484 2.523h35.182L27.094 35.579a2.504 2.504 0 003.538 3.54l12.958-12.97a4.633 4.633 0 001.362-3.309v-.732z"/></svg>
        </a>
      </div>
    </div>

    <nav class="nav nav--main">
      <ul class="menu">
        <li class="menu__item item" :class="{'menu__item--active': selectedIndex == index}" v-for="(menuItem,index) in menuItems" :key="index">
          <a class="item__link link" @click="setActiveIndex(index)" :href="menuItem.href" v-smooth-scroll>{{ menuItem.title }}</a>
        </li>
      </ul>
    </nav>

  </section>
</template>

<script>
  import 'particles.js';

  export default {
    name: 'md-home',
    data() {
      return {
        selectedIndex: 0
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
    mounted() {
      this.initParticles();
    },
    methods: {
      setActiveIndex(index) {
        this.selectedIndex = index;
      },
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
      }
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

  .content-wrapper {
    position: relative;
    max-width: 700px;
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
    padding: 12px 45px 12px 30px;
    width: 290px;
    margin: 0 auto;
    border: 2px solid $color-white;
    background-color: transparent;
    font-size: 20px;
    text-align: left;
    transition: background-color .25s ease-in-out,
                border .25s ease-in-out;

    @media(min-width: $breakpoint-tablet) {
      padding: 12px 30px;
    }

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

  .nav--main {
    position: absolute;
    bottom: 0;
    height: $height-nav-main;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: $color-evening;
    border-bottom: 2px solid $color-coral;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .menu__item {
    margin: 0 20px;
    color: inherit;
    transition: color .25s ease-in-out;

    &:hover {
      color: $color-new-grass;
    }
  }
  .menu__item--active {
    color: $color-new-grass;
  }

  .item__link {
    text-transform: uppercase;
  }

</style>