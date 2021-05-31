<template>
  <div class="card">
    <slot name="header" />
    <div class="card__container">
      <slot name="container" />
    </div>
    <div class="card__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card {
  width: 300px;
  border: 1px solid #000;
  padding: 10px;
}
</style>
