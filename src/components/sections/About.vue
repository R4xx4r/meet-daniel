<template>
  <section class="block block--about about" id="about">
    <SectionObserver>

      <div class="content-wrapper">
      
        <AnimationObserver>
          <h2 class="about__headline headline headline--2">Über mich</h2>
        </AnimationObserver>

        <AnimationObserver>
          <div class="about__advantages advantages">
              
            <div class="advantages__advantage advantage" v-for="(advantage, index) in advantages" :key="index">
              <div class="advantage__image-wrapper">
                <svgicon class="icon" :class="`icon--${mixinGetIconName(advantage.icon)}`" :name="mixinGetIconName(advantage.icon)"></svgicon>
              </div>

              <h3 class="advantage__headline headline headline--3" v-text="advantage.title"></h3>
              <div class="advantage__description" v-text="advantage.description"></div>
            </div>

          </div>
        </AnimationObserver>

        <div class="about__personal personal">

          <AnimationObserver :intersectionRatio="0.5" :style="getObserverBlockWidth()">
            <div class="personal__aboutme aboutme">
              <div class="aboutme__image-wrapper">
                <img class="aboutme__image" :src="mixinGetImageSrc('portrait.png')" alt="Portrait Daniel Murth" />
              </div>

              <h3 class="aboutme__headline headline headline--3">Wer ist dieser Typ eigentlich?</h3>
              <div class="aboutme__description description">
                Seit mehr als 10 Jahren bin ich Developer mit Herz und Seele aus Wien in Österreich.
                Vor allem im Web versuche ich als "Fullstack" intuitive User Erlebnisse zu zaubern.<br />
                <a class="description__link link" href="#contact" v-smooth-scroll="{offset: -60}">Lass uns gemeinsam etwas cooles erschaffen.</a>
              </div>
            </div>
          </AnimationObserver>

          <AnimationObserver :intersectionRatio="0.5" :style="getObserverBlockWidth()">
            <div class="skills__skills">
      
              <div class="skills__skill skill" v-for="(skill, index) in skills" :key="index">
                <div class="skill__name" v-text="skill.title"></div>
                <div class="skill__percentage percentage">
                  <span class="percentage__bar" :style="{'width': `${skill.percentage}%`}"></span>
                  {{ skill.percentage }} %
                  </div>
              </div>

            </div>
          </AnimationObserver>
          

        </div>
      </div>

    </SectionObserver>
  </section>
</template>

<script>
  import SectionObserver from '../observer/SectionObserver';
  import AnimationObserver from '../observer/AnimationObserver';

  import '../icons/responsive';
  import '../icons/speed';
  import '../icons/rocket';
  import '../icons/bulb';

  export default {
    name: 'md-about',
    components: {
      SectionObserver,
      AnimationObserver
    },
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
    },
    methods: {
      getObserverBlockWidth() {
        if (window.innerWidth < 768) {
          return 'width: 100%;';
        }
        return 'width: 45%;';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about__headline,
  .about__headline::after {
    opacity: 0;
  }
  .animate .about__headline {
    animation: right-to-left 1s ease-in-out forwards;
  }
  .animate .about__headline::after {
    animation: right-to-left 1s .5s ease-in-out forwards;
  }

  .about__advantages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px 0 25px;

    @media(min-width: $breakpoint-tablet) {
      margin-bottom: 75px;
    }
  }

  .advantages__advantage {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    max-width: 160px;
    margin: 10px;
    opacity: 0;
    
    @media(min-width: $breakpoint-tablet) {
      justify-content: center;
      max-width: 275px;
    }
  }

  .animate .advantages__advantage {
    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        animation: scale-out-in 1s #{$i * .25}s ease-in forwards;
      }
    }
  }

  .advantage__image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: $color-coral;

    @media(min-width: $breakpoint-tablet) {
      width: 110px;
      height: 110px;
    }
  }

  .advantage__headline {
    text-transform: none;
    margin: 25px 0 10px 0;
  }

  .about__personal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    @media(min-width: $breakpoint-tablet) {
      flex-direction: row;
      padding: 0 25px;
    }
  }

  .personal__aboutme {
    width: 100%;
    padding: 15px;

    @media (min-width: $breakpoint-tablet) {
      padding: 0;
    }
  }

  .personal__aboutme {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    @media (min-width: $breakpoint-tablet) {
      margin-bottom: 0;
    }
  }

  .aboutme__headline {
    text-transform: none;
    margin: 25px 0 10px 0;
    opacity: 0;
  }
  .animate .aboutme__headline {
    animation: left-to-right 1s .5s ease-in forwards;
  }

  .aboutme__description {
    text-align: center;
    opacity: 0;
  }

  .animate .aboutme__description {
    animation: left-to-right 1s .75s ease-in forwards;
  }

  .description__link {
    color: $color-coral;
  }

  .aboutme__image-wrapper {
    max-width: 200px;
    border-radius: 50%;
    overflow: hidden;
    opacity: 0;
    @media(min-width: $breakpoint-tablet) {
      max-width: 250px;
    }
  }
  .animate .aboutme__image-wrapper {
    animation: left-to-right 1s ease-in forwards;
  }

  .aboutme__image {
    width: 100%;
  }

  .skills__skills {
    width: 100%;
    padding: 0 15px;
    @media(min-width: $breakpoint-tablet) {
      padding: 0;
    }
  }

  .skills__skill {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    background-color: $color-clean;
    overflow: hidden;
    @media(min-width: $breakpoint-tablet) {
      flex-direction: row;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  .skill__name {
    text-align: center;
    font-weight: $font-weight-bold;
    background-color: $color-coral;
    color: $color-white;
    padding: 3px;
    width: 100%;
    z-index: 15;

    @media(min-width: $breakpoint-tablet) {
      padding: 5px;
      width: 150px;
    }
  }
  
  .skill__percentage {
    position: relative;
    text-align: center;
    font-size: 12px;
    width: 100%;
    color: $color-white;
    z-index: 10;

    @media(min-width: $breakpoint-tablet) {
      padding: 5px;
      text-align: right;
      color: inherit;
    }
  }

  .percentage__bar {
    position: absolute;
    top: 0;
    left: -100%;
    height: 100%;
    background-color: darken($color-coral, 18%);
    z-index: -1;
  }

  .animate .skills__skill {
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        .percentage__bar {
          animation: skill-fade-in 1.5s #{$i * .15}s ease-in forwards;
        }
      }
    }
  }
</style>