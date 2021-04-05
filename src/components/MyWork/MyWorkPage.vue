
<template>
  <div class="myWork" v-if="skills">
    <img src="../../assets/planete.png" alt="" class="planete" />

    <div class="skills">
      <div
        v-for="(skill, index) in skills"
        :key="skill + index"
        :id="`img-${skill.name}`"
        class="skill"
        @mouseenter="skill.skillHovered = true"
        @mouseleave="skill.skillHovered = false"
      >
        <div class="skills skills__images">
          <SkillsRating
            class="rating"
            :skill="skill"
            :skillHovered="skill.skillHovered"
            :id="`rating-${skill.name}`"
          />
          <img :src="skill.imageSrc" :id="`img-${skill.name}`" />
        </div>

        <div class="shaddow"></div>
      </div>
    </div>
    <StarSky class="starSky" />
  </div>
</template>

<script>
import gsap from "gsap";
import StarSky from "../Common/StarSky";
import SkillsRating from "../Common/SkillsRating";

export default {
  name: "MyWorkPage",
  components: {
    StarSky,
    SkillsRating,
  },
  data() {
    return {
      skills: [
        {
          name: "Angular",
          imageSrc: require("../../assets/skills-logo/angular.png"),
          skillRate: "4",
          skillHovered: false,
        },
        {
          name: "React",
          imageSrc: require("../../assets/skills-logo/reactJs.png"),
          skillRate: "4",
          skillHovered: false,
        },
        {
          name: "VueJS",
          imageSrc: require("../../assets/skills-logo/vueJs.png"),
          skillRate: "3",
          skillHovered: false,
        },
        {
          name: "Github",
          imageSrc: require("../../assets/skills-logo/gitHub.png"),
          skillRate: "3",
          skillHovered: false,
        },
        {
          name: "NodeJS",
          imageSrc: require("../../assets/skills-logo/nodeJS.png"),
          skillRate: "3",
          skillHovered: false,
        },
        {
          name: "MongoDB",
          imageSrc: require("../../assets/skills-logo/mongoDb.png"),
          skillRate: "2",
          skillHovered: false,
        },
        {
          name: "MySQL",
          imageSrc: require("../../assets/skills-logo/mySql.png"),
          skillRate: "1",
          skillHovered: false,
        },
        {
          name: "Photoshop",
          imageSrc: require("../../assets/skills-logo/photoShop.png"),
          skillRate: "4",
          skillHovered: false,
        },
        {
          name: "Indesign",
          imageSrc: require("../../assets/skills-logo/inDesign.png"),
          skillRate: "3",
          skillHovered: false,
        },
      ],
    };
  },
  mounted() {
    this.makeLogoFloat();
  },
  methods: {
    makeLogoFloat() {
      gsap.timeline().to(".skill", {
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

    .skill {
      margin-right: 25px;
    }
    img {
      max-height: 70px;
      cursor: pointer;
      z-index: 2;
    }
    &__images {
      display: flex;
      justify-content: center;
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
      top: -35px;
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
