<template>
    <section class="relative pb-20 bg-gradient-to-br from-advocacia-azul-principal via-advocacia-azul-escuro to-advocacia-azul-claro">
        <!-- Background Pattern -->
        <div class="absolute inset-0 bg-black bg-opacity-10"></div>
        
                <!-- Navigation -->
                <header class="sticky top-0 z-20 bg-gray-50 border-b border-gray-200">
                    <div class="w-full flex items-center justify-between py-2" style="padding-left: 12%; padding-right: 12%;">
                        <!-- Links Left/Center -->
                        <nav class="hidden md:flex space-x-6">
                            <a href="#sobre" class="text-gray-600 hover:text-primary font-medium text-sm">ESCRITÓRIO</a>
                            <a href="#advogados" class="text-gray-600 hover:text-primary font-medium text-sm">ADVOGADOS</a>
                            <a href="#atuacao" class="text-gray-600 hover:text-primary font-medium text-sm">ATUAÇÃO</a>
                            <NuxtLink to="/informes" class="text-gray-600 hover:text-primary font-medium text-sm">INFORMES</NuxtLink>
                        </nav>
                        <!-- Social & Contato Right -->
                        <div class="flex items-center space-x-3">
                            <!-- Social Icons -->
                            <a href="#" aria-label="Facebook" class="text-gray-400 hover:text-primary"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"></path></svg></a>
                            <a href="#" aria-label="LinkedIn" class="text-gray-400 hover:text-primary"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z"></path></svg></a>
                            <a href="#" aria-label="YouTube" class="text-gray-400 hover:text-primary"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.633 3.5 12 3.5 12 3.5s-7.633 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 7.939 0 12 0 12s0 4.061.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.367 20.5 12 20.5 12 20.5s7.633 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 16.061 24 12 24 12s0-4.061-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"></path></svg></a>
                            <a href="#" aria-label="Instagram" class="text-gray-400 hover:text-primary"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.981.981-1.264 2.093-1.323 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.611.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.279.072-1.688.072-7.611 0-5.923-.013-6.332-.072-7.611-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path></svg></a>
                            <!-- Telefone -->
                            <span class="text-gray-400 text-xs">(67) 3341-1608</span>
                            <!-- Email -->
                            <span class="text-gray-400 text-xs">contato@advocaciacm.adv.br</span>
                            <!-- WhatsApp Button -->
                            <a href="https://wa.me/556733411608" target="_blank" class="text-white font-semibold px-4 py-1 rounded-full text-xs transition-colors" style="background-color: #364d40;">
                                FALE COM A GENTE
                            </a>
                        </div>
                    </div>
                </header>

        <!-- Video Background - Começa junto com o texto -->
        <div class="absolute inset-0 z-0">
            <!-- Fundo branco à esquerda -->
            <div class="absolute inset-0 bg-white"></div>
            
            <!-- Container do vídeo com gradiente -->
            <div class="absolute inset-0">
                <video 
                    class="w-full h-full object-cover"
                    autoplay
                    muted
                    loop
                    playsinline>
                    <source src="/videos/vd.mp4" type="video/mp4">
                    Seu navegador não suporta vídeos HTML5.
                </video>
                
                <!-- Gradiente que cobre todo o vídeo: totalmente branco à esquerda (0% opacidade no vídeo), transparente à direita (100% opacidade no vídeo) -->
                <div class="absolute inset-0" style="background: linear-gradient(to right, 
                    rgba(255,255,255,1) 0%, 
                    rgba(255,255,255,1) 40%, 
                    rgba(255,255,255,0.85) 45%, 
                    rgba(255,255,255,0.6) 50%, 
                    rgba(255,255,255,0.35) 55%, 
                    rgba(255,255,255,0.15) 60%, 
                    rgba(255,255,255,0.05) 65%, 
                    transparent 70%);"></div>
            </div>
        </div>

        <!-- Hero Content -->
        <div class="relative z-10">
            <div class="w-full" style="padding-left: 12%; padding-right: 12%;">
                <!-- Logo no topo (Área 1) -->
                <div class="overflow-hidden" style="width: 650px; max-width: 100%; height: 400px;">
                    <img src="/images/logoEstendida.png" alt="Farenzena Franco Advogados Associados" class="w-full h-full object-cover" style="display: block; margin: 0; padding: 0; line-height: 0; object-position: center;">
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <!-- Left Content - Texto principal com espaçamento -->
                    <div style="color: #47524d;">
                        <!-- Texto principal -->
                        <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6" style="color: #47524d;">
                            "Não vendemos resultado. Vendemos Técnica. <span style="color: #95744f;">E nossa Técnica geralmente dá Resultado.</span>"
                        </h1>
                        
                        <!-- Descriptive Text -->
                        <p class="text-sm leading-relaxed" style="color: #47524d;">
                            O Escritório <span class="font-semibold" style="color: #95744f;">Farenzena Franco Advogados Associados</span> defende pessoas físicas e jurídicas através de defesas administrativas e judiciais elaboradas a partir da perfeição e excelência, com refinamento, elegância e identidade jurídica, na busca incessante pela resultado, cujo objetivo final é a satisfação do cliente.
                        </p>
                    </div>
                    
                    <!-- Right Content - Vazio para mostrar o vídeo -->
                    <div class="relative">
                        <!-- Espaço vazio para o vídeo aparecer -->
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Bottom Divider -->
        <div class="absolute bottom-0 left-0 w-full h-3" style="background-color: #95744f;"></div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </div>
    </section>
</template>

<style scoped>
/* Links do menu na cor #95744f e hover branco */
.menu-link {
    color: #95744f;
}
.menu-link:hover {
    color: #364d40;
}
</style>

<script setup>
// Função para rolagem suave controlada
onMounted(() => {
  // Adiciona listeners apenas para links de hash desta página
  const hashLinks = document.querySelectorAll('a[href^="#"]');
  
  hashLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Ativa rolagem suave temporariamente
        document.documentElement.classList.add('smooth-scroll');
        
        // Rola para o elemento
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Remove a classe após a rolagem
        setTimeout(() => {
          document.documentElement.classList.remove('smooth-scroll');
        }, 1000);
      }
    });
  });
});
</script>