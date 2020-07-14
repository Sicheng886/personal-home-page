<template>
  <div id="app">
    <Header />
    <Banner />
    <HotSpot :list="hotList" />
    <ProjectList :list="projectList" />
    <About />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";

import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import HotSpot from "./components/hotspot/HotSpot";
import ProjectList from "./components/project/ProjectList";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

export default {
  name: "App",
  components: {
    Header,
    Banner,
    HotSpot,
    ProjectList,
    About,
    Footer
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
      res = res.data;
      if (res.ret) {
        const data = res.data;
        this.hotList = data.hotspot;
        this.projectList = data.projectList;
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style></style>
