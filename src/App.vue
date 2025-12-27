<template>
  <v-app>
    <AppNavbar @toggle-drawer="drawer = !drawer" />
    <MobileDrawer v-model="drawer" />

    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import MobileDrawer from '@/components/layout/MobileDrawer.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const drawer = ref(false)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
