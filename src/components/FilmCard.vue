<template>
	<div class="fCardsWrap">
		<AddToWatchListModal 
			v-if="modalIsVisible"
			:title="film.TitleUA"
			:filmId="film.id"
			@close="hideAddToWatchListModal"
		/>
		<div class="fCard">
			<div class="fImgCard">
				<img
					:src="
						film.Poster !== 'N/A' ? film.Poster : '/*image of unknown movie*/'
					"
					alt="film poster"
				/>
			</div>
			<div class="fTextCard">
				<div class="row mx-0 justify-content-between">
					<h5>
						<router-link
							:to="`/film-view/${film.id}`"
						>
							{{ film.TitleUA }}
						</router-link>
					</h5>
					<p>
						<span class="star"></span><span class="rtNum">{{film.imdbRating}}</span>
						<span
              v-if="$route.path !== '/profile'"
						  class="heart"
							@click="showAddToWatchListModal(film.TitleUA)"
						></span>
            <span 
              v-else
              @click="removeFilm"
            >
              &times;
            </span>
					</p>
				</div>
				<p class="sticker">{{ film.Released }}, {{ film.Genre }}</p>
				<p>
					{{ film.Plot }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import AddToWatchListModal from './ModalAddToWatchList'

export default {
	props: ['film'],
	components: {
		AddToWatchListModal
	},
	data: () => ({
		modalIsVisible: false
  }),
	methods: {
		showAddToWatchListModal() {
			this.modalIsVisible = true
		},
		hideAddToWatchListModal() {
			this.modalIsVisible = false
    },
    removeFilm() {
      this.$emit('removeHandler', this.film.id)
    }
	}
}
</script>