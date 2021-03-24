<template>
  <div class="home">
    <!-- <h1>New Product!</h1>
    <button v-on:click="createProduct">Create!</button> -->
    <div>
      <h1>Add Movie!</h1>
      <div v-for="movie in movies" v-bind:key="movie">{{ movie }}</div>
      <input type="text" v-model="title" placeholder="Title" />
      <input type="text" v-model="name" placeholder="Name" />
      <input type="text" v-model="description" placeholder="Description" />
      <input type="text" v-model="price" hint="Price" />
      <button v-on:click="createmovie">Create New movie</button>
      <button v-on:click="updatemovie">Update movie</button>
    </div>
    <div>
      <h1>All Movies!</h1>
      <div>
        <div v-for="movie in movies" v-bind:key="movie">
          <p>
            <b>{{ movie.title }} - {{ movie.year }}</b>
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
    createmovies: function () {
      axios.create("/api/movies", params).then((response) => {
        this.movies = response.data;
        console.log("all movies: ", this.movies);
      });
    },
  },
};
</script>
