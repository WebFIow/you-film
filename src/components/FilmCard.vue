<template>
	<div class="fCardsWrap">
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
				<h5>{{ film.TitleUA }}</h5>
				<p class="sticker">{{ film.Released }}, {{ film.Genre }}</p>
				<p>
					{{ film.Plot }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: ['film']
}
</script>