<script setup>
import { ref, computed } from 'vue';
import ProjectCTA from '../components/ProjectCTA.vue';

const selectedCategory = ref('All');
const categories = ['All', 'Fullstack', 'Mobile App'];

const projects = [
    {
        id: 1,
        title: 'Seetra — Image Processing Web',
        category: 'Fullstack',
        description: 'Advanced image processing web application built with OpenCV, Python + Flask backend, and React + Tailwind CSS frontend for real-time image transformation, filtering, and computer vision analysis.',
        tech: ['React', 'Tailwind CSS', 'Python', 'Flask', 'OpenCV'],
        badge: 'Fullstack Web App',
        demoUrl: '#',
        githubUrl: '#'
    },
    {
        id: 2,
        title: 'Seat Booking Mobile App',
        category: 'Mobile App',
        description: 'Cross-platform mobile application for venue and event seat reservation, built with React Native and Android Studio for smooth UI interactions, real-time seat selection, and user booking flows.',
        tech: ['React Native', 'Android Studio', 'JavaScript', 'Mobile UI'],
        badge: 'Mobile Application',
        demoUrl: '#',
        githubUrl: '#'
    },
    {
        id: 3,
        title: 'Futsal Field Booking System',
        category: 'Fullstack',
        description: 'Fullstack futsal court reservation web platform built with Laravel and Tailwind CSS, featuring secure user authentication, interactive field schedule management, and instant booking confirmations.',
        tech: ['Laravel', 'Tailwind CSS', 'MySQL', 'PHP', 'Authentication'],
        badge: 'Fullstack Web App',
        demoUrl: '#',
        githubUrl: '#'
    }
];

const filteredProjects = computed(() => {
    if (selectedCategory.value === 'All') return projects;
    return projects.filter(p => p.category === selectedCategory.value);
});
</script>

<template>
    <div>
        <!-- Hero Header -->
        <section class="max-w-4xl mx-auto text-center px-4 pt-12 pb-12">
            <h1 class="text-4xl sm:text-6xl font-headline font-bold text-[#2180AE] tracking-tight mb-4">
                Selected Works
            </h1>
            <p class="text-base sm:text-lg text-[#475569] font-body leading-relaxed max-w-2xl mx-auto">
                A curated showcase of my fullstack web applications, mobile booking apps, and image processing tools.
            </p>

            <!-- Category Filter Pills -->
            <div class="flex flex-wrap items-center justify-center gap-2 mt-8">
                <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat"
                    class="px-5 py-2 rounded-full font-mono-custom text-xs font-semibold tracking-wide transition-all"
                    :class="[
                        selectedCategory === cat
                            ? 'bg-[#2180AE] text-white shadow-xs'
                            : 'bg-white text-[#475569] hover:bg-slate-100 border border-slate-200'
                    ]">
                    {{ cat }}
                </button>
            </div>
        </section>

        <!-- Projects Grid -->
        <section class="max-w-6xl mx-auto px-4 sm:px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="project in filteredProjects" :key="project.id"
                    class="bg-white border border-slate-200/80 p-8 rounded-3xl card-shadow card-shadow-hover flex flex-col justify-between space-y-6 group">
                    <!-- Top Tag & Rate Badge -->
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <span
                                class="px-3 py-1 rounded-full bg-[#EBF3F6] text-[#2180AE] text-xs font-mono-custom font-bold">
                                {{ project.category }}
                            </span>
                            <span class="text-xs font-mono-custom font-semibold text-[#64748B]">
                                {{ project.badge }}
                            </span>
                        </div>

                        <!-- Title & Description -->
                        <h3
                            class="text-2xl font-headline font-bold text-[#0F172A] group-hover:text-[#2180AE] transition-colors">
                            {{ project.title }}
                        </h3>
                        <p class="text-sm text-[#475569] font-body leading-relaxed">
                            {{ project.description }}
                        </p>
                    </div>

                    <!-- Tech Stack Tags & Action Links -->
                    <div class="space-y-4 pt-4 border-t border-slate-100">
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tech in project.tech" :key="tech"
                                class="px-3 py-1 rounded-full bg-[#F4F6F8] text-[#475569] text-xs font-mono-custom">
                                {{ tech }}
                            </span>
                        </div>

                        <div class="flex items-center gap-4 pt-2">
                            <span v-if="project.demoUrl === '#'"
                                class="inline-flex items-center gap-1.5 text-xs font-mono-custom font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
                                <span>Not Deployed Yet</span>
                            </span>
                            <a v-else :href="project.demoUrl" target="_blank"
                                class="inline-flex items-center gap-1.5 text-xs font-mono-custom font-bold text-[#2180AE] hover:underline">
                                <span>Live Preview</span>
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>

                            <a :href="project.githubUrl" target="_blank"
                                class="inline-flex items-center gap-1.5 text-xs font-mono-custom font-bold text-[#64748B] hover:text-[#0F172A]">
                                <span>Source Code</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bottom Reusable CTA Banner -->
        <ProjectCTA />
    </div>
</template>