<template xmlns="http://www.w3.org/1999/html">
    <div id="title">
        <div class="title-wrap">
            <div class="container">
                  <h2 class="col-md-7">Люби. Живи. Дивись фільми.</h2>
                  <p>In films we trust</p>
                    <form action="" class="search">
                         <input class="search" type="text" placeholder="Пошук" >
                        <button value=""></button>
                     </form>
                <button class="button-mob"><a href="#register">Зареєструватися</a></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Title'
    }
    // $('a[href^="#"]').click(function () {
    //     var target = $(this).attr('href');
    //     $('html, body').animate({scrollTop: $(target).offset().top - 90 }, 800);
    //     return false;
    // });
</script>