<template>
    <div class="relative max-w-4xl mx-auto">
        <!-- Container simples -->
        <div class="bg-neutral-900/80 border border-neutral-700/50 rounded-lg overflow-hidden">
            <!-- Header minimalista -->
            <div class="flex items-center justify-between px-4 py-2 bg-neutral-800/60 border-b border-neutral-700/30">
                <div class="flex items-center space-x-2">
                    <div class="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                    <div class="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                    <div class="w-2.5 h-2.5 bg-secondary-500 rounded-full"></div>
                </div>
                <div class="text-xs text-neutral-500">Acelerador SaaS - Pré-lançamento</div>
                <div class="w-16"></div>
            </div>

            <!-- Video container -->
            <div class="relative aspect-video bg-neutral-950">
                <iframe v-if="videoId"
                    :src="`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`"
                    class="absolute inset-0 w-full h-full" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

                <!-- Placeholder -->
                <div v-else class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center">
                        <div class="w-12 h-12 mx-auto mb-3 bg-secondary-500/20 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                        <p class="text-neutral-400 text-sm">Vídeo demonstrativo</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Props do componente
defineProps({
    videoId: {
        type: String,
        default: ''
    }
})

// Configurações do componente
defineOptions({
    name: 'VideoPlayer'
})
</script>