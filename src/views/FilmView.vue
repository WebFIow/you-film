<template>
  <div id="film-view">
    <div class="container container-fluid">
      <div class="row justify-content-between">
        <div class="col-xl-7 col-md-6 px-mob-none">
          <div class="film-description">
            <div class="imgWrap d-md-none d-sm-flex text-center">
              <img class="img-fluid" :src="film.Poster" alt="film_poster" />
            </div>
            <div class="imgStars d-md-none d-sm-block">
              <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span
                ><span>☆</span> <span>☆</span><span>☆</span><span>☆</span
                ><span>☆</span><span>☆</span>
              </div>
              <p>рейтинг: 7/10</p>
            </div>
            <h3 class="hText">{{ film.TitleUA }}</h3>
            <div class="fBox">
              <p>{{ film.Released }}</p>
              <p>YouFilm: {{ film.imdbRating }}</p>
              <p>{{ film.Country }}</p>
            </div>
            <div class="fText">
              <p>{{ film.Plot }}</p>
            </div>
            <div class="fTable">
              <table class="table">
                <tbody>
                  <tr>
                    <td>Країна</td>
                    <td>{{ film.Country }}</td>
                  </tr>
                  <tr>
                    <td>Актори</td>
                    <td>{{ film.Actors }}</td>
                  </tr>
                  <tr>
                    <td>Тривалість</td>
                    <td>{{ film.Runtime }}</td>
                  </tr>
                  <tr>
                    <td>Жанр</td>
                    <td>{{ film.Genre }}</td>
                  </tr>
                  <tr>
                    <td>Режисер</td>
                    <td>{{ film.Director }}</td>
                  </tr>
                  <tr>
                    <td>Нагороди</td>
                    <td>{{ film.Awards }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="fText d-md-none d-sm-block">
              <p><span class="heart"></span>додати в фільм-лист</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 d-tablet-none">
          <div class="imgWrap">
            <img class="img-fluid" :src="film.Poster" alt="film_poster" />
          </div>
          <div class="imgStars">
            <div class="rating">
              <span></span><span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <p>рейтинг: 7/10</p>
            <p><span class="heart"></span>додати в фільм-лист</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3 class="hText">Відгуки</h3>
          <div class="comment crComment container">
            <div class="row">
              <div class="col-xl-2 col-sm-3">
                <div class="usWrap">
                  <span class="profile-img"><span class="profile-img--name">{{nameFirstLetter}}</span></span>
                  <p>{{name}}</p>
                  <div class="imgStars imgStarsMob d-md-none d-sm-block">
                    <div class="rating">
                      <span></span><span></span><span></span><span></span
                      ><span></span> <span></span><span></span><span></span
                      ><span></span><span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-10 col-sm-9 px-mob-none">
                <div class="row mobNotVisible">
                  <div
                    class="col-12 d-flex align-items-baseline align-items-sm-center"
                  >
                    <p class="pr20 gold">Оцінка фільму:</p>
                    <div class="rating">
                      <span
                        v-for="i of 10"
                        :key="i"
                        @click="setRating(i)"
                      >{{i}}</span>
                    </div>
                  </div>
                </div>
                <form id="cForm">
                  <textarea
                    id="cArea"
                    rows="3"
                    placeholder="Залишити відгук"
                  ></textarea>
                </form>
                <div class="row">
                  <div class="col-12 col-left">
                    <button class="btn btn-comment">Надіслати</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmView",
  data: () => ({
    film: {},
    id: "",
    rating: 0
  }),
  async mounted() {
    this.id = this.$route.params.id
    this.film = await this.$store.dispatch("fetchFilmByID", this.id)
    await this.$store.dispatch('fetchInfo')
    this.user = this.$store.info
    console.log(this.user)
  },
  computed: {
    name() {
      return this.$store.getters.info ? this.$store.getters.info.name : false;
    },
    nameFirstLetter() {
      return this.$store.getters.info.name
        ? this.$store.getters.info.name[0].toUpperCase()
        : false;
    },
  },
  methods: {
    setRating(rating) {
      this.rating = rating
      console.log(this.rating)
    }
  }
};
</script>
