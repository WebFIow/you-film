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
          <ul class="accUL" v-if="filmList.filmsId.length">
            <li
              v-for="filmId of filmList.filmsId"
              :key="filmId"
            >
              <FilmCard
                :filmId="filmId"
                @removeHandler="(filmId) => removeFilmFromFilmList(filmId, filmList.name)"
              />
            </li>
          </ul>
          <div v-else>
            <p>
              У цьому філм-листі немає жодного фільму 😢<br />Прямуй на сторінку <router-link to="/film-main">Фільми</router-link>, та додай фільм до цього фільм-листа.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>
        Немає жодного фільм-листа 😢<br />Прямуй на сторінку <router-link to="/film-main">Фільми</router-link>, та створи
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

    this.filmsAreReady = true
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
      filmList.filmsId = filmList.filmsId.filter(id => id !== filmId) || []
      console.log(filmList.filmsId)
      this.filmLists = filmLists
      this.$forceUpdate()
      this.$store.dispatch('setFilmLists', this.filmLists)
    }
  },
  computed: {},
};
</script>
