<template>
  
  <nav class="nav" :class="getClassName()">
    <ul class="menu">
      <li class="menu__item item" :class="{'menu__item--active': selectedIndex == index}" v-for="(menuItem,index) in menu.items" :key="index">

        <template v-if="isAnchorLink(menuItem.href)"> <!-- internal link -->
          <a class="item__link link" @click="setActiveIndex(index)" :href="menuItem.href" v-smooth-scroll>{{ menuItem.title }}</a>
        </template>
        <template v-else> <!-- external link -->
          <a class="item__link link" :href="menuItem.href" target="_blank">
            <!-- check if social media area or normal link area -->
            <template v-if="isSocialMediaNav()">
              
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
  export default {
    name: 'navigation',
    data() {
      return {
        selectedIndex: 0,
        svg: ''
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