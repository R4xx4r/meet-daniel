<template>
  
  <nav class="nav" :class="getClassName()">
    <ul class="menu">
      <li class="menu__item item" :class="{'menu__item--active': selectedIndex == index}" v-for="(menuItem,index) in menu.items" :key="index">
        <a class="item__link link" @click="setActiveIndex(index)" :href="menuItem.href" v-smooth-scroll>{{ menuItem.title }}</a>
      </li>
    </ul>
  </nav>

</template>

<script>
  export default {
    name: 'navigation',
    data() {
      return {
        selectedIndex: 0
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