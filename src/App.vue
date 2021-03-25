<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from "./components/Homepage";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url('./assets/noise.png');
  background-repeat: repeat;
  background-color: #242f65;
}
</style>
