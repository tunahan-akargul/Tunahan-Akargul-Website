<template>
  <div>
    <!-- Page Header -->
    <v-container class="text-center py-12" style="max-width: 800px">
      <h1 class="text-h3 font-weight-bold mb-2">About Me</h1>
      <p class="text-body-1 text-medium-emphasis">
        Get to know more about who I am and what I do
      </p>
    </v-container>

    <!-- About Content -->
    <v-container style="max-width: 900px">
      <v-row>
        <!-- Profile Image -->
        <v-col cols="12" md="4" class="text-center text-md-left">
          <v-img src="/images/profileImage.png" alt="Tunahan Akargül" max-width="280"
            class="rounded-lg elevation-4 mx-auto mx-md-0 profileImage" />
        </v-col>

        <!-- About Text -->
        <v-col cols="12" md="8">
          <div class="text-body-1 text-medium-emphasis">
            <p class="mb-4">
              <strong class="text-on-surface">Hey everyone!</strong>
              I'm Tunahan Akargül, a passionate software engineer who loves creating
              games and web applications.
            </p>

            <p class="mb-4">
              I have experience in Unity game development using C#, as well as
              frontend development with Vue.js. I'm always eager
              to learn new technologies and take on challenging projects.
            </p>

            <p class="mb-4">
              Currently, I'm working at
              <a href="https://apimeet.com/" target="_blank" class="text-primary font-weight-medium">
                API MEET
              </a>,
              where I continue to grow as a developer and contribute to exciting projects.
            </p>

            <p class="mb-4">
              By the way about my hobbies i love playing tennis, go hiking and playing football.
            </p>
            
          </div>
        </v-col>
      </v-row>

      <!-- Skills Section -->
      <v-card class="mt-8" variant="outlined">
        <v-card-title class="text-h6">Skills & Technologies</v-card-title>
        <v-card-text>
          <div class="d-flex flex-wrap ga-2">
            <v-chip v-for="skill in skills" :key="skill" variant="tonal" color="primary">
              {{ skill }}
            </v-chip>
          </div>
        </v-card-text>
      </v-card>

      <!-- Contact Card -->
      <v-card class="mt-8 text-center" variant="outlined">
        <v-card-title class="text-h6">Let's Connect!</v-card-title>
        <v-card-text>
          <p class="text-body-2 text-medium-emphasis mb-4">
            Interested in working together or have a question? Feel free to reach out!
          </p>
          <div class="d-flex justify-center ga-3">
            <v-btn v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
              :icon="social.icon" variant="tonal" color="primary" :title="social.name" />
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { skills, socialLinks } from '@/data/projects'
</script>
