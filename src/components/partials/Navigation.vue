<template>
  
  <nav class="nav" :class="getClassName()">

    <div class="nav__toggle toggle" :class="{'nav__toggle--open': menuOpen}" @click="toggleMenu()">
      <div class="toggle__text">Menü</div>
      <span class="toggle__bar"></span>
    </div>

    <ul class="menu" :class="{'menu--open': menuOpen}">
      <li class="menu__item item" :class="{'menu__item--active': selectedIndex == index}" v-for="(menuItem,index) in menu.items" :key="index">

        <template v-if="isAnchorLink(menuItem.href)"> <!-- internal link -->
          
          <a class="item__link link" @click="setActiveIndex(index)" :href="menuItem.href" v-smooth-scroll>{{ menuItem.title }}</a>

        </template>

        <template v-else> <!-- external link -->
          
          <a class="item__link link" :href="menuItem.href" target="_blank" :title="menuItem.title">
            <!-- check if social media area or normal link area -->
            <template v-if="isSocialMediaNav()">
              <svgicon class="icon" :class="`icon--${mixinGetIconName(menuItem.title)}`" :name="mixinGetIconName(menuItem.title)"></svgicon>
            </template>

            <template v-else>
              {{ menuItem.title }}
            </template>
          </a>

        </template>
        
      </li>
    </ul>
  </nav>

</template>

<script>
  import '../icons';

  export default {
    name: 'navigation',
    data() {
      return {
        selectedIndex: 0,
        menuOpen: false
      }
    },
    props: {
      menu: {
        type: Object,
        require: true
      }
    },
    methods: {
      getClassName() {
        if (this.menu.identifier) {
          return `nav--${this.menu.identifier}`;
        }
      },
      isAnchorLink(href){
        return href.startsWith('#');
      },
      isSocialMediaNav() {
        if (this.menu.identifier) {
          return this.menu.identifier.toLowerCase() == 'social';
        }
      },
      setActiveIndex(index) {
        this.selectedIndex = index;
        this.menuOpen = false;
      },
      toggleMenu() {
        if(this.menuOpen) {
          this.menuOpen = false;
        } else {
          this.menuOpen = true;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav--main {
    position: absolute;
    bottom: 0;
    height: $height-nav-main;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: $color-evening;
    border-bottom: 3px solid $color-coral;
  }

  .nav--main .nav__toggle {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 0 0 auto;
    padding: 15px;
    width: 120px;
    height: 100%;
    cursor: pointer;

    @media(min-width: $breakpoint-tablet) {
      display: none;
    }
  }
  .nav--social .nav__toggle {
    display: none;
  }
  
  .toggle__text {
    margin-right: 20px;
    font-size: 13px;
  }

  .toggle__bar {
    position: relative;
    display: block;
    height: 3px;
    width: 25px;
    background-color: $color-clean;
    transition: background-color .25s ease-in-out;

    &::before,
    &::after {
      content: '';
      position: absolute;
      right: 0;
      opacity: 1;
      height: 3px;
      width: 30px;
      background-color: $color-clean;
      transform: rotate(0);
      transform-origin: center;
      transition: transform .25s ease-in-out,
                  top .25s ease-in-out;
    }
    &::before {
      top: -10px;
    }
    &::after {
      top: 10px;
    }
  }

  .nav__toggle--open .toggle__bar {
    background-color: transparent;

    &::before,
    &::after {
      top:0;
    }
    &::before {
      transform: rotate(-45deg);
    }
    &::after {
      transform: rotate(45deg);
    }
  }

  .menu {
    visibility: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $color-dark-gray;
    border-bottom: 3px solid darken($color-coral, 15%);
    border-top: 3px solid darken($color-coral, 15%);
    transition: opacity .25s ease-in,
                visibility .25s ease-in;

    @media(min-width: $breakpoint-tablet) {
      position: static;
      visibility: visible;
      flex-direction: row;
      height: 100%;
      opacity: 1;
      background-color: inherit;
      border: none;
    }
  }

  .nav--social .menu {
    position: static;
    visibility: visible;
    flex-direction: row;
    height: 100%;
    opacity: 1;
    background-color: inherit;
    border: none;
  }

  .menu--open {
    opacity: 1;
    visibility: visible;
  }

  .nav--social .menu__item {
    margin: 0 25px;
    &:first-child {
      margin-top: 0; 
    }
    &:last-child {
      margin-bottom: 0; 
    }
  }

  .menu__item {
    margin: 20px 0;
    
    &:first-child {
      margin-top: 40px; 
    }
    &:last-child {
      margin-bottom: 40px; 
    }

    @media(min-width: $breakpoint-tablet) {
      margin: 0 20px;
  
      &:first-child {
        margin-top: 0;
        margin-left: 0; 
      }
      &:last-child {
        margin-bottom: 0;
        margin-right: 0; 
      }
    }
  }
  .menu__item--active {
    color: $color-new-grass;
  }

  .item__link {
    text-transform: uppercase;
    position: relative;
    color: $color-white;
    transition: color .25s ease-in-out;
  }

  .menu__item--active .item__link {
    color: $color-new-grass;
  }
  .menu__item:hover .item__link {
    color: $color-new-grass;
  }

  .nav--social .item__link {
    width: 55px;
    height: 55px;
    background-color: lighten($color-evening, 7);
    transform: scale(1);
    transition: background-color .25s ease-in-out,
                transform .25s ease-in-out;

    &:hover {
      background-color: $color-coral;
      transform: scale(.9);
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>