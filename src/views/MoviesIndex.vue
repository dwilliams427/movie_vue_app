<template>
  <div class="movies-index">
    <div class="jumbotron">
      <h1 class="display-4">Movie World</h1>
      <p class="lead">Only the best movies for you my friend.</p>
      <hr class="my-4" />
      <p>See a new world of like maybe 7 movies, all in one website. Woah</p>
    </div>
    <div>
      <fieldset>
        <legend>Choose your favorite movie</legend>
        <ul>
          <li>
            <label for="carrots">{{ movies[0].title }}</label>
            <input type="checkbox" id="carrots" name="vegetable" value="carrots" checked />
          </li>
          <li>
            <label for="peas">{{ movies[1].title }}</label>
            <input type="checkbox" id="peas" name="vegetable" value="peas" />
          </li>
          <li>
            <label for="cabbage">{{ movies[2].title }}</label>
            <input type="checkbox" id="cabbage" name="vegetable" value="cabbage" />
          </li>
          <li>
            <label for="cabbage">{{ movies[3].title }}</label>
            <input type="checkbox" id="cabbage" name="vegetable" value="cabbage" />
          </li>
        </ul>
      </fieldset>
    </div>
    Search by title:
    <input v-model="titleFilter" />
    <div v-for="movie in filterBy(movies, titleFilter, 'title')" v-bind:key="movie">
      <datalist id="titles">
        <option v-for="movie in movies" v-bind:key="movie.id">{{ movie.title }}</option>
      </datalist>
    </div>
    <div v-for="movie in orderBy(filterBy(movies, titleFilter, 'title'), 'title')" v-bind:key="movie"></div>
    <div>
      <button>Sort Alphabetically</button>
    </div>

    <div class="row">
      <div class="col-sm-6" v-for="movie in movies" v-bind:key="movie.id">
        <div class="card">
          <div class="card-body">
            <img class="card-img-top" v-bind:src="movie.image_url" v-bind:alt="movie.title" max-width="200px" />
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.plot }}</p>
            <router-link v-bind:to="`movies/${movie.id}`">
              <button type="button" class="btn btn-link">More Info</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>
      <div v-for="movie in movies" v-bind:key="movie.id">
        <h3>{{ movie.title }} - {{ movie.year }}</h3>
        <p>{{ movie.plot }}</p>
        <router-link v-bind:to="`/movies/${movie.id}`">More Details</router-link>
      </div>
    </div> -->
  </div>
</template>
<style>
#card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>
<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      movies: [],
      titleFilter: "",
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
