<template>
  <section class="block block--home" id="home">
    
    <div class="canvas"></div>

    <div class="content-wrapper content">
      <div class="content__text">
        Hallo, Ich heiße <span class="highlight">Daniel Murth</span>
        und bin Web Developer.
      </div>
      <div class="content__button">
        Zu meinen Projekten
      </div>
    </div>

    <nav class="nav nav--main">
      <ul class="menu">
        <li class="menu__item">Home</li>
        <li class="menu__item">Über mich</li>
        <li class="menu__item">Projekte</li>
        <li class="menu__item">Kontakt</li>
      </ul>
    </nav>

  </section>
</template>

<script>
  export default {
    name: 'md-home'
  }
</script>

<style lang="scss" scoped>
  .block {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh + 60px);
    color: $color-white;
  }

  .canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $color-black;
  }

  .content-wrapper {
    position: relative;
    max-width: 600px;
  }

  .content {
    text-align: center;
  }

  .content__text {
    font-size: 44px;
    line-height: 50px;
  }

  .content__button {

  }

  .nav--main {
    position: absolute;
    bottom: 0;
    height: 60px;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: $color-evening;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>