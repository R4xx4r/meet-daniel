<template>

  <div class="project">
    <div class="project__overlay project__overlay--top overlay">
      <div class="overlay__title">{{ project.title }}</div>
      <div class="overlay__subtitle">{{ project.subtitle }}</div>
    </div>

    <div class="project__image-wrapper">
      <img class="project__image" :src="mixinGetImageSrc(project.image)" :alt="project.title" />
    </div>

    <div class="project__overlay project__overlay--bottom overlay">
      <div class="overlay__button" @click="showModal()">mehr erfahren</div>
    </div>

    <transition name="fade">
      <Modal
        :title="project.title" 
        :intro="project.modal.intro"
        :description="project.modal.description"
        :href="project.modal.href"
        :images="getModalImagesSrc(project)" 
        @closed="closeModal()"
        v-if="visible" />
    </transition>
     
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
            imagesSrc.push(this.mixinGetImageSrc(image))
          });
          imagesSrc.push(this.mixinGetImageSrc(project.image))
        } else {
          imagesSrc.push(this.mixinGetImageSrc(project.image))
        }

        return imagesSrc;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .project {
    position: relative;
    width: 185px;
    height: 185px;
    transform: scale(0);
    @media(min-width: $breakpoint-tablet) {
      width: 400px;
      height: 350px;
    }

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
      opacity: .95;
    }
  }
  .animate .project {
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        animation: scale-in 1s #{$i * .15}s ease-in-out forwards;
      }
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
    top: 15px;
    opacity: 1;
    @media(min-width: $breakpoint-tablet) {
      top: 75px;
    }
  }
  .project:hover .project__overlay--bottom {
    bottom: 15px;
    opacity: 1;
    @media(min-width: $breakpoint-tablet) {
      bottom: 50px;
    }
  }

  .overlay__title {
    font-size: 18px;
    color: $color-black;
    font-weight: $font-weight-bold;
    text-align: center;
    padding: 0 10px;
    @media(min-width: $breakpoint-tablet) {
      font-size: 20px;
      padding: 0;
    }
  }
  .overlay__subtitle {
    font-size: 16px;
    margin-top: 10px;
    padding: 0 10px;
    color: $color-new-grass;
    text-align: center;
    @media(min-width: $breakpoint-tablet) {
      font-size: 18px;
      margin-top: 15px;
      padding: 0;
    }
  }

  .overlay__button {
    cursor: pointer;
    padding: 10px 20px;
    color: $color-dark-gray;
    background-color: transparent;
    border: 2px solid $color-new-grass;
    transition: background-color .25s ease-in-out,
                color .25s ease-in-out;

    @media(min-width: $breakpoint-tablet) {
      padding: 15px 30px;
    }

    &:hover {
      color: $color-white;
      background-color: $color-new-grass;
    }
  }
</style>