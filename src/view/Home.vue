<script setup>
import { ref, computed } from 'vue';
import AvailableBadge from '../components/AvailableBadge.vue';
import ProjectCard from '../components/ProjectCard.vue';
import ProjectModal from '../components/ProjectModal.vue';
import ProjectCTA from '../components/ProjectCTA.vue';
import { projects } from '../data/projects.js';

// Featured projects — top 3 marked as featured
const featuredProjects = computed(() =>
    projects.filter((p) => p.featured).slice(0, 3)
);

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
        <div class="max-w-7xl mx-auto px-4 sm:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[85vh] relative">

                <!-- Left Column: Hero Text & Main CTA -->
                <div class="lg:col-span-6 space-y-6 z-40 md:pt-0 pt-5">


                    <AvailableBadge />

                    <h1
                        class="text-5xl sm:text-7xl font-headline font-extrabold text-(--color-text-dark) tracking-tight leading-[1.05]">
                        Hi, I'm Bintang <br class="hidden sm:inline" />
                        a Programmer
                    </h1>

                    <p class="text-lg sm:text-l text-(--color-text-muted) font-body leading-relaxed max-w-lg">
                        Experienced in web design, data entry, and mobile apps development using React, Vue, React
                        Native, and Laravel.
                    </p>

                    <div class="pt-4">
                        <RouterLink to="/contact"
                            class="inline-block px-8 py-4 rounded-full bg-(--color-text-dark) hover:bg-slate-800 text-white font-body font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base">
                            Contact Me
                        </RouterLink>
                    </div>
                </div>

                <!-- Right Column: Card Widgets Grid -->
                <div class="lg:col-span-6 space-y-5 relative md:py-10">

                    <!-- Top Row Cards -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <!-- Card 1: Profile & Rate Info -->
                        <div
                            class="bg-(--color-bg-card) border border-slate-200/80 p-6 rounded-3xl card-shadow flex flex-col justify-between space-y-6">
                            <div>
                                <h3 class="text-xl font-headline font-bold text-(--color-text-dark) mb-1">
                                    Gusti Agung Putu Bintang Andika Putra
                                </h3>
                                <p class="text-xs font-mono-custom text-(--color-text-subtle)">
                                    Bali, Indonesia
                                </p>
                            </div>

                            <div class="space-y-3">
                                <div
                                    class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 text-(--color-text-dark) text-[11px] font-mono-custom font-semibold">
                                    <span>FRONTEND DEV</span>
                                </div>
                                <p class="text-sm font-mono-custom font-bold text-(--color-primary)">
                                    OPEN FOR FREELANCE
                                </p>
                            </div>
                        </div>

                        <!-- Featured Project Preview Card -->
                        <div class="bg-(--color-bg-card) border border-slate-200/80 p-3 h-50 md:h-auto rounded-3xl card-shadow group ">
                            <div
                                class="relative w-full h-full bg-gradient-to-br from-[#2180AE]/20 to-[#2BBBD7]/30 rounded-2xl p-4 flex flex-col justify-between overflow-visible">
                                <img src="../assets/showcase.png" alt="Background Profil"
                                    class="absolute inset-0 w-full h-full object-cover rounded-2xl pointer-events-none z-0" />
                                <div class="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-xs max-w-[170px]">
                                    <p class="text-[10px] font-mono-custom text-(--color-text-subtle) uppercase">
                                        Featured
                                        Project</p>
                                    <p class="text-xs font-headline font-bold text-(--color-text-dark)">Seetra Image Web
                                    </p>
                                </div>
                                <div
                                    class="flex items-center justify-between text-[11px] font-mono-custom text-(--color-primary) bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg w-fit z-30">
                                    <span>React + Python OpenCV</span>
                                </div>
                                <div
                                    class="absolute right-5 md:-right-10 -bottom-4 w-40 md:w-30 bg-white/40 rounded-xl shadow-md transform rotate-6 group-hover:rotate-3 transition-transform p-2">
                                    <img src="../assets/profil.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Tech Stack Card -->
                    <div
                        class="bg-(--color-cyan-light) p-6 sm:p-7 rounded-3xl text-(--color-text-dark) shadow-xs space-y-4 z-20">
                        <p class="text-xs font-body font-medium text-slate-800">
                            Core Tech &amp; Tools I work with
                        </p>
                        <div
                            class="flex flex-wrap items-center gap-2 sm:gap-3 font-headline font-black text-sm sm:text-lg text-(--color-text-dark) tracking-wider uppercase">
                            <span>VUE</span>
                            <span class="w-1.5 h-1.5 bg-(--color-text-dark) rounded-full"></span>
                            <span>LARAVEL</span>
                            <span class="w-1.5 h-1.5 bg-(--color-text-dark) rounded-full"></span>
                            <span>REACT NATIVE</span>
                            <span class="w-1.5 h-1.5 bg-(--color-text-dark) rounded-full"></span>
                            <span>WORDPRESS</span>
                        </div>
                    </div>

                    <!-- Quick Navigation Buttons -->
                    <div class="grid grid-cols-4 gap-3 sm:gap-4">
                        <RouterLink to="/projects"
                            class="bg-white border border-slate-200/80 p-5 rounded-2xl card-shadow card-shadow-hover flex items-center justify-center group"
                            title="Projects & Code">
                            <svg class="w-6 h-6 text-(--color-primary) group-hover:scale-110 transition-transform"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </RouterLink>

                        <RouterLink to="/personal"
                            class="bg-white border border-slate-200/80 p-5 rounded-2xl card-shadow card-shadow-hover flex items-center justify-center group"
                            title="Experience & Journey">
                            <svg class="w-6 h-6 text-(--color-primary) group-hover:scale-110 transition-transform"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </RouterLink>

                        <RouterLink to="/personal"
                            class="bg-white border border-slate-200/80 p-5 rounded-2xl card-shadow card-shadow-hover flex items-center justify-center group"
                            title="Skills & Tech Stack">
                            <svg class="w-6 h-6 text-(--color-primary) group-hover:scale-110 transition-transform"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </RouterLink>

                        <RouterLink to="/contact"
                            class="bg-white border border-slate-200/80 p-5 rounded-2xl card-shadow card-shadow-hover flex items-center justify-center group"
                            title="Direct Contact">
                            <svg class="w-6 h-6 text-(--color-primary) group-hover:scale-110 transition-transform"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </RouterLink>
                    </div>

                </div>

            </div>

            <!-- Featured Projects Showcase Section -->
            <section class="max-w-7xl px-4 sm:px-0 pt-16">
                <div class="flex items-end justify-between mb-8">
                    <div>
                        <h2
                            class="text-3xl sm:text-4xl font-headline font-bold text-(--color-text-dark) tracking-tight">
                            Featured Projects
                        </h2>
                    </div>
                    <RouterLink to="/projects"
                        class="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary)/10 font-mono-custom text-xs font-semibold tracking-wide transition-all shrink-0">
                        View All Projects
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </RouterLink>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project"
                        @select="openModal" />
                </div>

                <!-- Mobile "View All" link -->
                <div class="sm:hidden mt-8 text-center">
                    <RouterLink to="/projects"
                        class="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary)/10 font-mono-custom text-xs font-semibold tracking-wide transition-all">
                        View All Projects
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </RouterLink>
                </div>
            </section>
        </div>

        <!-- Project Detail Modal -->
        <ProjectModal :project="selectedProject" @close="closeModal" />
        <ProjectCTA />
    </div>
</template>