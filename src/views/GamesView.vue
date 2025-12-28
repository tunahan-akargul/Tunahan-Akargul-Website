<template>
  <div>
    <!-- Page Header -->
    <v-container class="text-center py-12" style="max-width: 800px">
      <h1 class="text-h3 font-weight-bold mb-2">My Games</h1>
      <p class="text-body-1 text-medium-emphasis">
        Mobile games I've developed and published
      </p>
    </v-container>

    <!-- Projects Grid -->
    <v-container style="max-width: 1200px">
      <v-row>
        <v-col v-for="game in games" :key="game.id" cols="12" sm="6" lg="4">
          <ProjectCard :project="game" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { games } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard.vue'
</script>
