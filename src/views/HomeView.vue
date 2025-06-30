<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import { mdiApi, mdiBroadcast, mdiDatabase, mdiGithub, mdiLanguagePython, mdiReact, mdiSchool } from '@mdi/js'
import sciGui from '@/assets/SciGUI.jpg'
import fleetRewards from '@/assets/FleetRewards G5.jpg'
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
      <VTimelineItem>
        <template #opposite>
          <VCard>
            <VCardItem>
              <VCardTitle>
                <h3 class="text-h4">TMR SciGUI</h3>
              </VCardTitle>
              <VCardSubtitle class="d-flex ga-1">
                <VChip class="ga-1" color="blue">
                  <template #prepend>
                    <VIcon :icon="mdiReact" />
                  </template>
                  <span class="font-weight-medium">React</span>
                </VChip>
                <VChip class="ga-1" color="blue">
                  <template #prepend>
                    <VIcon :icon="mdiApi" />
                  </template>
                  <span class="font-weight-medium">Moonraker</span>
                </VChip>
                <VChip class="ga-1" color="blue">
                  <span class="font-weight-medium">Arduino</span>
                </VChip>
              </VCardSubtitle>
            </VCardItem>
            <VCardText class="text-body-1">
              In the <a href="https://teamr3.ca/" target="_blank" title="formerly R3">Toronto MetRobotics team</a> at <a href="https://www.torontomu.ca/" target="_blank" title="Toronto Metropolitan University, formerly Ryerson">TMU</a>, I worked with team members to research, prototype, develop, and test software on various Arduino hardware and control systems. Made for the <a href="https://urc.marssociety.org/" target="_blank" title="University Rover Challenge">URC</a> science mission, this system provides a web-based frontend to control and manage various motors, sensors, and their configurations to perform in-situ tests for life detection, matching our validated scientific procedures.
            </VCardText>
            <!-- <VCardActions>
              <VBtn color="green" :icon="mdiGithub" title="Project GitHub (opens in new tab)" />
            </VCardActions> -->
          </VCard>
        </template>
        <VImg alt="SciGUI controls for stepper, servo, augur, and vibration motors" :src="sciGui" width="500" />
      </VTimelineItem>
      <VTimelineItem>
        <template #opposite>
          <VCard>
            <VCardItem>
              <VCardTitle>
                <h3 class="text-h4">FleetRewards</h3>
                <p class="text-subtitle-1">Feedback and Engagement System</p>
              </VCardTitle>
              <VCardSubtitle class="d-flex ga-1">
                <VChip class="ga-1" color="blue">
                  <template #prepend>
                    <VIcon :icon="mdiReact" />
                  </template>
                  <span class="font-weight-medium">React</span>
                </VChip>
                <VChip class="ga-1" color="blue">
                  <template #prepend>
                    <VIcon :icon="mdiLanguagePython" />
                  </template>
                  <span class="font-weight-medium">Python</span>
                </VChip>
                <VChip class="ga-1" color="blue">
                  <template #prepend>
                    <VIcon :icon="mdiDatabase" />
                  </template>
                  <span class="font-weight-medium">PostgreSQL</span>
                </VChip>
              </VCardSubtitle>
            </VCardItem>
            <VCardText class="text-body-1">
              FleetRewards is a Loyalty Program Web Portal for an imaginary fleet management solution provider. Various features of FleetRewards are delegated to different teams in a software project management course. This project allows registered operators to complete surveys and be rewarded with points. The surveys and points are stored in PostgreSQL and available through a well-documented backend Python API. Our team members' strengths were able to make up for weaknesses, allowing our system data to be successfully integrated with other teams.
            </VCardText>
            <VCardActions>
              <VBtn color="green" :icon="mdiGithub" href="https://github.com/ItsGoldeneyes/fleetrewards/tree/group-5" target="_blank" title="Project GitHub (opens in new tab)" />
              <VBtn color="green" :icon="mdiBroadcast" href="https://fleetrewards-group5.up.railway.app/" target="_blank" title="Live site for FleetRewards Feedback and Engagement System (opens in new tab)" />
            </VCardActions>
          </VCard>
        </template>
        <VImg alt="Project 1" :src="fleetRewards" width="500" />
      </VTimelineItem>
      <!-- <VTimelineItem>
        <template #opposite>
          <VCard>
            <VCardItem>
              <VCardTitle>
                <h3 class="text-h4">Project Name</h3>
              </VCardTitle>
              <VCardSubtitle class="d-flex ga-1">
                <VChip class="ga-1" color="blue">
                  <template #prepend>
                    <VIcon :icon="mdiReact" />
                  </template>
                  <span class="font-weight-medium">React</span>
                </VChip>
              </VCardSubtitle>
            </VCardItem>
            <VCardText class="text-body-1">
              Project Description. Est animi perferendis eius aut labore. Necessitatibus aut maiores animi non aut sit. Deleniti doloremque architecto. Est expedita perspiciatis facilis nihil sit vitae.
            </VCardText>
            <VCardActions>
              <VBtn color="green" :icon="mdiGithub" title="Project GitHub (opens in new tab)" />
            </VCardActions>
          </VCard>
        </template>
        <VImg alt="Project 1" src="" width="320" height="256" />
      </VTimelineItem> -->
    </VTimeline>
  </section>
</template>

<style scoped>
</style>
