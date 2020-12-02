<template>
    <div>
        <div id="actors">
            <div class="actors-wrap container">
                <div class="actors-text">
                    <h1>АКТОРИ</h1>
                    <p>Миттєвий пошук фільмів та зручний серфінг по сайту.<br>Ви завжди будете в курсі коли і що дивитись.</p>
                </div>
                <form  class="search">
                    <input class="search" type="text" placeholder="Пошук" >
                    <button value=""></button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .pagination {
        display: flex;
        justify-content: center;
    }
</style>

<script>
    import paginationMixin from "@/mixins/pagination.mixin";
    import ActorsTable from "@/components/ProducerTable";

    export default {
        name: "ProducersMain",
        components: {
            FilmTable,
        },
        data: () => ({
            films: [],
            searchedTitles: [],
            allFilms: [],
            searchStr: '',
            Countries: [],
            Genres: [],
        })
    }
</script>