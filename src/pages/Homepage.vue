<template>
  <div class="home">
    <div id="home-parallax">
      <img
        data-depth="0.3"
        src="../assets/bckg-layer2.png"
        alt=""
        class="bckg-layer2"
      />
      <img
        data-depth="0.2"
        src="../assets/bckg-layer3.png"
        alt=""
        class="bckg-layer3"
      />
      <img
        data-depth="0.1"
        src="../assets/bckg-layer4.png"
        alt=""
        class="bckg-layer4"
      />
    </div>

    <div class="container">
      <StarSky class="starSky" />
      <AsteroidCrossing />
      <div class="presentation">
        <p class="title">Hello</p>
        <p>My name is Léa</p>
        <p>I'm a webdeveloper and a webdesigner</p>
        <p>Welcome in my universe !</p>
      </div>
      <img
        data-depth="0.3"
        class="planet1"
        src="../assets/planet1.png"
        alt="planet1"
      />
      <img class="planet2" src="../assets/planet2.png" alt="planet2" />
      <img class="planet3" src="../assets/planet3.png" alt="planet3" />
      <img class="planet4" src="../assets/planet4.png" alt="planet4" />
      <img class="planet5" src="../assets/planet5.png" alt="planet5" />
      <img class="planet6" src="../assets/planet4.png" alt="planet6" />
    </div>
  </div>
</template>

<script>
import StarSky from "../components/Shared/StarSky.vue";
import AsteroidCrossing from "../components/Homepage/AsteroidCrossing.vue";
import gsap, { TweenMax } from "gsap";
import Parallax from "parallax-js";

export default {
  name: "HomePage",
  components: {
    StarSky,
    AsteroidCrossing,
  },
  mounted() {
    this.asteroidMove();
    this.planetMove();
    let homeParallax = document.getElementById("home-parallax");
    new Parallax(homeParallax);
  },
  beforeDestroy() {
    TweenMax.killTweensOf("*");
    gsap.killTweensOf("*");
  },
  methods: {
    planetMove() {
      TweenMax.to(".planet1", 65, {
        rotation: "360",
        ease: gsap.easeNone,
        repeat: -1,
      });
    },
    asteroidMove() {
      TweenMax.to([".asteroide1", ".asteroide3", ".asteroide2"], 10, {
        rotation: "360",
        ease: gsap.easeNone,
        repeat: -1,
      });
      gsap.timeline().fromTo(
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

<style lang="scss" scoped>
.home {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  @media (max-width: 599px) {
    img {
      display: none;
    }
    .bckg-layer2,
    .bckg-layer3,
    .bckg-layer4,
    #home-parallax {
      display: none;
    }
  }

  .bckg-layer2,
  .bckg-layer3,
  .bckg-layer4 {
    position: fixed;
    resize: both;
    width: 105%;
    height: 105%;
  }
  #home-parallax {
    height: 102%;
    width: 102%;
    left: -5%;
    top: -5%;
  }

  .bckg-layer3,
  .bckg-layer4 {
    z-index: 3;
  }
  .container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    p {
      margin: 0;
      font-size: 30px;
      z-index: 2;
      filter: drop-shadow(2px 7px 2px rgba(0, 0, 0, 0.486));
    }

    .presentation {
      width: 100%;
      height: 100%;
      flex-direction: column;
      font-family: "Cocogoose";
      display: flex;
      text-align: center;
      justify-content: center;
      z-index: 2;
      margin: -4% 0 0 -3%;
      color: rgb(135, 235, 218);

      .title {
        font-size: 150px;
        @media (max-width: 599px) {
          font-size: 80px;
        }
      }
    }

    .starSky {
      z-index: 2;
    }

    img {
      position: absolute;
      filter: drop-shadow(4px 7px 4px rgba(0, 0, 0, 0.486));
    }

    .planet1 {
      max-height: 130px;
      left: 5%;
      top: 10%;
    }

    .planet2 {
      max-height: 200px;
      right: 15%;
      bottom: 18%;
    }

    .planet3 {
      max-height: 60px;
      right: 27%;
      top: 22%;
    }

    .planet4 {
      max-height: 90px;
      left: 15%;
      bottom: 25%;
    }

    .planet5 {
      max-height: 120px;
      right: 12%;
      top: 4%;
    }

    .planet6 {
      max-height: 35px;
      left: 29%;
      top: 5%;
      transform: rotate(90deg);
      filter: blur(0.5px);
      filter: opacity(0.7) drop-shadow(0 0 0 green)
        drop-shadow(3px -1px 2px rgba(0, 0, 0, 0.486)) blur(0.5px);
    }
  }
}
</style>
