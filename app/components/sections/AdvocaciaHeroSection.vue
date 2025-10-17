<template>
    <section class="relative min-h-screen bg-gradient-to-br from-advocacia-azul-principal via-advocacia-azul-escuro to-advocacia-azul-claro">
        <!-- Background Pattern -->
        <div class="absolute inset-0 bg-black bg-opacity-10"></div>
        
        <!-- Navigation -->
        <nav class="relative z-10 px-6 py-4">
            <div class="max-w-7xl mx-auto flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-advocacia-dourado-principal rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <span class="text-2xl font-bold text-white">Paulo Advogado</span>
                </div>
                
                <!-- Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#servicos" class="text-white hover:text-advocacia-dourado-principal transition-colors">Serviços</a>
                    <a href="#sobre" class="text-white hover:text-advocacia-dourado-principal transition-colors">Sobre</a>
                    <a href="#areas" class="text-white hover:text-advocacia-dourado-principal transition-colors">Áreas</a>
                    <a href="#depoimentos" class="text-white hover:text-advocacia-dourado-principal transition-colors">Depoimentos</a>
                    <a href="#contato" class="bg-advocacia-dourado-principal hover:bg-advocacia-dourado-hover text-advocacia-azul-principal px-6 py-2 rounded-lg font-semibold transition-colors">
                        Contato
                    </a>
                </div>
                
                <!-- Mobile Menu Button -->
                <button class="md:hidden text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>

        <!-- Hero Content -->
        <div class="relative z-10 px-6 py-20">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <!-- Left Content -->
                    <div class="text-white">
                        <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Excelência em 
                            <span class="text-advocacia-dourado-principal">Advocacia</span>
                        </h1>
                        <p class="text-xl text-gray-200 mb-8 leading-relaxed">
                            Mais de 15 anos defendendo seus direitos com competência, 
                            ética e resultados comprovados. Soluções jurídicas 
                            personalizadas para cada cliente.
                        </p>
                        
                        <!-- CTA Buttons -->
                        <div class="flex flex-col sm:flex-row gap-4 mb-12">
                            <button class="bg-advocacia-dourado-principal hover:bg-advocacia-dourado-hover text-advocacia-azul-principal px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                                Agende uma Consulta
                            </button>
                            <button class="border-2 border-white text-white hover:bg-white hover:text-advocacia-azul-principal px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                                Saiba Mais
                            </button>
                        </div>
                        
                        <!-- Stats -->
                        <div class="grid grid-cols-3 gap-8">
                            <div class="text-center">
                                <div class="text-3xl font-bold text-advocacia-dourado-principal mb-2">500+</div>
                                <div class="text-sm text-gray-200">Casos Resolvidos</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold text-advocacia-dourado-principal mb-2">15+</div>
                                <div class="text-sm text-gray-200">Anos de Experiência</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold text-advocacia-dourado-principal mb-2">98%</div>
                                <div class="text-sm text-gray-200">Taxa de Sucesso</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Right Content - Professional Image -->
                    <div class="relative">
                        <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
                            <div class="aspect-square bg-gradient-to-br from-advocacia-dourado-principal to-advocacia-dourado-claro rounded-xl flex items-center justify-center">
                                <!-- Professional Icon -->
                                <svg class="w-32 h-32 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="mt-6 text-center">
                                <h3 class="text-2xl font-bold text-white mb-2">Dr. Paulo Silva</h3>
                                <p class="text-gray-200 mb-4">OAB/SP 123.456</p>
                                <div class="flex justify-center space-x-4">
                                    <div class="w-8 h-8 bg-advocacia-dourado-principal rounded-full flex items-center justify-center">
                                        <svg class="w-4 h-4 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <span class="text-white">Especialista Certificado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </div>
    </section>
</template>

<script setup>
// Component logic can be added here
</script>