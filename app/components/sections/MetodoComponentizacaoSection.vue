<template>
    <section class="relative py-20 bg-gradient-dark-br overflow-hidden border-t border-neutral-700/30">
        <!-- Background decorative elements -->
        <div class="absolute inset-0">
            <div class="absolute top-20 left-10 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-80 h-80 bg-primary-700/5 rounded-full blur-3xl"></div>
        </div>

        <!-- Content -->
        <div ref="metodoComponentizacaoSection"
            class="relative z-10 container mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            :class="{ 'opacity-100 translate-y-0': isVisible }">
            <div class="max-w-6xl mx-auto text-center">
                <!-- Section Header -->
                <div class="space-y-6">
                    <Badge texto="Método" />

                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-white leading-tight">
                        Método<br>
                        <span class="text-secondary-400">Componentização Extrema</span>
                    </h2>

                    <p
                        class="text-lg sm:text-xl font-body font-light text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                        A metodologia estruturada que transforma o desenvolvimento com IA em um processo
                        organizado, escalável e eficiente
                    </p>
                </div>

                <!-- Chat Interface -->
                <div class="w-full max-w-4xl mx-auto mt-12">
                    <ChatInterface titulo="Método Componentização Extrema"
                        texto="Crie um componente chamado BaseButton e um componente BaseInput, coloque os componentes no Index e ao ser clicado o button execute a função principal que está no UseCustomer..." />
                </div>

                <!-- Results Section -->
                <div class="mt-48 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <!-- Left Column - Why it Works -->
                    <div class="space-y-6">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl sm:text-3xl font-primary font-bold text-white">Por que Funciona</h3>
                        </div>

                        <p class="text-lg font-body font-light text-neutral-300 leading-relaxed text-left">
                            Com o método de <span class="text-secondary-400 font-medium">componentização extrema</span>,
                            você cria componentes de forma isolada, definindo claramente suas responsabilidades,
                            métodos, funções e propriedades. Esses componentes são então importados e reutilizados
                            dentro de outros componentes, montando o aplicativo de forma modular.
                        </p>

                        <p class="text-lg font-body font-light text-neutral-300 leading-relaxed text-left">
                            Esta abordagem segue os <span class="text-secondary-400 font-medium">princípios de design de
                                código</span> e arquitetura de software, mantendo o código <span
                                class="text-secondary-400 font-medium">limpo</span>, <span
                                class="text-secondary-400 font-medium">escalável</span>, <span
                                class="text-secondary-400 font-medium">seguro</span> e, principalmente, <span
                                class="text-secondary-400 font-medium">sob seu total controle</span>.
                        </p>
                    </div>

                    <!-- Right Column - Folder Structure -->
                    <div>
                        <FolderStructure />
                    </div>
                </div>
                
                <!-- Action Button -->
                <div class="mt-16 text-center">
                    <ActionButton texto="Começar Agora" :scrollToCheckout="true" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import explícito dos componentes
import Badge from '~/components/ui/Badge.vue'
import ChatInterface from '~/components/ui/ChatInterface.vue'
import FolderStructure from '~/components/ui/FolderStructure.vue'
import ActionButton from '~/components/ui/ActionButton.vue'

// Scroll animation
const metodoComponentizacaoSection = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible.value = true
                    // Para de observar após a primeira aparição
                    observer.unobserve(entry.target)
                }
            })
        },
        {
            threshold: 0.2, // Ativa quando 20% do elemento está visível
            rootMargin: '0px 0px -50px 0px' // Ativa um pouco antes de estar totalmente visível
        }
    )

    if (metodoComponentizacaoSection.value) {
        observer.observe(metodoComponentizacaoSection.value)
    }
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})

// Configurações do componente
defineOptions({
    name: 'MetodoComponentizacaoSection'
})
</script>