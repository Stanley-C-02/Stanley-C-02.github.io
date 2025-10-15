<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import MyFooter from "./components/MyFooter.vue";
import { VBtn } from "vuetify/components";
</script>

<template>
  <VApp style="min-width: 1280px; min-height: 100vh;">
  <!-- <VApp class="mx-auto"> -->
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
