<template>
    <div 
        class="cabecalho" 
        @click="$router.push('/')"
        title="Pagina Inicial" >
        <q-img class="imagemLogo" src="../../public/img/cp-icon.png" />
        <span class="texto">LOCALIZA-CEP</span>
    </div>
</template>

<style scoped>
.cabecalho {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}
.imagemLogo {
    width: 100px;
    height: 100px;
    margin-right: 115px;
}
.texto {
    color: #009245;
    font-size:xx-large;
    font-weight:500;
    font-family: Roboto;
}
</style>