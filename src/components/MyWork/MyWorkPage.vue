
<template>
  <div class="myWork" v-if="skills">
    <img src="../../assets/planete.png" alt="" class="planete" />
    <svg width="1000" height="800" viewport="0 0 1000 800">
      <polygon id="front-line" fill="none" stroke="#dddddd" points="" />
      <polygon id="back-line" fill="none" stroke="#dddddd" points="" />
      <polygon id="design-line" fill="none" stroke="#dddddd" points="" />
      <polygon id="dev-line" fill="none" stroke="#dddddd" points="" />
    </svg>
    <div class="skills">
      <div
        v-for="skill in skills"
        :key="skill.name"
        :id="`img-${skill.name}`"
        :class="`skill skill--${skill.category}`"
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
import gsap, { TweenMax } from "gsap";
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
          category: "front",
        },
        {
          name: "React",
          imageSrc: require("../../assets/skills-logo/reactJs.png"),
          skillRate: "4",
          skillHovered: false,
          category: "front",
        },
        {
          name: "VueJS",
          imageSrc: require("../../assets/skills-logo/vueJs.png"),
          skillRate: "3",
          skillHovered: false,
          category: "front",
        },
        {
          name: "Github",
          imageSrc: require("../../assets/skills-logo/gitHub.png"),
          skillRate: "3",
          skillHovered: false,
          category: "dev",
        },
        {
          name: "NodeJS",
          imageSrc: require("../../assets/skills-logo/nodeJS.png"),
          skillRate: "3",
          skillHovered: false,
          category: "back",
        },
        {
          name: "MongoDB",
          imageSrc: require("../../assets/skills-logo/mongoDb.png"),
          skillRate: "2",
          skillHovered: false,
          category: "back",
        },
        {
          name: "MySQL",
          imageSrc: require("../../assets/skills-logo/mySql.png"),
          skillRate: "1",
          skillHovered: false,
          category: "back",
        },
        {
          name: "Photoshop",
          imageSrc: require("../../assets/skills-logo/photoShop.png"),
          skillRate: "4",
          skillHovered: false,
          category: "design",
        },
        {
          name: "Indesign",
          imageSrc: require("../../assets/skills-logo/inDesign.png"),
          skillRate: "3",
          skillHovered: false,
          category: "design",
        },
      ],
      frontSkills: null,
      backSkills: null,
      devSkills: null,
      designSkills: null,
      line: "",
    };
  },
  mounted() {
    this.makeLogoFloat();
    this.frontSkills = document.querySelectorAll(".skill--front");
    this.backSkills = document.querySelectorAll(".skill--back");
    this.devSkills = document.querySelectorAll(".skill--dev");
    this.designSkills = document.querySelectorAll(".skill--design");
    this.drawConstellation();
  },
  methods: {
    drawConstellation() {
      const skills = [
        this.frontSkills,
        this.backSkills,
        this.devSkills,
        this.designSkills,
      ];
      this.line = "";
      skills.forEach((typesSkill) => { // faire 1 constellation par type de logo
        for (let i = 0; i < typesSkill.length; i++) {
          let a = Number(typesSkill[i].getBoundingClientRect().left) + 3;
          let b = Number(typesSkill[i].getBoundingClientRect().top) + 3;
          this.line += a + "," + b + " ";
        }
        TweenMax.set(`#${skill.lineId}`, { attr: { points: this.line } });
      });
    },
    makeLogoFloat() {
      gsap.timeline().to(".skill", {
        x: "random(-30, 30)",
        y: "random(-30, 30)",
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        repeatRefresh: true,
        onUpdate: this.drawConstellation,
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

  svg {
    position: absolute;
  }
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
      top: random($limit: 10);
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
