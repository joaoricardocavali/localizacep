<template>
<div class="paginaGeral">
    <div>
        Buscador de endereços via número do CEP
    </div>
    <div class="boxBotao">
        <q-btn 
            color="primary"
            @click="$router.push('/buscar')">
            Iniciar
        </q-btn>
    </div>
</div>
</template>

<style scoped>
.paginaGeral {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.boxBotao {
    margin-top: 20px;
}
</style>

<script setup lang="ts">

</script> 