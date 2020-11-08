<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
    <div id="actor-view">
        <div class="actor-view--wrap container">
            <div class="actor-view--info row">
                 <div class="actor-info--text col-5">
                        <p class="actor-name"><span>Том Фелтон</span></p>
                        <p>Дата народження<span>01 січня 2000 </span></p>
                        <p>Вік<span>N років (N січня 20NN)</span></p>
                        <p>Країна<span>США</span></p>
                        <p>Фільми:</p>
                     <div class="actor-info--films row">
                         <div class="actor-info--films---wrap col-4">
                             <img src="../../public/img/actor-film.png">
                             <a href="#">Гаррі Поттер</a>
                         </div>
                         <div class="actor-info--films---wrap col-4">
                             <img src="../../public/img/actor-film.png">
                             <a href="#">Гаррі Поттер</a>
                         </div>
                         <div class="actor-info--films---wrap col-4">
                             <img src="../../public/img/actor-film.png">
                             <a href="#">Гаррі Поттер</a>
                         </div>
                     </div>
                 </div>
                <div class="actor-info--img col-3">
                    <img src="../../public/img/actors.png">
                    <div class="actor-rating">
                    </div>
                </div>
            </div>
            <div class="actor-reviews">
                <h2>Відгуки</h2>
                <div class="reviews-card">
                    <div class="account-icon">
                        <span><img src="../../public/img/actor-img.png"></span>
                        <p><span>Головна вовчиця</span></p>
                    </div>
                    <form method="post" class="reviews-card--line">
                        <textarea rows="2" name="text" placeholder="Залишити відгук"></textarea>
                        <input type="submit" value="Надіслати">
                    </form>
                </div>
                <div class="reviews">
                    <div class="account-icon">
                        <span><img src="../../public/img/actor-img.png"></span>
                        <p><span>Головна вовчиця</span></p>
                    </div>
                    <div class="reviews-line">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere metus et tortor pulvinar venenatis. Aliquam erat volutpat. Nam ultrices semper felis, at laoreet metus</p>
                        <p class="reviews-rating">Оцінка:<span>7</span>/10</p>
                    </div>
                </div>
                <div class="reviews">
                    <div class="account-icon">
                        <span><img src="../../public/img/actor-img.png"></span>
                        <p><span>Головна вовчиця</span></p>
                    </div>
                    <div class="reviews-line">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere metus et tortor pulvinar venenatis. Aliquam erat volutpat. Nam ultrices semper felis, at laoreet metus</p>
                        <p class="reviews-rating">Оцінка:<span>7</span>/10</p>
                    </div>
                </div>
                <div class="reviews">
                    <div class="account-icon">
                        <span><img src="../../public/img/actor-img.png"></span>
                        <p><span>Головна вовчиця</span></p>
                    </div>
                    <div class="reviews-line">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere metus et tortor pulvinar venenatis. Aliquam erat volutpat. Nam ultrices semper felis, at laoreet metus</p>
                        <p class="reviews-rating">Оцінка:<span>7</span>/10</p>
                    </div>
                </div>
                <button class="reviews-more">Більше</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ActorView',
    };
</script>