<template>
  
  <nav class="nav" :class="getClassName()">
    <ul class="menu">
      <li class="menu__item item" :class="{'menu__item--active': selectedIndex == index}" v-for="(menuItem,index) in menu.items" :key="index">

        <template v-if="isAnchorLink(menuItem.href)"> <!-- internal link -->
          
          <a class="item__link link" @click="setActiveIndex(index)" :href="menuItem.href" v-smooth-scroll>{{ menuItem.title }}</a>

        </template>

        <template v-else> <!-- external link -->
          
          <a class="item__link link" :href="menuItem.href" target="_blank" :title="menuItem.title">
            <!-- check if social media area or normal link area -->
            <template v-if="isSocialMediaNav()">
              <svgicon class="icon" :class="getIconClassName(menuItem)" :name="getIconName(menuItem)"></svgicon>
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
      isAnchorLink(href){
        return href.startsWith('#');
      },
      isSocialMediaNav() {
        if (this.menu.identifier) {
          return this.menu.identifier.toLowerCase() == 'social';
        }
      },
      getIconName(item) {
        return item.title.toLowerCase();
      },
      getIconClassName(item) {
        return 'icon--' + item.title.toLowerCase();
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
    border-bottom: 3px solid $color-coral;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .nav--social .menu__item {
    margin: 0 25px;
  }

  .menu__item {
    margin: 0 20px;

    &:first-child {
      margin-left: 0; 
    }
    &:last-child {
      margin-right: 0; 
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