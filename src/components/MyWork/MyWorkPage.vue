
<template>
  <div class="myWork" v-if="skills">
    <img src="../../assets/planete.png" alt="" class="planete" />

    <div class="skills">
      <div
        v-for="(skill, index) in skills"
        :key="skill + index"
        :id="`img-${skill.name}`"
        class="skillLogo"
        @mouseenter="skill.elementIsHovered = true"
        @mouseleave="skill.elementIsHovered = false"
      >
        <img :src="skill.imageSrc" :id="`img-${skill.name}`" />
        <StarRating
          class="rating"
          :skill="skill"
          :elementIsHovered="skill.elementIsHovered"
          :id="`rating-${skill.name}`"
        />
        <div class="shaddow"></div>
      </div>
    </div>
    <StarSky class="starSky" />
  </div>
</template>

<script>
import gsap from "gsap";
import StarSky from "../Common/StarSky";
import StarRating from "../Common/StarRating";

export default {
  name: "MyWorkPage",
  components: {
    StarSky,
    StarRating,
  },
  data() {
    return {
      skills: [
        {
          name: "Angular",
          imageSrc: require("../../assets/logoangular.png"),
          skillRate: "4",
          elementIsHovered: false,
        },
        {
          name: "React",
          imageSrc: require("../../assets/reactIcon.png"),
          skillRate: "4",
          elementIsHovered: false,
        },
        {
          name: "VueJS",
          imageSrc: require("../../assets/logovue.png"),
          skillRate: "3",
          elementIsHovered: false,
        },
        {
          name: "Github",
          imageSrc: require("../../assets/githublogo.png"),
          skillRate: "3",
          elementIsHovered: false,
        },
        {
          name: "Photoshop",
          imageSrc: require("../../assets/logophotoshop.png"),
          skillRate: "4",
          elementIsHovered: false,
        },
        {
          name: "Indesign",
          imageSrc: require("../../assets/indesignLogo.png"),
          skillRate: "3",
          elementIsHovered: false,
        },
      ],
    };
  },
  mounted() {
    this.makeLogoFloat();
  },
  methods: {
    makeLogoFloat() {
      gsap.timeline().to(".skillLogo", {
        x: "random(-3, 3)",
        y: "random(-3, 3)",
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        repeatRefresh: true,
      });
    },
  },
};
</script>

<style  lang="scss" scoped>
.myWork {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .starSky {
    z-index: 1;
    opacity: 0.4;
  }
  .planete {
    position: absolute;
    max-width: 100%;
    bottom: -120px;
    z-index: 2;
  }

  .skills {
    display: flex;
    z-index: 2;

    img {
      max-height: 100px;
      cursor: pointer;
      z-index: 2;
    }

    .shaddow {
      position: absolute;
      width: 90%;
      height: 15%;
      border-radius: 30px;
      box-shadow: 0px 96px 18px rgba(0, 0, 0, 0.233);
    }

    #VueJS,
    #Photoshop,
    #Indesign {
      max-height: 65px;
    }

    .rating {
      position: absolute;
      top: 30px;
      z-index: 1;
    }
  }

  p {
    width: 40%;
    font-size: 2.5vw;
    color: #87ebda;
    padding-right: 10%;
    z-index: 3;
    text-align: center;
    filter: drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.486));
  }
}
</style>
