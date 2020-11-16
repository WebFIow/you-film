<template xmlns="http://www.w3.org/1999/html">
  <div id="title">
    <div class="title-wrap">
      <div class="container">
        <h2 class="col-md-7">Люби. Живи. Дивись фільми.</h2>
        <p>In films we trust</p>
        <form @submit.prevent="handleSearchQuery" class="search">
          <input
            @click.once="fetchFilms"
            class="search"
            type="text"
            placeholder="Пошук"
            v-model="searchStr"
          />
          <button value=""></button>
          <ul class="searchRes" v-if="searchStr">
            <li v-for="film in searchedTitles" :key="film.id">
              <router-link :to="`/film-view/${film.id}`">
                {{ film.title }}
              </router-link>
            </li>
          </ul>
        </form>
        <button class="button-mob">
          <a href="#register" @click.prevent="scrollTo('#register')"
            >Зареєструватися</a
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  data: () => ({
    searchStr: '',
    allFilms: [],
  }),
  computed: {
    searchedTitles() {
      return this.allFilms
        .filter((film) =>
          film.TitleUA.toLowerCase()
            .includes(this.searchStr.toLowerCase())
        )
        .map((film) => ({ title: film.TitleUA, id: film.id }));
    }
  },
  watch: {
    searchStr() {
      this.searchedTitles = this.allFilms
        .filter((film) =>
          film.TitleUA.toLowerCase()
            .includes(this.searchStr.toLowerCase())
        )
        .map((film) => ({ title: film.TitleUA, id: film.id }));
    },
  },
  methods: {
    async fetchFilms() {
      this.allFilms = await this.$store.dispatch('fetchFilms')
    },
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({
        behavior: 'smooth',
      })
    },
    handleSearchQuery() {
      this.films = this.allFilms.filter((film) =>
        film.TitleUA.includes(this.searchStr)
      );
      this.setup(this.films);
      this.searchStr = '';
      setTimeout(() => {
        this.searchedTitles = [];
      }, 0);
    },
  },
}
</script>
