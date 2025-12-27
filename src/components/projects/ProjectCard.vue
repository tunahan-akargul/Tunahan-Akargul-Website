<template>
  <v-card 
    class="hover-lift h-100 d-flex flex-column"
    :href="project.link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <v-img
      :src="project.image"
      height="200"
      cover
      class="bg-surface-variant"
    >
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
      <v-chip
        v-for="tag in project.tags"
        :key="tag"
        size="small"
        :color="getTagColor(tag)"
        variant="tonal"
      >
        {{ tag }}
      </v-chip>
      
      <v-spacer />
      
      <v-btn
        variant="text"
        color="primary"
        append-icon="mdi-arrow-right"
        size="small"
      >
        {{ linkText }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { Project } from '@/data/projects'

const props = defineProps<{
  project: Project
}>()

const linkText = props.project.platform === 'android' 
  ? 'Google Play' 
  : props.project.platform === 'pc' 
    ? 'itch.io' 
    : 'Visit Site'

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
