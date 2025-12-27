<template>
  <v-footer color="surface" class="border-t flex-grow-0">
    <v-container class="text-center py-2" style="max-width: 1200px">
      <p class="text-body-2 text-medium-emphasis">
        © {{ currentYear }} Tunahan Akargül. All rights reserved.
      </p>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
