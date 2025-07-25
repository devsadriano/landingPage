<template>
  <div
    class="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl border border-red-500/30 shadow-2xl overflow-hidden">
    <!-- Header do Editor -->
    <div class="flex items-center justify-between px-4 py-3 bg-neutral-800/80 border-b border-neutral-700/50">
      <!-- Controles da janela -->
      <div class="flex items-center space-x-2">
        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div class="w-3 h-3 bg-secondary-500 rounded-full"></div>
      </div>
      <!-- Título do arquivo -->
      <div class="text-neutral-300 text-sm font-mono">messy-app.js</div>
      <!-- Status de erro -->
      <div class="flex items-center space-x-1 px-2 py-1 bg-red-500/20 border border-red-400/30 rounded-md">
        <div class="w-2 h-2 bg-red-400 rounded-full"></div>
        <span class="text-red-300 text-xs">12 Erros</span>
      </div>
    </div>

    <!-- Área do código -->
    <div class="p-4 font-mono text-xs leading-relaxed max-h-96 overflow-y-auto">
      <div class="space-y-1">
        <!-- Linha 1-5 -->
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">1</span>
          <span class="text-secondary-400">// Código gerado pela IA sem estrutura</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">2</span>
          <span class="text-red-300">function everything() {</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">3</span>
          <span class="text-neutral-300 ml-4">var db = require('database')</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">4</span>
          <span class="text-neutral-300 ml-4">var user = prompt('Digite seu nome')</span>
          <span class="text-red-400 ml-2">⚠️</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">5</span>
          <span class="text-yellow-300 ml-4">db.connect('localhost:3306', 'root', '123456')</span>
          <span class="text-red-400 ml-2">⚠️</span>
        </div>

        <!-- Linha 6-15 -->
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">6</span>
          <span class="text-neutral-300 ml-4">if (user == null) {</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">7</span>
          <span class="text-neutral-300 ml-8">alert('Erro!')</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">8</span>
          <span class="text-neutral-300 ml-8">return false</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">9</span>
          <span class="text-neutral-300 ml-4">}</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">10</span>
          <span class="text-yellow-300 ml-4">document.getElementById('app').innerHTML = '</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">11</span>
          <span class="text-yellow-300 ml-8">&lt;div&gt;&lt;h1&gt;' + user + '&lt;/h1&gt;</span>
          <span class="text-red-400 ml-2">⚠️</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">12</span>
          <span class="text-yellow-300 ml-8">&lt;button onclick="deleteAll()"&gt;Delete&lt;/button&gt;</span>
          <span class="text-red-400 ml-2">⚠️</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">13</span>
          <span class="text-yellow-300 ml-8">&lt;/div&gt;'</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">14</span>
          <span class="text-neutral-300 ml-4">eval(user + '.init()')</span>
          <span class="text-red-400 ml-2">⚠️</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">15</span>
          <span class="text-neutral-300 ml-4">setTimeout(function() {</span>
        </div>

        <!-- Linha 16-25 -->
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">16</span>
          <span class="text-neutral-300 ml-8">fetch('/api/users', {</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">17</span>
          <span class="text-neutral-300 ml-12">method: 'POST',</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">18</span>
          <span class="text-neutral-300 ml-12">body: user,</span>
          <span class="text-red-400 ml-2">⚠️</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">19</span>
          <span class="text-neutral-300 ml-12">headers: {}</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">20</span>
          <span class="text-neutral-300 ml-8">}).then(data => {</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">21</span>
          <span class="text-neutral-300 ml-12">localStorage.setItem('token', data)</span>
          <span class="text-red-400 ml-2">⚠️</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">22</span>
          <span class="text-neutral-300 ml-12">window.location = '/dashboard'</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">23</span>
          <span class="text-neutral-300 ml-8">})</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">24</span>
          <span class="text-neutral-300 ml-4">}, 0)</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">25</span>
          <span class="text-red-300">}</span>
        </div>

        <!-- Linha 26-35 -->
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">26</span>
          <span class="text-neutral-300">function deleteAll() {</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">27</span>
          <span class="text-yellow-300 ml-4">db.query('DROP TABLE users')</span>
          <span class="text-red-400 ml-2">⚠️</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">28</span>
          <span class="text-yellow-300 ml-4">db.query('DELETE FROM *')</span>
          <span class="text-red-400 ml-2">⚠️</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">29</span>
          <span class="text-neutral-300">}</span>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-neutral-500 select-none w-6">30</span>
          <span class="text-neutral-300">everything()</span>
        </div>

        <!-- Mais linhas vazias -->
        <div class="flex items-start space-x-3" v-for="line in 5" :key="line + 30">
          <span class="text-neutral-500 select-none w-6">{{ line + 30 }}</span>
          <span class="text-neutral-700">~</span>
        </div>
      </div>
    </div>

    <!-- Footer com erros -->
    <div class="flex items-center justify-between px-4 py-2 bg-neutral-900/80 border-t border-neutral-700/50 text-xs">
      <div class="flex items-center space-x-4">
        <span class="text-neutral-400">JavaScript</span>
        <span class="text-red-400">12 Problemas</span>
      </div>
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-1">
          <div class="w-2 h-2 bg-red-400 rounded-full"></div>
          <span class="text-red-400">Vulnerável</span>
        </div>
        <span class="text-neutral-500">Ln 30, Col 15</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// Componente de código mal escrito (estático)
defineOptions({
  name: 'CodeFileWithErrors'
})
</script>