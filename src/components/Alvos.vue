<script setup lang="ts">
import CardAlvo from './CardAlvo.vue';
import { listaAlvos } from '../data/dataAlvo';
import { computed } from 'vue';

const props = defineProps<{
    filtro: string,
    status:string
}>()

const emits = defineEmits(['selecionar']);

const filtros = computed(() => {
    return listaAlvos.filter((alvo) => {
        const ameacaMatch = props.filtro === "TODOS" || alvo.nivelAmeaca === props.filtro;
        const statusMatch = props.status === "TODOS" || alvo.status === props.status;
        return ameacaMatch && statusMatch;
    });
});

</script>

<template>
    

  <div class="flex justify-center items-center border-b-1 border-blue-300 py-2">
        <p class="text-white">Alvos desta noite</p>
  </div>

  <CardAlvo v-for="alvo in filtros" :key="alvo.codigo" :alvo="alvo" @click="$emit('selecionar',alvo)"/>

 
</template>
