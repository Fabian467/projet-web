<template>
  <div id="logo">
    <img alt="Ghibli logo" src="../assets/logo.png">
    <!-- <p> Ghibli 
      Carousel
      </p> -->
</div>
</template>

<script>

export default {
  name: 'Logo',
}
</script>

<style scoped>

.logo {
  width: 100%;
  height: 100%;
}
img{
  width: 80%;
  height: auto;
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
</style>
