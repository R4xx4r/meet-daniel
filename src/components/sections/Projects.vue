<template>
  <section class="block block--projects projects" id="projects">
    <div class="content-wrapper">
      <h2 class="projects__headline headline headline--2">Projects</h2>

        <div class="projects__filters filters">
          <div 
            class="filters__filter filter" 
            :class="{'filter--active': selectedIndex == index}" 
            v-for="(category, index) in categoriesWithProjects" 
            :key="index" 
            @click="setActiveIndex(index)"
            v-text="category.categoryName"
          ></div>
        </div>

        <div class="projects__projects-wrapper">
          <Project 
            v-for="(project, index) in categoriesWithProjects[selectedIndex]['projects']" 
            :key="index" 
            :project="project" 
          />
        </div>
      
    </div>
  </section>
</template>

<script>
  import Project from '../partials/Project';

  export default {
    name: 'md-projects',
    components: {
      Project
    },
    data() {
      return {
        selectedIndex: 0,
        categoriesWithProjects: [
          {
            categoryName: 'Alle',
            projects: [
              // will be injected in mounted
            ]
          },
          {
            categoryName: 'Vue.js / Nuxt.js',
            projects: [
              {
                title: 'Geppner Installationen',
                subtitle: 'Nuxt.js',
                image: 'Geppner_Installationen.jpg',
                overlay: {
                  intro: 'Website Relaunch',
                  description: ''
                }
              },
              {
                title: 'Eucerin Wissenswochen: Vitamin-C',
                subtitle: '',
                image: 'Eucerin_Wissenswochen_Vitamin_C.jpg',
                overlay: {
                  intro: 'Kampagnen Seite',
                  description: 'Als Webdev der <a href="https://mmcagentur.at/" target="_blank">MMCAGENTUR</a> war ich ...',
                  href: 'https://www.eucerin.at/vitamin-c/'
                }
              },
              {
                title: 'Hansaplast #weitergehts: Colored',
                subtitle: '',
                image: 'Hansaplast_Weitergehts_Routine.jpg',
                overlay: {
                  intro: 'Kampagnen Seite',
                  description: 'Als Webdev der <a href="https://mmcagentur.at/" target="_blank">MMCAGENTUR</a> war ich ...',
                  href: 'https://ext18-at.hansaplast.com/3/weitergehts/colored/'
                }
              }
            ]
          },
          {
            categoryName: 'Javascript',
            projects: [
              {
                title: 'Yoga Neufeld',
                subtitle: 'HTML / SCSS / JS',
                image: 'Yoga_Neufeld.png',
                overlay: {
                  intro: 'Website Relaunch',
                  description: '',
                  href: 'http://www.yoga-neufeld.at/'
                }
              },
              {
                title: 'Kurhotel Strobl',
                subtitle: 'HTML / SCSS / JS',
                image: 'Kurhotel_Strobl.png',
                overlay: {
                  intro: 'Website Relaunch',
                  description: 'Als Webdev der <a href="https://mmcagentur.at/" target="_blank">MMCAGENTUR</a> war ich Teil der kompletten Umsetzung dieser Seite. Umgesetzt wurde das Projekt mit einem intern entwickelten System welches auf Webpack, Handlebars und HTML, SCSS und JS basiert.',
                  href: 'http://kurhotel-strobl.at/'
                }
              }
            ]
          },
          {
            categoryName: 'Wordpress',
            projects: [
              {
                title: 'Galaxy Fitness',
                subtitle: 'Wordpress Frontend & Backend',
                image: 'Galaxy_Fitness.png',
                overlay: {
                  intro: 'Website Relaunch',
                  description: 'Als Webdev der <a href="https://mmcagentur.at/" target="_blank">MMCAGENTUR</a> war ich hier in erster Linie als Frontender tätig, habe aber aucher alle Backend Tätigkeiten vorgenommen. Die einzelnen Module der Seite basieren auf dem WP-Plugin "Advanced Custom Fields".',
                  href: 'http://www.galaxy-fitness.at/'
                }
              },
              {
                title: 'Coaching Consulting',
                subtitle: 'Wordpress Backend',
                image: 'Coaching_Consulting.png',
                overlay: {
                  intro: 'Website Relaunch',
                  description: 'Als Webdev der <a href="https://mmcagentur.at/" target="_blank">MMCAGENTUR</a> war ich hier als Backend Dev tätig. Dieses Projekt war eines meiner ersten Berührungspunkte mit dem Wordpress Backend. Die Module basieren auf dem WP-Plugin "Advanced Custom Fields".',
                  href: 'https://www.coaching-consulting.at/'
                }
              }
            ]
          },
          {
            categoryName: 'Typo3',
            projects: [
              {
                title: 'Ottakringer',
                subtitle: 'Typo3 Backend',
                image: 'Ottakringer_Helles_ohne_Flasche_Kanne_Logo_PRINT.png',
                overlay: {
                  intro: 'Website Relaunch',
                  description: 'Als Webdev der <a href="https://mmcagentur.at/" target="_blank">MMCAGENTUR</a> war ich hier als Backend Dev tätig. Dieses Projekt wurde agil umgesetzt und war in enger Zusammenarbeit aller beteiligter Teams eine großartige Erfahrung.',
                  href: 'https://www.ottakringerbrauerei.at/'
                }
              },
              {
                title: 'Austrian Development Agency',
                subtitle: 'Typo3 Backend',
                image: 'Austrian_Development_Agency.png',
                overlay: {
                  intro: 'Website Relaunch',
                  description: 'Als Webdev der <a href="https://mmcagentur.at/" target="_blank">MMCAGENTUR</a> war ich hier als Backend Dev tätig. ',
                  href: 'https://www.entwicklung.at/'
                }
              },
              {
                title: 'Trans Austria Gasleitung GmbH',
                subtitle: 'Typo3 Backend',
                image: 'Trans_Austria_Gasleitung_GmbH.png',
                overlay: {
                  intro: 'Website Relaunch',
                  description: 'Als Webdev der <a href="https://mmcagentur.at/" target="_blank">MMCAGENTUR</a> war ich hier als Backend Dev tätig. ',
                  href: 'https://www.taggmbh.at/'
                }
              }
            ]
          }
        ]
      }
    },
    methods: {
      setActiveIndex(index) {
        this.selectedIndex = index;
      }
    },
    mounted() {
      this.categoriesWithProjects.forEach(category => {
        
        category.projects.forEach(project => {
          project['categoryName'] = category.categoryName;
          this.categoriesWithProjects[0]['projects'].push(project);
        });
        
      });
    }
  }
</script>

<style lang="scss" scoped>
  .block--projects {
    background-color: $color-clean;
  }

  /* FILTER STUFF */
  .projects__filters {
    margin-top: 35px;
    display: flex;
    justify-content: center;
  }

  .filters__filter {
    margin: 0 20px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: transparent;
    color: $color-dark-gray;
    transition: all .25s ease-in-out;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  .filter--active {
    background-color: $color-new-grass;
    color: $color-white;
  }

  /* PROJECTS */
  .projects__projects-wrapper {
    margin-top: 35px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
</style>