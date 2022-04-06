<template>
  <div class="projectCard">
    <span class="projectCard__header">
      <span v-if="inProgress" class="chip chip--in-progress">
        <p>in progress</p>
      </span>
      <span class="text">
        <p class="title">{{ title }}</p>
        <p class="description">{{ description }}</p>
      </span>
    </span>

    <span class="projectCard__body">
      <a class="image" :href="link">
        <img :src="imgSrc" :alt="title" />
      </a>
      <div class="tech">
        <span class="chips">
          <span class="chip chip--tech" v-for="item of tech" :key="item">
            <p>{{ item }}</p>
          </span>
        </span>

        <a :href="githubLink" class="github">
          <img src="../../assets/skills-logo/gitHub-white.png" alt="github" />
        </a>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "projectCard",
  props: [
    "title",
    "description",
    "tech",
    "link",
    "imgSrc",
    "githubLink",
    "inProgress",
  ],
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.projectCard {
  position: relative;
  height: 300px;
  width: 400px;
  background-color: #747087b0;
  border-radius: 20px;
  display: flex;
  padding: 15px 25px;
  flex-direction: column;

  .chip {
    border-radius: 5px;
    width: auto;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    
    p {
      margin: 0;
      padding: 0px 10px;
      font-family: "Courier New", Courier, monospace;
      font-weight: bold;
    }

    &--tech {
      margin-right: 5px;
      background-color: #7ecfc2;
    }

    &--in-progress {
      margin-right: 5px;
      background-color: #b57ecf;
      position: absolute;
      right: -15px;
      top: -35px;
      color: white;
      text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.445);
    }
  }

  &__header {
    position: relative;
    display: flex;
    justify-content: space-between;

    .text {
      margin: 0 0 10px 0;
      .title {
        color: rgb(247, 232, 184);
        font-size: 30px;
        text-transform: uppercase;
        margin: 0;
      }

      .description {
        font-size: 15px;
        font-style: italic;
        margin: 0;
        font-family: "Courier New", Courier, monospace;
      }
    }

    .in-progress {
      background-color: pink;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      border-radius: 40px;

      p {
        padding: 0 10px;
      }
    }
  }

  &__body {
    .image {
      display: flex;
      justify-content: center;
      img {
        max-height: 180px;
        max-width: 100%;
        display: flex;
        margin-bottom: 20px;
      }
    }

    .tech {
      display: flex;
      margin-bottom: 10px;
      justify-content: space-between;

      .chips {
        display: flex;
      }
      .github {
        height: 35px;
        img {
          max-height: 30px;
        }
      }
    }
  }
}
</style>
