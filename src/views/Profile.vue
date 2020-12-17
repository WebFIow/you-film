<template>
  <div id="profile">
    <div class="container container-fluid">
      <div class="row">
        <div class="col-md-4 justify-content-center">
          <div class="sideProfile">
            <div class="circle">{{nameFirstLetter}}</div>
            <p class="name">{{name}}</p>
          </div>
        </div>
        <div class="col-md-8">
          <ul class="tabs" role="tablist">
            <li>
              <router-link
                to="/profile"
              >
                Фільм-лісти
              </router-link>
            </li>

            <li>
              <router-link
                to="/profile/settings"
              >
                Особисті дані
              </router-link>
            </li>
          </ul>
          <keep-alive>
            <router-view :userEmail="email" :userName="name" />
          </keep-alive>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3 class="hText">Рекомендації</h3>
          <div class="recommendWrap">
            <router-link
              class="recommendFilmWrap"
              v-for="film in films"
              :key="film.id"
              :to="`/film-view/${film.id}`"
            >
              <img :src="film.Poster" />
              <p>{{ film.TitleUA }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileFilmLists from '@/components/ProfileFilmLists'
import ProfileSettings from '@/components/ProfileSettings'

  export default {
    name: "Profile",
    data: () => ({
      allFilms: [],
      films: []
    }),
    components: {
      ProfileFilmLists,
      ProfileSettings
    },
    async mounted() {
      await this.$store.dispatch('fetchInfo')
      this.allFilms = await this.$store.dispatch('fetchFilms')
      await this.displayRecommendations()
    },
    computed: {
      name() {
        return this.$store.getters.info ? 
          this.$store.getters.info.name
          : 'User'
      },
      nameFirstLetter() {
        return this.$store.getters.info ? 
          this.$store.getters.info.name ?
            this.$store.getters.info.name[0].toUpperCase()
          : 'U'
        : 'U'
      },
      email() {
        return this.$store.getters.info ? 
          this.$store.getters.info.email
          : ''
      },
    },
    methods: {
      async displayRecommendations() {
        
        const LS_FILMS = localStorage.getItem('youfilm.films')
        const selectedFilms = JSON.parse(LS_FILMS)
        if (selectedFilms) {
          let genres = []

          for(let i = 0; i < selectedFilms.length; i++) {
            let film = await this.$store.dispatch('fetchFilmById', selectedFilms[i])
            genres.push(film.Genre.split(', '))
          }
          genres = genres.flat(2)

          let recFilms = this.allFilms.filter(film => {
            const genrs = film.Genre.split(', ')
            return genrs.some(g => genres.indexOf(g) !== -1)
          })

          if (recFilms.length > 5) {
            recFilms = recFilms.splice(0, 5)
          } else if (recFilms.length < 5) {
            recFilms = recFilms.concat(this.allFilms).splice(0, 5)
          }

          this.films = recFilms
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .recommendFilmWrap {
    max-width: 17%;
    overflow: hidden;

    img {
      width: 100%
    }
  }

  .circle {
    padding-left: 0;
  }
</style>
