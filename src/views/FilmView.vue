<template>
    <div id="film-view">
        <div class="container container-fluid">
            <div class="row justify-content-between">
                <div class="col-xl-7 col-md-6 px-mob-none">
                    <div class="film-description">
                        <div class="imgWrap d-md-none d-sm-flex text-center">
                            <img class="img-fluid" :src="film.Poster" alt="film_poster">
                        </div>
                        <div class="imgStars d-md-none d-sm-block">
                            <div class="rating">
                                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                            </div>
                            <p>рейтинг: 7/10</p>
                        </div>
                        <h3 class="hText">{{film.TitleUA}}</h3>
                        <div class="fBox">
                            <p>{{film.Released}}</p>
                            <p>YouFilm: {{film.imdbRating}}</p>
                            <p>{{film.Country}}</p>
                        </div>
                        <div class="fText">
                            <p>{{film.Plot}}
                            </p>
                        </div>
                        <div class="fTable">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Країна</td>
                                        <td>{{film.Country}}</td>
                                    </tr>
                                    <tr>
                                        <td>Актори</td>
                                        <td>{{film.Actors}}</td>
                                    </tr>
                                    <tr>
                                        <td>Тривалість</td>
                                        <td>{{film.Runtime}}</td>
                                    </tr>
                                    <tr>
                                        <td>Жанр</td>
                                        <td>{{film.Genre}}</td>
                                    </tr>
                                    <tr>
                                        <td>Режисер</td>
                                        <td>{{film.Director}}</td>
                                    </tr>
                                    <tr>
                                        <td>Нагороди</td>
                                        <td>{{film.Awards}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="fText d-md-none d-sm-block">
                            <p><span class="heart"></span>додати в фільм-лист</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 d-tablet-none">
                    <div class="imgWrap">
                        <img class="img-fluid" :src="film.Poster" alt="film_poster">
                    </div>
                    <div class="imgStars">
                        <div class="rating">
                            <span></span><span></span><span></span><span></span><span></span>
                            <span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <p>рейтинг: 7/10</p>
                        <p><span class="heart"></span>додати в фільм-лист</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h3 class="hText">Відгуки</h3>
                    <div class="comment crComment container">
                        <div class="row">
                            <div class="col-xl-2 col-sm-3">
                                <div class="usWrap">
                                    <img class="img-fluid" src="../../public/img/icon_user.svg" alt="user icon">
                                    <p>Головна вовчиця</p>
                                    <div class="imgStars imgStarsMob d-md-none d-sm-block">
                                        <div class="rating">
                                            <span></span><span></span><span></span><span></span><span></span>
                                            <span></span><span></span><span></span><span></span><span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-10 col-sm-9 px-mob-none">
                                <div class="row mobNotVisible">
                                    <div class="col-12 d-flex align-items-baseline align-items-sm-center">
                                        <p class="pr20 gold">Оцінка фільму:</p>
                                        <div class="rating">
                                            <span></span><span></span><span></span><span></span><span></span>
                                            <span></span><span></span><span></span><span></span><span></span>
                                        </div>
                                    </div>
                                </div>
                                <form id="cForm">
                                    <textarea id="cArea" rows="3" placeholder="Залишити відгук"></textarea>
                                </form>

                                <div class="row">
                                    <div class="col-12 col-left">
                                        <button class="btn btn-comment">Надіслати</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="comment rComment container">
                        <div class="row">
                            <div class="col-xl-2 col-sm-3">
                                <div class="usWrap">
                                    <img class="img-fluid" src="../../public/img/icon_user.svg" alt="user icon">
                                    <p>Головна вовчиця</p>
                                    <div class="dtext d-xl-none d-md-none d-sm-none divMob">вчора</div>
                                </div>
                            </div>
                            <div class="col-xl-10 col-sm-9">
                                <div class="cTextWrap">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Donec posuere metus et tortor pulvinar venenatis.
                                        Aliquam erat volutpat. Nam ultrices semper felis, at laoreet metus
                                    </p>
                                    <p>
                                        оцінка: <span class="points">7/10</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 text-center">
                    <button class="btn bGold">Більше</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FilmView',
        data: () => ({
            films: [],
            film: {}
        }),
        async mounted() {
            const id = this.$route.params.id
            this.film = await this.$store.dispatch('fetchFilmByID', id)
            //this.films = await this.$store.dispatch('fetchFilms')
            //this.film = this.films[Math.floor(Math.random() * this.films.length)]
        }
    }
</script>