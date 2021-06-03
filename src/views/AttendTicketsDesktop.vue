<template>
  <div class="ticket-desktop">
    <div class="ticket-desktop__content">
      <h2>ESCRITORIO NÚMERO: {{ numberDesktop }}</h2>
      <h4>
        ATENDIENDO A
        <span v-if="numberTicketAttended === ''">... </span>
        <span v-else v-text="numberTicketAttended" />
      </h4>
      <Button :onclick="attendNextTicket"> ATENDER SIGUIENTE TICKET </Button>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "AttendTicketsDesktop",
  components: {
    Button,
  },
  created() {
    this.numberDesktop = this.$route.params.numberDesktop;
  },
  data() {
    return {
      numberDesktop: 1,
      numberTicketAttended: "",
    };
  },
  methods: {
    attendNextTicket() {
      this.$socket.emit(
        "attendNextTicket",
        { numberDesktop: this.numberDesktop },
        (ticket) => {
          if (ticket === "") {
            alert("No hay más tickets");
            this.numberTicketAttended = "";
          } else {
            this.numberTicketAttended = ticket;
          }
        }
      );
    },
  },
};
</script>

<style scoped>
.ticket-desktop {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #34495e;
  color: #fff;
}
.ticket-desktop__content {
  font-size: 1.2em;
}

@media (min-width: 768px) {
  .ticket-desktop__content {
    font-size: 2em;
  }
}
</style>
