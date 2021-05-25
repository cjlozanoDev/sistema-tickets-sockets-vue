<template>
  <div>
    <h1>App de tickets</h1>
    <div>
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
