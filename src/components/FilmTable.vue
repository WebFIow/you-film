<template>
<div>
  <FilmCard 
    v-for="film of films"
    :key="film.name"
    :film="film"
  />
</div>
</template>

<script>
import FilmCard from './FilmCard'

export default {
  props: ['films', 'page', 'pageSize'],
  components: {
    FilmCard
  }
}
</script>