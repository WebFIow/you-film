import firebase from 'firebase/app'

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    async register({ dispatch }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({
          name,
          email,
        })
        await dispatch('fetchInfo')
      } catch (e) {
        throw e
      }
    },
    async login({ commit, dispatch }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        await dispatch('fetchInfo')
      } catch (e) {
        throw e
      }
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
