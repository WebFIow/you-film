<template>
    <div>
        <form @submit.prevent="postActor">
            <input 
                type="text"
                placeholder="name"
                v-model="name"
            >
            <input type="text"
              v-model="born"
              placeholder="born"
            >
             <input type="text"
              v-model="died"
              placeholder="died or -1"
            >
            <input type="text"
              v-model="url"
              placeholder="url"
            >
            <button 
              type="submit"
            >
              send
            </button>
        </form>
          <p 
            v-for="actor in A"
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

 input, button {
     height: 40px;
     margin-bottom: 20px;
     color: #fff !important;
 }

form {
    width: 50%;
    display: flex;
    flex-direction: column;
}
</style>

<script>
export default {
    data: () => ({
        name: '',
        born: '',
        died: '',
        url: '',
        films: [],
        actors: [],
        alreadyActors: [],
        A: []
    }),
    methods: {
        async postActor() {
            const actor = this.actors.find(el => el.name === this.name)
            console.log(actor)
            this.$store.dispatch('createDirector', {
              name: this.name,
              born: this.born,
              died: this.died,
              url: this.url,
              films_id: actor.films_id
            })

            this.alreadyActors = await this.$store.dispatch('fetchDirectors')
           this.A = this.actors.map(el => {
                const common = this.alreadyActors.find(a => a.name === el.name)

                if(!common) {
                    return el
                } else {
                    return 
                }
            })

        this.A = this.A.filter(el => el !== undefined)

        this.name = ''
        this.born = ''
        this.died = ''
        this.url = ''
        }
    },
    async mounted() {
        this.films = await this.$store.dispatch('fetchFilms')
        const actors = []
        console.log(this.films.length)
        this.films.forEach(film => {
            const namesArray = film.Director.split(', ')
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

        this.alreadyActors = await this.$store.dispatch('fetchActors')
        this.A = this.actors.map(el => {
                const common = this.alreadyActors.find(a => a.name === el.name)

                if(!common) {
                    return el
                } else {
                    return 
                }
            })

        this.A = this.A.filter(el => el !== undefined)
    }
}
</script>
