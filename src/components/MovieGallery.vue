<template>
    <div class="movie-gallery">
      <MovieCard
      v-for="movie in MovieData"
        :key="movie.id"
        :title="movie.title"
        :description="movie.description"
        :picture="movie.picture"/>
    </div>
</template>


<script>

import getMovieData from '../api/movieRepository.js';
import MovieCard from './MovieCard.vue';

export default {
  name: 'MovieGallery',

  components: {
      MovieCard
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
          this.MovieData = getMovieData()
          console.log(this.MovieData)
      }
  }
}
</script>


<style>

</style>