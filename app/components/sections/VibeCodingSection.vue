<template>
    <section class="relative py-20 bg-primary-950 overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute inset-0">
            <div class="absolute top-20 left-10 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-80 h-80 bg-primary-700/5 rounded-full blur-3xl"></div>
        </div>

        <!-- Content -->
        <div ref="vibeCodingSection"
            class="relative z-10 container mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            :class="{ 'opacity-100 translate-y-0': isVisible }">
            <div class="max-w-6xl mx-auto text-center">
                <!-- Section Header -->
                <div class="space-y-6">
                    <Badge texto="Vibe Coding" />

                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-primary font-bold leading-tight">
                        <span class="text-red-400">Método Tradicional</span>
                    </h2>

                    <p
                        class="text-lg sm:text-xl font-body font-light text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                        O método tradicional onde desenvolvedores enviam prompts aleatórios para IA,
                        sem estrutura ou metodologia definida
                    </p>
                </div>

                <!-- Chat Interface -->
                <div class="w-full max-w-4xl mx-auto mt-12">
                    <ChatInterface titulo="Vibe Coding" texto="Crie um aplicativo completo de gestão..." />
                </div>

                <!-- Problem Section -->
                <div class="mt-48 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <!-- Left Column - Problem -->
                    <div class="space-y-6">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl sm:text-3xl font-primary font-bold text-white">Problema</h3>
                        </div>

                        <p class="text-lg font-body font-light text-neutral-300 leading-relaxed text-left">
                            Esta abordagem falha porque a IA gera código sem considerar princípios fundamentais de
                            arquitetura de software, como componentização, separação de responsabilidades e reutilização
                            de código. Além disso, <span class="text-red-400 font-medium">perde contexto
                                facilmente</span>, resultando em código ilegível, com
                            <span class="text-red-400 font-medium">vulnerabilidades de segurança</span>, sujeito a
                            falhas e extremamente difícil de manter no longo
                            prazo.
                        </p>

                        <p class="text-lg font-body font-light text-neutral-300 leading-relaxed text-left">
                            O desenvolvimento sem metodologia estruturada
                            gera aplicações monolíticas, com código
                            duplicado, dependências desnecessárias e baixa escalabilidade. O resultado são sistemas
                            frágeis que se tornam <span class="text-red-400 font-medium">pesadelos de manutenção</span>
                            conforme crescem em complexidade.
                        </p>
                    </div>

                    <!-- Right Column - Code with Errors -->
                    <div>
                        <CodeFileWithErrors />
                    </div>
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
import CodeFileWithErrors from '~/components/ui/CodeFileWithErrors.vue'

// Scroll animation
const vibeCodingSection = ref(null)
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

    if (vibeCodingSection.value) {
        observer.observe(vibeCodingSection.value)
    }
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})

// Configurações do componente
defineOptions({
    name: 'VibeCodingSection'
})
</script>