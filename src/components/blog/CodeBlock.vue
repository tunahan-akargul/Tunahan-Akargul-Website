<template>
  <v-card variant="outlined" class="code-block">
    <v-card-item class="bg-surface-variant py-2">
      <v-card-title class="text-body-2 font-weight-medium">
        {{ filename }}
      </v-card-title>
    </v-card-item>

    <v-card-text class="pa-0">
      <div
        v-for="line in lines"
        :key="line.lineNumber"
        class="code-line d-flex align-start px-4 py-1"
      >
        <span class="line-number text-medium-emphasis mr-4 text-right" style="min-width: 24px">
          {{ line.lineNumber }}
        </span>
        <code class="code-text flex-grow-1">{{ line.code }}</code>
        <span v-if="line.comment" class="hidden-comment text-body-2 text-medium-emphasis ml-4">
          // {{ line.comment }}
        </span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { CodeLine } from '@/data/blogPosts'

defineProps<{
  filename: string
  lines: CodeLine[]
}>()
</script>

<style scoped>
.code-block {
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.875rem;
  overflow-x: auto;
}

.code-line {
  transition: background-color 0.15s ease;
  border-radius: 4px;
}

.code-line:hover {
  background-color: rgb(var(--v-theme-surface-variant));
}

.line-number {
  user-select: none;
  border-right: 1px solid rgb(var(--v-theme-surface-variant));
  padding-right: 1rem;
}

.code-text {
  white-space: pre;
}

.hidden-comment {
  opacity: 0;
  transition: opacity 0.2s ease;
  font-style: italic;
  white-space: nowrap;
}

.code-line:hover .hidden-comment {
  opacity: 1;
}
</style>
