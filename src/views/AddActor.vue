<template>
    <div>
        <form @submit.prevent="postFilm">
            <input 
                type="text"
                placeholder="json"
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
            <button 
              type="submit"
            >
              send
            </button>
        </form>
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
        name: '',
        born: 0,
        died: 0
    }),
    methods: {
        postActor() {
            this.$store.dispatch('createActor', {
              name: this.name,
              born: this.born,
              died: this.died
            })
        }
    },
}
</script>