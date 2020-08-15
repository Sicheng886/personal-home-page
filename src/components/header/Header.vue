<template>
  <div class="wrapper" :style="styleObj" ref="header">
    <div>
      <img class="logo" src="../../assets/images/logo.png" alt="logo" />
    </div>
    <div class="links">
      <a href="#hotspot" @click.prevent="clickHandler($event, 'hotspotPos')">Hot Spot</a>
      <a href="#projects" @click.prevent="clickHandler($event, 'projectPos')">Projects</a>
      <a href="#about" @click.prevent="clickHandler($event, 'aboutPos')">About</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import isMobile from "../../functions/isMobile";
export default {
  name: "Header",
  data() {
    return {
      styleObj: {
        backgroundColor: isMobile() ? "rgba(49,81,94,1)" : "rgba(49,81,94,0)",
      },
    };
  },
  computed: {
    headerHight() {
      return this.$refs.header.clientHeight;
    },
    ...mapState(["hotspotPos", "projectPos", "aboutPos"]),
  },
  methods: {
    scrollHandler() {
      const top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (top < 50) {
        this.styleObj = {
          backgroundColor: "rgba(49,81,94,0)",
        };
      } else if (top < 122) {
        this.styleObj = {
          backgroundColor: `rgba(49,81,94,${(top - 50) / 100})`,
          backdropFilter: "saturate(180%) blur(20px)",
        };
      } else {
        this.styleObj = {
          backgroundColor: "rgba(49,81,94,0.72)",
          backdropFilter: "saturate(180%) blur(20px)",
        };
      }
    },
    clickHandler(e, item) {
      window.scrollTo({
        top: this[item] - this.headerHight,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    if (!isMobile()) {
      window.addEventListener("scroll", this.scrollHandler);
    }
  },
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

@media only screen and (max-width: 414px) {
  .wrapper {
    flex-direction: column;
    position: absolute;
    div {
      padding: 0.3rem 0;
    }
    .links {
      display: flex;
      justify-content: space-around;
      width: 100%;
      padding-bottom: 1rem;
      a {
        padding-left: 0rem;
      }
    }
  }
}
</style>
