import Vue from 'vue';
import VueCoreVideoPlayer from 'vue-core-video-player'
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.use(VueCoreVideoPlayer)

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  data: {
    currentmovie: "movie.mp4",
    categories: ["Marvel", "Star Wars", "Animated"],
    movies: [
      { title: "Avengers", video: "movie.mp4" },
      { title: "Avengers: Age of Ultron", video: "bunny.mp4" }
    ]

  }
}).$mount('#app');
