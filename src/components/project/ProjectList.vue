<template>
  <div class="wrapper">
    <h1 class="title" id="projects">Projects</h1>
  </div>
</template>

<script>
export default {
  name: "ProjectList"
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

.wrapper {
  background-color: $bgColor;

  padding: 2rem 1rem;
  .title {
    font-size: 3rem;

    color: $dark2;
  }
}
</style>
