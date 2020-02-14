<template>
  <div id="app">
    
    <Home />

    <About />

    <Projects />

    <Contact />

    <Footer />

  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import Home from './components/sections/Home';
  import About from './components/sections/About';
  import Projects from './components/sections/Projects';
  import Contact from './components/sections/Contact';
  import Footer from './components/sections/Footer';

  export default {
    name: 'meetdaniel',
    components: {
      Home,
      About,
      Projects,
      Contact,
      Footer
    },
    computed: {
      ...mapState({
        visible: 'modalVisible'
      })
    },
    watch: {
      visible(newVal, oldVal) {
        if (newVal != oldVal) {
          document.body.classList.toggle('modal-open');
        }
      }
    }
  }
</script>

<style lang="scss">
  // we need this comment that our scss files are injected and not get kicked out
</style>