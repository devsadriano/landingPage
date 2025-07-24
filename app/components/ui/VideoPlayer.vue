<template>
    <div class="relative max-w-4xl mx-auto">
        <!-- Container principal com bordas e fundo -->
        <div
            class="relative bg-primary-900/50 backdrop-blur-sm border border-primary-700/50 rounded-2xl p-6 shadow-primary-lg">
            <!-- Borda interna decorativa -->
            <div class="relative bg-primary-950/80 border border-secondary-500/20 rounded-xl overflow-hidden">
                <!-- Header com os três pontinhos do macOS -->
                <div
                    class="flex items-center justify-between px-4 py-3 bg-primary-900/60 border-b border-primary-700/30">
                    <div class="flex items-center space-x-2">
                        <!-- Três pontinhos do macOS -->
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div class="text-xs text-neutral-500 font-mono">Video Player</div>
                    <div class="w-16"></div> <!-- Spacer para centralizar o título -->
                </div>

                <!-- Video embed container -->
                <div class="relative aspect-video bg-primary-950">
                    <iframe v-if="videoId"
                        :src="`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`"
                        class="absolute inset-0 w-full h-full" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>

                    <!-- Placeholder quando não há vídeo -->
                    <div v-else class="absolute inset-0 flex items-center justify-center">
                        <div class="text-center">
                            <div
                                class="w-16 h-16 mx-auto mb-4 bg-secondary-500/20 rounded-full flex items-center justify-center">
                                <svg class="w-8 h-8 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <p class="text-neutral-400 font-body">Vídeo será carregado aqui</p>
                        </div>
                    </div>
                </div>

                <!-- Overlay decorativo sutil -->
                <div
                    class="absolute inset-0 bg-gradient-to-t from-primary-950/20 to-transparent pointer-events-none rounded-xl">
                </div>
            </div>

            <!-- Efeito de brilho nas bordas -->
            <div
                class="absolute inset-0 bg-gradient-to-r from-secondary-500/5 via-transparent to-secondary-500/5 rounded-2xl pointer-events-none">
            </div>
        </div>

        <!-- Glow effect -->
        <div
            class="absolute inset-0 bg-gradient-to-r from-secondary-500/10 via-primary-500/10 to-secondary-500/10 rounded-2xl blur-xl -z-10">
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