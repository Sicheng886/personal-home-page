<template>
  <div class="wrapper">
    <Heading text="Hot Spot" anchor="hotspot" />
    <section class="hot-spot">
      <a href="https://wallygood.net/portfolio/">
        <div class="block-wrapper">
          <div class="block-image-wrapper">
            <img
              class="block-image"
              src="../../assets/images/_banner.jpg"
              alt=""
            />
            <div class="block-image-desc">
              <p>My awesome portfolio of matser prjects</p>
            </div>
          </div>
          <div class="block-title">
            <p>Portfolio</p>
          </div>
        </div>
      </a>
      <a href="https://wallygood.net/portfolio/">
        <div class="block-wrapper">
          <div class="block-image-wrapper">
            <img
              class="block-image"
              src="../../assets/images/_banner.jpg"
              alt=""
            />
            <div class="block-image-desc">
              <p>My awesome portfolio of matser prjects</p>
            </div>
          </div>
          <div class="block-title">
            <p>Portfolio</p>
          </div>
        </div>
      </a>
      <a href="https://wallygood.net/portfolio/">
        <div class="block-wrapper">
          <div class="block-image-wrapper">
            <img
              class="block-image"
              src="../../assets/images/_banner.jpg"
              alt=""
            />
            <div class="block-image-desc">
              <p>My awesome portfolio of matser prjects</p>
            </div>
          </div>
          <div class="block-title">
            <p>Portfolio</p>
          </div>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
import Heading from "../common/Heading";

export default {
  name: "HotSpot",
  components: {
    Heading
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";
.wrapper {
  background-color: $light1;

  padding: 2rem 1rem;

  .hot-spot {
    display: flex;
    justify-content: space-around;
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
