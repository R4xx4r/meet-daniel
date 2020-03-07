<template>
  <section class="block block--projects projects" id="projects">
    <SectionObserver>

      <div class="content-wrapper">

        <AnimationObserver>
          <h2 class="projects__headline headline headline--2">Projekte</h2>
        </AnimationObserver>

        <AnimationObserver>
          <div class="projects__filters filters">
            
            <div class="filters__dropdown-wrapper" v-cloak>
              
              <select class="filters__dropdown" @change="setActiveIndex($event.target.value)" title="Wähle eine Kategorie">
                <option
                  v-for="(category, index) in categoriesWithProjects" 
                  :key="index" 
                  :value="index"
                  v-text="category.categoryName"
                ></option>
              </select>

            </div>

            <div 
              class="filters__filter filter" 
              :class="{'filter--active': selectedIndex == index}" 
              v-for="(category, index) in categoriesWithProjects" 
              :key="index" 
              @click="setActiveIndex(index)"
              v-text="category.categoryName"
            ></div>

          </div>
        </AnimationObserver>

        <div class="projects__projects-wrapper">
          
          <Project 
            v-for="(project, index) in getSelectedProjects()" 
            :key="index" 
            :project="project"
            v-show="index < visibleProjects.length" />
        </div>

        <button class="projects__button projects__button--more" @click="loadMoreProjects" v-if="showButton">Mehr anzeigen</button>
      </div>
      
      <svgicon preserveAspectRatio="none" class="icon icon--triangle" name="triangle"></svgicon>

    </SectionObserver>
  </section>
</template>

<script>
  import SectionObserver from '../observer/SectionObserver';
  import AnimationObserver from '../observer/AnimationObserver';
  import Project from '../partials/Project';
  
  import '../icons/triangle';

  export default {
    name: 'md-projects',
    components: {
      SectionObserver,
      AnimationObserver,
      Project
    },
    data() {
      return {
        selectedIndex: 0,
        projectsPerPage: 6,
        page: 1,
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
                image: 'projects/Geppner_Installationen.jpg',
                modal: {
                  intro: 'Website Relaunch',
                  description: 'Hier habe ich der alten Seite welche auf einem Online Webbaukasten basierte einen neuen Touch verliehen. Ich habe mich für Nuxt.js entschieden und der Seite einen modernen Anstrich verpasst.'
                }
              },
              {
                title: 'Eucerin Wissenswochen: Vitamin-C',
                subtitle: 'Nuxt.js',
                image: 'projects/Eucerin_Wissenswochen_Vitamin_C.jpg',
                modal: {
                  intro: 'Kampagnen Seite',
                  description: 'Als Webdev der <a href="https://mmcagentur.at/" target="_blank">MMCAGENTUR</a> haben wir diese Nuxt.js Kampagnenseite umgesetzt. Die fertig gebuildete Seite wurde als Proxyframe in der Mutterseite eingebunden.',
                  href: 'https://www.eucerin.at/vitamin-c/',
                  images: [
                    'projects/vitamin-c/vitamin-c_01.jpg',
                    'projects/vitamin-c/vitamin-c_03.jpg',
                    'projects/vitamin-c/vitamin-c_02.jpg',
                    'projects/vitamin-c/vitamin-c_04.jpg'
                  ]
                }
              },
              {
                title: 'Hansaplast #weitergehts: Colored',
                subtitle: 'Nuxt.js',
                image: 'projects/Hansaplast_Weitergehts_Routine.jpg',
                modal: {
                  intro: 'Kampagnen Seite',
                  description: 'Als Webdev der <a href="https://mmcagentur.at/" target="_blank">MMCAGENTUR</a> haben wir diese Nuxt.js Kampagnenseite umgesetzt. Die fertig gebuildete Seite wurde als Proxyframe in der Mutterseite eingebunden. Besonderheit ist ein Gewinnspiel bei welchem man per Drag & Drop Elemente richtig platzieren muss.',
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
                image: 'projects/Yoga_Neufeld.jpg',
                modal: {
                  intro: 'Website Relaunch',
                  description: 'Als eines meiner ersten Projekte habe ich der alten Yoga Neufeld einen neuen Anstrich verpasst. Hierzu habe ich ein fertiges Template von <a href="http://html5up.net" target="_blank">HTML5up</a> als Basis hergenommen, modifiziert und um neue "Module" erweitert.',
                  href: 'http://www.yoga-neufeld.at/'
                }
              },
              {
                title: 'Kurhotel Strobl',
                subtitle: 'HTML / SCSS / JS',
                image: 'projects/Kurhotel_Strobl.jpg',
                modal: {
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
                image: 'projects/Galaxy_Fitness.jpg',
                modal: {
                  intro: 'Website Relaunch',
                  description: 'Als Webdev der <a href="https://mmcagentur.at/" target="_blank">MMCAGENTUR</a> war ich hier in erster Linie als Frontender tätig, habe aber aucher alle Backend Tätigkeiten vorgenommen. Die einzelnen Module der Seite basieren auf dem WP-Plugin "Advanced Custom Fields".',
                  href: 'http://www.galaxy-fitness.at/'
                }
              },
              {
                title: 'Coaching Consulting',
                subtitle: 'Wordpress Backend',
                image: 'projects/Coaching_Consulting.jpg',
                modal: {
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
                image: 'projects/Ottakringer_Helles_ohne_Flasche_Kanne_Logo_PRINT.jpg',
                modal: {
                  intro: 'Website Relaunch',
                  description: 'Als Webdev der <a href="https://mmcagentur.at/" target="_blank">MMCAGENTUR</a> war ich hier als Backend Dev tätig. Dieses Projekt wurde agil umgesetzt und war in enger Zusammenarbeit aller beteiligter Teams eine großartige Erfahrung.',
                  href: 'https://www.ottakringerbrauerei.at/',
                  images: [
                    'projects/ottakringer/ottakringer_01.jpg',
                    'projects/ottakringer/ottakringer_02.jpg',
                    'projects/ottakringer/ottakringer_03.jpg',
                    'projects/ottakringer/ottakringer_04.jpg'
                  ]
                }
              },
              {
                title: 'Austrian Development Agency',
                subtitle: 'Typo3 Backend',
                image: 'projects/Austrian_Development_Agency.jpg',
                modal: {
                  intro: 'Website Relaunch',
                  description: 'Als Webdev der <a href="https://mmcagentur.at/" target="_blank">MMCAGENTUR</a> war ich hier als Backend Dev tätig. Teil meiner Umsetzung war die Planung und Überlegung der einzelnen Content Elemente und wie man diese sinnvoll und intuitiv zur Verfügung stellen kann.',
                  href: 'https://www.entwicklung.at/'
                }
              },
              {
                title: 'Trans Austria Gasleitung GmbH',
                subtitle: 'Typo3 Backend',
                image: 'projects/Trans_Austria_Gasleitung_GmbH.jpg',
                modal: {
                  intro: 'Website Relaunch',
                  description: 'Als Webdev der <a href="https://mmcagentur.at/" target="_blank">MMCAGENTUR</a> war ich hier als Backend Dev tätig. Hier hatten wir die Herausforderung mehrere Schnittstellen zu integrieren um eine enorme Menge an sensiblen Daten schnell und strukturiert darzustellen.',
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
      },
      shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      },
      createProductsArray() {
        let tmpArr = []

        this.categoriesWithProjects.forEach(category => {
          
          category.projects.forEach(project => {
            project['categoryName'] = category.categoryName;
            tmpArr.push(project);
          });
          
        });
        tmpArr = this.shuffleArray(tmpArr);
        this.categoriesWithProjects[0]['projects'] = tmpArr;
      },
      getSelectedProjects() {
        return this.categoriesWithProjects[this.selectedIndex]['projects'];
      },
      loadMoreProjects() {
        this.page++;
      }
    },
    computed: {
      visibleProjects() {
        return this.categoriesWithProjects[this.selectedIndex]['projects'].slice(0, this.page * this.projectsPerPage);
      },
      maxPages() {
        return this.categoriesWithProjects[this.selectedIndex]['projects'].length / this.projectsPerPage;
      },
      showButton() {
        return this.page < this.maxPages;
      }
    },
    created() {
      let screenWidth = window.innerWidth;
      if (screenWidth == 768 || screenWidth < 768) {
        this.projectsPerPage = 4;
      }
    },
    mounted() {
      this.createProductsArray();
    }
  }
</script>

<style lang="scss" scoped>
  .block--projects {
    background-color: $color-clean;
    position: relative;
    @media(min-width: $breakpoint-tablet) {
      padding-bottom: 50px;
    }
  }

  .projects__headline,
  .projects__headline::after {
    opacity: 0;
  }
  .animate .projects__headline {
    animation: left-to-right 1s ease-in-out forwards;
  }
  .animate .projects__headline::after {
    animation: left-to-right 1s .5s ease-in-out forwards;
  }

  .icon--triangle {
    position: absolute;
    bottom: -35px;
    @media(min-width: $breakpoint-tablet) {
      bottom: -60px;
    }
  }

  /* FILTER STUFF */
  .projects__filters {
    margin-top: 35px;
    display: flex;
    justify-content: center;
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
  }
  .animate .projects__filters {
    opacity: 1;
  }

  .filters__filter {
    display: none;
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

    @media(min-width: $breakpoint-tablet) {
      display: block;
    }
  }

  .filters__dropdown-wrapper {
    position: relative;
    max-width: 250px;
    width: 100%;
    background-color: $color-white;
    border: 1px solid darken($color-clean, 30%);

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 38px;
      height: 100%;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NCAzOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQwYzIgMCA0IDIgNCA0djMwYzAgMi0yIDQtNCA0SDBWMHoiIGZpbGw9IiNGN0Y3RjciLz48cGF0aCBzdHJva2U9IiM4NkFDNDEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTYgMThsNiA2IDYtNiIvPjwvZz48L3N2Zz4=");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 45px 45px;
      border-left: 1px solid darken($color-clean, 30%);
      pointer-events: none;
    }

    @media(min-width: $breakpoint-tablet) {
      display: none;
    }
  }

  .filters__dropdown {
    width: 100%;
    padding: 10px 45px 10px 16px;
    font-size: 16px;
    color: $color-dark-gray;
    background-color: transparent;
    border: none;
    cursor: pointer;
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
    @media(min-width: $breakpoint-tablet) {
      margin-top: 50px;
    }
  }
  .projects__button--more {
    display: block;
    padding: 12px 30px;
    margin: 35px auto 0;
    font-size: inherit;
    color: $color-white;
    background-color: $color-new-grass;
    border: 2px solid $color-new-grass;
    cursor: pointer;
    transition: color .25s ease-in-out,
                background-color .25s ease-in-out;
  
    &:hover {
      color: $color-new-grass;
      background-color: transparent;
    }
  }
</style>