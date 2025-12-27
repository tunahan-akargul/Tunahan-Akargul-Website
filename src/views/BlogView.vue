<template>
  <div>
    <!-- Page Header -->
    <v-container class="text-center py-12" style="max-width: 800px">
      <h1 class="text-h3 font-weight-bold mb-2">Blog</h1>
      <p class="text-body-1 text-medium-emphasis">
        Thoughts, tutorials, and insights on development
      </p>
    </v-container>

    <!-- Blog Grid -->
    <v-container style="max-width: 1200px">
      <v-row>
        <v-col
          v-for="post in blogPosts"
          :key="post.slug"
          cols="12"
          sm="6"
          lg="4"
        >
          <BlogCard :post="post" />
        </v-col>

        <!-- Coming Soon Placeholder -->
        <v-col cols="12" sm="6" lg="4">
          <v-card variant="outlined" class="d-flex flex-column align-center justify-center pa-8" style="height: 250px; opacity: 0.6">
            <v-icon icon="mdi-pencil-outline" size="48" color="medium-emphasis" class="mb-4" />
            <p class="text-body-2 text-medium-emphasis">More posts coming soon...</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { blogPosts } from '@/data/blogPosts'
import BlogCard from '@/components/blog/BlogCard.vue'
</script>
