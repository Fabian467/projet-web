<template>
    <div class="movie-gallery">
      <div class="gallery-options">
        <input type="text" v-model="search" placeholder="Search a movie">
        <label for="dog-sort">Trier par : </label>
        <select v-model="moviesSortType" id="movie-sort">
          <option value="AZTitle">Noms de A à Z</option>
          <option value="ZATitle">Noms de Z à A</option>
          <option value="Croissant">Films triés par années dans l'ordre croissant</option>
          <option value="Décroissant">Films triés par années dans l'ordre décroissant</option>
        </select>
      </div>
      <div class="gallery">
      <MovieCard
      v-for="movie in MovieOrganizedData"
        :key="movie.id"
        :title="movie.title"
        :original_title="movie.original_title"
        :date="movie.release_date"
        :image= "movie.image"/>
        </div>
    </div>
</template>


<script>

import getMovieData from '../api/movieRepository.js';
import MovieCard from './MovieCard.vue';

export default {
  name: 'MovieGallery',
  
  computed: {
    MovieOrganizedData: function() {
      const field = ["AZTitle", "ZATitle"].includes(this.moviesSortType) ? "title" : "release_date"
      const reversed = ["ZATitle", "Décroissant"].includes(this.moviesSortType)
      const filterFunc = (a) => a.title.toLowerCase().includes(this.search.toLowerCase())
      const comparator = (a, b) => a[field].localeCompare(b[field])
      let data = this.MovieData.filter(filterFunc)
      data = data.sort(comparator)
      if (reversed) data = data.reverse()
      return data
    }
  },

  components: {
      MovieCard
  },

  data() {
      return {
          MovieData: [],
          search: sessionStorage.getItem("search") || "",
          moviesSortType: sessionStorage.getItem("moviesSortType") || "Croissant",
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
  },

  watch: {
    search: function(newSearch) {
      sessionStorage.setItem("search", newSearch)
    },
    moviesSortType: function(newMovieSortType) {
      sessionStorage.setItem("moviesSortType", newMovieSortType)
    }
  }
}
</script>


<style scoped>


.gallery {
  display:flex;
  gap: 20px;
  row-gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  position:absolute;
  width: 94vw;
  margin-left: 3vw;
  margin-top: 40%;
}

.gallery-options {
  display: flex;
}

body{
  background-color: beige;
}
</style>