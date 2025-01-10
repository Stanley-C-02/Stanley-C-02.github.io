<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!!" /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact-me">Contact</RouterLink>
        <RouterLink to="/site-map">Site Map</RouterLink>
      </nav>

      <div class="header-buttons">
        <a href="#">
        </a>
        <a href="https://github.com/Stanley-C-02" target="_blank">
          <img alt="My GitHub Profile" src="@/assets/github-mark/github-mark.svg" height="125">
        </a>
        <a href="https://www.linkedin.com/in/stanleyc02/" target="_blank">
          <img alt="My LinkedIn Profile" src="@/assets/linkedin-logos/LI-In-Bug.png" height="125">
        </a>
        <!-- <a href="https://github.com/Stanley-C-02">
          <img alt="My Placeholder Profile" src="@/assets/github-mark/github-mark.svg" width="125" height="125">
        </a>
        <a href="https://github.com/Stanley-C-02">
          <img alt="My Placeholder Profile" src="@/assets/github-mark/github-mark.svg" width="125" height="125">
        </a> -->
        <button type="button" link>
          <img alt="Page Settings" src="" height="125" />
        </button>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
