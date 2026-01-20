<template>
    <v-btn :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'" variant="text" size="small" @click="toggleTheme"
        :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'" class="theme-toggle" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const isDark = computed(() => theme.global.current.value.dark)

const toggleTheme = () => {
    theme.global.name.value = isDark.value ? 'light' : 'dark'
    localStorage.setItem('theme-preference', theme.global.name.value)
}
</script>

<style scoped>
.theme-toggle {
    transition: transform 0.3s ease;
}

.theme-toggle:hover {
    transform: rotate(15deg);
}
</style>
