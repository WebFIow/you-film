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
  <div id="actors-table">
    <div class="container container-fluid">
      <div class="row tabColReverse">
        <div class="col-xl-9 col-md-8">
          <h3 class="hText">Список акторів</h3>
          <div class="row">
            <p
              class="sticker mr-2"
              v-for="filterName in Countries"
              :key="filterName"
            >
              {{ filterName }}
              <i class="fas fa-times" @click="removeFilter(filterName)"></i>
            </p>
          </div>
          <p v-if="!actors.length">
            Не знайшлося жодного актора за Вашим запитом
          </p>
          <ActorsTable :page="page" :pageSize="pageSize" :actors="items" />
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
            <button class="accordion" @click="showAcc">ДАТА НАРОДЖЕННЯ</button>
            <div class="panel">
              <ul class="accUL">
                <li>
                  <input
                    id="old"
                    type="radio"
                    name="year"
                    @change="sortActorsByProp('dob', 1)"
                  />
                  <label for="old">За зростанням</label>
                </li>
                <li>
                  <input
                    id="new"
                    type="radio"
                    name="year"
                    @change="sortActorsByProp('dob', -1)"
                  />
                  <label for="new">За спаданням</label>
                </li>
              </ul>
            </div>

            <button class="accordion" @click="showAcc">КРАЇНА</button>
            <div class="panel">
              <ul class="accUL">
                <!-- <li v-for="country in countries" :key="country">
                  <input
                          :id="country"
                          type="checkbox"
                          v-model="Countries"
                          :value="country"
                  />
                  <label :for="country">{{ country }}</label>
                </li> -->
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
                    @change="sortActorsByProp('rating', 1)"
                  />
                  <label for="high">За зростанням</label>
                </li>
                <li>
                  <input
                    id="low"
                    type="radio"
                    name="rating"
                    @change="sortActorsByProp('rating', -1)"
                  />
                  <label for="low">За спаданням</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
import ActorsTable from "@/components/ActorsTable";

export default {
  name: "ActorsMain",
  components: {
    ActorsTable,
  },
  mixins: [paginationMixin],
  data: () => ({
    actors: [],
    searchedTitles: [],
    allActors: [],
    searchStr: "",
    Countries: []
  }),
  async mounted() {
    this.allActors = await this.$store.dispatch("fetchActors");
    this.actors = this.allActors;

    this.setup(this.actors);
  },
  methods: {
    setup(actors) {
      this.pageSize = 12;
      this.setupPagination(actors);
    },
    sortActorsByProp(prop, order) {
      if (prop === 'dob') {
        this.actors.sort((a, b) => order * (
          +a.born.split(' ').reverse().join('')
          - +b.born.split(' ').reverse().join('')
          )
        )
      } else {
        this.actors.sort((a, b) => order * (+a[prop] - +b[prop]));
      }
      this.setup(this.actors);
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
  },
};
</script>
