<template>
  <div id="app">
    <Navbar class="navbar" />
    <HomePage class="homepage" />
  </div>
</template>

<script>
import HomePage from "./components/Homepage/Homepage";
import Navbar from "./Navbar";

export default {
  name: "App",
  components: {
    HomePage,
    Navbar,
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
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  grid-template-rows: 50px 1fr 20px;
  background-image: url("./assets/noise.png");
  background-repeat: repeat;
  background-color: #242f65;
}

.navbar {
  grid-column: 1/3;
  grid-row: 1;
  z-index: 2;
}
.homepage {
  grid-column: 2;
  grid-row: 2;
}
@font-face {
  font-family: "Cocogoose";
  src: local("Cocogoose"),
    url("./assets/font/cocogoose/Cocogoose Pro-trial.ttf") format("truetype");
}
</style>
