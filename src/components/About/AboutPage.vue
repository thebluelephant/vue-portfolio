<template>
  <div class="aboutPage">
    <StarSky />
    <img class="astronaute" src="../../assets/atronot1.png" alt="astronaute" />
    <div class="aboutText">
      <p>
        My name is Léa <br />
        I'm a french developer and webdesigner based in Lyon <br />
        Beside my work, I love writing, sewing, and lost my socks during laundry
      </p>
    </div>
  </div>
</template>

<script>
import StarSky from "../Common/StarSky";
import gsap, { TweenMax } from "gsap";

export default {
  name: "AboutPage",
  components: {
    StarSky,
  },
  mounted() {
    this.astronautCrossing();
  },
  methods: {
    astronautCrossing() {
      TweenMax.to(".astronaute", 30, {
        rotation: "360",
        ease: gsap.easeNone,
        repeat: -1,
      });
      gsap.timeline().fromTo(
        ".astronaute",
        {
          x: 200,
          y: 1000,
          delay: 30,
          ease: "none",
        },
        {
          x: 200,
          y: -1000,
          duration: 30,
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
.aboutPage {
  position: absolute;
  width: 100%;
  height: 100%;
  grid-row: 2;
  grid-column: 2;

  .astronaute {
    position: absolute;
    max-height: 400px;
    transform: rotate(40deg);
  }

  .aboutText {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
      width: 40%;
      font-size: 2.5vw;
      color: #87ebda;
      padding-right: 10%;
      z-index: 3;
      filter: drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.486));
    }
  }
}
</style>
