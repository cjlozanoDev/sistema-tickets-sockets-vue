<template>
  <div class="ticket-generator">
    <h2>Generar tickets</h2>
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
    this.$socket.emit("getLastTicket", null, (lastTicket) => {
      this.newTicket = lastTicket;
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

<style scoped>
.ticket-generator {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #34495e;
  color: #fff;
  font-size: 1.2em;
}

@media (min-width: 768px) {
  .ticket-generator {
    font-size: 2em;
  }
}
</style>
