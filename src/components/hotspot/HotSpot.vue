<template>
  <div class="wrapper" ref="hotspot">
    <Heading text="Hot Spot" anchor="hotspot" />
    <Intro
      >These projects are the recent highlight projects designed and developed
      by me. They are all front-end projects. Click on and have a look. Some of
      them are the web games based on pixi.js, which is a very efficient and
      friendly animation engine.
    </Intro>
    <section class="hot-spot">
      <a v-for="item of list" :href="item.url" :key="item.id">
        <div class="block-wrapper">
          <div class="block-image-wrapper">
            <img class="block-image" :src="item.img" :alt="item.title" />
            <div class="block-image-desc">
              <p>{{ item.desc }}</p>
            </div>
          </div>
          <div class="block-title">
            <p>{{ item.title }}</p>
          </div>
        </div>
      </a>
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

  .hot-spot {
    display: flex;
    justify-content: space-between;
    margin: 1rem 3rem;
    .block-wrapper {
      width: 25vw;
      height: 25vw;
      .block-image-wrapper {
        width: 100%;
        height: 20vw;
        position: relative;

        &:hover {
          .block-image-desc {
            opacity: 1;
          }
        }

        .block-image {
          width: 100%;
          height: 20vw;
          object-fit: cover;
          border-radius: 0.5rem;
        }
        .block-image-desc {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: all 0.3s ease;
          border-radius: 0.5rem;
          p {
            color: white;
            font-size: 1.4rem;
            padding: 2rem;
            text-align: center;
          }
        }
      }

      .block-title {
        text-align: center;
        color: $dark2;
        font-size: 1.3rem;
        margin: 0.5rem 0 1rem;
      }
    }
  }
}
</style>
