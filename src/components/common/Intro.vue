<template>
  <div class="intro">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Intro"
};
</script>

<style lang="scss" scoped>
.intro {
  text-align: justify;
  padding: 1rem 0 3rem;
  font-size: 1.2rem;
  width: 60%;
  margin: 0 auto;
  line-height: 1.8rem;
}
</style>
