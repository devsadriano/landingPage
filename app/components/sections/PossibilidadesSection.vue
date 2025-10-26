<template>
    <section class="relative py-20 bg-primary-950 overflow-hidden border-t border-neutral-700/30">
        <!-- Background decorative elements -->
        <div class="absolute inset-0">
            <div class="absolute top-20 right-10 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 left-10 w-80 h-80 bg-primary-700/5 rounded-full blur-3xl"></div>
        </div>

        <!-- Content -->
        <div ref="possibilidadesSection"
            class="relative z-10 w-full opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            style="padding-left: 12%; padding-right: 12%;"
            :class="{ 'opacity-100 translate-y-0': isVisible }">
            <div class="max-w-6xl mx-auto">
                <!-- Section Header -->
                <div class="text-center space-y-6 mb-16">
                    <Badge texto="Possibilidades" />

                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-white leading-tight">
                        Crie qualquer tipo de <span class="text-secondary-400">aplicativo</span>
                    </h2>

                    <p
                        class="text-lg sm:text-xl font-body font-light text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                        Com o Método Componentização Extrema, você pode criar qualquer tipo de aplicativo.
                        Veja alguns exemplos do que é possível desenvolver
                    </p>
                </div>

                <!-- App Types Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AppTypeCard titulo="Aplicativo de Gestão"
                        descricao="Sistemas completos para gerenciar negócios, estoque, vendas e relatórios em tempo real."
                        icone="gestao" />

                    <AppTypeCard titulo="Aplicativo de Bate-Papo"
                        descricao="Plataformas de comunicação em tempo real com mensagens, grupos e chamadas de vídeo."
                        icone="social" />

                    <AppTypeCard titulo="Aplicativo de Delivery"
                        descricao="Sistemas de entrega com rastreamento, pagamentos e gestão de pedidos completa."
                        icone="delivery" />

                    <AppTypeCard titulo="Aplicativo de Saúde"
                        descricao="Plataformas médicas para consultas, prontuários, agendamentos e telemedicina."
                        icone="saude" />

                    <AppTypeCard titulo="App Financeiro"
                        descricao="Sistemas bancários, carteiras digitais, investimentos e controle financeiro pessoal."
                        icone="membros" />

                    <AppTypeCard titulo="E-commerce"
                        descricao="Lojas virtuais completas com carrinho, pagamentos, estoque e painel administrativo."
                        icone="ecommerce" />

                    <AppTypeCard titulo="Plataforma Educacional"
                        descricao="Sistemas de ensino online com cursos, avaliações, certificados e gamificação."
                        icone="educacao" />

                    <AppTypeCard titulo="Rede Social"
                        descricao="Plataformas sociais com perfis, posts, interações, stories e algoritmos de feed."
                        icone="social" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import explícito dos componentes
import Badge from '~/components/ui/Badge.vue'
import AppTypeCard from '~/components/ui/AppTypeCard.vue'

// Scroll animation
const possibilidadesSection = ref(null)
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

    if (possibilidadesSection.value) {
        observer.observe(possibilidadesSection.value)
    }
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})

// Configurações do componente
defineOptions({
    name: 'PossibilidadesSection'
})
</script>