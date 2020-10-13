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
                    <div class="col-xl-3 col-md-4 dTablet">
                        <div class="row">
                            <div class="col-sm-6 col-12">
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

                            <div class="col-sm-6 col-12">
                                <h3 class="hText mobLeft">ФілЬТРИ</h3>
                                <div class="filtersDiv">
                                    <button class="accordion" @click="showAcc">ЖАНРИ</button>
                                    <div class="panel">
                                        <ul class="accUL">
                                            <li>
                                                <input id="comedy" type="checkbox" name="genres" value="comedy">
                                                <label for="comedy">Комедії</label>
                                            </li>
                                            <li>
                                                <input id="melodrama" type="checkbox" name="genres" value="melodrama">
                                                <label for="melodrama">Мелодрами</label>
                                            </li>
                                            <li>
                                                <input id="detective" type="checkbox" name="genres" value="detective">
                                                <label for="detective">Детективи</label>
                                            </li>
                                            <li>
                                                <input id="fight" type="checkbox" name="genres" value="fight">
                                                <label for="fight">Боєвіки</label>
                                            </li>
                                            <li>
                                                <input id="fantasy" type="checkbox" name="genres" value="fantasy">
                                                <label for="fantasy">Фєнтезі</label>
                                            </li>
                                            <li>
                                                <input id="drama" type="checkbox" name="genres" value="drama">
                                                <label for="drama">Драми</label>
                                            </li>
                                            <li>
                                                <input id="family" type="checkbox" name="genres" value="family">
                                                <label for="family">Сімейні</label>
                                            </li>
                                            <li>
                                                <input id="horror" type="checkbox" name="genres" value="horror">
                                                <label for="horror">Жахи</label>
                                            </li>
                                            <li>
                                                <input id="documentary" type="checkbox" name="genres" value="documentary">
                                                <label for="documentary">Документальні</label>
                                            </li>
                                        </ul>
                                    </div>

                                    <button class="accordion" @click="showAcc">НАГОРОДИ</button>
                                    <div class="panel">
                                        <ul class="accUL">
                                            <li>
                                                <input id="oscar" type="checkbox" name="rewards" value="oscar">
                                                <label for="oscar">Оскар</label>
                                            </li>
                                            <li>
                                                <input id="gold_globus" type="checkbox" name="rewards" value="gold_globus">
                                                <label for="gold_globus">Золотий глобус</label>
                                            </li>
                                            <li>
                                                <input id="br_ac" type="checkbox" name="rewards" value="br_ac">
                                                <label for="br_ac">Британська академія</label>
                                            </li>
                                            <li>
                                                <input id="cannes" type="checkbox" name="rewards" value="cannes">
                                                <label for="cannes">Каннський кінофестиваль</label>
                                            </li>
                                            <li>
                                                <input id="ceasar" type="checkbox" name="rewards" value="ceasar">
                                                <label for="ceasar">Сезар</label>
                                            </li>
                                            <li>
                                                <input id="nika" type="checkbox" name="rewards" value="nika">
                                                <label for="nika">Ніка</label>
                                            </li>
                                            <li>
                                                <input id="gold_orel" type="checkbox" name="rewards" value="gold_orel">
                                                <label for="gold_orel">Золотий орел</label>
                                            </li>
                                            <li>
                                                <input id="saturn" type="checkbox" name="rewards" value="saturn">
                                                <label for="saturn">Сатурн</label>
                                            </li>
                                            <li>
                                                <input id="hoa" type="checkbox" name="rewards" value="hoa">
                                                <label for="hoa">Гойя</label>
                                            </li>
                                            <li>
                                                <input id="emmi" type="checkbox" name="rewards" value="emmi">
                                                <label for="emmi">Єммі</label>
                                            </li>
                                            <li>
                                                <input id="asia_cinema" type="checkbox" name="rewards" value="asia_cinema">
                                                <label for="asia_cinema">Азиатська кіноакадемія</label>
                                            </li>
                                            <li>
                                                <input id="eu_cinema" type="checkbox" name="rewards" value="eu_cinema">
                                                <label for="eu_cinema">Європейська кіноакадемія</label>
                                            </li>
                                            <li>
                                                <input id="mtv" type="checkbox" name="rewards" value="mtv">
                                                <label for="mtv">Премія канала “MTV”</label>
                                            </li>
                                            <li>
                                                <input id="gold_berry" type="checkbox" name="rewards" value="gold_berry">
                                                <label for="gold_berry">Золота малина</label>
                                            </li>
                                            <li>
                                                <input id="george" type="checkbox" name="rewards" value="george">
                                                <label for="george">Жорж</label>
                                            </li>
                                            <li>
                                                <input id="berlin" type="checkbox" name="rewards" value="berlin">
                                                <label for="berlin">Берлінський кінофестиваль</label>
                                            </li>
                                            <li>
                                                <input id="vienna" type="checkbox" name="rewards" value="vienna">
                                                <label for="vienna">Венеціанський кінофестиваль</label>
                                            </li>
                                            <li>
                                                <input id="mmkf" type="checkbox" name="rewards" value="mmkf">
                                                <label for="mmkf">ММКФ</label>
                                            </li>
                                            <li>
                                                <input id="carlovy_vary" type="checkbox" name="rewards" value="carlovy_vary">
                                                <label for="carlovy_vary">Карлови Вари</label>
                                            </li>
                                            <li>
                                                <input id="san_sebastian" type="checkbox" name="rewards" value="san_sebastian">
                                                <label for="san_sebastian">Сан-Себастьян</label>
                                            </li>
                                            <li>
                                                <input id="sandens" type="checkbox" name="rewards" value="sandens">
                                                <label for="sandens">Санденс</label>
                                            </li>
                                        </ul>
                                    </div>

                                    <button class="accordion" @click="showAcc">РЕЙТИНГ</button>
                                    <div class="panel">
                                        <ul class="accUL">
                                            <li>
                                                <input id="high" type="checkbox" name="rating" value="high">
                                                <label for="high">За зростанням</label>
                                            </li>
                                            <li>
                                                <input id="low" type="checkbox" name="rating" value="low">
                                                <label for="low">За спаданням</label>
                                            </li>
                                        </ul>
                                    </div>

                                    <button class="accordion" @click="showAcc">КРАЇНА</button>
                                    <div class="panel">
                                        <ul class="accUL">
                                            <li>
                                                <input id="ua" type="checkbox" name="country" value="ua">
                                                <label for="ua">Україна</label>
                                            </li>
                                            <li>
                                                <input id="ru" type="checkbox" name="country" value="ru">
                                                <label for="ru">Росія</label>
                                            </li>
                                        </ul>
                                    </div>

                                    <button class="accordion" @click="showAcc">СТУДІЯ</button>
                                    <div class="panel">
                                        <ul class="accUL">
                                            <li>
                                                <input id="walt" type="checkbox" name="studio" value="walt">
                                                <label for="walt">Walt Disney, США</label>
                                            </li>
                                            <li>
                                                <input id="warner" type="checkbox" name="studio" value="warner">
                                                <label for="warner">Warner Bros., США</label>
                                            </li>
                                            <li>
                                                <input id="lionsgate" type="checkbox" name="studio" value="lionsgate">
                                                <label for="lionsgate">Lionsgate, Канада-США </label>
                                            </li>
                                            <li>
                                                <input id="uni" type="checkbox" name="studio" value="uni">
                                                <label for="uni"> Universal Pictures, США</label>
                                            </li>
                                            <li>
                                                <input id="columbia" type="checkbox" name="studio" value="columbia">
                                                <label for="columbia">Columbia Pictures, США</label>
                                            </li>
                                            <li>
                                                <input id="fox" type="checkbox" name="studio" value="fox">
                                                <label for="fox">20th Century Fox, США</label>
                                            </li>
                                            <li>
                                                <input id="paramount" type="checkbox" name="studio" value="paramount">
                                                <label for="paramount">Paramount Pictures, США </label>
                                            </li>
                                            <li>
                                                <input id="dreamworks" type="checkbox" name="studio" value="dreamworks">
                                                <label for="dreamworks">DreamWorks Animation</label>
                                            </li>
                                            <li>
                                                <input id="bbc" type="checkbox" name="studio" value="bbc">
                                                <label for="bbc">BBC Television Centre</label>
                                            </li>
                                            <li>
                                                <input id="marvel" type="checkbox" name="studio" value="marvel">
                                                <label for="marvel">Marvel Studios</label>
                                            </li>
                                            <li>
                                                <input id="pixar" type="checkbox" name="studio" value="pixar">
                                                <label for="pixar">Pixar Animation Studios</label>
                                            </li>
                                            <li>
                                                <input id="sony" type="checkbox" name="studio" value="sony">
                                                <label for="sony">Sony Pictures Entertainment</label>
                                            </li>
                                            <li>
                                                <input id="summit" type="checkbox" name="studio" value="summit">
                                                <label for="summit">Summit Entertainment</label>
                                            </li>
                                            <li>
                                                <input id="dc" type="checkbox" name="studio" value="dc">
                                                <label for="dc">DC Comics</label>
                                            </li>
                                            <li>
                                                <input id="bluesky" type="checkbox" name="studio" value="bluesky">
                                                <label for="bluesky">Blue Sky Studios</label>
                                            </li>
                                            <li>
                                                <input id="mosfilm" type="checkbox" name="studio" value="mosfilm">
                                                <label for="mosfilm">Мосфильм</label>
                                            </li>
                                            <li>
                                                <input id="ussr" type="checkbox" name="studio" value="ussr">
                                                <label for="ussr">Союзмультфильм</label>
                                            </li>
                                            <li>
                                                <input id="lenfilm" type="checkbox" name="studio" value="lenfilm">
                                                <label for="lenfilm">Ленфильм</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <button class="accordion" @click="showAcc">РІК</button>
                                    <div class="panel">
                                        <ul class="accUL">
                                            <li>
                                                <input id="old" type="checkbox" name="year" value="old">
                                                <label for="old">За зростанням</label>
                                            </li>
                                            <li>
                                                <input id="new" type="checkbox" name="year" value="new">
                                                <label for="new">За спаданням</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-md-8">
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
                    <div class="col-xl-3 col-md-4 dTabletNone">
                        <h3 class="hText">ФілЬТРИ</h3>
                        <button class="accordion" @click="showAcc">ЖАНРИ</button>
                        <div class="panel">
                            <ul class="accUL">
                                <li>
                                    <input id="comedy" type="checkbox" name="genres" value="comedy">
                                    <label for="comedy">Комедії</label>
                                </li>
                                <li>
                                    <input id="melodrama" type="checkbox" name="genres" value="melodrama">
                                    <label for="melodrama">Мелодрами</label>
                                </li>
                                <li>
                                    <input id="detective" type="checkbox" name="genres" value="detective">
                                    <label for="detective">Детективи</label>
                                </li>
                                <li>
                                    <input id="fight" type="checkbox" name="genres" value="fight">
                                    <label for="fight">Боєвіки</label>
                                </li>
                                <li>
                                    <input id="fantasy" type="checkbox" name="genres" value="fantasy">
                                    <label for="fantasy">Фєнтезі</label>
                                </li>
                                <li>
                                    <input id="drama" type="checkbox" name="genres" value="drama">
                                    <label for="drama">Драми</label>
                                </li>
                                <li>
                                    <input id="family" type="checkbox" name="genres" value="family">
                                    <label for="family">Сімейні</label>
                                </li>
                                <li>
                                    <input id="horror" type="checkbox" name="genres" value="horror">
                                    <label for="horror">Жахи</label>
                                </li>
                                <li>
                                    <input id="documentary" type="checkbox" name="genres" value="documentary">
                                    <label for="documentary">Документальні</label>
                                </li>
                            </ul>
                        </div>

                        <button class="accordion" @click="showAcc">НАГОРОДИ</button>
                        <div class="panel">
                            <ul class="accUL">
                                <li>
                                    <input id="oscar" type="checkbox" name="rewards" value="oscar">
                                    <label for="oscar">Оскар</label>
                                </li>
                                <li>
                                    <input id="gold_globus" type="checkbox" name="rewards" value="gold_globus">
                                    <label for="gold_globus">Золотий глобус</label>
                                </li>
                                <li>
                                    <input id="br_ac" type="checkbox" name="rewards" value="br_ac">
                                    <label for="br_ac">Британська академія</label>
                                </li>
                                <li>
                                    <input id="cannes" type="checkbox" name="rewards" value="cannes">
                                    <label for="cannes">Каннський кінофестиваль</label>
                                </li>
                                <li>
                                    <input id="ceasar" type="checkbox" name="rewards" value="ceasar">
                                    <label for="ceasar">Сезар</label>
                                </li>
                                <li>
                                    <input id="nika" type="checkbox" name="rewards" value="nika">
                                    <label for="nika">Ніка</label>
                                </li>
                                <li>
                                    <input id="gold_orel" type="checkbox" name="rewards" value="gold_orel">
                                    <label for="gold_orel">Золотий орел</label>
                                </li>
                                <li>
                                    <input id="saturn" type="checkbox" name="rewards" value="saturn">
                                    <label for="saturn">Сатурн</label>
                                </li>
                                <li>
                                    <input id="hoa" type="checkbox" name="rewards" value="hoa">
                                    <label for="hoa">Гойя</label>
                                </li>
                                <li>
                                    <input id="emmi" type="checkbox" name="rewards" value="emmi">
                                    <label for="emmi">Єммі</label>
                                </li>
                                <li>
                                    <input id="asia_cinema" type="checkbox" name="rewards" value="asia_cinema">
                                    <label for="asia_cinema">Азиатська кіноакадемія</label>
                                </li>
                                <li>
                                    <input id="eu_cinema" type="checkbox" name="rewards" value="eu_cinema">
                                    <label for="eu_cinema">Європейська кіноакадемія</label>
                                </li>
                                <li>
                                    <input id="mtv" type="checkbox" name="rewards" value="mtv">
                                    <label for="mtv">Премія канала “MTV”</label>
                                </li>
                                <li>
                                    <input id="gold_berry" type="checkbox" name="rewards" value="gold_berry">
                                    <label for="gold_berry">Золота малина</label>
                                </li>
                                <li>
                                    <input id="george" type="checkbox" name="rewards" value="george">
                                    <label for="george">Жорж</label>
                                </li>
                                <li>
                                    <input id="berlin" type="checkbox" name="rewards" value="berlin">
                                    <label for="berlin">Берлінський кінофестиваль</label>
                                </li>
                                <li>
                                    <input id="vienna" type="checkbox" name="rewards" value="vienna">
                                    <label for="vienna">Венеціанський кінофестиваль</label>
                                </li>
                                <li>
                                    <input id="mmkf" type="checkbox" name="rewards" value="mmkf">
                                    <label for="mmkf">ММКФ</label>
                                </li>
                                <li>
                                    <input id="carlovy_vary" type="checkbox" name="rewards" value="carlovy_vary">
                                    <label for="carlovy_vary">Карлови Вари</label>
                                </li>
                                <li>
                                    <input id="san_sebastian" type="checkbox" name="rewards" value="san_sebastian">
                                    <label for="san_sebastian">Сан-Себастьян</label>
                                </li>
                                <li>
                                    <input id="sandens" type="checkbox" name="rewards" value="sandens">
                                    <label for="sandens">Санденс</label>
                                </li>
                            </ul>
                        </div>

                        <button class="accordion" @click="showAcc">РЕЙТИНГ</button>
                        <div class="panel">
                            <ul class="accUL">
                                <li>
                                    <input id="high" type="checkbox" name="rating" value="high">
                                    <label for="high">За зростанням</label>
                                </li>
                                <li>
                                    <input id="low" type="checkbox" name="rating" value="low">
                                    <label for="low">За спаданням</label>
                                </li>
                            </ul>
                        </div>

                        <button class="accordion" @click="showAcc">КРАЇНА</button>
                        <div class="panel">
                            <ul class="accUL">
                                <li>
                                    <input id="ua" type="checkbox" name="country" value="ua">
                                    <label for="ua">Україна</label>
                                </li>
                                <li>
                                    <input id="ru" type="checkbox" name="country" value="ru">
                                    <label for="ru">Росія</label>
                                </li>
                            </ul>
                        </div>

                        <button class="accordion" @click="showAcc">СТУДІЯ</button>
                        <div class="panel">
                            <ul class="accUL">
                                <li>
                                    <input id="walt" type="checkbox" name="studio" value="walt">
                                    <label for="walt">Walt Disney, США</label>
                                </li>
                                <li>
                                    <input id="warner" type="checkbox" name="studio" value="warner">
                                    <label for="warner">Warner Bros., США</label>
                                </li>
                                <li>
                                    <input id="lionsgate" type="checkbox" name="studio" value="lionsgate">
                                    <label for="lionsgate">Lionsgate, Канада-США </label>
                                </li>
                                <li>
                                    <input id="uni" type="checkbox" name="studio" value="uni">
                                    <label for="uni"> Universal Pictures, США</label>
                                </li>
                                <li>
                                    <input id="columbia" type="checkbox" name="studio" value="columbia">
                                    <label for="columbia">Columbia Pictures, США</label>
                                </li>
                                <li>
                                    <input id="fox" type="checkbox" name="studio" value="fox">
                                    <label for="fox">20th Century Fox, США</label>
                                </li>
                                <li>
                                    <input id="paramount" type="checkbox" name="studio" value="paramount">
                                    <label for="paramount">Paramount Pictures, США </label>
                                </li>
                                <li>
                                    <input id="dreamworks" type="checkbox" name="studio" value="dreamworks">
                                    <label for="dreamworks">DreamWorks Animation</label>
                                </li>
                                <li>
                                    <input id="bbc" type="checkbox" name="studio" value="bbc">
                                    <label for="bbc">BBC Television Centre</label>
                                </li>
                                <li>
                                    <input id="marvel" type="checkbox" name="studio" value="marvel">
                                    <label for="marvel">Marvel Studios</label>
                                </li>
                                <li>
                                    <input id="pixar" type="checkbox" name="studio" value="pixar">
                                    <label for="pixar">Pixar Animation Studios</label>
                                </li>
                                <li>
                                    <input id="sony" type="checkbox" name="studio" value="sony">
                                    <label for="sony">Sony Pictures Entertainment</label>
                                </li>
                                <li>
                                    <input id="summit" type="checkbox" name="studio" value="summit">
                                    <label for="summit">Summit Entertainment</label>
                                </li>
                                <li>
                                    <input id="dc" type="checkbox" name="studio" value="dc">
                                    <label for="dc">DC Comics</label>
                                </li>
                                <li>
                                    <input id="bluesky" type="checkbox" name="studio" value="bluesky">
                                    <label for="bluesky">Blue Sky Studios</label>
                                </li>
                                <li>
                                    <input id="mosfilm" type="checkbox" name="studio" value="mosfilm">
                                    <label for="mosfilm">Мосфильм</label>
                                </li>
                                <li>
                                    <input id="ussr" type="checkbox" name="studio" value="ussr">
                                    <label for="ussr">Союзмультфильм</label>
                                </li>
                                <li>
                                    <input id="lenfilm" type="checkbox" name="studio" value="lenfilm">
                                    <label for="lenfilm">Ленфильм</label>
                                </li>
                            </ul>
                        </div>
                        <button class="accordion" @click="showAcc">РІК</button>
                        <div class="panel">
                            <ul class="accUL">
                                <li>
                                    <input id="old" type="checkbox" name="year" value="old">
                                    <label for="old">За зростанням</label>
                                </li>
                                <li>
                                    <input id="new" type="checkbox" name="year" value="new">
                                    <label for="new">За спаданням</label>
                                </li>
                            </ul>
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
                    panel.style.maxHeight = panel.scrollHeight + 70 + "px"
                }
            }
        }
    }
</script>
