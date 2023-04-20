<template>
<div class="paginaGeral">
    <div>
        <div>

        </div>
        <div>
            <q-input 
                outlined
                v-model="cepDigitado" />
            <q-btn 
                color="secondary" 
                outline
                @click="procurarEndereco()">
                Pesquisar
            </q-btn>
            <div v-if="mostrarResposta">
                <q-card>
                    <q-card-section>
                        <div>
                            {{ resposta?.logradouro }}
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <div class="boxBotao">
            <q-btn 
                color="primary"
                >
                Voltar
            </q-btn>
        </div>
    </div>
</div>
</template>

<style scope>
.paginaGeral {
    display: flex;
    justify-content: center;
}
.boxBotao {
    margin-top: 20px;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import api from '@/services/api';
import type { Endereco } from '@/models/endereco';

const cepDigitado = ref()
const resposta = ref<Endereco>()
const loading = ref(true)
const mostrarResposta = ref(false)

const procurarEndereco = async () => {
    await api.get(cepDigitado.value+'/json')
    .then((res) => {
        console.log("RESPOSTA", res.data, cepDigitado.value)
        resposta.value = res.data
        mostrarResposta.value = true
        loading.value = false
    })
}

</script> 