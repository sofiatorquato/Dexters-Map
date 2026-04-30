<script setup lang="ts">
import CardAlvo from './CardAlvo.vue';
import type { Info } from '../types/InfoAlvo';


const listaAlvos: Info[] = [{
    codigo: "T-001",
    nivelAmeaca: "ALTA",
    codinome: "ASSASSINO DO CAMINHÃO DE GELO",
    nomeReal: "Brian Moser",
    localizacao: "Bay Harbor",
}, {
    codigo: "T-002",
    nivelAmeaca: "ALTA",
    codinome: "ASSASSINO DA TRINDADE",
    nomeReal: "Arthuer Mitchell",
    localizacao: "Subúrbios de Miami",
},{
    codigo: "T-002",
    nivelAmeaca: "ALTA",
    codinome: "ASSASSINO DA TRINDADE",
    nomeReal: "Arthuer Mitchell",
    localizacao: "Subúrbios de Miami",
}]

</script>

<template>
  <div class="flex justify-center items-center border-b-1 border-blue-300 py-2">
        <p class="text-white">Alvos desta noite</p>
  </div>

  <CardAlvo v-for="alvo in listaAlvos" :key="alvo.codigo" :alvo="alvo"/>

 
</template>
