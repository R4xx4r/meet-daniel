<template>
  <section class="block block--projects projects" id="projects">
    <div class="content-wrapper">
      <h2 class="projects__headline headline headline--2">Projects</h2>

        <div class="projects__filters filters">
          <div 
            class="filters__filter filter" 
            :class="{'filter--active': selectedIndex == index}" 
            v-for="(category, index) in categoriesWithProjects" 
            :key="index" 
            @click="setActiveIndex(index)"
            v-text="category.categoryName"
          ></div>
        </div>

        <div class="projects__projects-wrapper">
          <Project v-for="(project, index) in activeProjects" :key="index" />
        </div>
      
    </div>
  </section>
</template>

<script>
  import Project from '../partials/Project';

  export default {
    name: 'md-projects',
    components: {
      Project
    },
    data() {
      return {
        selectedIndex: 0,
        categoriesWithProjects: [
          {
            categoryName: 'Alle',
            projects: [
              // will be injected in mounted
            ]
          },
          {
            categoryName: 'Typo3',
            projects: [
              {
                title: '',
                subtitle: '',
                image: '',
                overlay: {
                  intro: '',
                  description: '',
                  href: ''
                }
              }
            ]
          },
          {
            categoryName: 'WordPress',
            projects: [
              {
                title: '',
                subtitle: '',
                image: '',
                overlay: {
                  intro: '',
                  description: '',
                  href: ''
                }
              }
            ]
          },
          {
            categoryName: 'Vue.js / Nuxt.js',
            projects: [
              {
                title: '',
                subtitle: '',
                image: '',
                overlay: {
                  intro: '',
                  description: '',
                  href: ''
                }
              }
            ]
          }
        ],
        activeProjects: []
      }
    },
    methods: {
      setActiveIndex(index) {
        this.selectedIndex = index;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .block--projects {
    background-color: $color-clean;
  }

  .projects__filters {
    margin-top: 35px;
    display: flex;
    justify-content: center;
  }

  .filters__filter {
    margin: 0 20px;
    padding: 15px;
    cursor: pointer;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .filter--active {
    background-color: $color-new-grass;
    color: $color-white;
  }
</style>