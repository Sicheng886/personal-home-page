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

      isFarward: this.type
    };
  },
  computed: {
    fromTopLimit() {
      return (this.fromTop * window.innerHeight) / 100;
    },

    topLimit() {
      return (this.toTop * window.innerHeight) / 100;
    },
    topUnit() {
      return ((this.toTop - this.fromTop) * window.innerWidth) / 100000;
    },
    leftUnit() {
      return ((this.toLeft - this.fromLeft) * window.innerWidth) / 100000;
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
      if (this.isFarward && this.topVal <= this.topLimit) {
        this.topVal += this.topUnit;
        this.leftVal += this.leftUnit;
      } else if (this.isFarward && this.topVal > this.topLimit) {
        this.isFarward = !this.isFarward;
      }
      if (!this.isFarward && this.topVal >= this.fromTopLimit) {
        this.topVal -= this.topUnit;
        this.leftVal -= this.leftUnit;
      } else if (!this.isFarward && this.topVal < this.fromTopLimit) {
        this.isFarward = !this.isFarward;
      }
      window.requestAnimationFrame(this.moving);
    }
  },
  mounted() {
    this.moving();
  }
};
</script>

<style lang="scss" scoped>
.circle {
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>
