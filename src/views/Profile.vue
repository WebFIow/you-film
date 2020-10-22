<template>
    <div id="profile">
        <div class="container container-fluid">
            <div class="row">
                <div class="col-4 justify-content-center">
                    <div class="sideProfile">
                        <div class="circle">P</div>
                        <p class="name">Петро Петренко</p>
                    </div>
                </div>
                <div class="col-8">
                    <ul class="tabs" role="tablist">
                        <li>
                            <input type="radio" name="tabs" id="tab1" checked />
                            <label for="tab1"
                                   role="tab"
                                   aria-selected="true"
                                   aria-controls="panel1"
                                   tabindex="0">фільм-лісти</label>
                            <div id="tab-content1"
                                 class="tab-content"
                                 role="tabpanel"
                                 aria-labelledby="description"
                                 aria-hidden="false">
                                <p>
                                    Немає жодного фільм-листа 😢<br>Прямуй на сторінку Фільми, та створи свої власні підбірки фільмів.
                                </p>

                                <button class="accordion" @click="showAcc">Подвитися пізніше</button>
                                <div class="panel">
                                    <ul class="accUL">
                                        <li>
                                            <div class="fCard">
                                                <div class="fImgCard">
                                                    <img src="../../public/img/films/fim1.jpeg" alt="film poster">
                                                </div>
                                                <div class="fTextCard">
                                                    <div class="row mx-0 justify-content-between">
                                                        <h5>Форест Гамп</h5>
                                                        <p>
                                                            <span class="star"></span><span class="rtNum">8.6</span>
                                                            <span class="heart"></span>
                                                        </p>
                                                    </div>
                                                    <p class="sticker">2019, Action</p>
                                                    <p>text</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </li>

                        <li>
                            <input type="radio" name="tabs" id="tab2" />
                            <label for="tab2"
                                   role="tab"
                                   aria-selected="false"
                                   aria-controls="panel2"
                                   tabindex="0">Особисті дані</label>
                            <div id="tab-content2"
                                 class="tab-content"
                                 role="tabpanel"
                                 aria-labelledby="specification"
                                 aria-hidden="true">
                                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla?</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h3 class="hText">Рекомендації</h3>
                    <div class="recommendWrap">
                        <div class="recommendFilmWrap">
                            <img src="../../public/img/films/fim1.jpeg">
                            <p>Форест Гамп</p>
                        </div>
                        <div class="recommendFilmWrap">
                            <img src="../../public/img/films/fim1.jpeg">
                            <p>Форест Гамп</p>
                        </div>
                        <div class="recommendFilmWrap">
                            <img src="../../public/img/films/fim1.jpeg">
                            <p>Форест Гамп</p>
                        </div>
                        <div class="recommendFilmWrap">
                            <img src="../../public/img/films/fim1.jpeg">
                            <p>Форест Гамп</p>
                        </div>
                        <div class="recommendFilmWrap">
                            <img src="../../public/img/films/fim1.jpeg">
                            <p>Форест Гамп</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Profile',
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
            }
        }
    }
</script>