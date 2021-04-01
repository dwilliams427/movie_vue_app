<template>
  <div class="movie-show">
    <div class="container">
      <h1>{{ movie.title }} - {{ movie.year }}</h1>
      <p>{{ movie.plot }}</p>
      <router-link v-bind:to="`/movies/${movie.id}/edit`">Edit Movie</router-link>
      <br />
      <button v-on:click="destroyMovie(movie)">Destroy Movie</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    this.showMovie();
  },
  methods: {
    showMovie: function () {
      axios.get("/api/movies/" + this.$route.params.id).then((response) => {
        console.log("showing movie", response);
        this.movie = response.data;
      });
    },
    destroyMovie: function (movie) {
      axios.delete("/api/movies/" + movie.id).then(() => {
        console.log("movie deleted");
        this.$router.push("/movies");
      });
    },
  },
};
</script>
