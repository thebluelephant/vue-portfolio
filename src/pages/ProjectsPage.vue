<template>
  <div class="projectsPage">
    <span class="projects">
      <span class="cards-container">
        <p class="title">Latest personal projects</p>
        <span class="separator"></span>
        <ProjectCard
          class="card"
          v-for="project of projects"
          :key="project.name"
          :title="project.title"
          :description="project.description"
          :tech="project.tech"
          :imgSrc="project.imgSrc"
          :link="project.link"
          :githubLink="project.githubLink"
          :inProgress="project.inProgress"
        />
      </span>
      <span class="blackhole-container">
        <p class="title">Job's clients</p>
        <span class="separator"></span>
        <BlackHole
          :center="require('../assets/projects/SQLI.png')"
          :elements="clients"
        />
      </span>
    </span>
    <StarSky class="starSky" />
  </div>
</template>

<script>
import StarSky from "../components/Shared/StarSky.vue";
import ProjectCard from "../components/Shared/ProjectCard.vue";
import BlackHole from "../components/Shared/BlackHole.vue";

export default {
  name: "ProjectsPage",
  components: {
    StarSky,
    BlackHole,
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          title: "Sewciety",
          description: "Sewing app",
          tech: ["VueJS", "Spring-boot", "Auth0"],
          imgSrc: require("../assets/projects/sewciety.png"),
          link: "",
          githubLink: "https://github.com/thebluelephant/sewciety",
          inProgress: true,
        },
        {
          title: "Le ptit bistrot",
          description: "",
          tech: ["ReactJs", "Axios", "Strapi"],
          imgSrc: require("../assets/projects/LePtitBistrot.png"),
          link: "https://www.leptitbistrot.com",
          githubLink: "https://github.com/thebluelephant/lpb",
          inProgress: false,
        },
      ],
      clients: [
        require("../assets/clients/Adequat.png"),
        require("../assets/clients/Bobst.png"),
        require("../assets/clients/Cartier.png"),
        require("../assets/clients/EDF.png"),
        require("../assets/clients/Roche.png"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.projectsPage {
  height: 90%;
  width: 100%;
  position: relative;

  @media (max-width: 900px) {
    height: 100%;
    overflow-y: auto;
    flex-direction: column;
  }

  .starSky {
    position: absolute;
    top: 0;

    @media (max-width: 900px) {
      opacity: 0.3;
    }
  }
  .projects {
    position: absolute;
    z-index: 30;
    display: flex;
    height: 100%;
    padding-top: 50px;
    width: 100%;
    justify-content: space-around;

    @media (max-width: 900px) {
      flex-wrap: wrap;
    }

    .cards-container,
    .blackhole-container {
      display: flex;
      align-items: center;
      flex-direction: column;

      @media (max-width: 900px) {
        width: 100%;
      }

      .title {
        text-transform: uppercase;
        font-family: "Courier New", Courier, monospace;
        color: rgb(247, 232, 184);
        font-weight: bold;
      }
      .separator {
        width: 100%;
        margin-bottom: 30px;
        height: 5px;
        background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
        border-radius: 20px;
      }
    }

    .cards-container {
      .card {
        margin-bottom: 20px;

        @media (max-width: 900px) {
          max-width: 80%;
        }
      }
    }
  }
}
</style>
