<template>
    <section id="sobre" class="py-20 bg-white">
        <div class="w-full" style="padding-left: 12%; padding-right: 12%;">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <!-- Left Content -->
                <div>
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
                <div class="relative">
                    <div class="bg-gradient-to-br from-advocacia-azul-principal to-advocacia-azul-claro rounded-2xl p-8 text-white">
                        <div class="aspect-square bg-white rounded-xl overflow-hidden mb-6">
                            <!-- Logo do escritório - coloque o arquivo logo.jpg na pasta public/images/ -->
                            <img 
                                src="/images/predio.jpg" 
                                alt="Caobianco & Magalhães Logo" 
                                class="w-full h-full object-cover"
                                onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden')"
                            />
                            <!-- Fallback SVG caso a imagem não seja encontrada -->
                            <div class="hidden w-full h-full flex items-center justify-center">
                                <svg class="w-24 h-24 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        
                        <blockquote class="text-lg italic mb-6">
                            "Nossa missão é garantir que cada cliente receba não apenas 
                            excelência técnica, mas também um atendimento humanizado 
                            e personalizado, com soluções jurídicas eficazes."
                        </blockquote>
                        
                        <div class="border-t border-white border-opacity-30 pt-6">
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
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic
</script>