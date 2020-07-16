<template>
  <div class="wrapper" ref="project">
    <Heading text="Projects" anchor="projects" />
    <Intro>
      Here contains the full list of my projects during the whole time. Even
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
  overflow: hidden;
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
        box-shadow: 0.1rem 0.1rem 0.4rem 0.2rem rgba(0, 0, 0, 0.4);
        transition: all 0.5s ease;
        &:hover {
          filter: brightness(1);
          transform: scale(1.03);
          box-shadow: 0.3rem 0.3rem 0.6rem 0.2rem rgba(0, 0, 0, 0.4);
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

@media only screen and (max-width: 414px) {
  .wrapper {
    .block-container {
      .block-wrapper {
        width: 40vw;
        height: 25vh;
        justify-content: flex-start;
      }
    }
  }
}

@media only screen and (max-width: 360px) {
  .wrapper {
    .block-container {
      .block-wrapper {
        .block-title {
          font-size: 1.2rem;
          font-weight: bold;
        }
        p {
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>
