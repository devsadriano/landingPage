<template>
  <div class="bg-neutral-900/60 border border-neutral-700/50 rounded-lg overflow-hidden">
    <!-- Question -->
    <div 
      class="p-5 cursor-pointer"
      @click="toggleExpanded"
    >
      <div class="flex items-center justify-between">
        <h3 class="text-base font-medium text-neutral-100 pr-4">
          {{ pergunta }}
        </h3>
        
        <!-- Expand Icon -->
        <div class="w-6 h-6 flex items-center justify-center flex-shrink-0">
          <svg 
            class="w-4 h-4 text-neutral-400 transition-transform duration-200"
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
      class="overflow-hidden transition-all duration-300"
      :class="isExpanded ? 'max-h-96' : 'max-h-0'"
    >
      <div class="px-5 pb-5">
        <div class="border-t border-neutral-700/50 pt-4">
          <p class="text-neutral-400 text-sm leading-relaxed">
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