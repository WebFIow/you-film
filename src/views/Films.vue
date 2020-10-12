<template>
    <div>
        <div id="films">
            <div class="films-wrap container">
                <div class="films-text">
                    <h1>Фільми</h1>
                    <p>Миттєвий пошук фільмів та зручний серфінг по сайту.<br>Ви завжди будете в курсі коли і що дивитись.</p>
                </div>
            </div>
        </div>
        <Categories />
    </div>
</template>

<script>
    // @ is an alias to /src
    import Categories from "./Categories";


    export default {
        name: 'Films',
        components: {
            Categories
        }
    }
</script>