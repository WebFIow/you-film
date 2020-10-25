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
							<li
								v-for="film in searchedTitles"
								:key="film.id"
							>
								<router-link
									:to="`/film-view/${film.id}`"
								>
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
						<FilmTable
							:page="page" 
							:pageSize="pageSize" 
							:films="items"	
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
					</div>
					<div class="col-xl-3 col-md-4">
						<h3 class="hText">ФілЬТРИ</h3>
						<button class="accordion" @click="showAcc">ЖАНРИ</button>
						<div class="panel">
							<ul class="accUL">
								<li
                  v-for="genre in genres"
                  :key="genre"
                 
                >
								<input
										:id="gerne"
										type="checkbox"
                    @change="e => {filterFilmsByGenre(e, genre)}"
									/>
									<label :for="genre">{{genre}}</label>
                </li>
							</ul>
						</div>

						<button class="accordion" @click="showAcc">НАГОРОДИ</button>
						<div class="panel">
							<ul class="accUL">
								<li>
									<input
										id="oscar"
										type="checkbox"
										name="rewards"
										value="oscar"
                    v-model="filterSettings.oscar"
									/>
									<label for="oscar">Оскар</label>
								</li>  
							</ul>
						</div>

						<button class="accordion" @click="showAcc">РЕЙТИНГ</button>
						<div class="panel">
							<ul class="accUL">
								<li>
									<input 
                    id="high" 
                    type="checkbox" 
                    name="rating" 
                    value="high"
                    v-model="filterSettings.ratingLtoH"
                  />
									<label for="high">За зростанням</label>
								</li>
								<li>
									<input 
                    id="low" 
                    type="checkbox" 
                    name="rating" 
                    value="low"
                    v-model="filterSettings.ratingHtoL" 
                  />
									<label for="low">За спаданням</label>
								</li>
							</ul>
						</div>

						<button class="accordion" @click="showAcc">КРАЇНА ??????</button>
						<div class="panel">
							<ul class="accUL">
								<li>
									<input id="ua" type="checkbox" name="country" value="ua" />
									<label for="ua">Україна</label>
								</li>
								<li>
									<input id="ru" type="checkbox" name="country" value="ru" />
									<label for="ru">Росія</label>
								</li>
							</ul>
						</div>

						<button class="accordion" @click="showAcc">СТУДІЯ</button>
						<div class="panel">
							<ul class="accUL">
								<li>
									<input id="walt" type="checkbox" name="studio" value="walt" />
									<label for="walt">Walt Disney, США</label>
								</li>
								<li>
									<input
										id="warner"
										type="checkbox"
										name="studio"
										value="warner"
									/>
									<label for="warner">Warner Bros., США</label>
								</li>
								<li>
									<input
										id="lionsgate"
										type="checkbox"
										name="studio"
										value="lionsgate"
									/>
									<label for="lionsgate">Lionsgate, Канада-США </label>
								</li>
								<li>
									<input id="uni" type="checkbox" name="studio" value="uni" />
									<label for="uni"> Universal Pictures, США</label>
								</li>
								<li>
									<input
										id="columbia"
										type="checkbox"
										name="studio"
										value="columbia"
									/>
									<label for="columbia">Columbia Pictures, США</label>
								</li>
								<li>
									<input id="fox" type="checkbox" name="studio" value="fox" />
									<label for="fox">20th Century Fox, США</label>
								</li>
								<li>
									<input
										id="paramount"
										type="checkbox"
										name="studio"
										value="paramount"
									/>
									<label for="paramount">Paramount Pictures, США </label>
								</li>
								<li>
									<input
										id="dreamworks"
										type="checkbox"
										name="studio"
										value="dreamworks"
									/>
									<label for="dreamworks">DreamWorks Animation</label>
								</li>
								<li>
									<input id="bbc" type="checkbox" name="studio" value="bbc" />
									<label for="bbc">BBC Television Centre</label>
								</li>
								<li>
									<input
										id="marvel"
										type="checkbox"
										name="studio"
										value="marvel"
									/>
									<label for="marvel">Marvel Studios</label>
								</li>
								<li>
									<input
										id="pixar"
										type="checkbox"
										name="studio"
										value="pixar"
									/>
									<label for="pixar">Pixar Animation Studios</label>
								</li>
								<li>
									<input id="sony" type="checkbox" name="studio" value="sony" />
									<label for="sony">Sony Pictures Entertainment</label>
								</li>
								<li>
									<input
										id="summit"
										type="checkbox"
										name="studio"
										value="summit"
									/>
									<label for="summit">Summit Entertainment</label>
								</li>
								<li>
									<input id="dc" type="checkbox" name="studio" value="dc" />
									<label for="dc">DC Comics</label>
								</li>
								<li>
									<input
										id="bluesky"
										type="checkbox"
										name="studio"
										value="bluesky"
									/>
									<label for="bluesky">Blue Sky Studios</label>
								</li>
								<li>
									<input
										id="mosfilm"
										type="checkbox"
										name="studio"
										value="mosfilm"
									/>
									<label for="mosfilm">Мосфильм</label>
								</li>
								<li>
									<input id="ussr" type="checkbox" name="studio" value="ussr" />
									<label for="ussr">Союзмультфильм</label>
								</li>
								<li>
									<input
										id="lenfilm"
										type="checkbox"
										name="studio"
										value="lenfilm"
									/>
									<label for="lenfilm">Ленфильм</label>
								</li>
							</ul>
						</div>
						<button class="accordion" @click="showAcc">РІК</button>
						<div class="panel">
							<ul class="accUL">
								<li>
									<input 
                    id="old" 
                    type="checkbox" 
                    name="year" 
                    value="old" 
                    v-model="filterSettings.yearLtoH"
                  />
									<label for="old">За зростанням</label>
								</li>
								<li>
									<input 
                    id="new" 
                    type="checkbox" 
                    name="year" 
                    value="new" 
                    v-model="filterSettings.yearHtoL"
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
				<div class="row mb-3">
					
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
import paginationMixin from '@/mixins/pagination.mixin'
import FilmTable from '@/components/FilmTable'

    export default {
        name: 'FilmMain',
        components: {
            FilmTable
        },
        data: () => ({
						films: [],
						searchedTitles: [],
            allFilms: [],
            searchStr: '',
            filteredGenres: [],
            filterSettings: {
              comedy: false,
              detective: false,
              drama: false,
              horror: false,
              documentary: false,
              family: false,
              fantasy: false,
              melodrama: false,
              fight: false,
              ratingHtoL: false,
              ratingLtoH: false,
              oscar: false,
              yearHtoL: false,
              yearLtoH: false
            }
				}),
				mixins: [paginationMixin],
        async mounted() {
            this.allFilms = await this.$store.dispatch('fetchFilms')
						this.films = this.allFilms
            this.setup(this.films)
        },
        computed: {
          genres() {
            return Array.from(
              new Set(
                this.allFilms.map(film => film.Genre)
                .join(', ')
                .split(', ')
              )
            )
          }
        },
				watch: {
					searchStr() {
						this.searchedTitles = this.allFilms
							.filter(film => film.TitleUA.includes(this.searchStr))
							.map(film => ({ title: film.TitleUA, id: film.id }))
          },
          filterSettings: {
            deep: true,
            handler() {
              this.films = this.films.filter(film => {
                let comedy = this.filterSettings.comedy
                let drama = this.filterSettings.drama
                let melodrama = this.filterSettings.melodrama
                let documentary = this.filterSettings.documentary
                let horror = this.filterSettings.horror
                let fantasy = this.filterSettings.fantasy
                let detective = this.filterSettings.detective
                let fight = this.filterSettings.fight
                let family = this.filterSettings.family
                let oscar = this.filterSettings.oscar
              })
            }
          }
				},
        methods: {
            showAcc(e) {
                const el = e.target
                el.classList.toggle("active")
                const panel = el.nextElementSibling
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 70 + "px"
                }
						},
						setup(films) {
							this.setupPagination(films)
						},	
						handleSearchQuery() {
							this.films = this.allFilms.filter(film => film.TitleUA.includes(this.searchStr))
							this.setup(this.films)
							this.searchStr = ''
							setTimeout(() => {
								this.searchedTitles = []
							}, 0)
            },
            filterFilmsByGenre(e, genre) {
              console.log(e)
              let genreIndex = this.filteredGenres.indexOf(genre)

              if (genreIndex !== -1) {
                this.filteredGenres.splice(genreIndex, 1)
              } else {
                this.filteredGenres.push(genre)
              }

              this.films = this.allFilms.filter(film => {
                return this.filteredGenres.every(genre => film.Genre.includes(genre))
              })
              console.log(this.films.length)
              this.setup(this.films)
            }
        }
    }
</script>
