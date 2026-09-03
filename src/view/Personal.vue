<script setup>
import ProjectCTA from '../components/ProjectCTA.vue';

const experiences = [
    {
        role: 'Freelance Data Entry Specialist',
        company: 'JourneysJourneyIndonesia',
        period: '2024 - 2025',
        description: 'Processed, structured, and published destination & travel data for tourism platforms, ensuring data integrity, content accuracy, and smooth user access.',
        skills: ['Data Entry', 'Content Management', 'Travel Data']
    },
    {
        role: 'Internship Web Designer',
        company: 'Iambehokky',
        period: 'Late 2023',
        description: 'Designed and customized responsive website layouts using WordPress, managing site structure, visual aesthetics, page responsiveness, and media assets.',
        skills: ['WordPress', 'Web Design', 'UI Layout', 'CSS']
    }
];

const skillCategories = [
    {
        title: 'Frontend & Web Design',
        items: ['Vue.js', 'React', 'Tailwind CSS', 'Bootstrap', 'WordPress']
    },
    {
        title: 'Mobile Development',
        items: ['React Native', 'Android Studio', 'Java']
    },
    {
        title: 'Backend & Database',
        items: ['Laravel', 'MySQL', 'Python + Flask']
    },
    {
        title: 'Tools & Deployment',
        items: ['Git & GitHub', 'Vercel']
    }
];
</script>

<template>
    <div>
        <!-- Hero Header -->
        <section class="max-w-4xl mx-auto text-center px-4 pt-12 pb-16">
            <h1 class="text-4xl sm:text-6xl font-headline font-bold text-(--color-primary) tracking-tight mb-4">
                Personal Journey
            </h1>
            <p class="text-base sm:text-lg text-(--color-text-muted) font-body leading-relaxed max-w-2xl mx-auto">
                Crafting responsive web experiences, intuitive mobile applications, and reliable digital solutions based
                in Bali, Indonesia.
            </p>
        </section>

        <!-- Content Grid -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">

            <!-- Bio Summary Card -->
            <!-- Wrapper Grid: pastikan tidak memakai items-center agar kolom meregang penuh -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                <!-- KOLOM KIRI (Teks) -->
                <div class="lg:col-span-8 bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl card-shadow">
                    <!-- Konten About Me -->
                    <h2 class="text-2xl font-headline font-bold text-(--color-primary) mb-4">
                        About Me
                    </h2>
                    <p class="text-[#334155] font-body leading-relaxed text-base sm:text-lg mb-6">
                        Hi! I'm Gusti Agung Putu Bintang Andika Putra (Bintang Andika), a Web Designer and Mobile Apps
                        Developer based in Bali, Indonesia. I bring over 2 years of practical experience in web design,
                        custom WordPress development, data entry management, and cross-platform mobile app development.
                    </p>
                    <p class="text-(--color-text-muted) font-body leading-relaxed text-sm sm:text-base">
                        "Doubt is the beginning of defeat."
                    </p>
                </div>

                <!-- right -->
                <div class="lg:col-span-4 h-full flex justify-center">
                    <div class="relative group w-full max-w-full md:max-w-sm">
                        <div
                            class="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-(--color-primary)/20 to-(--color-cyan-light)/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none">
                        </div>

                        <!-- profile photo -->
                        <img src="../assets/meBG.jpg" alt="Bintang Andika"
                            class="relative z-10 w-full h-100 w-full object-cover rounded-3xl border-4 border-white shadow-xl transition-transform duration-500" />
                    </div>
                </div>

            </div>

            <!-- Experience Timeline Grid -->
            <div class="space-y-6">
                <h2 class="text-2xl font-headline font-bold text-(--color-primary) px-2">
                    Experience &amp; Work History
                </h2>

                <div class="grid grid-cols-1 gap-6">
                    <div v-for="(exp, idx) in experiences" :key="idx"
                        class="bg-white border border-slate-200/80 p-8 rounded-3xl card-shadow card-shadow-hover flex flex-col md:flex-row justify-between md:items-center gap-6">
                        <div class="space-y-2 max-w-2xl">
                            <div class="md:flex items-center gap-3">
                                <h3 class="text-xl font-headline font-bold text-(--color-text-dark)">
                                    {{ exp.role }}
                                </h3>
                                <span class="text-sm font-headline font-semibold text-(--color-primary)">
                                    @{{ exp.company }}
                                </span>
                            </div>
                            <p class="text-sm text-(--color-text-muted) font-body leading-relaxed">
                                {{ exp.description }}
                            </p>
                            <div class="flex flex-wrap gap-2 pt-2">
                                <span v-for="skill in exp.skills" :key="skill"
                                    class="px-3 py-1 rounded-full bg-slate-100 text-(--color-text-muted) text-xs font-mono-custom font-medium">
                                    {{ skill }}
                                </span>
                            </div>
                        </div>

                        <div class="shrink-0">
                            <span
                                class="px-4 py-2 rounded-full bg-(--color-bg-cta) text-(--color-primary) font-mono-custom text-xs font-bold">
                                {{ exp.period }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Skills Matrix -->
            <div class="space-y-6">
                <h2 class="text-2xl font-headline font-bold text-(--color-primary) px-2">
                    Technical Skills &amp; Stack
                </h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="cat in skillCategories" :key="cat.title"
                        class="bg-(--color-bg-card) border border-slate-200/80 p-7 rounded-3xl card-shadow space-y-4">
                        <h3 class="font-mono-custom text-xs font-bold uppercase tracking-wider text-(--color-primary)">
                            {{ cat.title }}
                        </h3>
                        <ul class="space-y-2 font-body text-sm text-[#334155]">
                            <li v-for="item in cat.items" :key="item" class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-(--color-secondary)"></span>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>

        <!-- Bottom Reusable CTA Banner -->
        <ProjectCTA />
    </div>
</template>