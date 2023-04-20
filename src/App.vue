<script setup lang="ts">
import { RouterView } from 'vue-router'
import Cabecalho from './components/Cabecalho.vue';
import Rodape from './components/Rodape.vue';
</script>

<template>
  <div>
    <Cabecalho />
    <div class="paginaPadrao">
      <RouterView />
    </div>
    <Rodape />
  </div>
</template>

<style scoped>
.paginaPadrao {
  width: 85em;
  height: 30em;
}
</style>
