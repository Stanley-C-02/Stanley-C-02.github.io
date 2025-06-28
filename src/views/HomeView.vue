<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import { mdiGithub, mdiReact, mdiSchool } from '@mdi/js'
</script>

<template>
  <!-- Hero -->
  <section class="px-12 bg-grey-lighten-1 d-flex flex-column justify-center" style="height: 50vh;">
    <h1 class="text-h2 font-weight-medium">Hello there, and welcome!</h1>
    <p class="text-h4 font-weight-light">I'm Stanley, a software engineer excited to create and work with practical digital solutions.</p>
    <div class="mt-4">
      <VChip class="ga-1" color="blue">
        <template #prepend>
          <VIcon :icon="mdiSchool" />
        </template>
        <span class="font-weight-medium">TMU</span>
      </VChip>
    </div>
  </section>

  <!-- Timeline -->
  <section class="px-12 py-16">
    <h2 class="text-h3 font-weight-medium">Some of my work</h2>
    <VTimeline>
      <VTimelineItem class="bg-cyan-darken-4">
        <template #opposite>
          <div class="d-flex flex-column">
            <div class="d-flex">
              <h3 class="text-h4">Project Name</h3>
              <VBtn :icon="mdiGithub" title="Project GitHub (opens in new tab)" />
            </div>
            <div>
              <VChip class="ga-1" color="blue">
                <template #prepend>
                  <VIcon :icon="mdiReact" />
                </template>
                <span class="font-weight-medium">React</span>
              </VChip>
            </div>
            <p class="text-body-1">Project Description. Est animi perferendis eius aut labore. Necessitatibus aut maiores animi non aut sit. Deleniti doloremque architecto. Est expedita perspiciatis facilis nihil sit vitae.</p>
          </div>
        </template>
        <VImg alt="Project 1" src="" width="320" height="256" />
      </VTimelineItem>
      <VTimelineItem class="bg-cyan-darken-2">
        <template #opposite>
          <div class="d-flex flex-column">
            <div class="d-flex">
              <h3 class="text-h4">Project Name</h3>
              <VBtn :icon="mdiGithub" title="Project GitHub (opens in new tab)" />
            </div>
            <div>
              <VChip class="ga-1" color="blue">
                <template #prepend>
                  <VIcon :icon="mdiReact" />
                </template>
                <span class="font-weight-medium">React</span>
              </VChip>
            </div>
            <p class="text-body-1">Project Description. Enim alias quia ipsam temporibus officia ea reiciendis consequatur voluptatem. Fugit dolore id impedit dolor qui in non. Accusamus nisi ipsam quo a laudantium autem. Qui voluptatem voluptatem quae temporibus aliquid quia quae eum et.</p>
          </div>
        </template>
        <VImg alt="Project 1" src="" width="320" height="256" />
      </VTimelineItem>
    </VTimeline>
  </section>
</template>

<style scoped>
</style>
