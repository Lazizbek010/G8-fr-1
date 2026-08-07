<template>
  <div class="relative min-h-screen w-full bg-slate-900 flex items-center justify-center font-sans overflow-hidden">
    <div 
      class="absolute inset-0 bg-cover bg-center transition-all duration-500"
      :style="{ backgroundImage: `url('${bgImages[currentSlide]}')` }"
    >
      <div class="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
    </div>

    <button 
      @click="prevSlide"
      class="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm transition"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button 
      @click="nextSlide"
      class="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm transition"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <div class="relative z-20 w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden mx-4">
      
      <form @submit.prevent="handleSubmit" class="p-6 space-y-6">
        
        <div>
          <h3 class="text-sm font-bold text-slate-800 mb-3">Address</h3>
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <input 
              v-model="form.country"
              type="text" 
              placeholder="Country" 
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-400"
            />
            <input 
              v-model="form.region"
              type="text" 
              placeholder="Region" 
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-400"
            />
            <input 
              v-model="form.city"
              type="text" 
              placeholder="City" 
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-400"
            />
            <input 
              v-model="form.zipCode"
              type="text" 
              placeholder="Zip code" 
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-slate-800 mb-3">Apartment info</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input 
              v-model="form.rooms"
              type="text" 
              placeholder="Rooms" 
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-400"
            />
            <input 
              v-model="form.size"
              type="text" 
              placeholder="Size" 
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-400"
            />
            <input 
              v-model="form.sort"
              type="text" 
              placeholder="Sort" 
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-slate-800 mb-3">Price</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xs sm:max-w-md">
            <input 
              v-model="form.minPrice"
              type="text" 
              placeholder="Min price" 
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-400"
            />
            <input 
              v-model="form.maxPrice"
              type="text" 
              placeholder="Max price" 
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

      </form>

      <div class="bg-gray-50 border-t border-gray-100 px-6 py-4 flex justify-end gap-3">
        <button 
          type="button" 
          @click="resetForm"
          class="px-6 py-2 text-sm font-medium text-slate-600 bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
        >
          Cancel
        </button>
        <button 
          type="button" 
          @click="handleSubmit"
          class="px-8 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 shadow-sm transition"
        >
          Submit
        </button>
      </div>

    </div>

    <!-- Slayder indikatorlari (Dots at bottom) -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
      <button 
        v-for="(img, idx) in bgImages" 
        :key="idx" 
        @click="currentSlide = idx"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="currentSlide === idx ? 'bg-white w-5' : 'bg-white/50'"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const currentSlide = ref(0)

const bgImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80'
]

const form = reactive({
  country: '',
  region: '',
  city: '',
  zipCode: '',
  rooms: '',
  size: '',
  sort: '',
  minPrice: '',
  maxPrice: ''
})

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % bgImages.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + bgImages.length) % bgImages.length
}

const resetForm = () => {
  Object.keys(form).forEach(key => form[key] = '')
}

const handleSubmit = () => {
  console.log('Form data:', { ...form })
}
</script>