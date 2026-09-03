<script setup>
/**
 * ProjectCard — Reusable project card component.
 * Used by both Home.vue (featured showcase) and Projects.vue (full list).
 *
 * Props:
 *   project  — Object from src/data/projects.js
 *
 * Emits:
 *   select   — Fired when the card is clicked, passes the project object
 */

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

defineEmits(['select']);
</script>

<template>
  <div
    @click="$emit('select', project)"
    class="bg-white border border-slate-200/80 p-8 rounded-3xl card-shadow card-shadow-hover flex flex-col justify-between space-y-6 group cursor-pointer"
  >
    <!-- Top Tag & Badge -->
  <div class="flex flex-col h-full space-y-4">
    <div class="flex items-center justify-between">
      <span
        class="px-3 py-1 rounded-full bg-(--color-bg-cta) text-(--color-primary) text-xs font-mono-custom font-bold"
      >
        {{ project.category }}
      </span>
      <span class="text-xs font-mono-custom font-semibold text-(--color-text-subtle)">
        {{ project.badge }}
      </span>
    </div>

    <!-- Title -->
    <h3
      class="text-2xl font-headline font-bold text-(--color-text-dark) group-hover:text-(--color-primary) transition-colors"
    >
      {{ project.title }}
    </h3>

    <!-- Description terkunci di bagian paling bawah -->
    <p class="mt-auto text-sm text-(--color-text-muted) font-body leading-relaxed line-clamp-3">
      {{ project.description }}
    </p>
  </div>

    <!-- Tech Stack Tags & Action Links -->
    <div class="space-y-4 pt-4 border-t border-slate-100">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-3 py-1 rounded-full bg-[#F4F6F8] text-(--color-text-muted) text-xs font-mono-custom"
        >
          {{ tech }}
        </span>
      </div>

      <div class="flex items-center gap-4 pt-2">
        <span
          v-if="project.demoUrl === '#'"
          class="inline-flex items-center gap-1.5 text-xs font-mono-custom font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md"
        >
          <span>Not Deployed Yet</span>
        </span>
        <a
          v-else
          :href="project.demoUrl"
          target="_blank"
          @click.stop
          class="inline-flex items-center gap-1.5 text-xs font-mono-custom font-bold text-(--color-primary) hover:underline"
        >
          <span>Live Preview</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>

        <a
          :href="project.githubUrl"
          target="_blank"
          @click.stop
          class="inline-flex items-center gap-1.5 text-xs font-mono-custom font-bold text-(--color-text-subtle) hover:text-(--color-text-dark)"
        >
          <span>Source Code</span>
        </a>
      </div>
    </div>
  </div>
</template>
