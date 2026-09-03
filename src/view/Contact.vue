<script setup>
import { ref, reactive } from 'vue';
import ProjectCTA from '../components/ProjectCTA.vue';

const isHovering = ref(false)

const form = reactive({
    name: '',
    email: '',
    message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref('')
const cooldownSeconds = ref(0)
let timerInterval = null

// Fungsi timer countdown anti-spam
const startCooldown = (seconds = 60) => {
    cooldownSeconds.value = seconds
    clearInterval(timerInterval)

    timerInterval = setInterval(() => {
        cooldownSeconds.value--
        if (cooldownSeconds.value <= 0) {
            clearInterval(timerInterval)
        }
    }, 1000)
}

const handleSubmit = async () => {
    // Guard / Debounce: Cegah klik ganda saat proses atau masa cooldown
    if (isSubmitting.value || cooldownSeconds.value > 0) return

    isSubmitting.value = true
    isSubmitted.value = false
    errorMessage.value = ''

    try {
        const res = await fetch('/api/send-telegram', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama: form.name,
                email: form.email,
                pesan: form.message
            })
        })

        const data = await res.json()

        if (res.ok) {
            isSubmitted.value = true
            form.name = ''
            form.email = ''
            form.message = ''
            startCooldown(60) // Cooldown 60 detik setelah sukses
        } else {
            errorMessage.value = data.message || 'Failed to send message. Please try again later.'
            if (res.status === 429) {
                startCooldown(30) // Cooldown jika terdeteksi rate limit server
            }
        }
    } catch (err) {
        errorMessage.value = 'Connection error. Please try again later.'
    } finally {
        isSubmitting.value = false
    }
}

const socialLinks = [
    { id: 'wa', name: 'Whatsapp', color: '#25D366', url: 'https://wa.me/6282144581125', logo: 'fa-brands fa-whatsapp' },
    { id: 'in', name: 'LinkedIn', color: '#0A66C2', url: 'https://www.linkedin.com/in/bintangandikaputra', logo: 'fa-brands fa-linkedin' },
    { id: 'gh', name: 'GitHub', color: '#24292F', url: 'https://github.com/Asterithon', logo: 'fa-brands fa-github' },
    { id: 'ig', name: 'Instagram', color: '#E4405F', url: 'https://instagram.com/asterihon.sta', logo: 'fa-brands fa-instagram' },
]
</script>

<template>
    <div>
        <!-- Hero Header -->
        <section class="max-w-4xl mx-auto text-center px-4 pt-12 pb-16">
            <h1 class="text-4xl sm:text-6xl font-headline font-bold text-(--color-primary) tracking-tight mb-4">
                Let's Connect
            </h1>
            <p class="text-base sm:text-lg text-(--color-text-muted) font-body leading-relaxed max-w-2xl mx-auto">
                Whether you have a web design project, mobile app idea, or freelance opportunity, my inbox is always
                open. Let's create something great together.
            </p>
        </section>

        <!-- Main Contact Form & Info Grid -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">

                <!-- Left: message form -->
                <div class="lg:col-span-7 bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl card-shadow">
                    <h2 class="text-2xl font-headline font-bold text-(--color-primary) mb-8">
                        Send a Message
                    </h2>

                    <!-- Success Alert -->
                    <div v-if="isSubmitted"
                        class="p-4 mb-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-body">
                        Thank you! Your message has been sent successfully. I will get back to you shortly.
                    </div>

                    <!-- Error Alert -->
                    <div v-if="errorMessage"
                        class="p-4 mb-6 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-body">
                        {{ errorMessage }}
                    </div>

                    <form @submit.prevent="handleSubmit" class="space-y-6">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label
                                    class="block font-mono-custom text-xs font-bold uppercase tracking-wider text-(--color-text-muted)">
                                    NAME <span class="text-red-500">*</span>
                                </label>
                                <input v-model="form.name" type="text" required placeholder="Your Name"
                                    class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-(--color-primary) focus:ring-2 focus:ring-[#2180AE]/20 outline-none transition-all text-sm font-body bg-slate-50/50" />
                            </div>

                            <div class="space-y-2">
                                <label
                                    class="block font-mono-custom text-xs font-bold uppercase tracking-wider text-(--color-text-muted)">
                                    EMAIL <span class="text-red-500">*</span>
                                </label>
                                <input v-model="form.email" type="email" required placeholder="your@email.com"
                                    class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-(--color-primary) focus:ring-2 focus:ring-[#2180AE]/20 outline-none transition-all text-sm font-body bg-slate-50/50" />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label
                                class="block font-mono-custom text-xs font-bold uppercase tracking-wider text-(--color-text-muted)">
                                MESSAGE <span class="text-red-500">*</span>
                            </label>
                            <textarea v-model="form.message" required rows="5"
                                placeholder="Tell me about your project..."
                                class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-(--color-primary) focus:ring-2 focus:ring-[#2180AE]/20 outline-none transition-all text-sm font-body bg-slate-50/50 resize-none"></textarea>
                        </div>

                        <div>
                            <button type="submit"
                                :disabled="isSubmitting || cooldownSeconds > 0"
                                class="px-7 py-3.5 rounded-full bg-(--color-primary) hover:bg-(--color-primary-hover) text-white font-mono-custom text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                                <span v-if="isSubmitting">Sending...</span>
                                <span v-else-if="cooldownSeconds > 0">Wait ({{ cooldownSeconds }}s)</span>
                                <span v-else>Send Message</span>
                                <span>▷</span>
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Right: Direct Contact & Socials Cards -->
                <div class="lg:col-span-5 space-y-6">

                    <!-- Direct Contact Card -->
                    <div class="bg-(--color-bg-card) border border-slate-200/80 p-8 rounded-3xl card-shadow space-y-6">
                        <h3 class="text-xl font-headline font-bold text-(--color-primary)">
                            Direct Contact
                        </h3>

                        <div class="space-y-4 font-body text-sm text-[#334155]">
                            <a class="flex items-center gap-3 hover:cursor-pointer" href="mailto:binandika06@gmail.com">
                                <div
                                    class="w-8 h-8 rounded-full bg-[#2180AE]/10 text-(--color-primary) flex items-center justify-center">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span>binandika06@gmail.com</span>
                            </a>

                            <a class="flex items-center gap-3 hover:cursor-pointer" href="tel:+6282144581125">
                                <div
                                    class="w-8 h-8 rounded-full bg-[#2180AE]/10 text-(--color-primary) flex items-center justify-center">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span>082-144-581-125</span>
                            </a>

                            <a class="flex items-center gap-3 hover:cursor-pointer" href="https://maps.app.goo.gl/6kxcDU1SkgUXZoFM7" target="_blank">
                                <div
                                    class="w-8 h-8 rounded-full bg-(--color-primary)/10 text-(--color-primary) flex items-center justify-center">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span>Perum. Garuda Kencana V, Dalung, Badung, Bali</span>
                            </a>
                        </div>
                    </div>

                    <!-- Social Presence Card -->
                    <div class="bg-white border border-slate-200/80 p-8 rounded-3xl card-shadow space-y-4">
                        <h4
                            class="font-mono-custom text-xs font-bold uppercase tracking-wider text-(--color-text-muted)">
                            SOCIAL PRESENCE
                        </h4>

                        <div class="flex items-center gap-3">
                            <a
                                v-for="item in socialLinks"
                                :key="item.id"
                                :href="item.url"
                                :title="item.name"
                                :style="{ '--brand-color': item.color }"
                                class="group w-12 gap-2 lg:hover:w-30 h-12 rounded-full bg-[#F4F6F8] hover:bg-(--brand-color) text-(--color-text-muted) hover:text-white flex items-center justify-center font-mono-custom text-xs font-bold transition-all duration-300 shadow-xs whitespace-nowrap overflow-hidden px-3"
                            >
                                <i :class="item.logo" class="fa-xl"></i>
                                
                                <span class="hidden lg:group-hover:inline transition-all transition-discrete">{{ item.name }}</span>
                            </a>
                        </div>                    
                    </div>

                </div>

            </div>
        </section>

        <!-- CTA -->
        <ProjectCTA />
    </div>
</template>