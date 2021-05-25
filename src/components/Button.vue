<template>
  <div>
    <button @click="onclick" :class="classes">
      <div class="button__content">
        <slot />
        <span class="material-icons" v-if="icon !== ''">
          {{ icon }}
        </span>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    primary: {
      type: Boolean,
      default: true,
    },
    onclick: {
      type: Function,
      default: () => {},
    },
    icon: {
      type: String,
      default: "",
    },
  },
  computed: {
    classes() {
      return {
        primary: this.primary,
      };
    },
  },
};
</script>

<style scoped>
button {
  background-color: #fff;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  padding: 0.75em 2em;
  border-radius: 2em;
  cursor: pointer;
}
.button__content {
  display: flex;
  align-items: center;
}
.primary {
  background-color: var(--color-primary);
  color: #fff;
}
.material-icons {
  margin-left: 8px;
}
</style>
