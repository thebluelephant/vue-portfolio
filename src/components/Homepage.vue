<template>
  <div class="home">
    <div class="container">
      <StarSky />
      <img class="planet1" src="../assets/planet1.png" alt="planet1" />
      <img class="planet2" src="../assets/planet2.png" alt="planet2" />
      <img class="planet3" src="../assets/planet3.png" alt="planet3" />
      <img class="planet4" src="../assets/planet4.png" alt="planet4" />
      <img class="planet5" src="../assets/planet5.png" alt="planet5" />
      <img class="asteroide1" src="../assets/asteroide1.png" alt="asteroide1" />
      <img class="asteroide2" src="../assets/asteroide2.png" alt="asteroide2" />
      <img class="asteroide3" src="../assets/asteroide3.png" alt="asteroide3" />
    </div>
  </div>
</template>

<script>
import StarSky from "./StarSky";
import gsap, { TweenMax } from "gsap";

export default {
  name: "HomePage",
  components: {
    StarSky,
  },
  mounted() {
    this.asteroidMove();
  },
  methods: {
    asteroidMove() {
      let tl = gsap.timeline();
      TweenMax.to(".asteroide1", 10, {
        rotation: "360",
        ease: gsap.easeNone,
        repeat: -1,
      });
      tl.fromTo(
        ".asteroide1",
        {
          x: gsap.utils.random([1000, 2000, 3000], true),
          y: gsap.utils.random([1000, 2000, 3000], true),
          ease: "none",
        },
        {
          x: "random(-100, -1000)",
          y: "random(-200, -1000)",
          duration: 8,
          ease: "none",
          repeat: -1,
          repeatRefresh: true,
        }
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.home {
  position: fixed;
  height: 100%;
  width: 100%;

  .container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: 20px 1fr 400px 20px;
    grid-template-rows: 20px 1fr 20px;

    img {
      position: absolute;
      filter: drop-shadow(4px 7px 4px rgba(0, 0, 0, 0.486));
      max-height: 100px;
    }

    .planet1 {
      max-height: 100px;
      left: 15%;
      top: 10%;
    }

    .planet2 {
      max-height: 130px;
      right: 0;
      top: -30px;
    }

    .planet3 {
      max-height: 300px;
      left: 200px;
    }

    .planet4 {
      max-height: 300px;
      left: 10%;
      bottom: 10%;
    }
    .navbar {
      grid-column: 2/4;
      grid-row: 1;
    }
  }
}
</style>
