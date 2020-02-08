<template>
  <div id="app">
    
    <Home :menuItems="menuItems" />

    <About />

    <Projects />

    <Contact />

    <Footer />

  </div>
</template>

<script>
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
    data() {
      return {
        menuItems: [
          {
           title: 'Home',
           href: '#home'
          },
          {
           title: 'Über mich',
           href: '#about'
          },
          {
           title: 'Projekte',
           href: '#projects'
          },
          {
           title: 'Kontakt',
           href: '#contact' 
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  // we need this comment that our scss files are injected and not get kicked out
</style>