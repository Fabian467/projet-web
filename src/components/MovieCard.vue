<template>
 <div class = "movie-card">
    <div>
        <h2 class = "title">{{title}}</h2>
        <h3 class = "original_title">{{original_title}} </h3>
        <h3 class = "date">{{date}}</h3>
        <img v-bind:src = "image">
    </div>
  </div>
</template>


<script>
export default {
  name: 'MovieCard',
  props: {
      title: {type: String, required: true},
      original_title :{type: String, required: true},
      date : {type: String, required: true},
      image : {type: String, required: true},
  }
}
</script>


<style>
.movie-card {
  width: 23vw;
  height: auto;
  padding: 30px;
  background-color: rgb(100, 100, 241);
  border-radius: 10%;
  display: flex;
  justify-content: center;
}

h2 {
  font-size: 10 vw;
  font-family: 'Steelfish Rg', 'helvetica neue',
                  helvetica, arial, sans-serif;
}

h3 {
  font-size: 20 px;
}

div{
  width: 100%;
  height: auto;
  }

img{
  width:80%;
  height:auto;
}



</style>