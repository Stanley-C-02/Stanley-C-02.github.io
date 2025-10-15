<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import MyFooter from "./components/MyFooter.vue";
</script>

<template>
  <VApp style="min-width: 1280px; min-height: 100vh;">
    <Navbar />

    <VMain id="main">
      <VContainer>
        <RouterView />
      </VContainer>
    </VMain>

    <MyFooter />
  </VApp>
</template>

<style scoped>
</style>
