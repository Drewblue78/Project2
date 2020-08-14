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
    categories: [
      {
        title: "Marvel",
        movies: [
          {
            title: "Avengers",
            video: "Avengers.mp4"
          },
          {
            title: "Avengers: Age of Ultron",
            video: "Avengers.AOU.mp4"
          },
          {
            title: "Avengers: Infinity War",
            video: "Avenger.Infinity.mp4"
          },
          {
            title: "Avengers: Endgame",
            video: "Avenger.Endgame.mp4"
          },
          {
            title: "Guardians of the Galaaxy",
            video: "Gotg.mp4"
          },
          {
            title: "Guardians of the Galaxy 2",
            video: "Gotg2.mp4"
          },
        ]
      },
      {
        title: "Star Wars",
        movies: [
          {
            title: "Star Wars: The Phantom Menace",
            video: "StarWars1.mp4"
          },
        ]
      },
      {
        title: "Animated",
        movies: [
          {
            title: "Toy Story",
            video: "Toy.Story.mp4"
          },
        ]
      },
    ]
  },
  computed: {
    allmovies() {
      let list = []
      this.categories.forEach(cat => {
        list = list.concat(cat.movies)
      })
      return list
    }
  },

}).$mount('#app');
