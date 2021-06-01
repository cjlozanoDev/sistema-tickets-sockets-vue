<template>
  <div class="public-screen">
    <div class="public-screen__main">
      <h2>principal</h2>
    </div>
    <div class="public-screen__sections">
      <div class="public-screen__sections__container">
        <div>Section 1</div>
        <div>Section 2</div>
        <div>Section 3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicScreen",
};
</script>

<style scoped>
.public-screen {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.public-screen__main {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.public-screen__sections {
  width: 20%;
  text-align: center;
}
.public-screen__sections__container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
}
</style>
