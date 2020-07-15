<template>
  <div class="wrapper" ref="about">
    <Heading text="About" anchor="about" />
    <div class="about-me-wrapper">
      <img
        class="about-me-img"
        src="../../assets/images/me.jpg"
        alt="me"
      />
      <div class="about-me-content">
        <h2>About me</h2>
        <p>
          I am Wally Yang. Recently graduating from Master of Interaction
          Design. I believe Web will be the future of the internet and I am
          fascinated by it.
        </p>
        <p>
          By the passion I've got, I had created several different projects that
          using modern frameworks like React, Vue and pixi.js. Try making
          something interesting.
        </p>
        <h2>Contact me</h2>
        <div class="links">
          <a href="mailto:wallyyoung886@gmail.com" class="iconfont">&#xec34;</a>
          <a href="https://github.com/Sicheng886" class="iconfont">&#xe600;</a>
          <a
            href="https://www.linkedin.com/in/sicheng-yang-663790197"
            class="iconfont"
            >&#xe73e;</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../common/Heading";
import { mapMutations } from "vuex";

export default {
  name: "About",
  components: {
    Heading
  },
  methods: {
    ...mapMutations(["getAboutPos"])
  },
  mounted() {
    const pos = this.$refs.about;
    const { top } = pos.getBoundingClientRect();
    this.getAboutPos(top);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

.wrapper {
  min-height: 100vh;
  background: $light1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .about-me-wrapper {
    display: flex;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    .about-me-img {
      width: 30vw;
      height: 30vw;
      object-fit: cover;
    }
    .about-me-content {
      margin-left: 3rem;
      h2 {
        font-weight: bold;
        font-size: 2rem;
        margin: 1.5rem 0 1rem;
      }
      p {
        text-align: justify;
        font-size: 1.2rem;
        line-height: 1.6rem;
        margin-bottom: 0.8rem;
      }
      .links {
        display: flex;
        a {
          display: block;
          font-size: 3rem;
          color: #000;
          margin-right: 3rem;
          transition: color 0.3s ease;
          &:hover {
            color: $dark1;
          }
        }
      }
    }
  }
}
</style>
