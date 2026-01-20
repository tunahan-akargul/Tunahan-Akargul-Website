<template>
  <v-navigation-drawer 
    v-model="drawer" 
    temporary 
    location="right"
  >
    <v-list nav class="pa-4">
      <v-list-item
      v-for="link in navLinks"
      :key="link.to"
      :to="link.to"
      :title="link.label"
      :prepend-icon="link.icon"
      rounded="lg"
      :active="isActive(link.to)"
      active-color="primary"
      @click="drawer = false" 
      />
    </v-list>

    <template #append>
      <div class="pa-4">
        <v-divider class="mb-4" />
        <div class="d-flex justify-center ga-2">
          <v-btn 
          v-for="social in socialLinks" 
          :key="social.name" 
          :href="social.url" 
          target="_blank" 
          :icon="social.icon"
          variant="tonal" 
          color="primary" 
          size="small" 
          />
        </div>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { socialLinks } from '@/data/projects'

const drawer = defineModel<boolean>({ default: false })

const route = useRoute()

const navLinks = [
  { label: 'Home', to: '/', icon: 'mdi-home' },
  { label: 'About', to: '/about', icon: 'mdi-account' },
  { label: 'Blog', to: '/blog', icon: 'mdi-post' },
  { label: 'Games', to: '/games', icon: 'mdi-gamepad-variant' },
  { label: 'Sites', to: '/sites', icon: 'mdi-web' },
  { label: 'Contact', to: '/contact', icon: 'mdi-email' },
]

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>
