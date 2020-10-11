<template>
  <div class="home">
    <Title />
    <About />
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/components/About.vue'
import Title from '@/components/Title.vue'
import Register from '@/components/Register.vue'
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    About, Register, Title
  }
}
</script>
