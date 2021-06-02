<template>
  <div>
    <div>
      <h2>Menú principal</h2>
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
.home__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
.select__desktops {
  width: 90px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
