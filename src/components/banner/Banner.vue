<template>
  <div class="wrapper">
    <div class="deco">
      <BannerCircle :type="true" :fromTop="0" :fromLeft="0" :toTop="6" :toLeft="4" size="35vw" />
      <BannerCircle
        :type="true"
        :fromTop="30"
        :fromLeft="95"
        :toTop="33"
        :toLeft="102"
        size="20vw"
      />
      <BannerCircle :type="true" :fromTop="77" :fromLeft="93" :toTop="92" :toLeft="97" size="10vw" />
      <BannerCircle
        :type="false"
        :fromTop="120"
        :fromLeft="30"
        :toTop="127"
        :toLeft="30"
        size="40vw"
      />
      <BannerCircle :type="false" :fromTop="5" :fromLeft="50" :toTop="10" :toLeft="50" size="25vw" />
      <BannerCircle :type="false" :fromTop="40" :fromLeft="0" :toTop="60" :toLeft="2" size="10vw" />
      <img src="../../assets/images/title.png" id="banner-title" alt />
    </div>
    <div class="content">
      <h1 class="title">Wallygood.net</h1>
      <p class="slogan">Welcome to wally's personal site</p>
      <div class="btn" @click="clickHandler">View more</div>
    </div>
  </div>
</template>

<script>
import BannerCircle from "./Circle";
import { mapState } from "vuex";

export default {
  name: "Banner",
  components: { BannerCircle },
  computed: {
    ...mapState(["hotspotPos"])
  },
  methods: {
    clickHandler() {
      window.scrollTo({
        top: this.hotspotPos,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

.wrapper {
  background-image: url("../../assets/images/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .deco {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 1;
    #banner-title {
      position: absolute;
      transform: translate(-50%, -50%);
      width: 40vw;
      left: 70%;
      top: 50%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding-left: 6rem;
    color: $light1;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    .title {
      margin: 2rem 0;
      font-size: 4.5rem;
    }
    .slogan {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }
    .btn {
      margin: 1rem 0;
      padding: 1rem;
      width: 8rem;
      font-size: 1.4rem;
      border: 0.2rem solid $light1;
      text-align: center;
      transition-property: background-color color;
      transition-duration: 0.2s;
      transition-timing-function: ease;
      cursor: pointer;
      &:hover {
        background-color: $light1;
        color: $dark2;
      }
    }
  }
}

@media only screen and (max-width: 414px) {
  .wrapper {
    overflow: hidden;
    .deco {
      width: 100%;
      overflow: hidden;
      #banner-title {
        top: 40%;
        left: 50%;
        width: 80vw;
      }
    }
    .content {
      padding-left: 0;
      width: 80%;
      top: 30%;
      left: 10%;
      .title {
        width: 100%;
        margin: 0;
        font-size: 3rem;
        margin-bottom: 2rem;
      }
      .slogan {
        font-size: 1.4rem;
      }
    }
  }
}
</style>
