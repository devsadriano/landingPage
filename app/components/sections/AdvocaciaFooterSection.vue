<template>
    <footer class="bg-advocacia-azul-escuro text-white py-16">
        <div class="w-full" style="padding-left: 12%; padding-right: 12%;">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Logo e Descrição -->
                <div class="col-span-1 lg:col-span-2">
                    <div class="flex items-center space-x-3 mb-6">
                        <div class="w-12 h-12 bg-advocacia-dourado-principal rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span class="text-2xl font-bold">Paulo Advogado</span>
                    </div>
                    <p class="text-gray-300 mb-6 max-w-md">
                        Excelência em advocacia há mais de 15 anos. Defendendo seus direitos 
                        com competência, ética e resultados comprovados.
                    </p>
                    <p class="text-sm text-gray-400">
                        Dr. Paulo Silva - OAB/SP 123.456
                    </p>
                </div>

                <!-- Links Rápidos -->
                <div>
                    <h3 class="text-lg font-semibold mb-6 text-advocacia-dourado-principal">Links Rápidos</h3>
                    <ul class="space-y-3">
                        <li><a href="#sobre" class="text-gray-300 hover:text-advocacia-dourado-principal transition-colors">Sobre</a></li>
                        <li><a href="#servicos" class="text-gray-300 hover:text-advocacia-dourado-principal transition-colors">Serviços</a></li>
                        <li><a href="#areas" class="text-gray-300 hover:text-advocacia-dourado-principal transition-colors">Áreas de Atuação</a></li>
                        <li><a href="#depoimentos" class="text-gray-300 hover:text-advocacia-dourado-principal transition-colors">Depoimentos</a></li>
                        <li><a href="#contato" class="text-gray-300 hover:text-advocacia-dourado-principal transition-colors">Contato</a></li>
                    </ul>
                </div>

                <!-- Contato -->
                <div>
                    <h3 class="text-lg font-semibold mb-6 text-advocacia-dourado-principal">Contato</h3>
                    <div class="space-y-3 text-gray-300">
                        <p class="text-sm">Rua da Advocacia, 123<br>Centro - São Paulo/SP</p>
                        <p class="text-sm">(11) 9 9999-9999</p>
                        <p class="text-sm">contato@pauloadvogado.com.br</p>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="border-t border-gray-700 mt-12 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm">
                        © 2025 Paulo Advogado. Todos os direitos reservados.
                    </p>
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" class="text-gray-400 hover:text-advocacia-dourado-principal transition-colors text-sm">
                            Política de Privacidade
                        </a>
                        <a href="#" class="text-gray-400 hover:text-advocacia-dourado-principal transition-colors text-sm">
                            Termos de Uso
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
// Component logic
</script>