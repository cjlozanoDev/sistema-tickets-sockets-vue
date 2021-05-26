<template>
  <div>
    <div>
      <h2>Menú principal</h2>
      <Button :onclick="goToGenerator" icon="confirmation_number">
        PANTALLA GENERADOR DE TICKETS
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "Home",
  components: {
    Button,
  },
  methods: {
    goToGenerator() {
      this.$router.push({
        name: "Generator",
      });
    },
  },
};
</script>
