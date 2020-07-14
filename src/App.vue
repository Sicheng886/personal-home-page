<template>
  <div id="app">
    <Header />
    <Banner />
    <HotSpot />
    <ProjectList />
  </div>
</template>

<script>
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
  }
};
</script>

<style></style>
