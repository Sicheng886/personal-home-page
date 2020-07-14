<template>
  <div class="wrapper">
    <Heading text="Projects" anchor="projects" />
    <div>Something</div>
  </div>
</template>

<script>
import axios from "axios";

import Heading from "../common/Heading";

export default {
  name: "ProjectList",
  components: {
    Heading
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    getData() {
      axios.get("/api/data.json").then(this.dataHandler);
    },
    dataHandler(res) {
      this.list = res.data;
      console.log(res.data);
    }
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
