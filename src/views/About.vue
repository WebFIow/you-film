<template>
  <div>
    <Title /> 
    <About />
  </div>
</template>

<script>
import About from '@/components/About.vue'
import Title from '@/components/Title.vue'

export default {
  components: {
    About, Title
  }  
}
</script>