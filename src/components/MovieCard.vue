<template>
 <div class = "movie-card">
     <img class="picture"/>{{picture}}
    <div>
        <h2 class = "title">{{title}}</h2>
        <p2 class = "description">{{description}}</p2>
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
</style>