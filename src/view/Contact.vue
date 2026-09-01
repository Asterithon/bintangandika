<script setup>
import { ref } from 'vue';
import ProjectCTA from '../components/ProjectCTA.vue';

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
});

const isSubmitted = ref(false);

const handleSubmit = () => {
    if (form.value.name && form.value.email && form.value.message) {
        isSubmitted.value = true;
        setTimeout(() => {
            isSubmitted.value = false;
            form.value = { name: '', email: '', subject: '', message: '' };
        }, 4000);
    }
};
</script>

<template>
    <div>
        <!-- Hero Header -->
        <section class="max-w-4xl mx-auto text-center px-4 pt-12 pb-16">
            <h1 class="text-4xl sm:text-6xl font-headline font-bold text-[#2180AE] tracking-tight mb-4">
                Let's Connect
            </h1>
            <p class="text-base sm:text-lg text-[#475569] font-body leading-relaxed max-w-2xl mx-auto">
                Whether you have a web design project, mobile app idea, or freelance opportunity, my inbox is always
                open. Let's create something great together.
            </p>
        </section>

        <!-- Main Contact Form & Info Grid -->
        <section class="max-w-6xl mx-auto px-4 sm:px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">

                <!-- Left: Send a Message Form -->
                <div class="lg:col-span-7 bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl card-shadow">
                    <h2 class="text-2xl font-headline font-bold text-[#2180AE] mb-8">
                        Send a Message
                    </h2>

                    <div v-if="isSubmitted"
                        class="p-4 mb-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-body">
                        Thank you! Your message has been sent successfully. I will get back to you shortly.
                    </div>

                    <form @submit.prevent="handleSubmit" class="space-y-6">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label
                                    class="block font-mono-custom text-xs font-bold uppercase tracking-wider text-[#475569]">
                                    NAME
                                </label>
                                <input v-model="form.name" type="text" required placeholder="Your Name"
                                    class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2180AE] focus:ring-2 focus:ring-[#2180AE]/20 outline-none transition-all text-sm font-body bg-slate-50/50" />
                            </div>

                            <div class="space-y-2">
                                <label
                                    class="block font-mono-custom text-xs font-bold uppercase tracking-wider text-[#475569]">
                                    EMAIL
                                </label>
                                <input v-model="form.email" type="email" required placeholder="your@email.com"
                                    class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2180AE] focus:ring-2 focus:ring-[#2180AE]/20 outline-none transition-all text-sm font-body bg-slate-50/50" />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label
                                class="block font-mono-custom text-xs font-bold uppercase tracking-wider text-[#475569]">
                                SUBJECT
                            </label>
                            <input v-model="form.subject" type="text" placeholder="Project Inquiry / Opportunity"
                                class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2180AE] focus:ring-2 focus:ring-[#2180AE]/20 outline-none transition-all text-sm font-body bg-slate-50/50" />
                        </div>

                        <div class="space-y-2">
                            <label
                                class="block font-mono-custom text-xs font-bold uppercase tracking-wider text-[#475569]">
                                MESSAGE
                            </label>
                            <textarea v-model="form.message" required rows="5"
                                placeholder="Tell me about your project..."
                                class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2180AE] focus:ring-2 focus:ring-[#2180AE]/20 outline-none transition-all text-sm font-body bg-slate-50/50 resize-none"></textarea>
                        </div>

                        <div>
                            <button type="submit"
                                class="px-7 py-3.5 rounded-full bg-[#2180AE] hover:bg-[#19688F] text-white font-mono-custom text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow flex items-center gap-2">
                                <span>Send Message</span>
                                <span>▷</span>
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Right: Direct Contact & Socials Cards -->
                <div class="lg:col-span-5 space-y-6">

                    <!-- Direct Contact Card -->
                    <div class="bg-[#F8FAFC] border border-slate-200/80 p-8 rounded-3xl card-shadow space-y-6">
                        <h3 class="text-xl font-headline font-bold text-[#2180AE]">
                            Direct Contact
                        </h3>

                        <div class="space-y-4 font-body text-sm text-[#334155]">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-8 h-8 rounded-full bg-[#2180AE]/10 text-[#2180AE] flex items-center justify-center">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span>bintang.andika@example.com</span>
                            </div>

                            <div class="flex items-center gap-3">
                                <div
                                    class="w-8 h-8 rounded-full bg-[#2180AE]/10 text-[#2180AE] flex items-center justify-center">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span>Available upon request</span>
                            </div>

                            <div class="flex items-center gap-3">
                                <div
                                    class="w-8 h-8 rounded-full bg-[#2180AE]/10 text-[#2180AE] flex items-center justify-center">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span>Bali, Indonesia</span>
                            </div>
                        </div>
                    </div>

                    <!-- Social Presence Card -->
                    <div class="bg-white border border-slate-200/80 p-8 rounded-3xl card-shadow space-y-4">
                        <h4 class="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#475569]">
                            SOCIAL PRESENCE
                        </h4>

                        <div class="flex items-center gap-3">
                            <a href="#linkedin"
                                class="w-12 h-12 rounded-full bg-[#F4F6F8] hover:bg-[#2180AE] text-[#475569] hover:text-white flex items-center justify-center font-mono-custom text-xs font-bold transition-all shadow-xs"
                                title="LinkedIn">
                                IN
                            </a>
                            <a href="#github"
                                class="w-12 h-12 rounded-full bg-[#F4F6F8] hover:bg-[#2180AE] text-[#475569] hover:text-white flex items-center justify-center font-mono-custom text-xs font-bold transition-all shadow-xs"
                                title="GitHub">
                                GH
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