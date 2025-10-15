<script setup lang="ts">
import { mdiContentCopy, mdiEmail } from '@mdi/js';
import { VHover, VIcon, VList, VListItem } from 'vuetify/components';

const copyToClipboard = (e: MouseEvent | KeyboardEvent, text: string) => {
  console.log(e);
  navigator.clipboard.writeText(text)
    .then(() => alert('Successfully copied'));
}
</script>

<template>
  <div class="px-12 py-16">
    <h1 class="text-h2 font-weight-medium">My contact info</h1>
    <VList>
      <VHover>
        <template #default="{ isHovering, props }">
          <VListItem title="Email" slim v-bind="props" class="cursor-pointer" :active="!!isHovering" @click="e => copyToClipboard(e, 'stanleychow20@gmail.com')">
            <template #prepend>
              <VIcon :icon="mdiEmail" aria-label="Email Address" role="img" aria-hidden="false" />
            </template>

            <template #default>
              stanleychow20@gmail.com
            </template>

            <template #append v-if="isHovering">
              <VIcon :icon="mdiContentCopy" />
            </template>
          </VListItem>
        </template>
      </VHover>
    </VList>
  </div>
</template>

<style scoped>
</style>
