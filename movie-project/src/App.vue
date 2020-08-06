<template>
  <v-app>
    <v-content>
      <Toolbar />
      <Drawer />
    </v-content>

    <v-main></v-main>
  </v-app>
</template>
<script>
import Toolbar from "./components/Toolbar.vue";
import Drawer from "./components/Drawer.vue";

export default {
  name: "App",

  components: {
    Toolbar,
    Drawer,
  },

  data: () => ({
    //
  }),
};
</script>
