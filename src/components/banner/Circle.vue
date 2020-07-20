<template>
  <div>
    <img
      v-if="type"
      src="../../assets/images/circle1.png"
      class="circle"
      alt="circle"
      :style="styleObj"
    />
    <img v-else src="../../assets/images/circle2.png" class="circle" alt="circle" :style="styleObj" />
  </div>
</template>

<script>
export default {
  name: "BannerCircle",
  props: {
    type: Boolean,
    fromTop: Number,
    fromLeft: Number,
    toTop: Number,
    toLeft: Number,
    size: String
  },
  data() {
    return {
      topVal: (this.fromTop * window.innerHeight) / 100,
      leftVal: (this.fromLeft * window.innerWidth) / 100,
      vy:
        ((this.fromTop - this.toTop) * window.innerHeight) /
        (Math.random() * 20000 + 30000),
      vx:
        ((this.fromLeft - this.toLeft) * window.innerWidth) /
        (Math.random() * 20000 + 30000)
    };
  },
  computed: {
    fromTopLimit() {
      return (this.fromTop * window.innerHeight) / 100;
    },

    topLimit() {
      return (this.toTop * window.innerHeight) / 100;
    },
    fromLeftLimit() {
      return (this.fromLeft * window.innerWidth) / 100;
    },
    leftLimit() {
      return (this.toLeft * window.innerWidth) / 100;
    },

    styleObj() {
      return {
        top: this.topVal + "px",
        left: this.leftVal + "px",
        width: this.size
      };
    }
  },
  methods: {
    moving() {
      if (this.topVal >= this.topLimit || this.topVal <= this.fromTopLimit) {
        this.vy = -this.vy;
      }
      if (
        this.leftVal >= this.leftLimit ||
        this.leftVal <= this.fromLeftLimit
      ) {
        this.vx = -this.vx;
      }
      this.topVal += this.vy;
      this.leftVal += this.vx;
      window.requestAnimationFrame(this.moving);
    },
    resizeHandler() {
      this.topVal = (this.fromTop * window.innerHeight) / 100;
      this.leftVal = (this.fromLeft * window.innerWidth) / 100;
      this.vy =
        ((this.fromTop - this.toTop) * window.innerHeight) /
        (Math.random() * 20000 + 30000);
      this.vx =
        ((this.fromLeft - this.toLeft) * window.innerWidth) /
        (Math.random() * 20000 + 30000);
    }
  },
  mounted() {
    window.addEventListener("resize", this.resizeHandler);
    window.requestAnimationFrame(this.moving);
  }
};
</script>

<style lang="scss" scoped>
.circle {
  position: absolute;
  transform: translate(-50%, -50%);
}

@media only screen and (max-width: 414px) {
  .circle {
    transform: scale(2);
  }
}
</style>
