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
    async addCommentToActor({dispatch}, { id, comment, comments }) {
      const uid = await dispatch('getUid')
      const existedComment = comments.find(comment => comment.userId === uid);
      if (!existedComment) {
        comment.userId = uid
        comments.unshift(comment)
        await firebase.database().ref(`/actors/${id}/comments`).set(comments)
      }
    },
    async fetchActorById({}, id) {
      try {
        const actor = (await firebase.database().ref(`/actors/${id}`).once('value')).val()
        actor.comments = actor.comments || [];
        return actor ? {...actor, id} : {}
      } catch (e) {
        throw e
      }
    },
  }
}
