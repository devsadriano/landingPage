<template>
  <button
    class="
      group relative w-full
      bg-gradient-to-r from-secondary-500 to-secondary-600
      hover:from-secondary-400 hover:to-secondary-500
      text-white font-bold text-lg
      py-4 px-8 rounded-xl
      shadow-lg shadow-secondary-500/30
      hover:shadow-xl hover:shadow-secondary-500/40
      transform hover:scale-105 active:scale-95
      transition-all duration-300 ease-out
      border-2 border-secondary-400
      hover:border-secondary-300
      focus:outline-none focus:ring-4 focus:ring-secondary-500/30
      overflow-hidden
    "
  >
    <!-- Background Animation -->
    <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
    
    <!-- Content -->
    <div class="relative flex items-center justify-center space-x-3">
      <!-- Icon -->
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
      
      <!-- Text -->
      <span>{{ texto }}</span>
      
      <!-- Arrow -->
      <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
      </svg>
    </div>
  </button>
</template>

<script setup>
defineProps({
  texto: {
    type: String,
    default: 'Comprar Agora'
  }
})

defineOptions({
  name: 'PurchaseButton'
})
</script>