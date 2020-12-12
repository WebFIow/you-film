<template>
    <div>
        <div id="actors">
            <div class="actors-wrap container">
                <div class="actors-text">
                    <h1>АКТОРИ</h1>
                    <p>Миттєвий пошук фільмів та зручний серфінг по сайту.<br>Ви завжди будете в курсі коли і що дивитись.</p>
                </div>
                <form  class="search">
                    <input class="search" type="text" placeholder="Пошук" >
                    <button value=""></button>
                </form>
            </div>
        </div>
        <div id="actors-table">
            <div class="container container-fluid">
                <div class="row tabColReverse">
                  <ActorsTable 
                    :page="page"
                    :pageSize="pageSize"
                    :actors="items"
                  />
                  <Paginate
                    v-model="page"
                    :page-count="pageCount"
                    :click-handler="pageChangeHandler"
                    :prev-text="''"
                    :next-text="''"
                    :container-class="'pagination'"
                    :page-class="'pageCube'"
                  />
                    <div class="col-xl-3 col-md-4">
                        <h3 class="hText">фільтри</h3>
                        <div class="wMob">

                            <button class="accordion">ДАТА НАРОДЖЕННЯ</button>
                            <div class="panel">
                                <ul class="accUL">
                                    <li>
                                        <input
                                                id="old"
                                                type="radio"
                                                name="year"
                                        />
                                        <label for="old">За зростанням</label>
                                    </li>
                                    <li>
                                        <input
                                                id="new"
                                                type="radio"
                                                name="year"
                                        />
                                        <label for="new">За спаданням</label>
                                    </li>
                                </ul>
                            </div>

                            <button class="accordion" @click="showAcc">КРАЇНА</button>
                            <div class="panel">
                                <ul class="accUL">
                                    
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
                                           />
                                        <label for="high">За зростанням</label>
                                    </li>
                                    <li>
                                        <input
                                                id="low"
                                                type="radio"
                                                name="rating"
                                               
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
        searchStr: '',
    }),
    async mounted() {
      this.allActors = await this.$store.dispatch('fetchActors')
      this.actors = this.allActors;

      this.setup(this.actors);
    },
    methods: {
      setup(actors) {
        this.pageSize = 12
        this.setupPagination(actors);
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
    }
}
</script>