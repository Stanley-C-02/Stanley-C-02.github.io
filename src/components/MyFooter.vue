<script setup lang="ts">
import logo from "@/assets/logo.png"
</script>

<template>
  <VFooter class="py-4 flex-grow-0">
    <VContainer>
      <VRow>
        <VCol>
          <VBtn to="/" variant="plain" >
            <VImg alt="SC logo" class="logo" :src="logo" width="32" height="32" href="/" />
          </VBtn>
        </VCol>

        <VSpacer />

        <VCol>
          <p class="text-caption">
            &copy; Stanley Chow, 2025. All rights reserved.
          </p>
        </VCol>
      </VRow>
    </VContainer>
  </VFooter>
</template>

<script scoped>
</script>
