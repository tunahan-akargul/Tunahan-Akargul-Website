<template>
  <v-container class="fill-height" style="max-width: 800px">
    <v-row justify="center" align="center">
      <v-col cols="12" class="text-center">
        <!-- Profile Image -->
        <v-avatar size="180" class="mb-6 elevation-4">
          <v-img src="/images/profileImage.png" alt="Tunahan Akargül" />
        </v-avatar>

        <!-- Title -->
        <h1 class="text-h3 text-md-h2 font-weight-bold mb-2">
          <span class="text-primary">Tunahan Akargül</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-h6 text-medium-emphasis mb-4">
          Software Engineer & Game Developer
        </p>

        <!-- Description -->
        <p class="text-body-1 text-medium-emphasis mb-8 mx-auto" style="max-width: 500px">
          Building games and web applications with passion. 
          Explore my portfolio of mobile games, websites, and creative projects.
        </p>

        <!-- CTA Buttons -->
        <div class="d-flex flex-wrap justify-center ga-4 mb-8">
          <v-btn
            to="/sites"
            color="primary"
            size="large"
            append-icon="mdi-arrow-right"
          >
            View My Work
          </v-btn>
          <v-btn
            to="/about"
            variant="outlined"
            size="large"
          >
            About Me
          </v-btn>
        </div>

        <!-- Social Links -->
        <div class="d-flex justify-center ga-3">
          <v-btn
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            :icon="social.icon"
            variant="tonal"
            color="primary"
            size="large"
            :title="social.name"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { socialLinks } from '@/data/projects'
</script>
