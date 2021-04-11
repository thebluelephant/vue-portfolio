
<template>
  <div class="myWork" v-if="skills">
    <StarSky class="starSky" />
    <div
      v-for="(sortedSkills, index) in skills"
      :key="index"
      :class="`sortedSkills sortedSkills--${index}`"
    >
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <polygon
          :id="`line-skill__${index}`"
          fill="none"
          stroke="#dddddd"
          points=""
        />
      </svg>

      <div
        v-for="skill in sortedSkills"
        :key="skill.name"
        :id="`img-${skill.name}`"
        :class="`skill skill__${skill.category}`"
        @mouseenter="skill.skillHovered = true"
        @mouseleave="skill.skillHovered = false"
      >
        <div class="images">
          <SkillsRating
            class="rating"
            :skill="skill"
            :skillHovered="skill.skillHovered"
            :id="`rating-${skill.name}`"
          />
          <img :src="skill.imageSrc" :id="`img-${skill.name}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap, { TweenMax } from "gsap";
import StarSky from "../Common/StarSky";
import SkillsRating from "../Common/SkillsRating";
import $ from "jquery";

export default {
  name: "MyWorkPage",
  components: {
    StarSky,
    SkillsRating,
  },
  data() {
    return {
      skills: {
        front: [
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
        ],
        back: [
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
        ],
        random: [
          {
            name: "Photoshop",
            imageSrc: require("../../assets/skills-logo/photoShop.png"),
            skillRate: "4",
            skillHovered: false,
            category: "random",
          },
          {
            name: "Indesign",
            imageSrc: require("../../assets/skills-logo/inDesign.png"),
            skillRate: "3",
            skillHovered: false,
            category: "random",
          },
          {
            name: "Github",
            imageSrc: require("../../assets/skills-logo/gitHub.png"),
            skillRate: "3",
            skillHovered: false,
            category: "random",
          },
        ],
      },

      frontSkills: null,
      backSkills: null,
      randomSkills: null,
    };
  },
  mounted() {
    this.makeLogoFloat();
    this.frontSkills = document.getElementsByClassName("skill__front");
    this.backSkills = document.getElementsByClassName("skill__back");
    this.randomSkills = document.getElementsByClassName("skill__random");
    this.drawConstellation();
  },

  methods: {
    drawConstellation() {
      const skills = [this.frontSkills, this.backSkills, this.randomSkills];

      skills.forEach((typesSkill) => {
        let line = "";
        for (let i = 0; i < typesSkill.length; i++) {
          let a = $(typesSkill[i]).position().left + 3;
          let b = $(typesSkill[i]).position().top + 3;
          line += a + "," + b + " ";
        }

        TweenMax.set(`#line-${typesSkill[0].classList[1]}`, {
          attr: { points: line },
        });
      });
    },

    makeLogoFloat() {
      gsap.timeline().to(".skill", {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        duration: 10,
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
  height: 100%;
  width: 100%;

  .starSky {
    z-index: 1;
    opacity: 0.4;
  }

  .sortedSkills {
    width: 400px;
    height: 400px;
    position: absolute;
    z-index: 2;

    &--front {
      left: 5%;
      top: 20%;

      #img-Angular {
        right: 50px;
        bottom: 80px;
      }
      #img-React {
        left: 40px;
        bottom: 25px;
      }
      #img-VueJS {
        left: 120px;
        top: 30px;
      }
    }

    &--back {
      right: 5%;
      top: 20%;

      #img-NodeJS {
        right: 50px;
        top: 50px;
      }
      #img-MongoDB {
        left: 70px;
        bottom: 30px;
      }
      #img-MySQL {
        left: 90px;
        top: 90px;
      }
    }

    &--random {
      right: 35%;
      bottom: 0;

      #img-Indesign {
        left: 50px;
        bottom: 100px;
      }
      #img-Photoshop {
        top: 30px;
        right: 35px;
      }
      #img-Github {
        bottom: 80px;
        right: 90px;
      }
    }

    .skill {
      position: absolute;
      height: 80px;
      width: 80px;

      .images {
        display: flex;
        justify-content: center;
        height: 60px;
        width: 60px;

        .rating {
          position: absolute;
          top: -35px;
          z-index: 1;
        }

        img {
          max-height: 60px;
          max-width: 60px;
          cursor: pointer;
          z-index: 2;
        }

        #VueJS,
        #Photoshop,
        #Indesign {
          max-height: 65px;
        }
      }
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
