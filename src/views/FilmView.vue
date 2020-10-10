<template>
    <div id="film-view">
        <div class="container container-fluid">
            <div class="row justify-content-between">
                <div class="col-7">
                    <div class="film-description">
                        <h3 class="hText">Wonder Park</h3>
                        <div class="fBox">
                            <p>21 марта, 2019</p>
                            <p>YouFilm: 5,8\10</p>
                            <p>США</p>
                        </div>
                        <div class="fText">
                            <p>Pellentesque quis dui varius, dapibus velit
                                id, iaculis ipsum. Morbi ac eros feugiat,
                                lacinia elit ut elementum turpis. Curabitur justo
                                sapien, tempus sit amet rutrum eu, commodo eu lacus.
                                Morbi in ligula nibh. Maecenas ut mi at odio hendrerit
                                eleifend tempor vitae augue. Fusce eget arcu et
                                nibh dapibus maximus consectetur in est.
                            </p>
                        </div>
                        <div class="fTable">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Країна</td>
                                        <td>США</td>
                                    </tr>
                                    <tr>
                                        <td>Актори</td>
                                        <td>Sofia Mali, Jennifer Garner, Ken Hudson Campbell</td>
                                    </tr>
                                    <tr>
                                        <td>Тривалість</td>
                                        <td>1h 29m</td>
                                    </tr>
                                    <tr>
                                        <td>Жанр</td>
                                        <td>Animation, Adventure, Comedy</td>
                                    </tr>
                                    <tr>
                                        <td>Режисер</td>
                                        <td>Animation, Adventure, Comedy</td>
                                    </tr>
                                    <tr>
                                        <td>Нагороди</td>
                                        <td>Animation, Adventure, Comedy</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="imgWrap">
                        <img class="img-fluid" src="../../public/img/films/fim1.jpeg" alt="film_poster">
                    </div>
                    <div class="imgStars">
                        <div class="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <p>рейтинг: 7/10</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h3 class="hText">Відгуки</h3>
                    <div class="comment crComment container">
                        <div class="row">
                            <div class="col-2">
                                <div class="usWrap">
                                    <img class="img-fluid" src="../../public/img/icon_user.svg" alt="user icon">
                                    <p>Головна вовчиця</p>
                                </div>
                            </div>
                            <div class="col-10">
                                <form id="cForm">
                                    <textarea id="cArea" rows="3" placeholder="Залишити відгук"></textarea>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-left">
                                <button class="btn btn-comment">Надіслати</button>
                            </div>
                        </div>
                    </div>
                    <div class="comment rComment container">
                        <div class="row">
                            <div class="col-2">
                                <div class="usWrap">
                                    <img class="img-fluid" src="../../public/img/icon_user.svg" alt="user icon">
                                    <p>Головна вовчиця</p>
                                </div>
                            </div>
                            <div class="col-10">
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
        name: 'FilmView'
    }
</script>