<template>
    <div>
        <form @submit.prevent="postFilm">
            <input 
                type="text"
                placeholder="json"
                v-model="text"
            >
            <input 
                type="text"
                placeholder="назва українською"
                v-model="ua"
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
        text: '',
        ua: ''
    }),
    methods: {
        postFilm() {
            this.$store.dispatch('createFilm', {json: this.text, ua: this.ua})
        }
    }
}
</script>