<template>
  <div class="wrapper">
    <div>
      <img class="logo" src="../../assets/images/logo.png" alt="logo" />
    </div>
    <div class="links">
      <a href="#projects">Projects</a>
      <a href="#">Gallery</a>
      <a href="#">About</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
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
  z-index: 10000;
  div {
    padding: 1rem 2rem;
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
