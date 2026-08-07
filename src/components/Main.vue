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
  <div>
    <section class="py-16 bg-gray-50/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-800 tracking-tight">Recommended</h2>
        <p class="mt-2 text-sm text-slate-500">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </div>

      <div class="relative">
        
        <button 
          @click="prevSlide"
          class="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg text-slate-600 flex items-center justify-center transition border border-gray-100"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          @click="nextSlide"
          class="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg text-slate-600 flex items-center justify-center transition border border-gray-100"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="item in properties" 
            :key="item.id"
            class="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div class="relative h-56 w-full overflow-hidden">
                <img 
                  :src="item.image" 
                  :alt="item.title"
                  class="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                
                <span class="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Featured
                </span>

                <span class="absolute top-3 right-3 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider backdrop-blur-sm">
                  For Sale
                </span>

                <div class="absolute -bottom-4 right-4 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                  <img :src="item.avatar" alt="Agent" class="w-full h-full object-cover" />
                </div>
              </div>

              <div class="p-5">
                <h3 class="text-base font-bold text-slate-800 line-clamp-1">
                  {{ item.title }}
                </h3>
                <p class="text-xs text-slate-400 mt-1">
                  {{ item.location }}
                </p>

                <div class="grid grid-cols-4 gap-2 my-5 text-center border-y border-gray-100 py-3">
                  <div class="flex flex-col items-center">
                    <svg class="w-4 h-4 text-slate-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M3 14h18m-9-4v8m-7 0h14" />
                    </svg>
                    <span class="text-[11px] text-slate-500 font-medium">{{ item.beds }} Beds</span>
                  </div>

                  <div class="flex flex-col items-center">
                    <svg class="w-4 h-4 text-slate-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="text-[11px] text-slate-500 font-medium">{{ item.baths }} Baths</span>
                  </div>

                  <div class="flex flex-col items-center">
                    <svg class="w-4 h-4 text-slate-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 14v3m8-3v3m-9 3h10a2 2 0 002-2V11a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" />
                    </svg>
                    <span class="text-[11px] text-slate-500 font-medium">{{ item.garage }} Garage</span>
                  </div>

                  <div class="flex flex-col items-center">
                    <!-- Sq Ft Icon -->
                    <svg class="w-4 h-4 text-slate-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span class="text-[11px] text-slate-500 font-medium">{{ item.sqft }} Sq Ft</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="px-5 pb-5 pt-0 flex items-center justify-between">
              <div>
                <span class="block text-[11px] text-slate-400 line-through">${{ item.oldPrice }}/mo</span>
                <span class="text-base font-bold text-slate-800">${{ item.price }}/mo</span>
              </div>

              <div class="flex items-center gap-2">
                <button class="p-1.5 rounded-full hover:bg-gray-100 text-slate-400 hover:text-slate-600 transition">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
                <button class="p-1.5 rounded-full hover:bg-gray-100 text-slate-400 hover:text-red-500 transition">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div class="flex justify-center items-center gap-2 mt-8">
          <button 
            v-for="(dot, idx) in 5" 
            :key="idx"
            @click="activeDot = idx"
            class="h-2 rounded-full transition-all duration-300"
            :class="activeDot === idx ? 'w-2 bg-blue-600' : 'w-2 bg-blue-200 hover:bg-blue-300'"
          ></button>
        </div>

      </div>
    </div>
  </section>
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



const activeDot = ref(0)

const properties = ref([
  {
    id: 1,
    title: 'New Apartment Nice View',
    location: 'Quincy St, Brooklyn, NY, USA',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: '1200',
    oldPrice: '2,800',
    price: '7,500'
  },
  {
    id: 2,
    title: 'New Apartment Nice View',
    location: 'Quincy St, Brooklyn, NY, USA',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: '1200',
    oldPrice: '2,800',
    price: '7,500'
  },
  {
    id: 3,
    title: 'New Apartment Nice View',
    location: 'Quincy St, Brooklyn, NY, USA',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: '1200',
    oldPrice: '2,800',
    price: '7,500'
  }
])

const nextSlide1 = () => {
  activeDot.value = (activeDot.value + 1) % 5
}

const prevSlide2 = () => {
  activeDot.value = (activeDot.value - 1 + 5) % 5
}
</script>