<template>
  <div>
    <!-- Back Button & Title -->
    <v-container class="py-8" style="max-width: 900px">
      <div class="d-flex align-center ga-4 mb-6">
        <v-btn
          icon="mdi-arrow-left"
          variant="outlined"
          size="small"
          to="/blog"
        />
        <h1 class="text-h4 text-md-h3 font-weight-bold">
          {{ dockerPostContent.title || 'How to Connect Your Project to Docker?' }}
        </h1>
      </div>

      <!-- Intro -->
      <section class="mb-8">
        <h2 class="text-h5 font-weight-bold mb-4">First, let's learn what Docker is</h2>
        <p class="text-body-1 text-medium-emphasis mb-4">
          {{ dockerPostContent.intro }}
        </p>
        <p class="text-body-1 text-medium-emphasis">
          <strong class="text-on-surface">For example:</strong> {{ dockerPostContent.example }}
        </p>
      </section>

      <!-- Let's Start -->
      <section class="mb-8">
        <h2 class="text-h5 font-weight-bold mb-4">Let's connect your project to Docker</h2>
        <p class="text-body-1 text-medium-emphasis">
          {{ dockerPostContent.letsStart }}
        </p>
      </section>

      <!-- Process Steps -->
      <section class="mb-8">
        <h2 class="text-h5 font-weight-bold mb-6 text-decoration-underline">PROCESS STEPS:</h2>

        <!-- Step 1 -->
        <h3 class="text-h6 font-weight-bold mb-3">1) Create a Dockerfile</h3>
        <p class="text-body-1 text-medium-emphasis mb-4">
          In your project's root directory, create a file named <code>Dockerfile</code> (no extension). 
          This will contain the instructions for building your Docker image.
        </p>

        <!-- Step 2 -->
        <h3 class="text-h6 font-weight-bold mb-3">2) Write Dockerfile Instructions</h3>
        <p class="text-body-1 text-medium-emphasis mb-2">
          Inside the file, add basic instructions. For example, for a Node.js app:
        </p>
        <v-alert type="info" variant="tonal" density="compact" class="mb-4">
          Hover the code to see the hidden comment
        </v-alert>
        <CodeBlock filename="Dockerfile" :lines="dockerPostContent.dockerfileCode" class="mb-6" />

        <!-- Step 3 -->
        <h3 class="text-h6 font-weight-bold mb-3">3) Build the Docker Image</h3>
        <p class="text-body-1 text-medium-emphasis mb-4">
          Open your terminal, navigate to your project folder, and run:
        </p>
        <CodeBlock filename="Terminal" :lines="[dockerPostContent.buildCommand]" class="mb-6" />

        <!-- Step 4 -->
        <h3 class="text-h6 font-weight-bold mb-3">4) Run the Docker Container</h3>
        <p class="text-body-1 text-medium-emphasis mb-4">
          After building, you can run the container with:
        </p>
        <CodeBlock filename="Terminal" :lines="[dockerPostContent.runCommand]" class="mb-4" />
        <p class="text-body-2 text-medium-emphasis mb-6">
          (Replace 3000 with your app's port if it's different.)
        </p>

        <!-- Step 5 -->
        <h3 class="text-h6 font-weight-bold mb-3">5) Test Your App</h3>
        <p class="text-body-1 text-medium-emphasis">
          Visit <a href="http://localhost:3000" target="_blank" class="text-primary">http://localhost:3000</a> 
          in your browser. If everything went well, your app should be running inside Docker!
        </p>
      </section>

      <!-- Docker Compose Section -->
      <v-divider class="my-8" />

      <section class="mb-8">
        <h2 class="text-h5 font-weight-bold mb-2">
          What is Docker Compose? 
          <span class="text-body-1 text-medium-emphasis font-weight-regular">(Optional Section)</span>
        </h2>
        <p class="text-body-1 text-medium-emphasis mb-6">
          {{ dockerPostContent.composeIntro }}
        </p>

        <h3 class="text-h6 font-weight-bold mb-6 text-decoration-underline">DOCKER COMPOSE STEPS:</h3>

        <!-- Compose Step 1 -->
        <h3 class="text-h6 font-weight-bold mb-3">1) Create a docker-compose.yml file</h3>
        <p class="text-body-1 text-medium-emphasis mb-4">
          In your project root, create a file named <code>docker-compose.yml</code>.
        </p>

        <!-- Compose Step 2 -->
        <h3 class="text-h6 font-weight-bold mb-3">2) Define Services</h3>
        <p class="text-body-1 text-medium-emphasis mb-2">
          Inside the file, define your app and other services:
        </p>
        <v-alert type="info" variant="tonal" density="compact" class="mb-4">
          Hover the code to see the hidden comment
        </v-alert>
        <CodeBlock filename="docker-compose.yml" :lines="dockerPostContent.composeCode" class="mb-6" />

        <!-- Compose Step 3 -->
        <h3 class="text-h6 font-weight-bold mb-3">3) Build and Start Services</h3>
        <p class="text-body-1 text-medium-emphasis mb-4">Run this in your terminal:</p>
        <CodeBlock filename="Terminal" :lines="[dockerPostContent.composeUpCommand]" class="mb-6" />

        <!-- Compose Step 4 -->
        <h3 class="text-h6 font-weight-bold mb-3">4) Verify It's Working</h3>
        <p class="text-body-1 text-medium-emphasis mb-6">
          Visit <a href="http://localhost:3000" target="_blank" class="text-primary">http://localhost:3000</a>. 
          Your app should be running!
        </p>

        <!-- Compose Step 5 -->
        <h3 class="text-h6 font-weight-bold mb-3">5) Stop Services</h3>
        <p class="text-body-1 text-medium-emphasis mb-4">When done, shut everything down with:</p>
        <CodeBlock filename="Terminal" :lines="[dockerPostContent.composeDownCommand]" />
      </section>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { dockerPostContent } from '@/data/blogPosts'
import CodeBlock from '@/components/blog/CodeBlock.vue'
</script>
