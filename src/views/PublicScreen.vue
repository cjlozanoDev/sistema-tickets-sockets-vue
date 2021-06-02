<template>
  <div class="public-screen">
    <div class="public-screen__main">
      <audio
        id="audio-ticket"
        src="../resources/audio/notificationTicket.mp3"
      ></audio>
      <span v-if="!lastTickets[0]"> Espere por favor... </span>
      <div v-else>
        <span class="public-sreen__sala-info">
          Sala {{ lastTickets[0].desktop }}
        </span>
        <span> Turno: {{ lastTickets[0].number }} </span>
      </div>
    </div>
    <div class="public-screen__sections">
      <div class="public-screen__sections__container">
        <div>
          <span v-if="!lastTickets[1]">Espere por favor...</span>
          <div v-else>
            <span class="public-sreen__sala-info">
              Sala {{ lastTickets[1].desktop }}
            </span>
            <span> Turno: {{ lastTickets[1].number }} </span>
          </div>
        </div>
        <div>
          <span v-if="!lastTickets[2]">Espere por favor...</span>
          <div v-else>
            <span class="public-sreen__sala-info">
              Sala {{ lastTickets[2].desktop }}
            </span>
            <span> Turno: {{ lastTickets[2].number }} </span>
          </div>
        </div>
        <div>
          <span v-if="!lastTickets[3]">Espere por favor...</span>
          <div v-else>
            <span class="public-sreen__sala-info">
              Sala {{ lastTickets[3].desktop }}
            </span>
            <span> Turno: {{ lastTickets[3].number }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicScreen",
  data() {
    return {
      lastTickets: [],
    };
  },
  created() {
    this.$socket.on("lastFourTickets", (data) => {
      this.lastTickets = data.lastFourTickets;
      console.log("hola");
      const elementAudio = document.getElementById("audio-ticket");
      elementAudio.play();
    });
    this.$socket.emit("currentState", null, (data) => {
      this.lastTickets = data.lastFourTickets;
    });
    this.$socket.on("currentState", (data) => {
      this.lastTickets = data.lastFourTickets;
    });
    this.sockets.subscribe("currentState", (data) => {
      this.lastTickets = data.lastFourTickets;
    });
    this.sockets.subscribe("lastFourTickets", (data) => {
      this.lastTickets = data.lastFourTickets;
      const elementAudio = document.getElementById("audio-ticket");
      elementAudio.play();
    });
  },
};
</script>

<style scoped>
.public-screen {
  display: flex;
  justify-content: space-between;
  height: 100%;
  color: #fff;
  background: var(--color-primary);
}
.public-screen__main {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6em;
}
.public-sreen__sala-info {
  display: block;
}
.public-screen__sections {
  width: 20%;
  text-align: center;
  background: var(--color-secondary);
}
.public-screen__sections__container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  font-size: 1.5em;
}
</style>
