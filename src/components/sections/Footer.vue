<template>
  <footer class="footer">
    <div class="content-wrapper">

      
    
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'md-footer',
    data() {
      return {
        menu: {
          identifier: 'footer',
          items:[
            {
              title: 'LinkedIn',
              href: 'https://www.linkedin.com/in/daniel-murth-b6b86a188/'
            },
            {
              title: 'Github',
              href: 'https://github.com/R4xx4r/'
            },
            {
              title: 'Twitter',
              href: 'https://twitter.com/R4xx4r/'
            },
            {
              title: 'Instagram',
              href: 'https://www.instagram.com/r4xx4r/'
            }
          ]
        } 
      }
    },
    props: {
      menuItems: {
        type: Array,
        default: () => {[
          {
            title: '',
            href:''
          }
        ]}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    background-color: $color-evening;
    color: $color-clean;
  }
</style>