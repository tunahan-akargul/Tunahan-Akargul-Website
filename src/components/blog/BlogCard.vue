<template>
  <v-card
    class="hover-lift cursor-pointer"
    @click="$router.push(`/blog/${post.slug}`)"
    style="height: 250px"
  >
    <v-card-item>
      <template #prepend>
        <v-icon icon="mdi-calendar" size="small" color="medium-emphasis" />
      </template>
      <v-card-subtitle>{{ post.category }}</v-card-subtitle>
    </v-card-item>

    <v-card-title class="text-h6 text-wrap">
      {{ post.title }}
    </v-card-title>

    <v-card-text class="text-body-2 text-medium-emphasis">
      {{ post.excerpt }}
    </v-card-text>

    <v-card-actions class="px-4 pb-4">
      <v-chip
        v-for="tag in post.tags"
        :key="tag"
        size="small"
        :color="tag === 'Docker' ? 'primary' : 'secondary'"
        variant="tonal"
      >
        {{ tag }}
      </v-chip>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { BlogPost } from '@/data/blogPosts'

defineProps<{
  post: BlogPost
}>()
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
