<template>
  <div>
    <Title />
    <Register />
  </div>
</template>

<script>

import Register from '@/components/Register.vue'
import Title from '@/components/Title.vue'

export default {
 components: {
    Register, Title
  },
}
</script>


<style scoped>
html {
    scroll-behavior: smooth;
  }
</style>