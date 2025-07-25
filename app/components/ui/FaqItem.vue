<template>
  <div class="bg-gradient-to-br from-primary-950/80 to-primary-900/60 border border-secondary-500/20 rounded-lg overflow-hidden hover:border-secondary-500/40 transition-all duration-300">
    <!-- Question -->
    <div 
      class="p-6 cursor-pointer select-none hover:bg-primary-950/40 transition-colors"
      @click="toggleExpanded"
    >
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-primary font-semibold text-white pr-4 leading-relaxed">
          {{ pergunta }}
        </h3>
        
        <!-- Expand Icon -->
        <div class="w-8 h-8 bg-secondary-500/10 rounded-full flex items-center justify-center hover:bg-secondary-500/20 transition-colors flex-shrink-0">
          <svg 
            class="w-4 h-4 text-secondary-400 transition-transform duration-300"
            :class="{ 'rotate-180': isExpanded }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </div>
    
    <!-- Answer -->
    <div 
      class="overflow-hidden transition-all duration-400 ease-out"
      :class="isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
    >
      <div class="px-6 pb-6">
        <div class="border-t border-secondary-500/20 pt-4">
          <p class="text-neutral-300 leading-relaxed">
            {{ resposta }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  pergunta: {
    type: String,
    required: true
  },
  resposta: {
    type: String,
    required: true
  }
})

const isExpanded = ref(false)

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

defineOptions({
  name: 'FaqItem'
})
</script>