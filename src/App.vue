<script setup lang="ts">
import Header from './components/Header.vue';
import FilterBar from './components/FilterBar.vue';
import Alvos from './components/Alvos.vue';
import Mapa from './components/Mapa.vue';
import { ref } from 'vue';
import type{ Info } from './types/InfoAlvo';
import ModalAlvos from './components/ModalAlvos.vue';



const filtroAmeaca: any = ref('TODOS');
const filtroStatus: any = ref('TODOS');

const mostrarModal = ref(false);
const alvoSelecionado = ref<Info | null>(null);

  const abrirModal = (alvo: Info) => {
  alvoSelecionado.value = alvo;
  mostrarModal.value = true;
};



</script>

<template>
  <div class="h-screen flex flex-col bg-black overflow-hidden">
    <Header></Header>
    <FilterBar @filtros="filtroAmeaca = $event" @status-alvo = "filtroStatus = $event"/>

    <div class="flex flex-1 overflow-hidden">
      <aside class="w-100 h-full border-r border-blue-900">
        <Alvos :filtro="filtroAmeaca" :status="filtroStatus" @selecionar="abrirModal"/>
      </aside>

      <main class="flex-1 h-full bg-slate-900">
          <Mapa :ameaca="filtroAmeaca" :status="filtroStatus" @selecionar="abrirModal"/>
      </main>

    </div>

    <ModalAlvos v-if="alvoSelecionado" :exibir="mostrarModal" :alvo="alvoSelecionado" @fecharModal="mostrarModal=false"/>
  </div>
  
</template>
