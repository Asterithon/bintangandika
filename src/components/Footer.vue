<template>
  <footer class="bg-[#EEF1F4] border-t border-slate-200/80 mt-20 text-[#0F172A] py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
      <!-- Brand & Copyright -->
      <div class="md:col-span-2 space-y-4">
        <h3 class="text-2xl font-headline font-black tracking-tight text-[#0F172A]">
          BINTANG ANDIKA
        </h3>
        <p class="text-sm text-[#64748B] font-body max-w-sm leading-relaxed">
          © {{ currentYear }} BINTANG ANDIKA. Crafted with technical precision, modern design, and creative flair.
        </p>
      </div>

      <!-- Navigation Column -->
      <div>
        <h4 class="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#475569] mb-4">
          Navigation
        </h4>
        <ul class="space-y-2.5 font-body text-sm">
          <li>
            <RouterLink to="/" class="text-[#2180AE] hover:underline font-medium">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/projects" class="text-[#64748B] hover:text-[#0F172A] transition-colors">Projects</RouterLink>
          </li>
          <li>
            <RouterLink to="/personal" class="text-[#64748B] hover:text-[#0F172A] transition-colors">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="text-[#64748B] hover:text-[#0F172A] transition-colors">Contact</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Legal Column -->
      <div>
        <h4 class="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#475569] mb-4">
          Legal
        </h4>
        <ul class="space-y-2.5 font-body text-sm">
          <li>
            <a href="#privacy" class="text-[#64748B] hover:text-[#0F172A] transition-colors">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms" class="text-[#64748B] hover:text-[#0F172A] transition-colors">Terms</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
