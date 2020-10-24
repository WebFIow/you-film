import firebase from 'firebase/app'

export default {
  actions: {
    async fetchFilms() {
      try {
        const films = (await firebase.database().ref(`/films`).once('value')).val()
        return films ? Object.keys(films).map(key => ({ ...films[key], id: key })) : []
      } catch (e) {
        throw e
      }
    },
    async fetchFilmByID({}, id) {
      try {
        const film = (await firebase.database().ref(`/films/${id}`).once('value')).val()
        return film ? {...film, id} : {}
      } catch (e) {
        throw e
      }
    },
  }
}