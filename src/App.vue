<template>
  <div id="app">
    <Navbar class="navbar" />
    <div class="body">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      displayLoader: false,
    };
  },
};
</script>

<style>
#app {
  position: fixed;
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
  font-family: "Cocogoose";
}

.navbar {
  grid-column: 1/3;
  grid-row: 1;
  z-index: 4;
}

.body {
  grid-column: 2;
  grid-row: 2;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@font-face {
  font-family: "Cocogoose";
  src: local("Cocogoose"),
    url("./assets/font/cocogoose/Cocogoose Pro-trial.ttf") format("truetype");
}
@font-face {
  font-family: "Cocogoose-light";
  src: local("Cocogoose-light"),
    url("./assets/font/cocogoose/Cocogoose Pro Light-trial.ttf")
      format("truetype");
}
</style>
