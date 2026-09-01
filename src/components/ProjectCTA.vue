<script setup>
import AvailableBadge from './AvailableBadge.vue';
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 my-16">
    <div class="bg-[#EBF3F6] border border-[#D5E5EC] rounded-3xl p-8 sm:p-14 text-center card-shadow relative overflow-hidden">
      <!-- Background subtle gradient accent -->
      <div class="absolute -top-24 -right-24 w-72 h-72 bg-[#2BBBD7]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-24 w-72 h-72 bg-[#2180AE]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <AvailableBadge class="mb-6" />
        
        <h2 class="text-3xl sm:text-5xl font-headline font-bold text-[#2180AE] tracking-tight mb-4">
          Ready to start a project?
        </h2>
        
        <p class="text-[#475569] text-base sm:text-lg font-body leading-relaxed mb-8">
          Let's discuss how we can bring your vision to life with technical precision and creative design.
        </p>

        <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <RouterLink
            to="/contact"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2180AE] hover:bg-[#19688F] text-white font-body font-medium transition-all shadow-sm hover:shadow-md text-center text-sm"
          >
            Book a Discovery Call
          </RouterLink>
          <a
            href="#resume"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#2180AE] text-[#2180AE] hover:bg-[#2180AE]/5 font-body font-medium transition-all text-center text-sm"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
