<template>
  <v-app-bar flat color="surface" class="px-4" elevation="0"
    style="border-bottom: 1px solid rgb(var(--v-theme-surface-variant))">
    <v-container class="d-flex align-center py-0" style="max-width: 1200px">
      <!-- Logo -->
      <router-link to="/" class="d-flex align-center text-decoration-none">
        <v-avatar size="32" class="mr-2 rounded-0">
          <v-img src="/images/logo.png" alt="Logo" />
        </v-avatar>
        <span class="logo-text">Tunahan Akargül</span>
      </router-link>

      <v-spacer />

      <!-- Desktop Navigation -->
      <nav class="d-none d-md-flex align-center ga-1">
        <router-link v-for="link in navLinks" :key="link.to" :to="link.to" class="nav-link"
          :class="{ 'nav-link--active': isActive(link.to) }">
          {{ link.label }}
        </router-link>
      </nav>

      <!-- Mobile Menu Button -->
      <v-app-bar-nav-icon class="d-md-none" @click="$emit('toggle-drawer')" />
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

defineEmits(['toggle-drawer'])

const route = useRoute()

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Games', to: '/games' },
  { label: 'Sites', to: '/sites' },
  { label: 'Contact', to: '/contact' },
]

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<style scoped>
.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: rgb(var(--v-theme-primary));
  transition: all 0.3s ease;
}

.logo-text:hover {
  color: rgb(var(--v-theme-primary-darken-1));
  transform: translateX(2px);
}

/* Modern Nav Links */
.nav-link {
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(var(--v-theme-on-surface), 0.7);
  text-decoration: none;
  transition: all 0.2s ease;
  border-radius: 8px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 20px;
  height: 2px;
  background: linear-gradient(90deg, #059669, #10b981);
  border-radius: 2px;
  transition: transform 0.2s ease;
}

.nav-link:hover {
  color: rgb(var(--v-theme-on-surface));
  background: rgba(var(--v-theme-on-surface), 0.05);
}

.nav-link:hover::after {
  transform: translateX(-50%) scaleX(1);
}

.nav-link--active {
  color: #059669;
}

.nav-link--active::after {
  transform: translateX(-50%) scaleX(1);
  width: 24px;
}
</style>
