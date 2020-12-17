<template>
  <div id="actor-view">
    <div class="container container-fluid">
      <div class="row justify-content-between">
        <div class="col-xl-7 col-md-6 px-mob-none">
          <div class="actor-description">
            <div class="imgWrap d-md-none d-sm-flex text-center">
              <img class="img-fluid" :src="actor.url" />
              <div class="actor-rating">
                <a class="like">
                  <i class="fa fa-thumbs-o-up"></i>
                  <input
                    class="qty1"
                    name="qty1"
                    readonly="readonly"
                    type="text"
                    value="130"
                  />
                </a>
                <a class="dislike">
                  <i class="fa fa-thumbs-o-down"></i>
                  <input
                    class="qty1"
                    name="qty1"
                    readonly="readonly"
                    type="text"
                    value="30"
                  />
                </a>
              </div>
            </div>
            <h3 class="hText">{{ actor.name }}</h3>
            <div class="fTable">
              <table class="table">
                <tbody>
                  <tr>
                    <td>Дата народження</td>
                    <td>{{ actor.born }}</td>
                  </tr>
                  <tr>
                    <td>Вік</td>
                    <td>{{ age }}</td>
                  </tr>
                  <tr>
                    <td>Країна</td>
                    <td>{{ actor.country }}</td>
                  </tr>
                  <tr>
                    <td class="no-bb">Фільми:</td>
                  </tr>
                  <div class="actor-info--actors">
                    <div
                      class="actor-info--actors---wrap"
                      v-for="film in actorFilms"
                      :key="film.id"
                    >
                      <img :src="film.Poster" />
                      <router-link :to="`/film-view/${film.id}`">{{ film.TitleUA }}</router-link>
                    </div>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 d-tablet-none">
          <div class="imgWrap">
            <img class="img-fluid" :src="actor.url" />
          </div>
          <div class="actor-rating">
            <a class="like">
              <i class="fa fa-thumbs-o-up"></i>
              <input
                class="qty1"
                name="qty1"
                readonly="readonly"
                type="text"
                v-model="likes"
              />
            </a>
            <a class="dislike">
              <i class="fa fa-thumbs-o-down"></i>
              <input
                class="qty1"
                name="qty1"
                readonly="readonly"
                type="text"
                v-model="dislikes"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3 class="hText">Відгуки</h3>
          <div v-if="user.name">
            <div class="comment crComment container">
              <div class="row">
                <div class="col-xl-2 col-sm-3">
                  <div class="usWrap">
                    <span class="profile-img"><span class="profile-img--name">{{nameFirstLetter}}</span></span>
                    <p>{{name}}</p>
                    <div class="imgStars imgStarsMob d-md-none d-sm-block">
                      <div class="rating">
                        <span
                          v-for="i of 10"
                          :key="i"
                          :class="{gold: i <= actor.imdbRating}"
                          @click="setRating(i)"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-10 col-sm-9 px-mob-none">
                  <div class="row mobNotVisible">
                    <div
                      class="col-12 d-flex align-items-baseline align-items-sm-center"
                    >
                      <p class="pr20 gold">Оцінка фільму:</p>
                      <div class="rating">
                        <span
                          v-for="i of 10"
                          :key="i"
                          :class="{gold: i <= rating}"
                          @click="setRating(i)"
                          @mouseenter="setRating(i)"
                          @mouseleave="setRating(i)"
                        ></span>
                      </div>
                      <span class="pr20 gold mobNotVisible" v-show="rating">
                          {{rating}} / 10
                      </span>
                    </div>
                  </div>
                  <div id="cForm">
                    <textarea
                      id="cArea"
                      rows="3"
                      placeholder="Залишити відгук"
                      v-model="comment"
                      maxlength="500"
                    >
                    </textarea>
                    <span class="cLen">{{comment.length}}/500</span>
                  </div>
                  <div class="row">
                    <div class="col-12 col-left">
                      <button type="submit" @click.prevent="submitComment" class="btn btn-comment">Надіслати</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="actor.comments && actor.comments.length">
            <Comment 
              v-for="comment in actor.comments"
              :key="comment.date"
              :user="comment.user"
              :text="comment.text"
              :rating="comment.rating"
              :date="comment.date"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from '@/components/FilmViewComment'

export default {
  name: "ActorView",
  data: () => ({
    actor: '',
    modalIsVisible: false,
    id: "",
    rating: 0,
    user: {},
    comment: '',
    actorFilms: []
  }),
  async mounted() {
    this.id = this.$route.params.id
    this.actor = await this.$store.dispatch("fetchActorById", this.id)
    await this.$store.dispatch('fetchInfo')
    for(let i = 0; i < this.actor.films_id.length; i++) {
      let film = await this.$store.dispatch('fetchFilmById', this.actor.films_id[i])
      this.actorFilms.push(film)
    }
    this.user = this.$store.getters.info
  },
  computed: {
    likes() {
      return Math.floor(Math.random() * 300 )
    },
    dislikes() {
      return Math.floor(Math.random() * 100)
    },
    name() {
      return this.$store.getters.info ? this.$store.getters.info.name : false;
    },
    nameFirstLetter() {
      return this.$store.getters.info.name
        ? this.$store.getters.info.name[0].toUpperCase()
        : false;
    },
    age() {
      if (this.actor) {
        const dob = new Date(...this.actor.born.split(' ').reverse())
        const now = new Date()
        return now.getYear() - dob.getYear()
      } else return ''
    }
  },
  methods: {
    showAddToWatchListModal() {
      this.modalIsVisible = true;
    },
    hideAddToWatchListModal() {
      this.modalIsVisible = false;
    },
    setRating(rating) {
      this.rating = rating;
    },
    async submitComment() {
      if (this.comment.trim() && this.rating) {
        const comment = {
          rating: this.rating,
          text: this.comment,
          user: this.user.name,
          date: Date.now(),
        };

        this.comment = "";
        this.rating = 0;

        const dataToUpdate = {
          comments: this.actor.comments,
          comment,
          id: this.id,
        };

        try {
          await this.$store.dispatch("addCommentToActor", dataToUpdate);
          this.actor = await this.$store.dispatch("fetchActorById", this.id);
        } catch (e) {
          this.$message(
            "На жаль, можна залишити лише один коментар з одного акаунту"
          );
        }
      }
    },
  },
  components: {
    Comment,
  },
};
</script>

<style lang="scss">
.no-bb {
  border-bottom: none !important;
}
.hText {
  line-height: 1.2 !important;
}
  .actor-info--actors---wrap {
    display: flex;
    flex-direction: column;
    max-width: 320px;

    a {
      font-size: 14px;
      text-align: center;
      font-family: "Playfair Display";
      color: #ffffff;
      text-transform: uppercase;
      padding: 20px 0;
      transition: color 0.3s linear;
    }

    img {
      width: 100%;
    }
  }

  td {
    border-bottom: 1px solid #C4C4C4 !important;
  }
 
</style>