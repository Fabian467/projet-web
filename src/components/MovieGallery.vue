<template>
    <div class="movie-gallery">
      <MovieCard
      v-for="movie in MovieData"
        :key="movie.id"
        :title="movie.title"
        :original_title="movie.original_title"
        :date="movie.release_date"
        :image= "movie.image"/>
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
          this.MovieData = await getMovieData()
          console.log(this.MovieData)
      }
  }
}
</script>


<style scoped>
.movie-gallery {
  display:flex;
  row-gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  position:absolute;
  width: 94vw;
  margin-left: 3vw;
  margin-top: 40%;
}

body{
  background-color: beige;
}

/* div{
  width: 100vw;
  height: auto;
  } */
</style>