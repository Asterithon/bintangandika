<script setup>
import AvailableBadge from '../components/AvailableBadge.vue';
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh] relative">

            <!-- Left Column: Hero Text & Main CTA -->
            <div class="lg:col-span-6 space-y-6 z-40">
                
                
                <AvailableBadge />
                
                <h1
                class="text-5xl sm:text-7xl font-headline font-extrabold text-(--color-text-dark) tracking-tight leading-[1.05]">
                Hi, I'm a <br class="hidden sm:inline" />
                web designer <br class="hidden sm:inline" />
                &amp; mobile dev                
                </h1>
                
                <p class="text-lg sm:text-l text-(--color-text-muted) font-body leading-relaxed max-w-lg">
                    2 years of experience in web design, data entry, and mobile apps development using React, Vue, React
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
        <div class="lg:col-span-6 space-y-5 relative overflow-hidden">
            
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
                        <span>REACT & VUE DEV</span>
                            </div>
                            <p class="text-sm font-mono-custom font-bold text-(--color-primary)">
                                OPEN FOR FREELANCE
                            </p>
                        </div>
                    </div>
                    
                    <!-- featured project -->
                    <!-- <div class="h-50">
                        <img 
                            src="../assets/meFR.png" 
                            alt="Dekorasi" 
                            class="hidden lg:block w-100 object-contain pointer-events-none mask-b-from-60% mask-b-to-100%"
                        />
                    </div> -->
                    
                    <div
                        class="bg-(--color-bg-card) border border-slate-200/80 p-4 rounded-3xl card-shadow overflow-hidden group ">
                        <div
                        class="relative w-full h-44 bg-gradient-to-br from-[#2180AE]/20 to-[#2BBBD7]/30 rounded-2xl p-4 flex flex-col justify-between">
                            <div class="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-xs max-w-[170px]">
                                <p class="text-[10px] font-mono-custom text-(--color-text-subtle) uppercase">Featured
                                    Project</p>
                                <p class="text-xs font-headline font-bold text-(--color-text-dark)">Seetra Image Web</p>
                            </div>
                            <div
                                class="flex items-center justify-between text-[11px] font-mono-custom text-(--color-primary) bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg w-fit">
                                <span>React + Python OpenCV</span>
                            </div>
                            <div
                                class="absolute -right-4 -bottom-4 w-32 h-32 bg-white/40 rounded-xl shadow-md transform rotate-6 group-hover:rotate-3 transition-transform p-2">
                                <div class="w-full h-full bg-(--color-primary) rounded-lg opacity-80"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- tech stack card -->
                <div
                    class="bg-(--color-cyan-light) p-6 sm:p-7 rounded-3xl text-(--color-text-dark) shadow-xs space-y-4 z-20" >
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

                <!-- Button -->
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
    </div>
</template>