<template>
  <section class="block block--projects projects" id="projects">
    <div class="content-wrapper">
      <h2 class="headline headline--2">Projects</h2>

        <div class="projects__projects-wrapper">
          <Project v-for="(project, index) in projects" :key="index" />
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
        project: [
          
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .block {
    background-color: $color-clean;
  }
</style>