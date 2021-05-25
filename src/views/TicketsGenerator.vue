<template>
  <div>
    <h1>Generar tickets</h1>
    <Button :onclick="generateTicket">GENERAR NUEVO TICKET</Button>
    <h2 v-if="newTicket === ''">Cargando último ticket ...</h2>
    <p v-else>{{ newTicket }}</p>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "TicketsGenerator",
  components: {
    Button,
  },
  data() {
    return {
      newTicket: "",
    };
  },
  created() {
    this.$socket.on("currentState", (data) => {
      this.newTicket = data.currentTicket;
    });
    this.sockets.subscribe("currentState", (data) => {
      this.newTicket = data.currentTicket;
    });
  },
  methods: {
    generateTicket() {
      this.$socket.emit("generateNewTicket", null, (newTicket) => {
        this.newTicket = newTicket;
      });
    },
  },
};
</script>
