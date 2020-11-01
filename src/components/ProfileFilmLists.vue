<template>
  <div
    id="tab-content1"
    class="tab-content"
    role="tabpanel"
    aria-labelledby="description"
    aria-hidden="false"
  >
    <div v-if="filmsAreReady">
      <div v-for="filmList of filmLists" :key="filmList.name">
        <button class="accordion" @click="showAcc">
          {{ filmList.name }} ({{ filmList.filmsId.length }})
        </button>
        <div class="panel">
          <ul class="accUL">
            <li
              v-for="film of filmList.films"
              :key="film.imdbId"
            >
              <FilmCard
                :film="film"
                @removeHandler="(filmId) => removeFilmFromFilmList(filmId, filmList.name)"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <p>
        Немає жодного фільм-листа 😢<br />Прямуй на сторінку Фільми, та створи
        свої власні підбірки фільмів.
      </p>
    </div>
  </div>
</template>

<script>
import FilmCard from "./FilmCard";

export default {
  components: {
    FilmCard,
  },
  data: () => ({
    filmLists: [],
    filmsAreReady: false
  }),
  async mounted() {
    await this.$store.dispatch("fetchFilmLists");

    this.filmLists = this.$store.getters.filmLists || [];
    await this.filmLists.forEach(async (filmList, j) => {
      for (let i = 0; i < filmList.filmsId.length; i++) {
        const filmId = filmList.filmsId[i];
        const film = await this.$store.dispatch("fetchFilmByID", filmId);
        filmList.films || (filmList.films = []);
        filmList.films && filmList.films.push(film);
      }
      if (j === this.filmLists.length - 1) {
        this.filmsAreReady = true
      }
    });
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
    async removeFilmFromFilmList(filmId, filmListName) {
      const filmLists = this.filmLists
      const filmList = filmLists.find(filmList => filmList.name == filmListName)
      filmList.films = filmList.films.filter(film => film.id !== filmId)
      filmList.filmsId = filmList.filmsId.filter(id => id !== filmId)
      this.filmLists = filmLists
      this.$forceUpdate()
      this.$store.dispatch('setFilmLists', this.filmLists)
    }
  },
  computed: {},
};
</script>
