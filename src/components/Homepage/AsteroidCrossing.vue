<template>
  <div class="asteroidCrossing">
    <img class="asteroide1" src="../../assets/asteroide1.png" alt="asteroide1" />
    <img class="asteroide2" src="../../assets/asteroide2.png" alt="asteroide2" />
    <img class="asteroide3" src="../../assets/asteroide3.png" alt="asteroide3" />
  </div>
</template>

<script>
import gsap, { TweenMax } from "gsap";

export default {
  name: "AsteroidCrossing",
  mounted() {
    this.asteroidCrossing();
  },
  methods: {
    asteroidCrossing() {
      let tl = gsap.timeline();
      TweenMax.to([".asteroide1", ".asteroide3", ".asteroide2"], 10, {
        rotation: "360",
        ease: gsap.easeNone,
        repeat: -1,
      });
      tl.fromTo(
        ".asteroide1",
        {
          x: gsap.utils.random([1000, 2000, 3000], true),
          y: gsap.utils.random([1000, 2000, 3000], true),
          delay: 15,
          ease: "none",
        },
        {
          x: "random(-100, -1000)",
          y: "random(-200, -1000)",
          duration: 8,
          ease: "none",
          repeat: -1,
          delay: 15,
          repeatRefresh: true,
        }
      );
      gsap.timeline().fromTo(
        ".asteroide3",
        {
          x: gsap.utils.random([-10, -20, -60, -100, -300, -500], true),
          y: gsap.utils.random([-30, -60, -100, -200, -500], true),
          ease: "none",
        },
        {
          x: gsap.utils.random([3000, 5000, 4000], true),
          y: gsap.utils.random([200, 400, 600, 800, 1000], true),
          duration: 60,
          ease: "none",
          repeat: -1,
          repeatRefresh: true,
        }
      );
      gsap.timeline().fromTo(
        ".asteroide2",
        {
          x: 500,
          y: 1500,
        },
        {
          x: 900,
          y: -500,
          duration: 200,
          ease: "none",
          repeat: -1,
          repeatRefresh: true,
        }
      );
    },
  },
};
</script>

<style  lang="scss" scoped>
.asteroidCrossing {
  position: absolute;
  width: 100%;
  height: 100%;
}
.asteroide2 {
  max-height: 60px;
  z-index: 0;
}
.asteroide1 {
  max-height: 100px;
  z-index: 0;
}
.asteroide3 {
  max-height: 80px;
  z-index: 0;
}
</style>
