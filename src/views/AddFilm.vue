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
        <p 
            v-for="actor in actors"
            :key="actor.name"
        >
            {{actor.name}}
        </p>
    </div>
</template>

<style >
 p {
     color: #fff;
 }

 .app-content {
     margin-top: 85px;
 }

 input {
     color: #fff !important;
 }
</style>

<script>
export default {
    data: () => ({
        text: '',
        ua: '',
        films: [], 
        actors: []
    }),
    methods: {
        postFilm() {
            this.$store.dispatch('createFilm', {json: this.text, ua: this.ua})
        }
    },
    async mounted() {
        this.films = await this.$store.dispatch('fetchFilms')
        const actors = []
        console.log(this.films.length)
        this.films.forEach(film => {
            const namesArray = film.Actors.split(', ')
            namesArray.forEach(name => {
                if(actors.indexOf(name) == -1) {
                    actors.push(name)
                    this.actors.push({
                        name,
                        films_id: [film.id]
                    })
                } else {
                    this.actors[actors.indexOf(name)].films_id.push(film.id)
                }
            })
        })
    }
}
</script>

