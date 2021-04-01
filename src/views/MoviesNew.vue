<template>
  <div class="container posts-new">
    <form v-on:submit.prevent="createMovie()">
      <h1>New Post</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group">
        <label>Body:</label>
        <input type="text" class="form-control" v-model="body" />
      </div>
      <div class="form-group">
        <label>Image URL:</label>
        <input type="text" class="form-control" v-model="image" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      title: "",
      year: "",
      plot: "",
      director: "",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createMovie: function () {
      console.log("creating movie");
      var params = {
        title: this.title,
        year: this.year,
        plot: this.plot,
        director: this.director,
      };
      axios
        .post("api/movies", params)
        .then(() => {
          this.$router.push("/movies");
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
