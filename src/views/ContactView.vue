<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-7xl mx-auto">
      <!-- Title Section -->
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-slate-800 mb-2">Favourite</h2>
        <p class="text-gray-500 text-sm max-w-xl mx-auto">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </div>

      <!-- Properties Grid (4 ta kartochka) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="property in favouriteProperties" 
          :key="property.id" 
          class="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <!-- Card Image Header -->
          <div class="relative h-60 w-full bg-gray-200">
            <img 
              :src="property.image" 
              :alt="property.title" 
              class="w-full h-full object-cover"
            />
            <!-- Badges -->
            <div class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
              FEATURED
            </div>
            <div class="absolute top-3 right-3 bg-slate-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded">
              FOR SALE
            </div>
            <!-- Avatar -->
            <div class="absolute -bottom-4 right-4 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow">
              <img :src="property.agentAvatar" alt="Agent" class="w-full h-full object-cover" />
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-5 pt-6">
            <h3 class="text-lg font-bold text-slate-800 hover:text-blue-600 cursor-pointer transition-colors">
              {{ property.title }}
            </h3>
            <p class="text-xs text-gray-400 mt-1 mb-4">{{ property.location }}</p>

            <!-- Specs Grid -->
            <div class="grid grid-cols-4 gap-2 text-center py-3 border-t border-b border-gray-100 text-gray-500 text-xs">
              <div class="flex flex-col items-center gap-1">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>{{ property.beds }} Beds</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{{ property.baths }} Baths</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4" />
                </svg>
                <span>{{ property.garage }} Garage</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-2V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                <span>{{ property.sqft }} Sq Ft</span>
              </div>
            </div>

            <!-- Card Footer -->
            <div class="flex items-center justify-between mt-4">
              <div>
                <span class="text-xs text-gray-400 line-through block font-medium">${{ property.oldPrice }}/mo</span>
                <span class="text-lg font-bold text-slate-800">${{ property.price }}/mo</span>
              </div>
              <div class="flex items-center gap-2">
                <!-- Maxsus Kattalashtirish Tugmasi -->
                <button class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-slate-800 hover:bg-gray-100 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-2V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
                <!-- Red Active Heart Button -->
                <button class="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 shadow-sm transition-colors">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const favouriteProperties = ref([
  {
    id: 1,
    title: 'New Apartment Nice Wiew',
    location: 'Quincy St, Brooklyn, NY, USA',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
    agentAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: '1200',
    oldPrice: '2,800',
    price: '7,500'
  },
  {
    id: 2,
    title: 'New Apartment Nice Wiew',
    location: 'Quincy St, Brooklyn, NY, USA',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    agentAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: '1200',
    oldPrice: '2,800',
    price: '7,500'
  },
  {
    id: 3,
    title: 'New Apartment Nice Wiew',
    location: 'Quincy St, Brooklyn, NY, USA',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    agentAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: '1200',
    oldPrice: '2,800',
    price: '7,500'
  },
  {
    id: 4,
    title: 'New Apartment Nice Wiew',
    location: 'Quincy St, Brooklyn, NY, USA',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
    agentAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: '1200',
    oldPrice: '2,800',
    price: '7,500'
  }
]);
</script>