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
    currentmovie: "movie.m4v",
    categories: ["Marvel", "Star Wars", "Animated"],
    movies: [
      { title: "Avengers", video: "Avengers.m4v" },
      { title: "Avengers: Age of Ultron", video: "Avengers.AOU.m4v" },
      { title: "Avengers: Infinity War", video: "Avenger.Infinity.m4v" },
      { title: "Avengers: Endgame", video: "Avenger.Endgame.m4v" },
      { title: "Guardians of the Galaaxy", video: "Gotg.m4v" },
      { title: "Guardians of the Galaxy 2", video: "Gotg2.m4v" },
      { title: "Star Wars: The Phantom Menace", video: "StarWars1.m4v" },
      { title: "Toy Story", video: "Toy.Story.m4v" },

    ]

  }

}).$mount('#app');
new Vue({
  vuetify,
  render: (h) => h(App),
  data: {
    marvel: "movie.m4v",
    categories: ["Marvel"],
    movies: [
      { title: "Avengers", video: "Avengers.m4v" },
      { title: "Avengers: Age of Ultron", video: "Avengers.AOU.m4v" },
      { title: "Avengers: Infinity War", video: "Avenger.Infinity.m4v" },
      { title: "Avengers: Endgame", video: "Avenger.Endgame.m4v" },
      { title: "Guardians of the Galaaxy", video: "Gotg.m4v" },
      { title: "Guardians of the Galaxy 2", video: "Gotg2.m4v" },
    ]

  }
}).$mount('#app');
