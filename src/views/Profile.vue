<template>
  <div id="profile">
    <div class="container container-fluid">
      <div class="row">
        <div class="col-md-4 justify-content-center">
          <div class="sideProfile">
            <div class="circle">{{nameFirstLetter}}</div>
            <p class="name">{{userInfo ? userInfo.name : 'Error'}}</p>
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
          <router-view />
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
    data: () => ({
      userInfo: {
        name: ''
      }
    }),
    components: {
      ProfileFilmLists,
      ProfileSettings
    },
    methods: {
      
    },
    computed: {
      nameFirstLetter() {
        return this.userInfo.name[0]
      }
    },
    async mounted() {
      this.userInfo = await this.$store.dispatch('fetchInfo')
//      console.log(this.userInfo)
    },
  };
</script>

