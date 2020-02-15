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
      <div class="overlay__button" @click="showModal()">mehr erfahren</div>
    </div>

    <Modal
      :title="project.title" 
      :intro="project.modal.intro"
      :description="project.modal.description"
      :href="project.modal.href"
      :images="getModalImagesSrc(project)" 
      @closed="closeModal()"
      v-if="visible" />
     
  </div>

</template>

<script>
  import Modal from '../partials/Modal';

  export default {
    name: 'project',
    components: {
      Modal
    },
    data() {
      return {
        visible: false
      }
    },
    props: {
      project: {
        type: Object,
        required: true
      }
    },
    methods: {
      getImageSrc(image) {
        return require(`@/assets/images/projects/${image}`);
      },
      showModal() {
        this.$store.state.modalVisible = true;
        this.visible = true;
      },
      closeModal() {
        this.$store.state.modalVisible = false;
        this.visible = false;
      },
      getModalImagesSrc(project) {
        let imagesSrc = [];
        if (project.modal.images) {
          project.modal.images.forEach(image => {
            imagesSrc.push(this.getImageSrc(image))
          });
          imagesSrc.push(this.getImageSrc(project.image))
        } else {
          imagesSrc.push(this.getImageSrc(project.image))
        }

        return imagesSrc;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .project {
    position: relative;
    width: 400px;
    height: 350px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $color-clean;
      opacity: 0;
      transition: opacity .5s ease-in-out;
    }

    &:hover::before {
      opacity: 1;
    }
  }

  .project__image-wrapper {
    width: 100%;
    height: 100%;
  }

  .project__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top center;
  }

  .project__overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    opacity: 0;
    transition: all .3s ease-in-out;
  }

  .project__overlay--top {
    top: 0;
  }
  .project__overlay--bottom {
    bottom: 0;
  }
  
  .project:hover .project__overlay--top {
    top: 75px;
    opacity: 1;
  }
  .project:hover .project__overlay--bottom {
    bottom: 50px;
    opacity: 1;
  }

  .overlay__title {
    font-size: 20px;
    color: $color-black;
    font-weight: $font-weight-bold;
  }
  .overlay__subtitle {
    font-size: 18px;
    margin-top: 15px;
    color: $color-new-grass;
  }

  .overlay__button {
    cursor: pointer;
    padding: 15px 30px;
    color: $color-dark-gray;
    background-color: transparent;
    border: 2px solid $color-new-grass;
    transition: background-color .25s ease-in-out,
                color .25s ease-in-out;

    &:hover {
      color: $color-white;
      background-color: $color-new-grass;
    }
  }

</style>