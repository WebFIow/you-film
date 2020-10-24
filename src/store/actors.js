import firebase from 'firebase/app'

export default {
  actions: {
    async fetchActors() {
      try {
        const actors = (await firebase.database().ref(`/actors`).once('value')).val()
        return actors ? Object.keys(actors).map(key => ({ ...actors[key], id: key })) : []
      } catch (e) {
        throw e
      }
    },
    
  }
}