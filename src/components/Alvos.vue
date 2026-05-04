<script setup lang="ts">
import CardAlvo from './CardAlvo.vue';
import { listaAlvos } from '../data/dataAlvo';
import { computed } from 'vue';

const props = defineProps<{
    filtro: string
}>()

const ameacaSelecionada = computed(() => {
    if (props.filtro === "TODOS") {
        return listaAlvos
    }

    return listaAlvos.filter((alvo) => alvo.nivelAmeaca === props.filtro)
})

</script>

<template>
    

  <div class="flex justify-center items-center border-b-1 border-blue-300 py-2">
        <p class="text-white">Alvos desta noite</p>
  </div>

  <CardAlvo v-for="alvo in ameacaSelecionada" :key="alvo.codigo" :alvo="alvo"/>

 
</template>
