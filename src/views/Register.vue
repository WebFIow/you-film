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
  data: () => ({
    name: '',
    email: '',
    password: '',
    agreed: false
  }),
  methods: {
    async register() {
       const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }

      try {
        await this.$store.dispatch('register', formData)
        this.$router.push('/')
      } catch (e) {}
    }
  }
}
</script>
