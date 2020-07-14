<template>
  <div class="wrapper" ref="project">
    <Heading text="Projects" anchor="projects" />
    <Intro
      >Here contains the full list of my projects during the whole time. Even
      though some of them have failed due to the various reasons. Might will be
      updated or not. It depends...
    </Intro>
    <section class="block-container">
      <a v-for="item of list" :href="item.url" :key="item.id">
        <div class="block-wrapper">
          <img class="block-image" :src="item.img" :alt="item.title" />
          <h2 class="block-title">{{ item.title }}</h2>
          <p>{{ item.desc }}</p>
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
  name: "ProjectList",
  components: {
    Heading,
    Intro
  },
  props: {
    list: Array
  },
  methods: {
    ...mapMutations(["getProjectPos"])
  },
  mounted() {
    const pos = this.$refs.project;
    const { top } = pos.getBoundingClientRect();
    this.getProjectPos(top);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

.wrapper {
  background-color: $light2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 0;

  .block-container {
    display: flex;
    flex-wrap: wrap;
    .block-wrapper {
      width: 18vw;
      height: 20vw;
      margin: 3vw 3vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .block-image {
        width: 15vw;
        height: 15vw;
        object-fit: cover;
        border-radius: 50%;
        filter: brightness(0.7);
        transition: filter 0.3s ease;
        &:hover {
          filter: brightness(1);
        }
      }
      .block-title {
        font-size: 1.4rem;
        padding: 0.5rem 0;
        color: $dark2;
      }
      p {
        text-align: justify;
        color: #444;
      }
    }
  }
}
</style>
