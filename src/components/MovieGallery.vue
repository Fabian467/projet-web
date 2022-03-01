<template>
    <div class="movie-gallery">
		<MovieCard :title="MovieData[0].title" :description="MovieData[0].description" :picture="MovieData[0].picture"/>
</div>
</template>


<script>

import getMovieData from '../api/movieRepository.js';
import MovieCard from './MovieCard.vue';

export default {
  name: 'MovieGallery',

  components: {
      MovieCard,
  },
    data() {
        return {
            MovieData: []
        }
    },

    created: function() {
		this.retrieveMovieData()
	},

  methods: {
      async retrieveMovieData() {
          this.MovieData = await getMovieData()
      }
  }
}
</script>


<style scoped>

</style>