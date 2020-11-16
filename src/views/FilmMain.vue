<template>
  <div>
    <div id="films" ref="searchWrap">
      <div class="films-wrap container">
        <div class="films-text">
          <h1>Фільми</h1>
          <p>
            Миттєвий пошук фільмів та зручний серфінг по сайту.<br />Ви завжди
            будете в курсі коли і що дивитись.
          </p>
          <form @submit.prevent="handleSearchQuery" class="search">
            <input
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
        </div>
      </div>
    </div>
    <div id="film-main">
      <div class="container container-fluid">
        <div class="row tabColReverse">
          <div class="col-xl-9 col-md-8">
            <h3 class="hText">Список фільмів</h3>
            <p 
              class="sticker"
              v-for="filterName in Genres.concat(Countries)"
              :key="filterName"
            >
              {{filterName}}
              <i 
                class="fas fa-times"
                @click="removeFilter(filterName)"
              ></i>
            </p>
            <p
              v-if="!films.length"
            >
              Не знайшлося жодного фільму за Вашим запитом
            </p>
            <FilmTable :page="page" :pageSize="pageSize" :films="items" />
            <Paginate
              v-model="page"
              :page-count="pageCount"
              :click-handler="pageChangeHandler"
              :prev-text="''"
              :next-text="''"
              :container-class="'pagination'"
              :page-class="'pageCube'"
            />
          </div>
          <div class="col-xl-3 col-md-4">
            <h3 class="hText">фільтри</h3>
            <div class="wMob">
              <button class="accordion" @click="showAcc">ЖАНРИ</button>
              <div class="panel">
                <ul class="accUL">
                  <li v-for="genre in genres" :key="genre">
                    <input
                            :id="genre"
                            type="checkbox"
                            v-model="Genres"
                            :value="genre"
                    />
                    <label :for="genre">{{ genre }}</label>
                  </li>
                </ul>
              </div>

              <button class="accordion" @click="showAcc">РЕЙТИНГ</button>
              <div class="panel">
                <ul class="accUL">
                  <li>
                    <input
                            id="high"
                            type="radio"
                            name="rating"
                            @change="sortFilmsByProp('imdbRating', 1)"
                    />
                    <label for="high">За зростанням</label>
                  </li>
                  <li>
                    <input
                            id="low"
                            type="radio"
                            name="rating"
                            @change="sortFilmsByProp('imdbRating', -1)"
                    />
                    <label for="low">За спаданням</label>
                  </li>
                </ul>
              </div>

              <button class="accordion" @click="showAcc">КРАЇНА</button>
              <div class="panel">
                <ul class="accUL">
                  <li v-for="country in countries" :key="country">
                    <input
                            :id="country"
                            type="checkbox"
                            v-model="Countries"
                            :value="country"
                    />
                    <label :for="country">{{ country }}</label>
                  </li>
                </ul>
              </div>
              <button class="accordion" @click="showAcc">РІК</button>
              <div class="panel">
                <ul class="accUL">
                  <li>
                    <input
                            id="old"
                            type="radio"
                            name="year"
                            @change="sortFilmsByProp('Year', 1)"
                    />
                    <label for="old">За зростанням</label>
                  </li>
                  <li>
                    <input
                            id="new"
                            type="radio"
                            name="year"
                            @change="sortFilmsByProp('Year', -1)"
                    />
                    <label for="new">За спаданням</label>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div class="row mb-3"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}
</style>

<script>
import paginationMixin from "@/mixins/pagination.mixin";
import FilmTable from "@/components/FilmTable";

export default {
  name: "FilmMain",
  components: {
    FilmTable,
  },
  data: () => ({
    films: [],
    searchedTitles: [],
    allFilms: [],
    searchStr: '',
    Countries: [],
    Genres: [],
  }),
  mixins: [paginationMixin],
  async mounted() {
    this.allFilms = await this.$store.dispatch("fetchFilms");
    this.films = this.allFilms;

    if (this.$route.query.genre) {
      this.Genres.push(this.$route.query.genre)
      this.films = this.allFilms
        .filter(this.filmContainGenres)
    }

    this.setup(this.films);
  },
  computed: {
    genres() {
      return Array.from(
        new Set(
          this.allFilms
            .map(film => film.Genre)
            .join(", ")
            .split(", ")
        )
      );
    },
    countries() {
      return Array.from(
        new Set(
          this.allFilms
            .map(film => film.Country)
            .join(", ")
            .split(", ")
        )
      );
    },
  },
  watch: {
    searchStr() {
      this.searchedTitles = this.allFilms
        .filter((film) => film.TitleUA.includes(this.searchStr))
        .map((film) => ({ title: film.TitleUA, id: film.id }));
    },
    Countries: {
      deep: true,
      handler() {
        this.films = this.allFilms
          .filter(this.filmContainGenres)
          .filter(this.filmContainCountries)
  
        this.setup(this.films)
      }
    },
    Genres: {
      deep: true,
      handler() {
        this.films = this.allFilms
          .filter(this.filmContainGenres)
          .filter(this.filmContainCountries)
  
        this.setup(this.films)
      }
    }
  },
  methods: {
    removeFilter(filter) {
      if (this.Genres.indexOf(filter) !== -1) {
        this.Genres = this.Genres.filter(genre => genre !== filter)
      } else if (this.Countries.indexOf(filter) !== -1) {
        this.Countries = this.Countries.filter(counrty => counrty !== filter)
      }
    },
    filmContainGenres(film) {
      return !this.Genres.length || this.Genres.every(g => film.Genre.includes(g))
    },
    filmContainCountries(film) {
      return !this.Countries.length || this.Countries.every(c => film.Country.includes(c))
    },
    showAcc(e) {
      const el = e.target;
      el.classList.toggle("active");
      const panel = el.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 70 + "px";
      }
    },
    setup(films) {
      this.setupPagination(films);
    },
    handleSearchQuery() {
      this.films = this.allFilms.filter((film) =>
        film.TitleUA.includes(this.searchStr)
      );
      this.setup(this.films);
      this.searchStr = "";
      setTimeout(() => {
        this.searchedTitles = [];
      }, 0);
    },
    sortFilmsByProp(prop, order) {
      this.films.sort((a, b) => order * (+a[prop] - +b[prop]));
      this.setup(this.films);
    },
  },
};
</script>
