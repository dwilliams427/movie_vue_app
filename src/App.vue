<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/signup">Signup</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/logout">Logout</router-link>
      |
      <router-link to="/movies">All Movies</router-link>
      |
      <router-link to="/movies">Create A Movie</router-link>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Moviezz</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <router-link to="/" class="nav-link">
                Home
                <span class="sr-only">(current)</span>
              </router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">All Movies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Create Movie</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1">Sign Up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1">Log In</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1">Log Out</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<style>
body {
  font-family: "Trebuchet", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background-image: url("./assets/double-bubble-outline.png");
}
</style>
