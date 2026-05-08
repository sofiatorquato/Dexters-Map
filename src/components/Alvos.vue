<script setup lang="ts">
import CardAlvo from './CardAlvo.vue';
import { listaAlvos } from '../data/dataAlvo';
import { computed } from 'vue';

const props = defineProps<{
    filtro: string,
    status:string
}>()//


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
    

  <div class="flex justify-start items-center border-b-1 border-cyan-300/40 py-2">
        <p class="text-white ml-5 font-header tracking-wide"><span class="text-red-500">ALVOS</span> DESTA NOITE</p>
  </div>

  <CardAlvo v-for="alvo in filtros" :key="alvo.codigo" :alvo="alvo" @click="$emit('selecionar',alvo)"/>

 
</template>
