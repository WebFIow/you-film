import firebase from 'firebase/app'

export default {
  actions: {
    async register({ dispatch }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({
          name,
          email,
          playlists: [],
          likedFilms: []
        })
      } catch (e) {
        throw e
      }
    },
    async login({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        throw e
      }
    },
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    async logout({ commit }) {
      try {
        await firebase.auth().signOut()
        commit('clearInfo')
      } catch (e) {
        throw e
      }
    }
  }
}
