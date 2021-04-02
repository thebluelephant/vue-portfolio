<template>
  <div class="myWork" v-if="skills">
    <div v-for="skill in skills" :key="skill.name" class="skillLogo">
      <img :src="skill.imageSrc" :id="skill.name" />
    </div>
    <img src="../../assets/githublogo.png" alt="logo Github"/>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "MyWorkPage",
  components: {},
  data() {
    return {
      skills: [
        {
          name: "Angular",
          imageSrc: require("../../assets/logoangular.png"),
          skillRate: "6",
        },
        {
          name: "React",
          imageSrc: require("../../assets/reactIcon.png"),
          skillRate: "6",
        },
        {
          name: "VueJS",
          imageSrc: require("../../assets/logovue.png"),
          skillRate: "4",
        },
        {
          name: "Photoshop",
          imageSrc: require("../../assets/logophotoshop.png"),
          skillRate: "7",
        },
        {
          name: "Indesign",
          imageSrc: require("../../assets/indesignLogo.png"),
          skillRate: "5",
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

  img {
    max-height: 100px;
    cursor: pointer;
  }
  
  #VueJS{
    max-height: 65px;
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
