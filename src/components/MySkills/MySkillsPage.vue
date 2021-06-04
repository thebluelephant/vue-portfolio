
<template>
  <div class="mySkills" v-if="skills">
    <StarSky class="starSky" />
    <div
      v-for="(sortedSkills, index) in skills"
      :key="index"
      :class="`sortedSkills sortedSkills--${index}`"
    >
      <svg
        viewBox="0 0 450 450"
        xmlns="http://www.w3.org/2000/svg"
        class="line"
      >
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
    <div v-if="mobileDevice" class="sortedSkills--responsive">
      <div
        v-for="(sortedSkills, index) in skills"
        :key="index"
        :class="`responsiveSkill--${index}`"
      >
        <p class="category-name">{{ sortedSkills[0].category }} skills</p>
        <div class="grouped-skills">
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
                :mobileDevice="mobileDevice"
                :skillHovered="skill.skillHovered"
                :id="`rating-${skill.name}`"
              />
              <img :src="skill.imageSrc" :id="`img-${skill.name}`" />
            </div>
          </div>
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
  name: "mySkillsPage",
  components: {
    StarSky,
    SkillsRating,
  },
  data() {
    return {
      skills: {
        soft: [
          {
            name: "Photoshop",
            imageSrc: require("../../assets/skills-logo/photoShop.png"),
            skillRate: "4",
            skillHovered: false,
            category: "soft",
          },
          {
            name: "Indesign",
            imageSrc: require("../../assets/skills-logo/inDesign.png"),
            skillRate: "3",
            skillHovered: false,
            category: "soft",
          },
          {
            name: "Github",
            imageSrc: require("../../assets/skills-logo/gitHub.png"),
            skillRate: "3",
            skillHovered: false,
            category: "soft",
          },
        ],
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
            skillRate: "2",
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
      },

      frontSkills: null,
      backSkills: null,
      softSkills: null,
      mobileDevice: false,
    };
  },
  created() {
    this.mobileDevice = window.innerWidth <= 400;
  },
  mounted() {
    if (!this.mobileDevice) {
      this.makeLogoFloat();
      this.frontSkills = document.getElementsByClassName("skill__front");
      this.backSkills = document.getElementsByClassName("skill__back");
      this.softSkills = document.getElementsByClassName("skill__soft");
      this.drawConstellation();
    }
  },
  beforeDestroy() {
    if (!this.mobileDevice) {
      this.tm.kill();
      this.tl.kill();
    }
  },
  methods: {
    drawConstellation() {
      const skills = [this.frontSkills, this.backSkills, this.softSkills];
      skills.forEach((skill) => {
        let line = "";
        let iconPosFromLeft = skill === this.frontSkills ? 25 : 30;
        let iconPosFromTop = skill === this.frontSkills ? 25 : 30;

        for (let i = 0; i < skill.length; i++) {
          let a = $(skill[i]).position().left + iconPosFromLeft;
          let b = $(skill[i]).position().top + iconPosFromTop;
          line += a + "," + b + " ";
        }
        
        this.tm = TweenMax.set(`#line-${skill[0].classList[1]}`, {
          attr: { points: line },
        });
      });
    },

    makeLogoFloat() {
      this.tl = gsap.timeline().to(".skill", {
        x: `random(-35, 35)`,
        y: `random(-35, 35)`,
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
.mySkills {
  height: 100%;
  width: 100%;
  position: relative;

  .starSky {
    z-index: 1;
    opacity: 0.4;
  }

  .sortedSkills {
    width: 450px;
    height: auto;
    position: absolute;
    z-index: 2;

    @media (max-width: 400px) {
      display: none;
    }

    &--front {
      right: 35%;
      bottom: 15%;

      img {
        height: 60px;
        width: 60px;
      }

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
      width: 350px;
      right: 5%;
      top: 20%;

      @media (min-width: 1700px) {
        width: 450px;
      }

      #img-NodeJS {
        right: 90px;
        top: 50px;
      }
      #img-MongoDB {
        left: 80px;
        bottom: 100px;
      }
      #img-MySQL {
        left: 100px;
        top: 100px;
      }
    }

    &--soft {
      width: 350px;
      left: 5%;
      top: 20%;

      @media (min-width: 1700px) {
        width: 450px;
      }

      #img-Indesign {
        left: 30px;
        bottom: 100px;
      }
      #img-Photoshop {
        top: 30px;
        left: 35px;
      }
      #img-Github {
        bottom: 90px;
        right: 110px;
      }
    }

    .line {
      stroke-width: 2;
    }
    .skill {
      position: absolute;
      max-height: 80px;
      max-width: 80px;

      .images {
        display: flex;
        justify-content: center;
        height: 45px;
        width: 45px;
        cursor: pointer;
        z-index: 2;

        .rating {
          position: absolute;
          top: -35px;
          z-index: 1;
        }

        #VueJS,
        #Photoshop,
        #Indesign {
          max-height: 65px;
        }
      }
    }

    &--responsive {
      display: flex;
      flex-direction: column;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 10%;

      @media (min-width: 400px) {
        display: none;
      }

      .responsiveSkill {
        &--soft,
        &--front,
        &--back {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          position: relative;
          height: 110px;
          margin-bottom: 15px;

          .category-name {
            position: absolute;
            text-transform: capitalize;
            text-align: unset;
            font-size: 15px;
            width: 100%;
            left: 0;
            top: 0;
          }
          .grouped-skills {
            width: 100%;
            justify-content: space-around;
            display: flex;
            position: absolute;
            top: 40%;
          }
          img {
            height: 30px;
            width: 30px;
          }

          .images {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .skill {
            max-height: 60px;
            max-width: 60px;
          }
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
