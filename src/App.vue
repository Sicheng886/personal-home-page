<template>
  <div id="app">
    <Header />
    <Banner />
    <ProjectList />
  </div>
</template>

<script>
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import ProjectList from "./components/project/ProjectList";

export default {
  name: "App",
  components: {
    Header,
    Banner,
    ProjectList
  }
};
</script>

<style>
</style>
