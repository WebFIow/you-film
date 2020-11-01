<template>
  <div id="mdlAddToWatch" @click="close" ref="modalWrapper">
    <!--        FIRST MODAL-->

    <!--        <div class="mdl">-->
    <!--            <div class="mdl-header">-->
    <!--                <p class="mb-0">Додати “Alita: Battle Angel” у <span class="close float-right"><i class="fas fa-times"></i></span></p>-->
    <!--            </div>-->
    <!--            <div class="mdl-content">-->
    <!--                <form>-->
    <!--                    <div class="form-group form-check">-->
    <!--                        <input type="checkbox" class="form-check-input" id="later">-->
    <!--                        <label class="form-check-label" for="later">Подивитися пізніше (99)</label>-->
    <!--                    </div>-->
    <!--                    <div class="form-group form-check">-->
    <!--                        <input type="checkbox" class="form-check-input" id="early">-->
    <!--                        <label class="form-check-label" for="early">Подивитися раніше (13)</label>-->
    <!--                    </div>-->
    <!--                    <div class="form-group form-check">-->
    <!--                        <input type="checkbox" class="form-check-input" id="later1">-->
    <!--                        <label class="form-check-label" for="later1">Подивитися пізніше (99)</label>-->
    <!--                    </div>-->
    <!--                    <div class="form-group form-check">-->
    <!--                        <input type="checkbox" class="form-check-input" id="notwatch">-->
    <!--                        <label class="form-check-label" for="notwatch">Не дивитися (9)</label>-->
    <!--                    </div>-->
    <!--                    <div class="form-group form-check">-->
    <!--                        <input type="checkbox" class="form-check-input" id="notwatch">-->
    <!--                        <label class="form-check-label" for="notwatch">Не дивитися (9)</label>-->
    <!--                    </div>-->
    <!--                    <div class="form-group form-check">-->
    <!--                        <input type="checkbox" class="form-check-input" id="notwatch">-->
    <!--                        <label class="form-check-label" for="notwatch">Не дивитися (9)</label>-->
    <!--                    </div>-->
    <!--                    <div class="form-group form-check">-->
    <!--                        <input type="checkbox" class="form-check-input" id="notwatch">-->
    <!--                        <label class="form-check-label" for="notwatch">Не дивитися (9)</label>-->
    <!--                    </div>-->
    <!--                </form>-->
    <!--            </div>-->
    <!--            <div class="mdl-addon">-->
    <!--                <p>+  Створити новий фільм–ліст</p>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--        FIRST MODAL-->

    <!--        SECOND MODAL-->
    <!--        <div class="mdl">-->
    <!--            <div class="mdl-header">-->
    <!--                <p class="mb-0">Додати “Alita: Battle Angel” у <span class="close float-right"><i class="fas fa-times"></i></span></p>-->
    <!--            </div>-->
    <!--            <div class="mdl-content">-->
    <!--                <form>-->
    <!--                    <div class="form-group">-->
    <!--                        <label class="form-label" for="name">Введіть назву нового Фільм-Листу</label>-->
    <!--                        <input type="name" class="form-control" id="name">-->
    <!--                    </div>-->
    <!--                    <button type="submit" class="btn btn-mdl">Додати</button>-->
    <!--                </form>-->
    <!--            </div>-->
    <!--            <div class="mdl-addon unac">-->
    <!--                <p>+  Створити новий фільм–ліст</p>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--        SECOND MODAL-->

    <!--        THIRD MODAL-->
    <div class="mdl">
      <div class="mdl-header">
        <p class="mb-0">
          Додати {{ title }} у
          <span class="close float-right">
            <i class="fas fa-times" @click="close" ref="modalClose"></i>
          </span>
        </p>
      </div>
      <div class="mdl-content mdl-add-btn">
        <form v-if="addingNewFilmList">
          <div class="form-group">
            <label class="form-label" for="name"
              >Введіть назву нового Фільм-Листу</label
            >
            <input type="name" class="form-control" id="name" v-model="newFilmListName"/>
          </div>
          <button 
            class="btn btn-mdl"
            @click.prevent="addNewFilmList"
          >Додати</button>
        </form>
        <form v-else-if="filmLists && filmLists.length">
          <div
            class="form-group form-check"
            v-for="filmList of filmLists"
            :key="filmList.name"
          >
            <input
              type="checkbox"
              :value="filmList.name"
              v-model="checkedFilmLists"
              class="form-check-input"
              :id="filmList.name"
            />
            <label class="form-check-label" :for="filmList.name"
              >{{ filmList.name }} ({{ (filmList.filmsId && filmList.filmsId.length) || 0}})</label
            >
          </div>
        </form>
        <p v-else>
          Немає жодного фільм-листу<br />
          Тисни "Створити новий фільм–ліст" та додавай у нього {{ title }}
        </p>
      </div>
      <div class="mdl-content" v-if="checkedFilmLists.length">
        <button 
          class="btn btn-mdl"
          @click.prevent="addFilmToFilmLists"
        >Додати</button>
      </div>
      <div class="mdl-addon">
        <p
          @click="startAddingFilmList"
        >+ Створити новий фільм–ліст</p>
      </div>
    </div>
    <!--        THIRD MODAL-->
  </div>
</template>

<script>
export default {
  props: ['title', 'filmId'],
  data: () => ({
    checkedFilmLists: [],
    addingNewFilmList: false,
    newFilmListName: '',
    newFilmLists: []
  }),
  async mounted() {
    await this.$store.dispatch('fetchFilmLists')
  },
  computed: {
    filmLists() {
      return (this.$store.getters.filmLists || []).concat(this.newFilmLists)
    },
  },
  methods: {
    close(e) {
      if (
        this.$refs.modalWrapper == e.target ||
        this.$refs.modalClose == e.target
      ) {
        this.$emit("close")
      }
    },
    startAddingFilmList() {
      this.addingNewFilmList = true
    },
    addNewFilmList() {
      if (!this.newFilmLists.find(el => el.name === this.newFilmListName)) {
        this.newFilmLists.push({
          name: this.newFilmListName
        })
        this.addingNewFilmList = false
        this.newFilmListName = ''
      }
    },
    async addFilmToFilmLists() {
      const filmLists = this.filmLists
        .filter(filmList => this.checkedFilmLists.indexOf(filmList.name) !== -1)
        .map(filmList => {
          const filmsId = filmList.filmsId || []
          filmsId.push(this.filmId)

          return {
            ...filmList,
            filmsId
          }
        })

      this.newFilmLists = []
      
      await this.$store.dispatch('setFilmLists', filmLists)
      this.$emit("close")
    },
  },
};
</script>
