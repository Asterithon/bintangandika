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
            <h1 class="text-4xl sm:text-6xl font-headline font-bold text-[#2180AE] tracking-tight mb-4">
                Personal Journey
            </h1>
            <p class="text-base sm:text-lg text-[#475569] font-body leading-relaxed max-w-2xl mx-auto">
                Crafting responsive web experiences, intuitive mobile applications, and reliable digital solutions based
                in Bali, Indonesia.
            </p>
        </section>

        <!-- Content Grid -->
        <section class="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">

            <!-- Bio Summary Card -->
            <div class="bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl card-shadow">
                <h2 class="text-2xl font-headline font-bold text-[#2180AE] mb-4">
                    About Me
                </h2>
                <p class="text-[#334155] font-body leading-relaxed text-base sm:text-lg mb-6">
                    Hi! I'm Gusti Agung Putu Bintang Andika Putra (Bintang Andika), a Web Designer and Mobile Apps Developer based in
                    Bali, Indonesia. I bring over 2 years of practical experience in web design, custom WordPress
                    development, data entry management, and cross-platform mobile app development.
                </p>
                <p class="text-[#475569] font-body leading-relaxed text-sm sm:text-base">
                    My passion lies in bridging clean design with effective functionality. From building computer vision
                    web tools with React, Flask, and OpenCV to developing mobile booking systems with React Native and
                    fullstack applications with Laravel, I aim to create smooth, reliable, and user-friendly digital
                    products.
                </p>
            </div>

            <!-- Experience Timeline Grid -->
            <div class="space-y-6">
                <h2 class="text-2xl font-headline font-bold text-[#2180AE] px-2">
                    Experience &amp; Work History
                </h2>

                <div class="grid grid-cols-1 gap-6">
                    <div v-for="(exp, idx) in experiences" :key="idx"
                        class="bg-white border border-slate-200/80 p-8 rounded-3xl card-shadow card-shadow-hover flex flex-col md:flex-row justify-between md:items-center gap-6">
                        <div class="space-y-2 max-w-2xl">
                            <div class="flex items-center gap-3">
                                <h3 class="text-xl font-headline font-bold text-[#0F172A]">
                                    {{ exp.role }}
                                </h3>
                                <span class="text-sm font-headline font-semibold text-[#2180AE]">
                                    @ {{ exp.company }}
                                </span>
                            </div>
                            <p class="text-sm text-[#475569] font-body leading-relaxed">
                                {{ exp.description }}
                            </p>
                            <div class="flex flex-wrap gap-2 pt-2">
                                <span v-for="skill in exp.skills" :key="skill"
                                    class="px-3 py-1 rounded-full bg-[#F4F6F8] text-[#475569] text-xs font-mono-custom font-medium">
                                    {{ skill }}
                                </span>
                            </div>
                        </div>

                        <div class="shrink-0">
                            <span
                                class="px-4 py-2 rounded-full bg-[#EBF3F6] text-[#2180AE] font-mono-custom text-xs font-bold">
                                {{ exp.period }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Skills Matrix -->
            <div class="space-y-6">
                <h2 class="text-2xl font-headline font-bold text-[#2180AE] px-2">
                    Technical Skills &amp; Stack
                </h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="cat in skillCategories" :key="cat.title"
                        class="bg-[#F8FAFC] border border-slate-200/80 p-7 rounded-3xl card-shadow space-y-4">
                        <h3 class="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#2180AE]">
                            {{ cat.title }}
                        </h3>
                        <ul class="space-y-2 font-body text-sm text-[#334155]">
                            <li v-for="item in cat.items" :key="item" class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-[#2BBBD7]"></span>
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