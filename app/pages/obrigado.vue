<template>
    <div
        class="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 flex items-center justify-center px-6 py-12">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-20 left-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-80 h-80 bg-secondary-600/10 rounded-full blur-3xl"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 max-w-2xl mx-auto text-center">
            <!-- Success Icon -->
            <div class="mb-8">
                <div
                    class="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-secondary-500/25">
                    <svg class="w-10 h-10 text-primary-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            <!-- Main Message -->
            <div class="space-y-6 mb-10">
                <h1 class="text-3xl md:text-5xl font-primary font-bold text-white leading-tight">
                    Parabéns<span v-if="nomeUsuario">, {{ nomeUsuario }}</span>! 🎉
                </h1>

                <p class="text-lg md:text-xl text-secondary-400 font-medium">
                    Por esse importante passo em sua carreira!
                </p>

                <p class="text-base md:text-lg text-neutral-300 leading-relaxed">
                    Você acaba de dar o primeiro passo para dominar o <span
                        class="text-secondary-400 font-semibold">Método Componentização Extrema</span>.
                </p>
            </div>

            <!-- Course Access Card -->
            <div
                class="bg-gradient-to-br from-primary-950/80 to-primary-900/60 border border-secondary-500/20 rounded-xl p-6 md:p-8 mb-8">
                <div class="space-y-6">
                    <!-- Status Badge -->
                    <div
                        class="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary-500/20 to-secondary-600/20 border border-secondary-500/30 rounded-full px-4 py-2">
                        <div class="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
                        <span class="text-secondary-400 font-semibold text-sm">CURSO LIBERADO</span>
                    </div>

                    <h2 class="text-xl md:text-2xl font-primary font-bold text-white">
                        Seu curso já está liberado!
                    </h2>

                    <!-- Instructions -->
                    <div class="space-y-4 text-left">
                        <div class="bg-secondary-500/10 border border-secondary-500/20 rounded-lg p-4">
                            <h3 class="text-white font-semibold mb-2">Se ainda não tem uma conta:</h3>
                            <p class="text-neutral-300 text-sm mb-3">
                                Clique aqui e informe o email <span v-if="emailUsuario"
                                    class="text-secondary-400 font-medium">{{ emailUsuario }}</span><span v-else
                                    class="text-secondary-400 font-medium">usado na compra</span> para criar sua conta.
                            </p>
                            <a :href="linkCriarConta" target="_blank" rel="noopener noreferrer"
                                class="inline-block bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-primary-950 font-bold py-2 px-4 rounded-lg transition-all duration-200 text-sm">
                                Criar Minha Conta
                            </a>
                        </div>

                        <div class="bg-primary-950/50 border border-neutral-700/30 rounded-lg p-4">
                            <h3 class="text-white font-semibold mb-2">Se já tem uma conta:</h3>
                            <p class="text-neutral-300 text-sm mb-3">
                                Basta acessar normalmente que o curso estará liberado.
                            </p>
                            <a href="https://cursos.aceleradorsaas.com.br" target="_blank" rel="noopener noreferrer"
                                class="inline-block bg-gradient-to-r from-neutral-700 to-neutral-600 hover:from-neutral-600 hover:to-neutral-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-sm">
                                Acessar Plataforma
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Support -->
            <div class="text-center mb-8">
                <p class="text-neutral-400 text-sm mb-3">
                    Precisa de ajuda?
                </p>
                <a href="mailto:data7apps@data7apps.com.br"
                    class="inline-flex items-center space-x-2 text-secondary-400 hover:text-secondary-300 transition-colors text-sm">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>data7apps@data7apps.com.br</span>
                </a>
            </div>

            <!-- Back to Home -->
            <div class="text-center">
                <NuxtLink to="/"
                    class="inline-flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors text-sm">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Voltar para página inicial</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

// Meta tags para SEO
useHead({
    title: 'Obrigado - Método Componentização Extrema',
    meta: [
        { name: 'description', content: 'Parabéns! Seu curso já está liberado. Acesse nossa plataforma e comece a aprender o Método Componentização Extrema.' },
        { name: 'robots', content: 'noindex, nofollow' }
    ]
})

// Captura os parâmetros da URL
const route = useRoute()

// Computed properties para os parâmetros
const nomeUsuario = computed(() => {
    const nome = route.query.nome
    if (!nome) return null

    // Capitaliza o nome
    return nome.toString()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
})

const emailUsuario = computed(() => {
    return route.query.email || null
})

// Link para criar conta com email pré-preenchido
const linkCriarConta = computed(() => {
    const baseUrl = 'https://cursos.aceleradorsaas.com.br/criar-conta'
    if (emailUsuario.value) {
        return `${baseUrl}?email=${encodeURIComponent(emailUsuario.value)}`
    }
    return baseUrl
})

// Configurações do componente
defineOptions({
    name: 'ObrigadoPage'
})
</script>