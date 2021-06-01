<template>
  <div id="app">
    <div class="app__content">
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app__title {
  font-size: 3em;
  padding: 15px 10px 38px;
}
.app__content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 100vh;
}
</style>
