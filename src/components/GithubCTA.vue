<template>
    <section class="max-w-6xl mx-auto px-4 sm:px-6 my-16">
        <!-- Bento Card Container: 1 Col di Mobile, 2 Col di Desktop (lg:grid-cols-12) -->
        <div
            class="bg-[#0d1117] border border-slate-800 rounded-3xl p-8 sm:px-14 sm:py-6 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl">

            <div class="relative z-10 lg:col-span-2 flex justify-center items-center">
                <div class="relative group w-full max-w-xs sm:max-w-sm flex justify-center">

                    <!-- Image: tanpa border, tinggi otomatis (h-auto), soft radial mask -->
                    <img src="../assets/github.png" alt="GitHub Profile Showcase"
                        class="relative z-10 w-50 h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                </div>
            </div>

            <!-- Column 2: Headline, Deskripsi & CTA (7 Kolom) -->
            <div class="relative z-10 lg:col-span-10 flex flex-col items-center lg:items-start text-center lg:text-left">


                <!-- Main Headline -->
                <h2 class="text-2xl sm:text-4xl font-headline font-bold text-white tracking-tight mb-4">
                    Want to explore more projects I've crafted?
                </h2>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <!-- Primary Action Button: Follow on GitHub -->
                    <a href="https://github.com/Asterithon" target="_blank" rel="noopener noreferrer"
                        class="w-full sm:w-auto px-7 py-3.5 rounded-full bg-(--color-primary) hover:bg-(--color-primary-hover) text-white font-body font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-lg flex items-center justify-center gap-2.5">
                        <i class="fa-brands fa-github text-lg"></i>
                        <span>Follow on GitHub</span>
                    </a>

                    <!-- Secondary Action Button: Explore Repositories -->
                    <a href="https://github.com/Asterithon?tab=repositories" target="_blank" rel="noopener noreferrer"
                        class="w-full sm:w-auto px-7 py-3.5 rounded-full border border-slate-700 hover:border-(--color-cyan-light)/50 text-slate-300 hover:text-white hover:bg-slate-800/50 font-body font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2">
                        <span>Explore Repositories</span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-70"></i>
                    </a>
                </div>
            </div>

        </div>
    </section>
</template>