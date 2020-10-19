<template>
    <div id="error">
        <Header />
        <div class="error-wrap">
            <div class="container">
                <div class="error-text">
                    <h1>Ой, дитино, ну і де ти лазиш?</h1>
                    <h1> Чув дзвін, та не знаю звідки він.</h1>
                </div>
            </div>
        </div>
         <Footer />
    </div>

</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
  name: "error-layout",
  components: {
    Header,
    Footer,
  },
}
</script>