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
      <!-- <input type="text" v-model="english" placeholder="english" /> -->
      <button v-on:click="createMovies">Create New movie</button>
    </div>

    <dialog id="movie-details">
      <form method="dialog">
        <h1>Movie Info!</h1>
        <!-- <p>Title: {{ currentMovie.title }}</p>
        <p>Year: {{ currentMovie.year }}</p>
        <p>Plot: {{ currentMovie.plot }}</p>
        <p>Director: {{ currentMovie.director }}</p> -->
        <p>
          title:
          <input type="text" v-model="currentMovie.title" />
        </p>
        <p>
          year:
          <input type="text" v-model="currentMovie.year" />
        </p>
        <p>
          plot:
          <input type="text" v-model="currentMovie.plot" />
        </p>
        <p>
          director:
          <input type="text" v-model="currentMovie.director" />
        </p>
        <button v-on:click="updateMovie(currentMovie.id)">Update Movie</button>
        <button v-on:click="destroyMovie(currentMovie)">Destroy Movie</button>
        <button>Close</button>
      </form>
    </dialog>

    <div>
      <h1>All Movies!</h1>
      <div>
        <div v-for="movie in movies" v-bind:key="movie.id">
          <p>
            <b>{{ movie.title }} - {{ movie.year }}</b>
            <button v-on:click="movieInfo(movie)">More Info</button>
          </p>
          <p>{{ movie.plot }}</p>
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
      newMovieTitle: "",
      newMovieYear: "",
      newMoviePlot: "",
      newMovieDirector: "",
      currentMovie: {},
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
        title: this.newMovieTitle,
        year: this.newMovieYear,
        plot: this.newMoviePlot,
        director: this.newMovieDirector,
        // english: this.english,
      };
      axios
        .post("/api/movies", params)
        .then((response) => {
          console.log("success", response.data);
        })
        .catch((error) => console.log(error.response));
    },
    movieInfo: function (movie) {
      this.currentMovie = movie;
      document.querySelector("#movie-details").showModal();
    },
    updateMovie: function (movie) {
      var params = {
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
        director: movie.director,
      };
      axios
        .patch("/api/movies/" + movie.id, params)
        .then((response) => {
          console.log("movie updated", response);
          console.log("movie id: " + movie.id);
          this.currentMovie = {};
        })
        .catch((error) => {
          console.log("movies update error", error.response);
        });
    },
    destroyMovie: function (movie) {
      axios.delete("/api/movies/" + movie.id).then((response) => {
        console.log("movie destroyed", response);
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    },
  },
};
</script>
