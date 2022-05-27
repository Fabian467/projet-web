<template>
<div>
  
  <div class="logo">
    <Logo/>
  </div>

  <div class="movie-gallery">
    <MovieGallery/>
  </div>
</div>
</template>

<script>

import Logo from './components/Logo.vue'
import MovieGallery from './components/MovieGallery.vue'


export default {
  name: 'GhibliGallery',
  components: {
    Logo,
    MovieGallery,
  },
}
</script>

<style>
body{
  background-color:rgba(100, 148, 237, 0.779);
}
</style>
