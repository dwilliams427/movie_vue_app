<template>
  <div class="movies-index">
    <div>
      <div v-for="movie in movies" v-bind:key="movie.id">
        <h3>{{ movie.title }} - {{ movie.year }}</h3>
        <p>{{ movie.plot }}</p>
        <router-link v-bind:to="`/movies/${movie.id}`">More Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movies: [],
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/api/movies").then((response) => {
        console.log("movies index", response);
        this.movies = response.data;
      });
    },
  },
};
</script>
