<template>
    <div id="actor-view">
        <div class="container container-fluid">
            <div class="row justify-content-between">
                <div class="col-xl-7 col-md-6 px-mob-none">
                    <div class="actor-description">
                        <div class="imgWrap d-md-none d-sm-flex text-center">
                            <img class="img-fluid" src="../../public/img/actors.png" />
                            <div class="actor-rating">
                                <a class="like">
                                    <i class="fa fa-thumbs-o-up"></i>
                                    <input class="qty1" name="qty1" readonly="readonly" type="text" value="130" />
                                </a>
                                <a class="dislike">
                                    <i class="fa fa-thumbs-o-down"></i>
                                    <input class="qty1" name="qty1" readonly="readonly" type="text" value="30" />
                                </a>
                            </div>
                        </div>
                        <h3 class="hText">Том Фелтон</h3>
                        <div class="fTable">
                            <table class="table">
                                <tbody>
                                <tr>
                                    <td>Дата народження</td>
                                </tr>
                                <tr>
                                    <td>Вік</td>
                                </tr>
                                <tr>
                                    <td>Країна</td>
                                </tr>
                                <tr>
                                    <td>Фільми:</td>
                                </tr>
                                <div class="actor-info--films">
                                    <div class="actor-info--films---wrap ">
                                        <img src="../../public/img/actor-film.png">
                                        <a href="#">Гаррі Поттер</a>
                                    </div>
                                    <div class="actor-info--films---wrap ">
                                        <img src="../../public/img/actor-film.png">
                                        <a href="#">Гаррі Поттер</a>
                                    </div>
                                    <div class="actor-info--films---wrap mob">
                                        <img src="../../public/img/actor-film.png">
                                        <a href="#">Гаррі Поттер</a>
                                    </div>
                                </div>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 d-tablet-none">
                    <div class="imgWrap">
                        <img class="img-fluid" src="../../public/img/actors.png" />
                    </div>
                    <div class="actor-rating">
                        <a class="like">
                            <i class="fa fa-thumbs-o-up"></i>
                            <input class="qty1" name="qty1" readonly="readonly" type="text" value="130" />
                        </a>
                        <a class="dislike">
                            <i class="fa fa-thumbs-o-down"></i>
                            <input class="qty1" name="qty1" readonly="readonly" type="text" value="30" />
                        </a>
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
                                    <span class="profile-img"><span class="profile-img--name"></span></span>
                                    <p>Головна вовчиця</p>
                                </div>
                            </div>
                            <div class="col-xl-10 col-sm-9 px-mob-none">
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
                </div>
            </div>
        </div>
        </div>
        </div>
</template>

<script>
    export default {
        name: 'ActorView',
    };
</script>