<template>
  <div class="skillRating">
    <p v-if="skillHovered">{{ skill.name }}</p>
    <div class="stars-rating">
      <svg
        v-for="(element, index) in maxRate"
        :key="element"
        :class="skill.skillRate >= index + 1 ? 'rate rate--selected' : 'rate'"
        :id="`${skill.name}-rate-${index + 1}`"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512.002 512.002"
      >
        <path
          d="M511.267 197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065-70.985-143.827c-2.526-5.12-7.741-8.361-13.45-8.361-5.71 0-10.924 3.241-13.451 8.361l-70.988 143.827-158.72 23.065c-5.649.82-10.344 4.778-12.108 10.208-1.765 5.431-.293 11.392 3.796 15.377l114.848 111.954-27.108 158.083c-.966 5.628 1.348 11.314 5.967 14.671 2.613 1.898 5.708 2.864 8.818 2.864 2.388 0 4.784-.569 6.978-1.723l141.967-74.638 141.961 74.637c5.055 2.657 11.178 2.215 15.797-1.141s6.934-9.044 5.969-14.672l-27.117-158.081 114.861-111.955c4.088-3.984 5.561-9.945 3.795-15.375z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "skillsRating",
  props: ["skill", "skillHovered"],
  data() {
    return {
      maxRate: 5,
    };
  },
  watch: {
    skillHovered() {
      this.skillHovered
        ? this.bouncingApparition(this.skill.name)
        : this.disparition();
    },
  },

  methods: {
    bouncingApparition(skillName) {
      for (let i = 1; i <= this.maxRate; i++) {
        gsap.timeline().fromTo(
          `#${skillName}-rate-${i}`,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: "sine.inOut",
            delay: i * 0.5,
          }
        );

        gsap.timeline().to(`#${skillName}-rate-${i}`, {
          x: "0",
          y: "-10",
          duration: 0.6,
          ease: "sine.inOut",
          yoyo: true,
          delay: i * 0.3,
          repeat: 1,
        });
      }
    },
    disparition() {
      gsap.timeline().to(`.rate`, {
        opacity: 0,
        duration: 0.5,
        y: 0,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.skillRating {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 50px;

  p {
    font-size: 70%;
    margin: 0 0 5px 0;
  }

  .stars-rating {
    width: 60px;
    height: 50px;
    display: flex;
    flex-direction: row;
  }

  .rate {
    max-height: 10px;
    max-width: 10px;
    fill: rgb(218, 218, 218);
    margin-right: 3px;
    opacity: 0;

    &--selected {
      fill: rgb(255, 230, 0);
    }
  }
}
</style>
