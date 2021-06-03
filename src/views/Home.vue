<template>
  <div class="home">
    <div class="home__title">
      <span>Menú principal</span>
    </div>
    <div class="home__container">
      <Card>
        <template v-slot:header>
          <h3>GENERADOR DE TICKETS</h3>
        </template>
        <template v-slot:actions>
          <Button :onclick="goToGenerator" icon="confirmation_number">
            ACCEDER
          </Button>
        </template>
      </Card>
      <Card>
        <template v-slot:header>
          <h3>ATENCIÓN DE TICKETS</h3>
        </template>
        <template v-slot:container>
          <h4>Elegir escritorio para entrar</h4>
          <select
            class="select__desktops"
            name="desktops"
            v-model="desktopSelected"
          >
            <option
              v-for="desktop in numberDesktops"
              :key="desktop"
              :value="desktop"
            >
              {{ desktop }}
            </option>
          </select>
        </template>
        <template v-slot:actions>
          <Button
            :onclick="goTodoAttendTicketsDesktop"
            icon="confirmation_number"
          >
            ACCEDER
          </Button>
        </template>
      </Card>
      <Card>
        <template v-slot:header>
          <h3>PANTALLA PÚBLICA</h3>
        </template>
        <template v-slot:actions>
          <Button :onclick="goToPublicScreen" icon="confirmation_number">
            ACCEDER
          </Button>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import Card from "../components/Card";

export default {
  name: "Home",
  components: {
    Button,
    Card,
  },
  data() {
    return {
      numberDesktops: [1, 2, 3, 4],
      desktopSelected: 1,
    };
  },
  methods: {
    goToGenerator() {
      this.$router.push({
        name: "Generator",
      });
    },
    goTodoAttendTicketsDesktop() {
      this.$router.push({
        name: "AttendTicketsDesktop",
        params: {
          numberDesktop: this.desktopSelected,
        },
      });
    },
    goToPublicScreen() {
      this.$router.push({
        name: "PublicScreen",
      });
    },
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.home__title {
  padding: 30px 0;
  font-size: 2em;
}
.home__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
}
.select__desktops {
  width: 90px;
  padding: 10px;
  margin-bottom: 10px;
}
@media (min-width: 768px) {
  .home__title {
    font-size: 3em;
  }
}
</style>
