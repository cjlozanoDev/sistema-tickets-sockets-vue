<template>
  <div>
    <h1>App de tickets</h1>
    <button @click="goToGenerator">Pantalla generador de tickets</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goToGenerator() {
      this.$router.push({
        name: "Generator",
      });
    },
  },
};
</script>
