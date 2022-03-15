<template>
 <div class = "movie-card">
    <div>
        <h2 class = "title">{{title}}</h2>
        <p class = "date">{{date}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MovieCard',
  props: {
      title: {type: String, required: true},
      original_title :{type: String, required: true},
      date : {type: Number, required: true},
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