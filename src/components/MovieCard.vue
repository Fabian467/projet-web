<template>
 <div class = "movie-card">
     <img class="picture"/>{{picture}}
    <div>
        <h2 class = "title">{{title}}</h2>
        <p class = "description">{{description}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MovieCard',
  props: {
      title: {type: String, required: true, default : 'Princesse Mononoke'},
      description: String,
      picture: String,
  }
}
</script>


<style scoped>
.movie-card {
  position: absolute;
  margin-top: 50%;
  margin-left: 50%;
  display: flex;
}

h2 {
  position: relative;
  font-size: 20 px;
}

p {
  position:relative;
  font-size:10 px;
}
</style>