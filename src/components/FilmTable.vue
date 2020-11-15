<template>
<div>

<div v-for="film of films" :key="film.name">
  <FilmCard 
    
    
    :filmData="film"
  />
</div>
</div>
</template>

<script>
import FilmCard from './FilmCard'

export default {
  props: ['films'],
  components: {
    FilmCard
  }
}
</script>