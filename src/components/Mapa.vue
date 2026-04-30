<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";
import type { PointTuple } from "leaflet";

// Configurações iniciais do mapa (Miami)
const zoom = ref(12);
const center = ref<PointTuple>([25.7617, -80.1918]);

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
</script>

<template>
  <!-- O segredo do Tailwind: o h-full aqui preenche o 'main' do seu App.vue -->
  <div class="w-full h-full min-h-[500px]">
    <l-map ref="map" v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
      <l-tile-layer :url="url" layer-type="base" name="OpenStreetMap"></l-tile-layer>
      
      <!-- Exemplo de Pin de Alvo -->
      <l-marker :lat-lng="[25.8136, -80.1225]">
        <l-popup>ALVO: Brian Moser (Ice Truck Killer)</l-popup>
      </l-marker>
      <l-marker :lat-lng="[35.8136, -80.1225]">
        <l-popup>ALVO: Brian Moser (Ice Truck Killer)</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>
