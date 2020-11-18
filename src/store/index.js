import Vue from 'vue'
import Vuex from 'vuex'
import firebase, { registerVersion } from 'firebase/app'
import films from './films'
import actors from './actors'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: {},
    filmLists: []
  },
  mutations: {
    setInfo(state, info) {
      state.info = info
    },
    setFilmLists(state, filmLists) {
      state.filmLists = filmLists
    },
    clearInfo(state) {
      state.info = {}
    }
  },
  getters: {
    filmLists: s => s.filmLists,
    info: s => s.info,
  },
  actions: {
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    async fetchInfo({ dispatch, commit }) {
      const uid = await dispatch('getUid')
      const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
      commit('setInfo', info)
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
    async createActor({ }, { name, born, died, url, films_id }) {
      const data = {
        name, url, born, died, films_id
      }
      try {
        const actor = await firebase.database().ref(`/actors/`).push(data)
      } catch (e) {
        throw e
      }
    },
    async createDirector({ }, { name, born, died, url, films_id }) {
      const data = {
        name, url, born, died, films_id
      }
      try {
        const actor = await firebase.database().ref(`/directors/`).push(data)
      } catch (e) {
        throw e
      }
    },
    async updateInfo({ dispatch, commit }, toUpdate) {
      try {
        const uid = await dispatch('getUid')
        const updateData = { ...this.getters.info, ...toUpdate }
        await firebase.database().ref(`/users/${uid}/info`).update(updateData)
        await dispatch('fetchInfo')
      } catch (e) {
        throw e
      }
    },
  },
  modules: {
    films, actors, auth
  }
})
