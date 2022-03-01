<template>
<div>
  <div id="app">
    <img alt="Ghibli logo" src="../assets/logo.png">
    <p> Ghibli 
      Carousel
      </p>
  </div>
</div>
</template>

<script>

export default {
  name: 'Logo',
}
</script>

<style>
img{
  
  width: 50%;
  height: 50%;
  margin:auto;
  position: absolute;
}

p {
  position: absolute;
  margin-left: 0;
  margin-top: 0;
  font-size: 200px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Steelfish Rg', 'helvetica neue',
            helvetica, arial, sans-serif;
  font-weight: 800;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: rgb(0, 180, 180);
}
</style>
