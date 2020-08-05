<template>
  <v-app>
    <v-main>
      <Toolbar />

      <v-spacer></v-spacer>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";

export default {
  name: "App",
  components: {
    Toolbar,
  },

  data: () => ({
    //
  }),
};
</script>
