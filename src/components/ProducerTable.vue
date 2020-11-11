<template>
    <div id="producer-table">
        <div class="container container-fluid">
            <div class="row tabColReverse">
            <div class="actors-table--card col-xl-9 col-md-8">
                <div class="actors-table--card---line row">
                    <div class="actors-table--card---item col-xl-3 col-md-6">
                        <img src="../../public/img/actors.png">
                        <div class="actors-table--name">
                            <a href="#">Режисер</a>
                        </div>
                    </div>
                    <div class="actors-table--card---item col-xl-3 col-md-6">
                        <img src="../../public/img/actors.png">
                        <div class="actors-table--name">
                            <a href="#">Режисер</a>
                        </div>
                    </div>
                    <div class="actors-table--card---item col-xl-3 col-md-6">
                        <img src="../../public/img/actors.png">
                        <div class="actors-table--name">
                            <a href="#">Режисер</a>
                        </div>
                    </div>
                    <div class="actors-table--card---item col-xl-3 col-md-6">
                        <img src="../../public/img/actors.png">
                        <div class="actors-table--name">
                            <a href="#">Режисер</a>
                        </div>
                    </div>
                </div>
                <div class="actors-table--card---line mob row">
                    <div class="actors-table--card---item col-xl-3 col-md-6">
                        <img src="../../public/img/actors.png">
                        <div class="actors-table--name">
                            <a href="#">Режисер</a>
                        </div>
                    </div>
                    <div class="actors-table--card---item col-xl-3 col-md-6">
                        <img src="../../public/img/actors.png">
                        <div class="actors-table--name">
                            <a href="#">Режисер</a>
                        </div>
                    </div>
                    <div class="actors-table--card---item col-xl-3 col-md-6">
                        <img src="../../public/img/actors.png">
                        <div class="actors-table--name">
                            <a href="#">Режисер</a>
                        </div>
                    </div>
                    <div class="actors-table--card---item col-xl-3 col-md-6">
                        <img src="../../public/img/actors.png">
                        <div class="actors-table--name">
                            <a href="#">Режисер</a>
                        </div>
                    </div>
                </div>
                <div class="actors-table--card---line mob row">
                    <div class="actors-table--card---item col-xl-3 col-md-6">
                        <img src="../../public/img/actors.png">
                        <div class="actors-table--name">
                            <a href="#">Режисер</a>
                        </div>
                    </div>
                    <div class="actors-table--card---item col-xl-3 col-md-6">
                        <img src="../../public/img/actors.png">
                        <div class="actors-table--name">
                            <a href="#">Режисер</a>
                        </div>
                    </div>
                    <div class="actors-table--card---item col-xl-3 col-md-6">
                        <img src="../../public/img/actors.png">
                        <div class="actors-table--name">
                            <a href="#">Режисер</a>
                        </div>
                    </div>
                    <div class="actors-table--card---item col-xl-3 col-md-6">
                        <img src="../../public/img/actors.png">
                        <div class="actors-table--name">
                            <a href="#">Режисер</a>
                        </div>
                    </div>
                </div>
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
                            <li v-for="country in countries" :key="country">
                                <input
                                        :id="country"
                                        type="checkbox"
                                        @change="filterFilmsByCountry(country)"
                                />
                                <label :for="country">{{ country }}</label>
                            </li>
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
                                        @change="sortFilmsByProp('imdbRating', 1)"
                                />
                                <label for="high">За зростанням</label>
                            </li>
                            <li>
                                <input
                                        id="low"
                                        type="radio"
                                        name="rating"
                                        @change="sortFilmsByProp('imdbRating', -1)"
                                />
                                <label for="low">За спаданням</label>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
        <ul class="actors-more">
            <li class="more-active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
        </ul>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'ProducerTable'
    }
</script>