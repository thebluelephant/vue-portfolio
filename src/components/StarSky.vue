<template>
  <div class="starSky">
    <div
      v-for="index in Math.floor(Math.random() * 50 + 30)"
      :class="`star star-${index}`"
      :key="index"
    ></div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "starSky",
  data() {
    return {
      randomStarsNumber: null,
    };
  },
  mounted() {
    this.randomStarMove();
  },
  methods: {
    randomStarMove() {
      let tl = gsap.timeline();
      tl.from(".star", {
        x: "random(-20, 2000, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
        y: "random(-20, 1000, 3)",
        duration: 180,
        ease: "Power1.easeOut",
        opacity: "random(0.1, 1, 0.3)",
        repeat: -1,
        repeatRefresh: true, // gets a new random x and y value on each repeat
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@function randomNum($min, $max) {
  $rand: random();
  $randomNum: $min + floor($rand * (($max - $min) + 1));

  @return $randomNum;
}

.starSky {
  position: fixed;
  height: 100%;
  width: 100%;
}

@for $i from 1 through 50 {
  .star-#{$i} {
    $size: #{randomNum(2, 20)}px;
    height: $size;
    width: $size;
    border-radius: 50px;
    z-index: #{randomNum(0, 5)} ;
  }
}

.star {
  position: absolute;
  background-color: white;
  filter: blur(3px);
}
</style>
