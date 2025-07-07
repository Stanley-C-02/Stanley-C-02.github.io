<script setup lang="ts">
import logo from "@/assets/logo.svg"
import { mdiGithub, mdiLinkedin } from "@mdi/js";
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <VApp style="min-width: 1200px; min-height: 100vh;">
    <VAppBar>
      <template #prepend>
        <nav class="d-flex align-center ga-1">
          <VBtn to="/" variant="plain" >
            <VImg alt="Vue logo" class="logo" :src="logo" width="64" href="/" />
          </VBtn>
          <VBtn to="/">Home</VBtn>
          <VBtn to="/about">About</VBtn>
        </nav>
      </template>

      <template #append>
        <nav class="d-flex align-center ga-2">
          <VBtn target="_blank" :icon="mdiGithub" href="https://github.com/Stanley-C-02" title="GitHub (opens in new tab)"></VBtn>
          <VBtn target="_blank" :icon="mdiLinkedin" href="https://www.linkedin.com/in/stanleyc02/" title="LinkedIn (opens in new tab)"></VBtn>
        </nav>
      </template>
    </VAppBar>

    <VMain>
      <RouterView />
    </VMain>

    <VFooter class="px-12 py-4 d-flex justify-space-between flex-grow-0">
      <VBtn to="/" variant="plain" >
        <VImg alt="Vue logo" class="logo" :src="logo" width="64" href="/" />
      </VBtn>
      <p class="text-caption">
        &copy; Stanley Chow, 2025. All rights reserved.
      </p>
    </VFooter>
  </VApp>
</template>

<style scoped>
</style>
