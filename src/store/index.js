import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    //temporary action
    async createFilm({commit}, json) {
      try {
        const data =  JSON.parse(json)
        delete data.Ratings
        delete data.DVD
        delete data.BoxOffice
        delete data.Website
        delete data.Response
        delete data.Rated
        delete data.Metascore
        delete data.imdbVotes
        console.log(data)
        return await firebase.database().ref(`/films/`).push(data)
      } catch (e) {
        throw e
      }
    }
  },
  modules: {
  }
})
