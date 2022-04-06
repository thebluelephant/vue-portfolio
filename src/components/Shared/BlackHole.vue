<template>
  <div class="blackHole">
    <span class="blackHole__elements">
      <span
        v-for="(element, index) in this.elements"
        :key="index"
        class="element"
        :id="'element-' + index"
      >
        <img :src="element" alt="client-brand" />
      </span>
    </span>

    <span class="blackHole__center">
      <img :src="center" alt="SQLI" />
      <svg width="400" height="430">
        <path
          fill="transparent"
          id="circle"
          d="
        M 200, 260
        m -200, -40
        a 200,200 0 1,0 400,0
        a 200,200 0 1,0 -400,0
        "
        />
      </svg>
    </span>
  </div>
</template>

<script>
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

export default {
  name: "blackHole",
  props: ["center", "elements"],
  watch: {},
  mounted() {
    // We have to launch the animation after a few time to be sure the center is loaded
    // to give a center rotation point to elements.
    setTimeout(() => {
      this.rotateElements();
    }, 300);
  },
  methods: {
    rotateElements() {
      const elements = document.querySelectorAll(".element");
      elements.forEach((element) => {
        gsap.to(element, { opacity: 1 });
        gsap.to(element, {
          duration: gsap.utils.random(30, 80, 5),
          repeat: -1,
          ease : "none",
          motionPath: {
            start: gsap.utils.random(0, 1, 0.1),
            path: "#circle",
            align: "#circle",
            alignOrigin: [2.5, 1],
          },
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.blackHole {
  height: 600px;
  width: 600px;
  border-radius: 290px;
  position: relative;

  &__center,
  &__elements {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__center {
    width: 100%;
    height: 100%;
    position: absolute;

    img {
      position: absolute;
      height: 90px;
    }
  }
  .element {
    opacity: 0;
    position: absolute;
    z-index: 1;

    img {
      height: 100px;
      width: 100px;
    }
  }
}
</style>
