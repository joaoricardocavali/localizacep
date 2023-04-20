<template>
<div class="paginaGeral">
    <div>
        <div>

        </div>
        <div>
            <q-input 
                outlined
                @keydown.enter="procurarEndereco()"
                v-model="cepDigitado" />
            <q-btn 
                color="secondary" 
                outline
                @click="procurarEndereco()">
                Pesquisar
            </q-btn>
            <div v-if="mostrarResposta && !erro">
                <q-card >
                    <q-card-section>
                        <div class="text-subtitle2">
                            Logradouro
                        </div>
                        <div class="text-body2">
                            {{ resposta?.logradouro }}
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <div class="text-subtitle2">
                            Números
                        </div>
                        <div class="text-body2">
                            {{ resposta?.complemento }}
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <div class="text-subtitle2">
                            bairro
                        </div>
                        <div class="text-body2">
                            {{ resposta?.bairro }}
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <div class="text-subtitle2">
                            Cidade
                        </div>
                        <div class="text-body2">
                            {{ resposta?.localidade }}
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <div class="text-subtitle2">
                            Estado
                        </div>
                        <div class="text-body2">
                            {{ resposta?.uf }}
                        </div>
                    </q-card-section>
                </q-card>
            </div>
            <div v-else-if="!mostrarResposta && erro">
                <div>
                    Nenhum endereço encontrado.
                </div>
            </div>
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
const mostrarResposta = ref(false)
const erro = ref(false)

const procurarEndereco = async () => {
    await api.get(cepDigitado.value+'/json')
    .then((res) => {
        if(res.data.erro == true) {
            erro.value = true
            mostrarResposta.value = false
        } else {
            erro.value = false
            console.log("RESPOSTA", res.data, cepDigitado.value)
            resposta.value = res.data
            mostrarResposta.value = true
        }
    })
    .catch(() => {
        erro.value = true
        mostrarResposta.value = false
    })
}

</script> 