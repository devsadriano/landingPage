<template>
    <div class="w-full">
        <!-- Simple Chat Input -->
        <div class="bg-primary-950/80 border border-secondary-500/30 rounded-xl p-4">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                    <div class="w-4 h-4 bg-secondary-500 rounded-full"></div>
                    <span class="text-neutral-300 text-sm">{{ titulo }}</span>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-xs text-neutral-400">Autopilot</span>
                    <div class="w-8 h-4 bg-secondary-500 rounded-full relative">
                        <div class="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                </div>
            </div>

            <!-- Input Area -->
            <div class="bg-primary-950/70 rounded-lg p-3 border border-neutral-700/50">
                <div class="flex items-start space-x-3">
                    <span class="text-neutral-400">#</span>
                    <span class="text-neutral-400">😊</span>
                    <div class="flex-1 text-left">
                        <span class="text-neutral-200">{{ texto }}</span>
                        <span class="inline-block w-0.5 h-4 bg-neutral-200 ml-0.5 animate-blink"></span>
                    </div>
                </div>
            </div>
            
            <!-- AI Response -->
            <div class="mt-4 bg-neutral-800/50 rounded-lg p-3 border border-neutral-600/30">
                <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-secondary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div class="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center space-x-2 mb-2">
                            <span class="text-secondary-400 text-sm font-medium">IA</span>
                            <div class="flex space-x-1">
                                <div class="w-1 h-1 bg-secondary-500 rounded-full animate-bounce"></div>
                                <div class="w-1 h-1 bg-secondary-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                                <div class="w-1 h-1 bg-secondary-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                            </div>
                        </div>
                        <p class="text-neutral-300 text-sm">Gerando código...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    titulo: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    }
})

defineOptions({
    name: 'ChatInterface'
})
</script>

<style scoped>
@keyframes blink {

    0%,
    50% {
        opacity: 1;
    }

    51%,
    100% {
        opacity: 0;
    }
}

.animate-blink {
    animation: blink 1s infinite;
}
</style>