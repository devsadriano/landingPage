<template>
    <div
        class="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl border border-secondary-500/30 shadow-2xl overflow-hidden">
        <!-- Header do Chat -->
        <div class="flex items-center justify-between px-4 py-3 bg-neutral-800/80 border-b border-neutral-700/50">
            <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-secondary-500/20 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                        </path>
                    </svg>
                </div>
                <div>
                    <div class="text-neutral-200 text-sm font-medium">{{ titulo }}</div>
                    <div class="text-neutral-400 text-xs">Free-form chat for general</div>
                </div>
            </div>
            <!-- Toggle Autopilot -->
            <div class="flex items-center space-x-2">
                <span class="text-neutral-300 text-sm">Autopilot</span>
                <div class="w-10 h-6 bg-secondary-500 rounded-full flex items-center px-1">
                    <div class="w-4 h-4 bg-white rounded-full shadow-sm transform translate-x-4"></div>
                </div>
            </div>
        </div>

        <!-- Área do Chat -->
        <div class="p-6 min-h-[200px] flex flex-col justify-end">
            <!-- Input do usuário -->
            <div class="bg-secondary-500/10 border border-secondary-400/30 rounded-lg p-4 mb-4">
                <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-neutral-600 rounded-full flex items-center justify-center">
                        <span class="text-neutral-300 text-xs">U</span>
                    </div>
                    <div class="flex-1">
                        <div class="text-neutral-200 text-sm">
                            {{ displayedText }}
                            <span class="inline-block w-2 h-4 bg-secondary-400 ml-1"
                                :class="{ 'animate-pulse': isTyping || showCursor }" v-show="isTyping || showCursor">
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Resposta da IA (placeholder) -->
            <div class="bg-neutral-700/50 rounded-lg p-4"
                v-show="!isTyping && displayedText.length === fullText.length">
                <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <div class="flex-1">
                        <div class="text-neutral-300 text-sm">
                            <div class="flex items-center space-x-2 mb-2">
                                <div class="w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></div>
                                <span class="text-secondary-400">Gerando código...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="px-4 py-3 bg-neutral-900/80 border-t border-neutral-700/50">
            <div class="flex items-center space-x-2 text-xs text-neutral-400">
                <span>#</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                    </path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Props do componente
const props = defineProps({
    titulo: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    }
})

// Texto a ser digitado
const fullText = props.texto
const displayedText = ref("")
const isTyping = ref(false)
const showCursor = ref(true)
let typingInterval = null
let cursorInterval = null

// Função para simular digitação
const startTyping = () => {
    isTyping.value = true
    let currentIndex = 0

    typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
            displayedText.value = fullText.slice(0, currentIndex + 1)
            currentIndex++
        } else {
            isTyping.value = false
            clearInterval(typingInterval)
        }
    }, 100) // Velocidade de digitação
}

// Função para piscar o cursor
const startCursorBlink = () => {
    cursorInterval = setInterval(() => {
        showCursor.value = !showCursor.value
    }, 500)
}

// Iniciar animações quando o componente for montado
onMounted(() => {
    // Delay antes de começar a digitar
    setTimeout(() => {
        startTyping()
    }, 1000)
    startCursorBlink()
})

// Limpar intervalos quando o componente for desmontado
onUnmounted(() => {
    if (typingInterval) clearInterval(typingInterval)
    if (cursorInterval) clearInterval(cursorInterval)
})

defineOptions({
    name: 'ChatInterface'
})
</script>
