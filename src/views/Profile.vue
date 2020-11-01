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
            <div class="recommendFilmWrap">
              <img src="../../public/img/films/fim1.jpeg" />
              <p>Форест Гамп</p>
            </div>
            <div class="recommendFilmWrap">
              <img src="../../public/img/films/fim1.jpeg" />
              <p>Форест Гамп</p>
            </div>
            <div class="recommendFilmWrap">
              <img src="../../public/img/films/fim1.jpeg" />
              <p>Форест Гамп</p>
            </div>
            <div class="recommendFilmWrap">
              <img src="../../public/img/films/fim1.jpeg" />
              <p>Форест Гамп</p>
            </div>
            <div class="recommendFilmWrap">
              <img src="../../public/img/films/fim1.jpeg" />
              <p>Форест Гамп</p>
            </div>
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
    data: () => ({}),
    components: {
      ProfileFilmLists,
      ProfileSettings
    },
    async mounted() {
      await this.$store.dispatch('fetchInfo')
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
      
    },
  };
</script>

