<template>
  <div class="home">
    <!-- <h1>New Product!</h1>
    <button v-on:click="createProduct">Create!</button> -->
    <div>
      <h1>Add Movie!</h1>
      <input type="text" v-model="title" placeholder="Title" />
      <input type="text" v-model="year" placeholder="Year" />
      <input type="text" v-model="plot" placeholder="plot" />
      <input type="text" v-model="director" placeholder="director" />
      <input type="text" v-model="english" placeholder="english" />

      <button v-on:click="createMovies">Create New movie</button>
      <!-- <button v-on:click="updatemovie">Update Movie</button> -->
    </div>

    <div>
      <h1>All Movies!</h1>
      <div>
        <div v-for="movie in movies" v-bind:key="movie">
          <p>
            <b>{{ movie.title }} - {{ movie.year }}</b>
            <button v-on:click="movieInfo">More Info</button>
            {{ movie.plot }}
          </p>
          <!-- <img v-bind:src="movie.image_url" v-bind:alt="movie.title" /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
      params: [],
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/api/movies").then((response) => {
        this.movies = response.data;
        console.log("all movies: ", this.movies);
      });
    },
    createMovies: function () {
      var params = {
        title: this.title,
        year: this.year,
        plot: this.plot,
        director: this.director,
        english: this.english,
      };
      axios.post("/api/movies", params).then((response) => {
        console.log("success", response.data);
      });
    },
    movieInfo: function () {
      axios.get("/api/movies").then((response) => {
        this.movies.plot = response.data;
        console.log("Movie plot: ", this.movies.plot);
      });
    },
  },
};
</script>
