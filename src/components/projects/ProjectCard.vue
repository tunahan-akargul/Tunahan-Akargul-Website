<template>
  <v-card class="hover-lift h-100 d-flex flex-column">
    <v-img :src="project.image" height="200" cover class="bg-surface-variant" @click="goToLink" style="cursor: pointer">
      <template #placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular indeterminate color="primary" />
        </div>
      </template>
    </v-img>

    <v-card-title class="text-h6">
      {{ project.title }}
    </v-card-title>

    <v-card-text class="text-body-2 text-medium-emphasis flex-grow-1">
      {{ project.description }}
    </v-card-text>

    <v-card-actions class="flex-wrap ga-2 px-4 pb-4">
      <v-chip v-for="tag in project.tags" :key="tag" size="small" :color="getTagColor(tag)" variant="tonal">
        {{ tag }}
      </v-chip>

      <v-spacer />

      <!-- Story Button -->
      <v-btn v-if="project.story" icon="mdi-heart" variant="tonal" color="error" size="small" @click="showStory = true"
        title="Read my story" />

      <v-btn variant="text" color="primary" append-icon="mdi-arrow-right" size="small" @click="goToLink">
        {{ linkText }}
      </v-btn>
    </v-card-actions>

    <!-- Story Dialog -->
    <v-dialog v-model="showStory" max-width="600">
      <v-card>
        <v-card-item>
          <template #prepend>
            <v-icon icon="mdi-heart" color="error" />
          </template>
          <v-card-title>A Personal Story</v-card-title>
          <v-card-subtitle>About {{ project.title }}</v-card-subtitle>
        </v-card-item>

        <v-card-text class="text-body-1">
          <p v-for="(paragraph, index) in storyParagraphs" :key="index"
            :class="{ 'mb-4': index < storyParagraphs.length - 1 }">
            {{ paragraph }}
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="showStory = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Project } from '@/data/projects'

const props = defineProps<{
  project: Project
}>()

const showStory = ref(false)

const storyParagraphs = computed(() => {
  return props.project.story?.split('\n\n') || []
})

const linkText = props.project.platform === 'android'
  ? 'Google Play'
  : props.project.platform === 'pc'
    ? 'itch.io'
    : 'Visit Site'

const goToLink = () => {
  window.open(props.project.link, '_blank', 'noopener,noreferrer')
}

const getTagColor = (tag: string) => {
  const colors: Record<string, string> = {
    'Unity': 'primary',
    'C#': 'primary',
    'Android': 'secondary',
    'PC': 'secondary',
    'JavaScript': 'warning',
    'TypeScript': 'info',
    'Vue.js': 'success',
    'HTML/CSS': 'error',
    'Canvas API': 'warning',
    'Web App': 'secondary',
    'Mobile Web': 'secondary',
  }
  return colors[tag] || 'default'
}
</script>
