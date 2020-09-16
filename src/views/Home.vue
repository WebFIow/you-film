<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link to="/add-film">Добавить фильм</router-link>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="test-wr-for-scss">1221</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
