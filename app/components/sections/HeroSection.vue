<template>
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-dark-br overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute inset-0">
            <div class="absolute top-20 left-10 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl"></div>
            <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial-primary opacity-20 rounded-full blur-3xl">
            </div>
        </div>

        <!-- Content -->
        <div class="relative z-10 container mx-auto px-6 py-20 text-center">
            <div class="max-w-4xl mx-auto space-y-12">
                <!-- Badge -->
                <div>
                    <Badge texto="Método componentização Extrema" />
                </div>

                <!-- Main Title -->
                <h1
                    class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primary font-bold text-white leading-tight">
                    Crie seus
                    <span class="text-secondary-400">SaaS</span>
                    com IA em até
                    <span class="text-secondary-400">10x</span>
                    mais rápido sem programar
                </h1>

                <!-- Subtitle -->
                <p
                    class="text-base sm:text-lg md:text-xl font-body font-light text-neutral-200 max-w-3xl mx-auto leading-relaxed">
                    Desenvolva aplicativos com Inteligência Artificial de forma segura, escalável
                    com total controle sobre seu código
                </p>

                <!-- Video Player -->
                <div>
                    <VideoPlayer videoId="iAyY3oW-V6w" />
                </div>

                <!-- Action Button -->
                <div>
                    <ActionButton texto="Começar Agora" :scrollToCheckout="true" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import explícito dos componentes
import Badge from '~/components/ui/Badge.vue'
import VideoPlayer from '~/components/ui/VideoPlayer.vue'
import ActionButton from '~/components/ui/ActionButton.vue'

// Configurações do componente
defineOptions({
    name: 'HeroSection'
})
</script>