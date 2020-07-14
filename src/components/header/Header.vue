<template>
  <div class="wrapper" :style="styleObj">
    <div>
      <img class="logo" src="../../assets/images/logo.png" alt="logo" />
    </div>
    <div class="links">
      <a href="#hotspot" @click.prevent="clickHandler($event, 'hotspotPos')"
        >Hot Spot</a
      >
      <a href="#projects" @click.prevent="clickHandler($event, 'projectPos')"
        >Projects</a
      >
      <a href="#about" @click.prevent="clickHandler($event, 'aboutPos')"
        >About</a
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      styleObj: {
        backgroundColor: "rgba(74,103,106,0)"
      }
    };
  },
  computed: {
    ...mapState(["hotspotPos", "projectPos", "aboutPos"])
  },
  methods: {
    scrollHandler() {
      const top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (top < 50) {
        this.styleObj = {
          backgroundColor: "rgba(49,81,94,0)"
        };
      } else if (top < 150) {
        this.styleObj = {
          backgroundColor: `rgba(49,81,94,${(top - 50) / 100})`
        };
      } else {
        this.styleObj = {
          backgroundColor: "rgba(49,81,94,1)"
        };
      }
    },
    clickHandler(e, item) {
      window.scrollTo({
        top: this[item],
        left: 0,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandler);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

.wrapper {
  font-size: 1.2rem;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
  div {
    padding: 0.5rem 2rem;
  }
  .logo {
    width: 8rem;
    object-fit: scale-down;
  }
  .links {
    a {
      color: $light1;
      padding-left: 4rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
