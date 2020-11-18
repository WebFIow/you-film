import firebase from 'firebase/app'

export default {
  actions: {
    async fetchDirectors() {
      try {
        const directors = (await firebase.database().ref(`/directors`).once('value')).val()
        return directors ? Object.keys(directors).map(key => ({ ...directors[key], id: key })) : []
      } catch (e) {
        throw e
      }
    },
    async addCommentToDirector({dispatch}, { id, comment, comments }) {
      const uid = await dispatch('getUid')
      const existedComment = comments.find(comment => comment.userId === uid);
      if (!existedComment) {
        comment.userId = uid
        comments.unshift(comment)
        await firebase.database().ref(`/directors/${id}/comments`).set(comments)
      }
    },
    async fetchDirectorById({}, id) {
      try {
        const director = (await firebase.database().ref(`/directors/${id}`).once('value')).val()
        director.comments = director.comments || [];
        return director ? {...director, id} : {}
      } catch (e) {
        throw e
      }
    },
  }
}
