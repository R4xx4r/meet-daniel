<template>
  <section class="block block--about about" id="about">
    <div class="content-wrapper">
      <h2 class="about__headline headline headline--2">Über mich</h2>

      <div class="about__advantages advantages">
        
        <div class="advantages__advantage advantage" v-for="(advantage, index) in advantages" :key="index">
          <div class="advantage__image-wrapper">
            <svgicon class="icon" :class="`icon--${mixinGetIconName(advantage.icon)}`" :name="mixinGetIconName(advantage.icon)"></svgicon>
          </div>

          <h3 class="advantage__headline headline headline--3" v-text="advantage.title"></h3>
          <div class="advantage__description" v-text="advantage.description"></div>
        </div>

      </div>

      <div class="about__personal personal">

        <div class="personal__aboutme aboutme">
          <div class="aboutme__image-wrapper">
            <img class="aboutme__image" :src="mixinGetImageSrc('portrait.jpg')" alt="Portrait Daniel Murth" />
          </div>

          <h3 class="aboutme__headline headline headline--3">Wer ist dieser Typ eigentlich?</h3>
          <div class="aboutme__description description">
            Seit mehr als 10 Jahren bin ich Developer mit Herz und Seele aus Wien in Österreich.
            Vor allem im Web versuche ich als "Fullstack" intuitive User Erlebnisse zu zaubern.<br />
            <a class="description__link link" href="#contact" v-smooth-scroll>Lass uns gemeinsam etwas cooles erschaffen.</a>
          </div>
        </div>

        <div class="personal__skills skills">
          
          <div class="skills__skill skill" v-for="(skill, index) in skills" :key="index">
            <div class="skill__name" v-text="skill.title"></div>
            <div class="skill__percentage percentage">
              <span class="percentage__bar" :style="{'width': `${skill.percentage}%`}"></span>
              {{ skill.percentage }} %
              </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import '../icons/responsive';
  import '../icons/speed';
  import '../icons/rocket';
  import '../icons/bulb';

  export default {
    name: 'md-about',
    data() {
      return {
        advantages: [
          {
            icon: 'responsive',
            title: 'Responsive',
            description: 'Egal ob groß oder klein - Es läuft immer fein.'
          },
          {
            icon: 'speed',
            title: 'Schnell',
            description: 'Verzögerungsfreie Interaktionen haben sehr hohe Priorität.'
          },
          {
            icon: 'rocket',
            title: 'Lebendig',
            description: 'Webseiten müssen nicht langweilig sein, sie sollen lebendig wirken.'
          },
          {
            icon: 'bulb',
            title: 'Intuitiv',
            description: 'Leicht und intuitiv zu bedienen, nicht nur für Digital Natives.'
          }
        ],
        skills: [
          {
            title: 'CSS',
            percentage: '90'
          },
          {
            title: 'HTML',
            percentage: '90'
          },
          {
            title: 'JavaScript',
            percentage: '80'
          },
          {
            title: 'PHP',
            percentage: '80'
          },
          {
            title: 'Vue.js/Nuxt.js',
            percentage: '70'
          },
          {
            title: 'WordPress',
            percentage: '70'
          },
          {
            title: 'Typo3',
            percentage: '60'
          },
          {
            title: 'MySQL',
            percentage: '80'
          },
          {
            title: 'DevOps',
            percentage: '70'
          },
          {
            title: 'Design',
            percentage: '50'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about__advantages {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 50px 0 75px;
  }

  .advantages__advantage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 275px;
  }
  .advantage__image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: $color-coral;
  }

  .advantage__headline,
  .aboutme__headline {
    text-transform: none;
    margin: 25px 0 10px 0;
  }

  .about__personal {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .personal__aboutme,
  .personal__skills {
    width: 45%;
  }

  .personal__aboutme {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .aboutme__description {
    text-align: center;
  }

  .description__link {
    color: $color-coral;
  }

  .aboutme__image-wrapper {
    max-width: 250px;
    border-radius: 50%;
    overflow: hidden;
  }

  .aboutme__image {
    width: 100%;
  }

  .skills__skill {
    display: flex;
    margin-bottom: 15px;
    background-color: $color-clean;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  .skill__name {
    text-align: center;
    font-weight: $font-weight-bold;
    background-color: $color-coral;
    color: $color-white;
    padding: 5px;
    width: 150px;
  }
  
  .skill__percentage {
    position: relative;
    text-align: right;
    font-size: 12px;
    padding: 5px;
    width: 100%;
  }

  .percentage__bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: darken($color-coral, 18%);
  }
</style>