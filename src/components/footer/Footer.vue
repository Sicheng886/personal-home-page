<template>
  <div class="wrapper">
    <p>Welcome to Wally's website</p>
    <p>@Wally Yang, 2020</p>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";
.wrapper {
  background: $dark2;
  height: 4rem;
  line-height: 2rem;
  text-align: center;
  color: $light1;
}
</style>
