<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout'
import ErrorLayout from './layouts/ErrorLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'error') + '-layout'
    }
  }, 
  components: {
    MainLayout, 
    ErrorLayout
  },
  async mounted() {
    await this.$store.dispatch('fetchFilms')
    await this.$store.dispatch('fetchActors')
  }
}
</script>
