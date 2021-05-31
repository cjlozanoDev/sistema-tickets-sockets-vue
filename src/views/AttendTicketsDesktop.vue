<template>
  <div>
    <h2>ESCRITORIO NÚMERO: {{ numberDesktop }}</h2>
    <h4>
      ATENDIENDO A
      <span v-if="numberTicketAttended === ''">... </span>
      <span v-else v-text="numberTicketAttended" />
    </h4>
    <Button :onclick="attendNextTicket"> ATENDER SIGUIENTE TICKET </Button>
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
