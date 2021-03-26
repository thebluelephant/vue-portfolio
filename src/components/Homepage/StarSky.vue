<template>
  <div class="starSky">
    <div v-for="index in 100" :class="`star star-${index}`" :key="index"></div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "starSky",
  mounted() {
    this.randomStarMove();
  },
  methods: {
    randomStarMove() {
      gsap.timeline().from(".star", {
        x: `random(30, ${window.innerWidth})`,
        y: `random(30, ${window.innerHeight})`,
        duration: 180,
        ease: "Power1.easeOut",
        opacity: "random(0.1, 1, 0.3)",
        repeat: -1,
        repeatRefresh: true,
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
  position: absolute;
  height: 100%;
  width: 100%;
}

@for $i from 1 through 100 {
  .star-#{$i} {
    $size: #{randomNum(2, 20)}px;
    height: $size;
    width: $size;
    border-radius: 50px;
    z-index: #{randomNum(0, 5)};
  }
}

.star {
  position: absolute;
  background-color: white;
}
</style>
