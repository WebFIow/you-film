<template>
    <div>
        <form @submit.prevent="postFilm">
            <input 
                type="text"
                v-model="text"
            >
            <button 
              type="submit"
            >
              send
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        text: ''
    }),
    methods: {
        postFilm() {
            this.$store.dispatch('createFilm', this.text)
        }
    }
}
</script>