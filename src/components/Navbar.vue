<script setup lang="ts">
import logo from "@/assets/logo.png"
import { mdiGithub, mdiLinkedin } from "@mdi/js"
</script>

<template>
  <VAppBar>
    <VBtn href="#main" class="sr-only">Skip to main content</VBtn>

    <VContainer>
      <VRow>
        <nav class="d-flex align-center ga-1">
          <VBtn to="/" variant="plain" >
            <VImg alt="SC logo" class="logo" :src="logo" width="32" height="32" href="/" />
          </VBtn>
          <VBtn to="/">Home</VBtn>
          <VBtn to="/about">About</VBtn>
          <VBtn to="/contact">Contact</VBtn>
        </nav>

        <VSpacer />

        <nav class="d-flex align-center ga-2">
          <VBtn target="_blank" :icon="mdiGithub" href="https://github.com/Stanley-C-02" title="GitHub (opens in new tab)"></VBtn>
          <VBtn target="_blank" :icon="mdiLinkedin" href="https://www.linkedin.com/in/stanleyc02/" title="LinkedIn (opens in new tab)"></VBtn>
        </nav>
      </VRow>
    </VContainer>
  </VAppBar>
</template>

<script scoped>
</script>
