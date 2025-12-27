<template>
  <div>
    <!-- Page Header -->
    <v-container class="text-center py-12" style="max-width: 800px">
      <h1 class="text-h3 font-weight-bold mb-2">Web Projects</h1>
      <p class="text-body-1 text-medium-emphasis">
        Websites and web applications I've built
      </p>
    </v-container>

    <!-- Projects Grid -->
    <v-container style="max-width: 1200px">
      <v-row>
        <v-col
          v-for="site in sites"
          :key="site.id"
          cols="12"
          sm="6"
          lg="4"
        >
          <ProjectCard :project="site" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { sites } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard.vue'
</script>
