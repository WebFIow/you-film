import Vue from 'vue'
import Vuex from 'vuex'
import firebase, { registerVersion } from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
  },
    //temporary action
    async createFilm({ }, { json, ua }) {
      try {
        const data = JSON.parse(json)
        delete data.Ratings
        delete data.DVD
        delete data.BoxOffice
        delete data.Website
        delete data.Response
        delete data.Rated
        delete data.Metascore
        delete data.imdbVotes
        data.TitleUA = ua
        console.log(data)
        return await firebase.database().ref(`/films/`).push(data)
      } catch (e) {
        throw e
      }
    },
    async createActor({}, { name, born, died, url, films_id }) {
      const data = {
        name, url, born, died, films_id
      }
      try {
        const actor = await firebase.database().ref(`/actors/`).push(data)
        //return await firebase.database().ref(`/actors/`).push(data)
        console.log('pushed', actor)
      } catch (e) {
        throw e
      }
    },
    async updateInfo({dispatch, commit}, toUpdate) {
      try {
          const uid = await dispatch('getUid')
          const updateData = {...this.getters.info, ...toUpdate}
          await firebase.database().ref(`/users/${uid}/info`).update(updateData)
          commit('setInfo', updateData)
      } catch (e) {
          commit('setError', e)
          throw e
      }
  },
    async fetchFilms() {
      try {
        const films = (await firebase.database().ref(`/films`).once('value')).val()
        return films ? Object.keys(films).map(key => ({ ...films[key], id: key })) : []
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchActors() {
      try {
        const actors = (await firebase.database().ref(`/actors`).once('value')).val()
        return actors ? Object.keys(actors).map(key => ({ ...actors[key], id: key })) : []
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async register({dispatch}, { email, password, name }) {
      try {
        console.log('store')
        console.log(name, email, password)
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log('after createUser....')

        const uid = await dispatch('getUid')
        console.log(uid)
        await firebase.database().ref(`/users/${uid}/info`).set({
          name,
          email,
          playlists: [],
          likedFilms: []
        })
        console.log('created')
      } catch (e) {
        throw e
      }
    }
  },
  modules: {
  }
})
