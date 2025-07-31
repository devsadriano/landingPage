<template>
  <div class="bg-gradient-to-br from-primary-950/80 to-primary-900/60 border border-secondary-500/20 rounded-lg p-6 hover:border-secondary-500/40 hover:shadow-lg hover:shadow-secondary-500/10 transition-all duration-300">
    <!-- YouTube Icon -->
    <div class="mb-4 flex items-center justify-between">
      <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
      <span class="text-xs text-neutral-500 font-medium">YouTube</span>
    </div>
    
    <!-- Comment Text -->
    <p class="text-neutral-300 leading-relaxed mb-6 text-sm sm:text-base">
      "{{ texto }}"
    </p>
    
    <!-- Author Info -->
    <div class="flex items-center space-x-3">
      <!-- Avatar -->
      <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-secondary-500/20">
        <img 
          :src="avatar" 
          :alt="`Avatar de ${nome}`"
          class="w-full h-full object-cover"
          @error="handleImageError"
        />
      </div>
      
      <!-- Name -->
      <div class="flex-1 min-w-0">
        <h4 class="text-white font-semibold text-sm">{{ nome }}</h4>
        <p class="text-neutral-400 text-xs">Comentário no YouTube</p>
      </div>
      
      <!-- YouTube Like Icon -->
      <div class="flex items-center space-x-1">
        <svg class="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  nome: {
    type: String,
    required: true
  },
  texto: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
})

const handleImageError = (event) => {
  // Fallback para avatar genérico se a imagem não carregar
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiMwMERDODIiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxjaXJjbGUgY3g9IjI0IiBjeT0iMjAiIHI9IjgiIGZpbGw9IiMwMERDODIiLz4KPHBhdGggZD0iTTggMzZDOCAyOC4yNjggMTUuMTYzIDIyIDI0IDIyQzMyLjgzNyAyMiA0MCAyOC4yNjggNDAgMzZWNDBIOFYzNloiIGZpbGw9IiMwMERDODIiLz4KPC9zdmc+'
}

defineOptions({
  name: 'YoutubeCommentCard'
})
</script>