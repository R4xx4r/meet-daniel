<template>

  <div class="project">
    {{project.title}}
  </div>

</template>

<script>
  export default {
    name: 'project',
    props: {
      project: {
        type: Object,
        required: true
      }
    },
    methods: {
      getImageSrc(image) {
        return require(`@/assets/images/projects/${image}`);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .project {
    width: 350px;
    height: 300px;
  }

</style>