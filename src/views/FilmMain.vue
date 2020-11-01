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
            <h3 class="hText">ФілЬТРИ</h3>
            <button class="accordion" @click="showAcc">ЖАНРИ</button>
            <div class="panel">
              <ul class="accUL">
                <li v-for="genre in genres" :key="genre">
                  <input
                    :id="genre"
                    type="checkbox"
                    @change="filterFilmsByGenre(genre)"
                    :checked="$route.query.genre == genre"
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
                    @change="filterFilmsByCountry(country)"
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

            <h3 class="hText mtH">Підбірка фільмів</h3>
            <div class="fListWrap">
              <div class="fEl">
                <img src="../../public/img/films/fim1.jpeg" alt="film poster" />
                <div class="fElText">
                  <p>Top 8 Facts About DC’s Shazam! Movie</p>
                  <p>May 12, 2020</p>
                </div>
              </div>

              <div class="fEl">
                <img src="../../public/img/films/fim1.jpeg" alt="film poster" />
                <div class="fElText">
                  <p>Top 8 Facts About DC’s Shazam! Movie</p>
                  <p>May 12, 2020</p>
                </div>
              </div>

              <div class="fEl">
                <img src="../../public/img/films/fim1.jpeg" alt="film poster" />
                <div class="fElText">
                  <p>Top 8 Facts About DC’s Shazam! Movie</p>
                  <p>May 12, 2020</p>
                </div>
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
    searchStr: "",
    filteredGenres: [],
    filteredCountries: [],
  }),
  mixins: [paginationMixin],
  async mounted() {
    this.allFilms = await this.$store.dispatch("fetchFilms");
    this.films = this.allFilms;

    if (this.$route.query.genre) {
      this.filterFilmsByGenre(this.$route.query.genre);

      return;
    }

    this.setup(this.films);
  },
  computed: {
    genres() {
      return Array.from(
        new Set(
          this.allFilms
            .map((film) => film.Genre)
            .join(", ")
            .split(", ")
        )
      );
    },
    countries() {
      return Array.from(
        new Set(
          this.allFilms
            .map((film) => film.Country)
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
  },
  methods: {
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
    filterFilmsByGenre(genre = "", alreadyFilteredFilms) {
      if (genre) {
        let genreIndex = this.filteredGenres.indexOf(genre);

        if (genreIndex !== -1) {
          this.filteredGenres.splice(genreIndex, 1);
        } else {
          this.filteredGenres.push(genre);
        }

        this.films = this.allFilms.filter((film) => {
          return this.filteredGenres.every((g) => film.Genre.includes(g));
        });

        this.filterFilmsByCountry("", this.films);
      } else if (this.filteredGenres.length) {
        this.films = alreadyFilteredFilms.filter((film) => {
          return this.filteredGenres.every((g) => film.Genre.includes(g));
        });
      }
      this.setup(alreadyFilteredFilms ? alreadyFilteredFilms : this.films);
    },
    filterFilmsByCountry(country = "", alreadyFilteredFilms) {
      if (country) {
        let countryIndex = this.filteredCountries.indexOf(country);

        if (countryIndex !== -1) {
          this.filteredCountries.splice(countryIndex, 1);
        } else {
          this.filteredCountries.push(country);
        }

        this.films = this.allFilms.filter((film) => {
          return this.filteredCountries.every((c) => film.Country.includes(c));
        });

        this.filterFilmsByGenre("", this.films);
      } else if (this.filteredCountries.length) {
        this.films = alreadyFilteredFilms.filter((film) => {
          return this.filteredCountries.every((c) => film.Country.includes(c));
        });
      }
      this.setup(alreadyFilteredFilms ? alreadyFilteredFilms : this.films);
    },
    sortFilmsByProp(prop, order) {
      this.films.sort((a, b) => order * (+a[prop] - +b[prop]));
      this.setup(this.films);
    },
  },
};
</script>
