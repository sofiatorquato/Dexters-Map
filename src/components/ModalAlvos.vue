<script setup lang="ts">
import type { Info } from '../types/InfoAlvo';
import { computed,ref } from 'vue';

const props = defineProps<{
  exibir:boolean
  alvo: Info
}>()

const emits = defineEmits(['fecharModal', 'atualizarStatus','statusAmostraColetada']);

const statusAlvo = ['ATIVO', 'NA MIRA', 'ELIMINADO', 'AMOSTRA COLETADA'];

const coresStatus:any = {
  'ATIVO': "border border-red-500 text-red-500",
  'NA MIRA': "border border-orange-600 text-orange-600",
  'ELIMINADO': "border border-gray-500 text-gray-500",
  'AMOSTRA COLETADA': "border border-green-400 text-green-400"
  
}

const classeStatus = computed(() => {
  return coresStatus[props.alvo.status] || 'text-white border border-cyan-300/40'
})

</script>

<template>
  <Teleport to="body">
  <div v-if="exibir" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 " @click.self="$emit('fecharModal')">
    <div class="bg-zinc-950 p-6 rounded-lg max-w-md w-full ">
      
        <div class="flex justify-between items-start border-b-1 border-cyan-300/40 ">
          <div class="mb-2">
          <span class="font-header text-dexter-red text-xs tracking-widest ">DEXTER MORGAN // PRIVATE FILE</span>
          <p class="text-gray-500 font-file text-sm">CASE FILE {{ alvo.codigo }}</p>
        </div>
          <button @click="$emit('fecharModal')" class="text-white border border-cyan-300/40 flex items-center px-2 py-0.4 cursor-pointer">
          &times;
          </button>
        </div>

        <div class="flex my-5 " >
          <img :src="alvo.img" alt="" class="w-35 h-35 min-w-[6rem] object-cover border border-cyan-300/40">
          <div class="ml-5">
            <p class="text-white font-bold font-alvo text-xl">{{ alvo.codinome }}</p>
            <p class="text-gray-400 font-mono">{{ alvo.nomeReal }}</p>
            <button class=" mt-3 text-xs p-1.5 font-mono" :class="[classeStatus]">{{ alvo.status }}</button>
          </div>
          
        </div>

        <div class="border border-cyan-300/40 p-3">
          <span class="font-mono text-dexter-red text-xs">Crime report</span>
          <h2 class="text-white font-medium text-lg">{{ alvo.crime }}</h2>
          <p class="text-gray-500 font-mono text-sm">{{ alvo.descricaoCrime }}</p>
        </div>

        <div class="flex justify-between my-5">
          <div class="border border-cyan-300/40 w-49 px-3 py-1">
            <span class="text-gray-400 font-alvo text-xs">Última aparição</span>
            <p class="text-white font-mono text-sm">{{ alvo.ultimaAparicao }}</p>
          </div>

          <div class="border border-cyan-300/40 w-49 px-3 py-0.5">
            <span class="text-gray-400 font-alvo text-xs">Localização</span>
            <p class="text-white font-mono text-sm">{{ alvo.localizacao }}</p>
          </div>
        </div>

        <div class="border border-cyan-300/40 px-2 py-3" :class="{'border border-green-400 text-green-400': alvo.status==='AMOSTRA COLETADA'}">
          <div class="flex justify-between items-center">
            <span class="text-gray-400 font-alvo tracking-wide text-sm" :class="{'text-green-400':alvo.status==='AMOSTRA COLETADA'}" >EVIDÊNCIA: LÂMINA DE SANGUE</span>
            <button class="border border-cyan-300/40 text-gray-400 p-1 text-xs font-mono" :class="{'border border-green-400 text-green-400': alvo.status==='AMOSTRA COLETADA'}">{{ alvo.status==='AMOSTRA COLETADA'? 'Concluído' : 'Pendente' }}</button>
          </div>
          <div class="flex items-center gap-2 my-2">
            <button class="border border-cyan-300/40 w-12 h-7" :class="{'bg-green-400': alvo.status==='AMOSTRA COLETADA'}"></button>
            <span class="text-gray-400 font-mono text-xs" >{{ alvo.status==='AMOSTRA COLETADA'? 'Lâmina catalogada na caixa de mogno' : 'Coletar após eliminação confirmada do alvo.' }}</span>
          </div>
        </div>

        <div class="flex justify-center border border-cyan-300/40 mt-5" :class="{'border border-green-400' :alvo.status==='AMOSTRA COLETADA'}">
          <button class="p-2 font-header tracking-wide text-sm cursor-pointer" @click="alvo.status!=='AMOSTRA COLETADA' &&  $emit('atualizarStatus','AMOSTRA COLETADA')"  :class="{'text-green-400': alvo.status==='AMOSTRA COLETADA'}">{{ alvo.status==='AMOSTRA COLETADA'? 'AMOSTRA ARQUIVADA' :'COLETAR AMOSTRA DE SANGUE' }}</button>
        </div>

        <div class="flex items-center justify-between mt-5">
          <button v-for="status in statusAlvo" :key="status" class="text-white font-mono cursor-pointer" :class="{'bg-cyan-300/40 rounded px-1': status === alvo.status }" @click="$emit('atualizarStatus', status)">
            {{ status }}
          </button>
        </div>

        
    </div>
  </div>
</Teleport>
</template>
