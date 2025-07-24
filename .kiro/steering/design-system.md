# Sistema de Design - Método Componentização Extrema

## Paleta de Cores

### Cores Principais
- **Primary**: #020617 (azul escuro do Nuxt) - `primary-950`
- **Secondary**: #00DC82 (verde do Nuxt) - `secondary-500`

### Classes Tailwind Personalizadas
```css
/* Gradientes reutilizáveis */
bg-gradient-dark-br     /* Fundo escuro diagonal para seções */
bg-gradient-hero        /* Gradiente hero principal */
bg-gradient-secondary   /* Gradiente verde para botões */

/* Sombras personalizadas */
shadow-primary-lg       /* Sombra azul */
shadow-secondary-lg     /* Sombra verde */
shadow-glow-primary     /* Brilho azul */
shadow-glow-secondary   /* Brilho verde */
```

## Tipografia

### Fonte Principal
- **Public Sans** - Fonte oficial do Nuxt
- Pesos: 300 (light), 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Classes Semânticas
```css
font-primary    /* Public Sans para títulos */
font-body       /* Public Sans para texto corrido */
font-code       /* JetBrains Mono para código */

text-hero       /* Títulos principais */
text-title      /* Títulos de seção */
text-subtitle   /* Subtítulos */
text-body       /* Texto padrão */
text-caption    /* Texto pequeno */
```

## Componentes Base

### Badge
- Fundo: `bg-secondary-500/10`
- Borda: `border-secondary-500/30`
- Texto: `text-secondary-400`
- Formato: Arredondado completo

### VideoPlayer
- Estilo macOS com três pontinhos (vermelho, amarelo, verde)
- Bordas duplas com efeitos de brilho
- Aspect ratio 16:9
- Placeholder elegante quando sem vídeo

### Seções
- Usar `bg-gradient-dark-br` para fundos escuros
- Espaçamento: `py-20` para seções
- Container: `max-w-4xl mx-auto` para conteúdo
- Espaçamento entre elementos: `space-y-12`

## Responsividade

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 768px  
- **Desktop**: > 768px

### Títulos Responsivos
```css
/* Exemplo de título responsivo */
text-3xl sm:text-4xl md:text-5xl lg:text-6xl
```

### Espaçamentos Responsivos
- Mobile: Menor padding e margins
- Desktop: Espaçamentos generosos
- Sempre testar em mobile primeiro