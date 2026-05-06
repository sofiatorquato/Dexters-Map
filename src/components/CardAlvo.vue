<script setup lang="ts">
import type { Info } from '../types/InfoAlvo'
import { computed } from 'vue';

const props = defineProps<{
    alvo: Info
}>()

const coresAmeaca:any = {
    'ALTA': 'text-red-500',
    'MÉDIA': 'text-orange-500',
    'BAIXA': 'text-green-500'
}

const classeAmeaca:any = computed(() => {
    return coresAmeaca[props.alvo.nivelAmeaca] || 'text-white'
})

</script>

<template>
   <section class="flex border border-blue-300 p-2 m-2 h-32 items-center" cursor-pointer>
    <div>
        <img :src="alvo.img" alt="" class="w-24 h-24 min-w-[6rem] object-cover">
    </div>
    <div class="text-white ml-2">
        <div class="flex gap-5">
            <span>{{ alvo.codigo }}</span>
            <button :class="[classeAmeaca]">{{alvo.nivelAmeaca}}</button>
        </div>
        
        <h2>{{ alvo.codinome }}</h2>
        <p>{{ alvo.nomeReal }}</p>
        <p>{{ alvo.localizacao }}</p>
    </div>

  </section>
</template>
