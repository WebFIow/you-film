<template>
  <div>
    <div class="main-layout">
      <Header />
      <main class="app-content">
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
  name: "main-layout",
  components: {
    Header,
    Footer,
  },
}
</script>