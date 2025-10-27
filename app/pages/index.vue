<template>
    <div class="min-h-screen">
        <!-- Hero Section - Advocacia -->
        <AdvocaciaHeroSection />

        <!-- Serviços Jurídicos -->
        <ServicosJuridicosSection />

        <!-- Sobre o Advogado -->
        <SobreAdvogadoSection />

        <!-- Áreas de Atuação -->
        <AreasAtuacaoSection />

        <!-- Depoimentos de Clientes -->
        <DepoimentosClientesSection />

        <!-- Footer com Contato e Newsletter -->
        <AdvocaciaFooterSection />

        <!-- WhatsApp Button -->
        <AdvocaciaWhatsAppButton />
    </div>
</template>

<script setup>
// Import dos componentes específicos para advocacia
import AdvocaciaHeroSection from '~/components/sections/AdvocaciaHeroSection.vue'
import ServicosJuridicosSection from '~/components/sections/ServicosJuridicosSection.vue'
import SobreAdvogadoSection from '~/components/sections/SobreAdvogadoSection.vue'
import AreasAtuacaoSection from '~/components/sections/AreasAtuacaoSection.vue'
import DepoimentosClientesSection from '~/components/sections/DepoimentosClientesSection.vue'
import AdvocaciaFooterSection from '~/components/sections/AdvocaciaFooterSection.vue'
import AdvocaciaWhatsAppButton from '~/components/ui/AdvocaciaWhatsAppButton.vue'

// Força a página a ficar no topo ao carregar
onMounted(() => {
  // Remove qualquer hash da URL ao carregar a página
  if (window.location.hash) {
    window.history.replaceState('', '', window.location.pathname + window.location.search);
  }
  // Força scroll para o topo
  window.scrollTo(0, 0);
});

// Configurações da página
useHead({
    title: 'Paulo Advogado - Advocacia e Consultoria Jurídica',
    meta: [
        { name: 'description', content: 'Paulo Advogado oferece serviços jurídicos especializados em direito civil, empresarial e trabalhista. Consultoria jurídica de excelência com mais de 15 anos de experiência.' },
        { name: 'keywords', content: 'advocacia, advogado, consultoria jurídica, direito civil, direito empresarial, direito trabalhista' },
        { property: 'og:title', content: 'Paulo Advogado - Advocacia e Consultoria Jurídica' },
        { property: 'og:description', content: 'Serviços jurídicos especializados com excelência e experiência' },
        { property: 'og:type', content: 'website' }
    ]
})
</script>