<script setup lang="ts">
import type {Info} from '../types/InfoAlvo'

defineProps<{
    alvo: Info
  }>();

</script>

<template>
   <section class="flex justify-center border border-blue-300 p-2 mx-2 mt-2 items-center">
    <div>
        <!-- <img src="../assets/brianmoser.jpg" alt="foto de Brian Moser" class="w-20"> -->
    </div>
    <div class="text-white ml-2">
        <div class="flex gap-5">
            <span>{{ alvo.codigo }}</span>
            <button>{{alvo.nivelAmeaca}}</button>
        </div>
        
        <h2>{{ alvo.codinome }}</h2>
        <p>{{ alvo.nomeReal }}</p>
        <p>{{ alvo.localizacao }}</p>
    </div>

  </section>
</template>
