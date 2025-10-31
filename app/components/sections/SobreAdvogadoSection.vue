<template>
    <section id="sobre" class="py-20 bg-white">
        <div class="w-full" style="padding-left: 12%; padding-right: 12%;">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <!-- Left Content -->
                <div class="flex flex-col justify-center h-full">
                    <h2 class="text-4xl lg:text-5xl font-bold text-advocacia-azul-principal mb-6">
                        Sobre Caobianco & Magalhães
                    </h2>
                    <p class="text-xl text-advocacia-cinza-medio mb-6">
                        Com sólida experiência em advocacia, o escritório Caobianco & Magalhães 
                        tem se dedicado a oferecer soluções jurídicas de excelência, 
                        sempre priorizando os interesses e direitos dos seus clientes.
                    </p>
                    <p class="text-advocacia-cinza-medio mb-8">
                        Escritório especializado em diversas áreas do Direito, 
                        com profissionais qualificados e comprometidos com resultados. 
                        Membros ativos da OAB, oferecendo segurança jurídica e excelência em serviços.
                    </p>
                    
                    <!-- Achievements -->
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-advocacia-dourado-principal rounded-full flex items-center justify-center mr-4">
                                <svg class="w-4 h-4 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="text-advocacia-cinza-escuro font-semibold">Formação Jurídica de Excelência</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-advocacia-dourado-principal rounded-full flex items-center justify-center mr-4">
                                <svg class="w-4 h-4 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="text-advocacia-cinza-escuro font-semibold">OAB/SP - Escritório Ativo</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-advocacia-dourado-principal rounded-full flex items-center justify-center mr-4">
                                <svg class="w-4 h-4 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="text-advocacia-cinza-escuro font-semibold">Especialização em Direito Civil e Empresarial</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-advocacia-dourado-principal rounded-full flex items-center justify-center mr-4">
                                <svg class="w-4 h-4 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="text-advocacia-cinza-escuro font-semibold">MBA em Gestão Jurídica</span>
                        </div>
                    </div>
                </div>

                <!-- Right Content -->
                <div class="relative" style="height: 750px;">
                    <div class="bg-[#344b3e] rounded-2xl p-8 text-white flex flex-col" style="height: 100%; width: 100%; max-height: 750px; min-height: 750px;">
                        <div class="w-full flex items-center justify-center mb-6" style="height: 500px; flex-shrink: 0;">
                            <transition name="fade" mode="out-in">
                                <img
                                    :key="slides[currentSlide].image"
                                    :src="slides[currentSlide].image"
                                    :alt="slides[currentSlide].alt"
                                    :class="['max-h-full max-w-full', slides[currentSlide].type === 'escritorio' ? 'w-full h-full object-cover rounded-xl' : 'h-full object-contain']"
                                    style="border-radius: 12px;"
                                />
                            </transition>
                        </div>

                        <div v-if="slides[currentSlide].type === 'escritorio'" class="flex flex-col" style="height: 180px; overflow: hidden;">
                            <blockquote class="text-lg italic mb-6" style="display: -webkit-box; -webkit-line-clamp: 3; line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; flex-shrink: 0;">
                                {{ slides[currentSlide].quote }}
                            </blockquote>

                            <div class="border-t border-white border-opacity-30 pt-6 mt-auto flex-shrink-0">
                                <div class="grid grid-cols-2 gap-6">
                                    <div class="text-center">
                                        <div class="text-2xl font-bold text-advocacia-dourado-principal mb-1">500+</div>
                                        <div class="text-sm">Casos Resolvidos</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="text-2xl font-bold text-advocacia-dourado-principal mb-1">98%</div>
                                        <div class="text-sm">Taxa de Sucesso</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-else class="text-center flex flex-col items-center justify-center" style="height: 180px; padding-top: 20px;">
                            <h3 class="text-3xl font-semibold mb-2">{{ slides[currentSlide].name }}</h3>
                            <p class="text-advocacia-dourado-principal text-base uppercase tracking-wide font-medium">{{ slides[currentSlide].role }}</p>
                        </div>

                        <!-- Controls -->
                        <div class="flex items-center justify-between mt-auto pt-6" style="flex-shrink: 0; border-top: 1px solid rgba(255, 255, 255, 0.3);">
                            <button
                                type="button"
                                @click="prevSlide"
                                class="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 bg-white/5 hover:bg-white/15 transition"
                                aria-label="Slide anterior"
                            >
                                <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <div class="flex space-x-2">
                                <button
                                    v-for="(slide, index) in slides"
                                    :key="slide.id"
                                    type="button"
                                    @click="goToSlide(index)"
                                    class="w-2.5 h-2.5 rounded-full transition"
                                    :class="index === currentSlide ? 'bg-advocacia-dourado-principal' : 'bg-white/30'"
                                    :aria-label="`Ir para slide ${index + 1}`"
                                />
                            </div>
                            <button
                                type="button"
                                @click="nextSlide"
                                class="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 bg-white/5 hover:bg-white/15 transition"
                                aria-label="Próximo slide"
                            >
                                <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = [
    {
        id: 'escritorio',
        type: 'escritorio',
        image: '/images/predio.jpg',
        alt: 'Fachada do escritório',
        quote: '"Nossa missão é garantir que cada cliente receba não apenas excelência técnica, mas também um atendimento humanizado e personalizado, com soluções jurídicas eficazes."'
    },
    {
        id: 'paulo',
        type: 'socio',
        image: '/images/PAULO-4.jpg',
        alt: 'Sócio Paulo Caobianco',
        name: 'Paulo Caobianco',
        role: 'Advogado'
    },
    {
        id: 'danilo',
        type: 'socio',
        image: '/images/Danilo.jpg',
        alt: 'Sócio Danilo Magalhães',
        name: 'Danilo Magalhães',
        role: 'Advogado'
    }
]

const currentSlide = ref(0)
const AUTOPLAY_DELAY = 5000
let autoPlayTimer = null

const moveToSlide = (index) => {
    const normalizedIndex = (index + slides.length) % slides.length
    currentSlide.value = normalizedIndex
}

const startAutoPlay = () => {
    if (autoPlayTimer) {
        clearInterval(autoPlayTimer)
    }

    if (typeof window === 'undefined') {
        return
    }

    autoPlayTimer = window.setInterval(() => {
        moveToSlide(currentSlide.value + 1)
    }, AUTOPLAY_DELAY)
}

const nextSlide = () => {
    moveToSlide(currentSlide.value + 1)
    startAutoPlay()
}

const prevSlide = () => {
    moveToSlide(currentSlide.value - 1)
    startAutoPlay()
}

const goToSlide = (index) => {
    moveToSlide(index)
    startAutoPlay()
}

onMounted(() => {
    startAutoPlay()
})

onBeforeUnmount(() => {
    if (autoPlayTimer) {
        clearInterval(autoPlayTimer)
    }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>