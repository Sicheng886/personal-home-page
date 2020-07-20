<template>
  <div class="wrapper" ref="hotspot">
    <Heading text="Hot Spot" anchor="hotspot" />
    <Intro>
      These projects are the recent highlight projects designed and developed
      by me. They are all front-end projects. Click on and have a look. Some of
      them are the web games based on pixi.js, which is a very efficient and
      friendly animation engine.
    </Intro>
    <section class="hot-spot">
      <div class="block-wrapper" v-for="item of list" :key="item.id">
        <img class="block-image" :src="item.img" :alt="item.title" />

        <div class="block-content">
          <p class="block-title">{{ item.title }}</p>
          <p class="block-desc">{{ item.desc }}</p>
          <a :href="item.url">
            <button class="btn">View Project</button>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Heading from "../common/Heading";
import Intro from "../common/Intro";
import { mapMutations } from "vuex";

export default {
  name: "HotSpot",
  components: {
    Heading,
    Intro
  },
  props: {
    list: Array
  },
  methods: {
    ...mapMutations(["getHotspotPos"])
  },
  mounted() {
    const hotspot = this.$refs.hotspot;
    const { top } = hotspot.getBoundingClientRect();
    this.getHotspotPos(top);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";
.wrapper {
  background-color: $light1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 3rem;

  .hot-spot {
    display: flex;
    justify-content: space-around;
    margin: 1rem 0;

    .block-wrapper {
      width: 20vw;
      height: 50vh;
      background: $dark2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      border-radius: 0.5rem;
      box-shadow: 0.1rem 0.1rem 0.4rem 0.2rem rgba(0, 0, 0, 0.4);
      transition: all 0.8s ease;
      user-select: none;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0.3rem 0.3rem 0.6rem 0.2rem rgba(0, 0, 0, 0.4);
      }
      .block-image {
        width: 100%;
        height: 12vw;
        object-fit: cover;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
      }

      .block-content {
        padding: 0.5rem 1rem;
        .block-title {
          color: $light1;
          font-size: 1.4rem;
          margin: 2rem 0 1rem;
          font-weight: bold;
        }
        .block-desc {
          line-height: 1.2rem;
          color: $light1;
          margin: 0rem 0 1rem;
        }
        .btn {
          color: $light1;
          border: 0.2rem solid $light1;
          padding: 0.8rem 1rem;
          text-align: center;
          margin: 1rem 0;
          background: none;
          transition: all 0.3s ease;
          cursor: pointer;
          &:hover {
            background: $light1;
            color: $dark2;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 414px) {
  .wrapper {
    padding: 1rem 0;

    .hot-spot {
      overflow-x: scroll;
      overflow-y: hidden;
      width: 96vw;
      margin: 0 auto;
      padding: 0.4rem 0;
      justify-content: flex-start;

      .block-wrapper {
        width: 40vw;
        margin: 0 1rem;
        .block-image {
          width: 40vw;
          height: 35vw;
        }
        .block-content {
          .block-title {
            margin: 0.6rem 0 0.5rem;
          }
        }
        &:hover {
          transform: none;
          box-shadow: 0.1rem 0.1rem 0.4rem 0.2rem rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
}

@media only screen and (max-width: 360px) {
  .wrapper {
    min-height: 100vh;
    .hot-spot {
      .block-wrapper {
        height: 50vh;
        width: 45vw;
        .block-image {
          width: 45vw;
          height: 25vw;
        }
        .block-content {
          .block-title {
            margin: 1rem 0 0.5rem;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 360px) {
  .wrapper {
    .hot-spot {
      .block-wrapper {
        height: 45vh;
        .block-content {
          .block-title {
            font-size: 1.1rem;
            margin: 0.3rem 0 0.2rem;
          }
          .block-desc {
            font-size: 0.8rem;
          }
          .btn {
            padding: 0.4rem;
            text-align: center;
            margin: 0.3rem 0;
          }
        }
      }
    }
  }
}
</style>
