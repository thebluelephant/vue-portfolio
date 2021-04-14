<template>
  <div class="aboutPage">
    <StarSky />
    <img class="astronaute" src="../../assets/atronot1.png" alt="astronaute" />
    <div class="aboutText">
      <p class="introduction">
        My name is Léa <br />
        I'm a french developer and webdesigner based in Lyon. <br />
        Initially focused on the environment of image and graphics, I evolved in
        the digital world by further pushing my practice towards web
        development.
      </p>
      <div class="contact">
        <p>Let's talk ! </p>
        <a href="https://www.linkedin.com/in/lea-delacotte-developpeur">
          <img class="contact__icon" src="../../assets/linkedIn.png" alt="" />
        </a>
      </div>
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
          x: 150,
          y: 800,
          ease: "none",
        },
        {
          x: 150,
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
    position: absolute;
    right: 0;
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    p {
      font-size: 2.5vw;
      color: #87ebda;
      z-index: 3;
      filter: drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.486));
      padding-right: 10%;
    }

    .contact {
      display: flex;
      align-items: center;

      p {
        padding-right: 25px;
      }

      &__icon {
        max-height: 50px;
        max-width: 50px;
      }
    }
  }
}
</style>
