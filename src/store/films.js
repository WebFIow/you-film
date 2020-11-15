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
    async addCommentToFilm({dispatch}, { id, comment, comments }) {
      const uid = await dispatch('getUid')
      const existedComment = comments.find(comment => comment.userId === uid);
      if (!existedComment) {
        comment.userId = uid
        comments.unshift(comment)
        await firebase.database().ref(`/films/${id}/comments`).set(comments)
      }
    },
    async fetchFilmLists({dispatch, commit}) {
      const uid = await dispatch('getUid')
      const filmLists = (await firebase.database().ref(`/users/${uid}/filmLists`).once('value')).val()
      filmLists.forEach(filmList => {
        filmList.filmsId = filmList.filmsId || []
      })
      commit('setFilmLists', filmLists)
    },
    async fetchFilmById({}, id) {
      try {
        const film = (await firebase.database().ref(`/films/${id}`).once('value')).val()
        film.comments = film.comments || [];
        return film ? {...film, id} : {}
      } catch (e) {
        throw e
      }
    },
    async setFilmLists({dispatch}, filmLists) {
      try {
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/filmLists`).set(filmLists)
        await dispatch('fetchFilmLists')
      } catch (e) {
        console.log(e)
      }
    }
  }
}