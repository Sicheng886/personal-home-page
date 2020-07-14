<template>
  <div id="app">
    <Header />
    <Banner />
    <HotSpot />
    <ProjectList />
  </div>
</template>

<script>
import axios from "axios";

import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import HotSpot from "./components/hotspot/HotSpot";
import ProjectList from "./components/project/ProjectList";

export default {
  name: "App",
  components: {
    Header,
    Banner,
    HotSpot,
    ProjectList
  },
  data() {
    return {
      hotList: [],
      projectList: []
    };
  },
  methods: {
    getData() {
      axios.get("/api/data.json").then(this.dataHandler);
    },
    dataHandler(res) {
      this.hotList = res.data;
      console.log(res.data);
    }
  }
};
</script>

<style></style>
