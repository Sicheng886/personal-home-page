<template>
  <div class="wrapper">
    <div class="content">
      <h1 class="title">Wallygood.net</h1>
      <p class="slogan">Welcome to wally's personal site</p>
      <div class="btn">View more</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
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

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding-left: 6rem;
    color: $light1;
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
</style>
