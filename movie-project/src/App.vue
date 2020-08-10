<template>
  <v-app>
    <v-content>
      <Toolbar />
      <Drawer />
      <MoviePlayer />
    </v-content>

    <v-main></v-main>
  </v-app>
</template>
<script>
import Toolbar from "./components/Toolbar.vue";
import Drawer from "./components/Drawer.vue";
import MoviePlayer from "./components/MoviePlayer.vue";

export default {
  name: "App",

  components: {
    Toolbar,
    Drawer,
    MoviePlayer,
  },

  data: () => ({
    //
  }),
};
</script>
