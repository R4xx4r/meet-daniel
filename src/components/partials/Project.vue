<template>

  <div class="project">
    <div class="project__overlay project__overlay--top overlay">
      <div class="overlay__title">{{ project.title }}</div>
      <div class="overlay__subtitle">{{ project.subtitle }}</div>
    </div>

    <div class="project__image-wrapper">
      <img class="project__image" :src="getImageSrc(project.image)" :alt="project.title" />
    </div>

    <div class="project__overlay project__overlay--bottom overlay">
      <div class="overlay__button">mehr erfahren</div>
    </div>
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
    position: relative;
  }

  .project__image-wrapper {
    width: 100%;
    height: 100%;
  }

  .project__image {
    height: 100%;
    width: auto;
    object-fit: cover;
  }

  .project__overlay {
    display: none;
  }

</style>