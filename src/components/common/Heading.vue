<template>
  <div class="title" :id="anchor">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    text: String,
    anchor: String
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";
.title {
  font-size: 3rem;
  text-align: center;
  color: $dark2;
  padding-bottom: 2rem;
  font-weight: bold;
}
</style>
