<script setup>
import { ref, computed } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';
import ProjectModal from '../components/ProjectModal.vue';
import ProjectCTA from '../components/ProjectCTA.vue';
import GithubCTA from '../components/GithubCTA.vue';
import { projects, categories } from '../data/projects.js';

const selectedCategory = ref('All');

const filteredProjects = computed(() => {
    if (selectedCategory.value === 'All') return projects;
    return projects.filter(p => p.category === selectedCategory.value);
});

// Modal state
const selectedProject = ref(null);

const openModal = (project) => {
    selectedProject.value = project;
};

const closeModal = () => {
    selectedProject.value = null;
};
</script>

<template>
    <div>
        <!-- Hero Header -->
        <section class="max-w-4xl mx-auto text-center px-4 pt-12 pb-12">
            <h1 class="text-4xl sm:text-6xl font-headline font-bold text-(--color-primary) tracking-tight mb-4">
                Selected Works
            </h1>
            <p class="text-base sm:text-lg text-(--color-text-muted) font-body leading-relaxed max-w-2xl mx-auto">
                A curated showcase of my fullstack web applications, mobile booking apps, and image processing tools.
            </p>

            <!-- Category Filter Pills -->
            <div class="flex flex-wrap items-center justify-center gap-2 mt-8">
                <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat"
                    class="px-5 py-2 rounded-full font-mono-custom text-xs font-semibold tracking-wide transition-all"
                    :class="[
                        selectedCategory === cat
                            ? 'bg-(--color-primary) text-white shadow-xs'
                            : 'bg-white text-(--color-text-muted) hover:bg-slate-100 border border-slate-200'
                    ]">
                    {{ cat }}
                </button>
            </div>
        </section>

        <!-- Projects Grid -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                    v-for="project in filteredProjects"
                    :key="project.id"
                    :project="project"
                    @select="openModal"
                />
            </div>
        </section>

        <!-- Bottom Reusable CTA Banners -->
        <GithubCTA />
        <ProjectCTA />

        <!-- Project Detail Modal -->
        <ProjectModal :project="selectedProject" @close="closeModal" />
    </div>
</template>