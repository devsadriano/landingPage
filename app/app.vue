<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
/* Rolagem suave apenas quando necessário */
html {
  scroll-behavior: auto;
}

/* Rolagem suave apenas para links clicados */
html.smooth-scroll {
  scroll-behavior: smooth;
}
</style>