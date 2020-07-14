<template>
  <div class="wrapper">
    <Heading text="Projects" anchor="projects" />
    <div>Something</div>
  </div>
</template>

<script>
import Heading from "../common/Heading";

export default {
  name: "ProjectList",
  components: {
    Heading
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

.wrapper {
  background-color: $light2;

  padding: 2rem 1rem;
}
</style>
