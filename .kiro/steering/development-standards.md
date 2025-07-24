# Padrões de Desenvolvimento - Método Componentização Extrema

## Padrões de Componentes Vue/Nuxt

### Nomenclatura
- **Componentes**: PascalCase (ex: `HeroSection.vue`, `VideoPlayer.vue`, `Badge.vue`)
- **Arquivos**: PascalCase para componentes, kebab-case para utilitários
- **Props**: camelCase (ex: `videoId`, `texto`)
- **Eventos**: kebab-case (ex: `@button-click`)

### Estrutura de Pastas
```
app/
├── components/
│   ├── ui/           # Componentes de interface básicos
│   ├── sections/     # Seções da landing page
│   └── layout/       # Componentes de layout
├── pages/
└── assets/
```

### Imports Explícitos
**OBRIGATÓRIO**: Todos os componentes devem ser importados explicitamente no script setup:

```vue
<script setup>
// ✅ CORRETO - Import explícito
import HeroSection from '~/components/sections/HeroSection.vue'
import Badge from '~/components/ui/Badge.vue'

// ❌ ERRADO - Auto-import não deve ser usado
</script>
```

### Estrutura de Componente
```vue
<template>
  <!-- Template aqui -->
</template>

<script setup>
// Imports explícitos primeiro
import ComponenteFilho from '~/components/ui/ComponenteFilho.vue'

// Props
defineProps({
  propriedade: {
    type: String,
    required: true
  }
})

// Configurações do componente
defineOptions({
  name: 'NomeDoComponente'
})
</script>
```

## Padrões de Estilo

### Tailwind CSS
- Usar classes utilitárias do Tailwind
- Aproveitar o sistema de cores personalizado
- Usar classes responsivas (sm:, md:, lg:)
- Preferir classes semânticas quando disponíveis

### Responsividade
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Testar sempre em mobile primeiro