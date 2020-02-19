<template>
  <section class="block block--about about" id="about">
    <div class="content-wrapper">
      <h2 class="about__headline headline headline--2">Über mich</h2>

      <div class="about__advantages advantages">
        
        <div class="advantages__advantage advantage" v-for="(advantage, index) in advantages" :key="index">
          <div class="advantage__headline headline headline--3" v-text="advantage.title"></div>
          <div class="advantage__description" v-text="advantage.description"></div>
        </div>

      </div>

      <div class="about__personal personal">
        <div class="personal__aboutme aboutme">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
  export default {
    name: 'md-about',
    data() {
      return {
        advantages: [
          {
            icon: '',
            title: 'Responsive',
            description: 'Meine Arbeit wird auf allen Geräten, egal ob groß oder klein, laufen.'
          },
          {
            icon: '',
            title: 'Schnell',
            description: 'Verzögerungsfreie Interaktionen haben sehr hohe Priorität.'
          },
          {
            icon: '',
            title: 'Lebendig',
            description: 'Webseiten müssen nicht langweilig sein, sie sollen lebendig wirken.'
          },
          {
            icon: '',
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
  }

  .advantages__advantage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 275px;
  }

  .advantage__headline {
    text-transform: none;
    margin-bottom: 10px;
  }

  .about__personal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
  }

  .personal__aboutme,
  .personal__skills {
    width: 45%;
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