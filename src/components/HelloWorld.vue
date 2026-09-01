<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
    <div class="max-w-3xl mx-auto text-center space-y-8">
      
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        Tailwind CSS is Connected
      </div>

      <a href=""></a>

      <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight">
        Build fast interfaces with 
        <span class="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
          Vue 3 & Tailwind
        </span>
      </h1>

      <p class="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
        If you can see modern typography, colors, gradients, and rounded buttons, your Tailwind integration is working perfectly.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4">
        <button 
          @click="count++" 
          class="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/25 active:scale-95"
        >
          Test Vue State (Clicks: {{ count }})
        </button>

        <a 
          href="https://tailwindcss.com/docs" 
          target="_blank" 
          class="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition duration-200"
        >
          Tailwind Docs &rarr;
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 text-left">
        <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <h3 class="font-semibold text-white">⚡ Vite Speed</h3>
          <p class="text-sm text-slate-400 mt-1">Instant Hot Module Replacement (HMR).</p>
        </div>
        <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <h3 class="font-semibold text-white">🎨 Utility-First</h3>
          <p class="text-sm text-slate-400 mt-1">Rapid styling without leaving your markup.</p>
        </div>
        <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <h3 class="font-semibold text-white">✨ Reactivity</h3>
          <p class="text-sm text-slate-400 mt-1">Composition API setup out of the box.</p>
        </div>
      </div>

    </div>
  </div>
</template>