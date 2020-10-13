<template>
    <div>
        <div id="films">
            <div class="films-wrap container">
                <div class="films-text">
                    <h1>Фільми</h1>
                    <p>Миттєвий пошук фільмів та зручний серфінг по сайту.<br>Ви завжди будете в курсі коли і що дивитись.</p>
                    <form action="" class="search">
                        <input class="search" type="text" placeholder="Пошук" >
                        <button value=""></button>
                    </form>
                </div>
            </div>
        </div>
        <div id="film-main">
            <div class="container container-fluid">
                <div class="row">
                    <div class="col-xl-9">
                        <h3 class="hText">Список фільмів</h3>
                        <div class="fCardsWrap">
                            <div class="fCard">
                                <div class="fImgCard">
                                    <img src="../../public/img/films/fim1.jpeg" alt="film poster">
                                </div>
                                <div class="fTextCard">
                                    <h5>Alita: Battle Angel</h5>
                                    <p class="sticker">2019, Action</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Pretium ullamcorper pharetra,
                                        facilisi at. Congue elementum magnis integer
                                        tincidunt. Non tristique congue amet, morbi.
                                    </p>
                                </div>
                            </div>

                            <div class="fCard">
                                <div class="fImgCard">
                                    <img src="../../public/img/films/fim1.jpeg" alt="film poster">
                                </div>
                                <div class="fTextCard">
                                    <h5>Alita: Battle Angel</h5>
                                    <p class="sticker">2019, Action</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Pretium ullamcorper pharetra,
                                        facilisi at. Congue elementum magnis integer
                                        tincidunt. Non tristique congue amet, morbi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <h3 class="hText">ФілЬТРИ</h3>
                        <button class="accordion" @click="showAcc">ЖАНРИ</button>
                        <div class="panel">
                            <ul class="accUL">
                                <li><a href="#">Диагностика ходовой части</a><span class="text-right">от 250 грн.</span></li>
                                <li><a href="#">Диагностика электрооборудования</a><span class="text-right">250 грн.</span></li>
                                <li><a href="#">Диагностика аккумулятора</a><span class="text-right">50 грн.</span></li>
                                <li><a href="#">Диагностика технических жидкостей (антифриз, тормозная, омыватель)</a><span class="text-right">от 250 грн.</span></li>
                                <li><a href="#">Визуальная диагностика освещения автомобиля</a><span class="text-right">250 грн.</span></li>
                                <li><a href="#">Замер давления в топливной системе</a><span class="text-right">250 грн.</span></li>
                            </ul>
                        </div>

                        <button class="accordion" @click="showAcc">НАГОРОДИ</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <button class="accordion" @click="showAcc">РЕЙТИНГ</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <button class="accordion" @click="showAcc">КРАЇНА</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <button class="accordion" @click="showAcc">СТУДІЯ</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <button class="accordion" @click="showAcc">РІК</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <h3 class="hText mtH">Підбірка фільмів</h3>
                        <div class="fListWrap">
                            <div class="fEl">
                                <img src="../../public/img/films/fim1.jpeg" alt="film poster">
                                <div class="fElText">
                                    <p>Top 8 Facts About DC’s Shazam! Movie</p>
                                    <p>May 12, 2020</p>
                                </div>
                            </div>

                            <div class="fEl">
                                <img src="../../public/img/films/fim1.jpeg" alt="film poster">
                                <div class="fElText">
                                    <p>Top 8 Facts About DC’s Shazam! Movie</p>
                                    <p>May 12, 2020</p>
                                </div>
                            </div>

                            <div class="fEl">
                                <img src="../../public/img/films/fim1.jpeg" alt="film poster">
                                <div class="fElText">
                                    <p>Top 8 Facts About DC’s Shazam! Movie</p>
                                    <p>May 12, 2020</p>
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
        name: 'FilmMain',
        methods: {
            showAcc(e) {
                const el = e.target
                el.classList.toggle("active")
                const panel = el.nextElementSibling
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 50 + "px"
                }
            }
        }
    }
</script>
