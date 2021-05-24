<template>
  <div>
    <h1>Generar tickets</h1>
    <button @click="generateTicket">Generar nuevo ticket</button>
    <h2 v-if="newTicket === ''">Cargando último ticket ...</h2>
    <p v-else>{{ newTicket }}</p>
  </div>
</template>

<script>
export default {
  name: "TicketsGenerator",
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
