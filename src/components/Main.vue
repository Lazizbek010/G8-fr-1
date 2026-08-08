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
    <div class="py-16 bg-gray-50/50">
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
  </div>
  </div>
  <div class="bg-[#f4f7fb] py-16 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1a2b49] mb-3">
          Why Choose Us
        </h2>
        <p class="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="item in features"
          :key="item.id"
          class="flex flex-col items-center text-center group"
        >
          <div class="mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110" v-html="item.svg"></div>

          <h3 class="text-base font-bold text-[#1a2b49] mb-3">
            {{ item.title }}
          </h3>

          <p class="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs">
            {{ item.description }}
          </p>
        </div>
      </div>
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


const features = ref([
  {
    id: 1,
    title: 'Trusted By Thousands',
    description: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    svg: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.2378 50C42.209 50 41.2014 49.6231 40.3903 48.897L35.5221 44.613C34.7126 43.9007 34.6338 42.667 35.3462 41.8575C36.0585 41.048 37.2923 40.9693 38.1016 41.6815L42.9772 45.9719C42.9827 45.9767 42.9881 45.9816 42.9935 45.9864C43.0402 46.0283 43.1819 46.156 43.4136 46.0529C43.6452 45.9497 43.6452 45.7589 43.6452 45.6962V11.7142C43.6452 7.40807 40.1419 3.90474 35.8357 3.90474H14.1644C9.85828 3.90474 6.35494 7.40807 6.35494 11.7142V33.3855C6.35494 37.6917 9.85828 41.195 14.1644 41.195H29.1977C31.7881 41.2981 31.7861 44.9975 29.1977 45.0997H14.1644C7.7052 45.0997 2.4502 39.8447 2.4502 33.3855V11.7142C2.4502 5.255 7.7052 0 14.1644 0H35.8357C42.2949 0 47.5499 5.255 47.5499 11.7142V45.6963C47.5499 47.4166 46.5737 48.92 45.0021 49.62C44.4293 49.875 43.83 50 43.2378 50ZM34.2481 25.7837C33.3384 25.2045 32.1317 25.4729 31.5528 26.3827C28.0056 31.4779 21.8609 31.2864 18.3497 26.3827C17.7708 25.473 16.5642 25.2046 15.6545 25.7837C14.7448 26.3626 14.4766 27.5693 15.0555 28.4789C15.2007 28.7072 18.7816 34.0689 25 34.0689C31.2184 34.0689 34.7018 28.7072 34.847 28.4789C35.4259 27.5693 35.1578 26.3626 34.2481 25.7837ZM32.6142 20.6951C31.5359 20.6951 30.6618 19.821 30.6618 18.7427V13.3737C30.7649 10.7833 34.4644 10.7853 34.5666 13.3737V18.7427C34.5666 19.821 33.6925 20.6951 32.6142 20.6951ZM19.4357 18.7427V13.3737C19.3326 10.7833 15.6332 10.7853 15.531 13.3737V18.7427C15.531 19.821 16.4051 20.6951 17.4834 20.6951C18.5616 20.6951 19.4357 19.821 19.4357 18.7427Z" fill="#0061DF"/>
</svg>
`
  },
  {
    id: 2,
    title: 'Wide Renge Of Properties',
    description: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    svg: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_6488)">
<path d="M38.2812 49.9967H11.7188C5.25703 49.9967 0 44.7396 0 38.2779V21.8452C0 18.2133 1.72412 14.73 4.61191 12.5273L17.8932 2.39753C22.0776 -0.79397 27.9224 -0.79397 32.1068 2.39753L36.3281 5.61433V3.12166C36.4313 0.530249 40.1321 0.532202 40.2344 3.12166V9.55828C40.2344 10.3008 39.8134 10.979 39.1479 11.3086C38.4825 11.6381 37.6879 11.5617 37.0974 11.1118L29.7385 5.50408C26.9482 3.37595 23.0516 3.37595 20.262 5.50359L6.98076 15.6334C5.05566 17.1016 3.90625 19.4238 3.90625 21.8452V38.2779C3.90625 42.5857 7.41094 46.0904 11.7188 46.0904H38.2812C42.5891 46.0904 46.0938 42.5857 46.0938 38.2779V21.8452C46.0938 19.3941 44.9573 17.064 43.0538 15.6121C42.1961 14.9579 42.0312 13.7323 42.6854 12.8747C43.3396 12.017 44.5652 11.852 45.4228 12.5062C48.2889 14.6922 50 18.1834 50 21.8452V38.2779C50 44.7396 44.743 49.9967 38.2812 49.9967ZM21.0938 22.5552C19.7454 22.5552 18.6523 23.6483 18.6523 24.9967C18.7813 28.2359 23.4073 28.2335 23.5352 24.9967C23.5352 23.6482 22.4421 22.5552 21.0938 22.5552ZM31.3477 24.9966C31.2187 28.2358 26.5927 28.2334 26.4648 24.9966C26.5938 21.7573 31.2198 21.7598 31.3477 24.9966ZM23.5352 32.8091C23.4062 36.0483 18.7802 36.0459 18.6523 32.8091C18.7813 29.5698 23.4073 29.5723 23.5352 32.8091ZM31.3477 32.8091C31.2187 36.0483 26.5927 36.0459 26.4648 32.8091C26.5938 29.5698 31.2198 29.5723 31.3477 32.8091Z" fill="#0061DF"/>
</g>
<defs>
<clipPath id="clip0_0_6488">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>
`
  },
  {
    id: 3,
    title: 'Financing Made Easy',
    description: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    svg: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.7871 50H18.2129C11.7512 50 6.49414 44.743 6.49414 38.2812V11.7188C6.49414 5.25703 11.7512 0 18.2129 0H31.7871C38.2488 0 43.5059 5.25703 43.5059 11.7188V38.2812C43.5059 44.743 38.2488 50 31.7871 50ZM18.2129 3.90625C13.9051 3.90625 10.4004 7.41094 10.4004 11.7188V38.2812C10.4004 42.5891 13.9051 46.0938 18.2129 46.0938H31.7871C36.0949 46.0938 39.5996 42.5891 39.5996 38.2812V11.7188C39.5996 7.41094 36.0949 3.90625 31.7871 3.90625H18.2129ZM35.6934 14.7461C35.6934 13.6674 34.8189 12.793 33.7402 12.793H16.2598C13.6684 12.8961 13.6703 16.597 16.2598 16.6992H33.7402C34.8189 16.6992 35.6934 15.8248 35.6934 14.7461ZM35.4004 40.2344V30.957C35.2973 28.3656 31.5964 28.3676 31.4941 30.957V40.2344C31.4941 41.3131 32.3686 42.1875 33.4473 42.1875C34.526 42.1875 35.4004 41.3131 35.4004 40.2344ZM16.6504 29.0039C15.3021 29.0039 14.209 30.097 14.209 31.4453C14.3376 34.6838 18.9637 34.6829 19.0918 31.4453C19.0918 30.097 17.9987 29.0039 16.6504 29.0039ZM25.0488 29.0039C23.7005 29.0039 22.6074 30.097 22.6074 31.4453C22.736 34.6838 27.3621 34.6829 27.4902 31.4453C27.4902 30.097 26.3972 29.0039 25.0488 29.0039ZM16.6504 37.3047C15.3021 37.3047 14.209 38.3978 14.209 39.7461C14.3376 42.9846 18.9637 42.9837 19.0918 39.7461C19.0918 38.3978 17.9987 37.3047 16.6504 37.3047ZM25.0488 37.3047C23.7005 37.3047 22.6074 38.3978 22.6074 39.7461C22.736 42.9846 27.3621 42.9837 27.4902 39.7461C27.4902 38.3978 26.3972 37.3047 25.0488 37.3047ZM18.9941 23.0469C18.9941 24.3952 17.9011 25.4883 16.5527 25.4883C13.3143 25.3597 13.3151 20.7336 16.5527 20.6055C17.9011 20.6055 18.9941 21.6985 18.9941 23.0469ZM25.0488 20.6055C23.7005 20.6055 22.6074 21.6985 22.6074 23.0469C22.736 26.2854 27.3621 26.2845 27.4902 23.0469C27.4902 21.6985 26.3972 20.6055 25.0488 20.6055ZM33.4473 20.6055C32.0989 20.6055 31.0059 21.6985 31.0059 23.0469C31.1345 26.2854 35.7605 26.2845 35.8887 23.0469C35.8887 21.6985 34.7956 20.6055 33.4473 20.6055Z" fill="#0061DF"/>
</svg>
`
  },
  {
    id: 4,
    title: 'See Neighborhoods',
    description: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    
    svg: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_6498)">
<path d="M28.8499 49.9514H11.6959C5.24678 49.9514 0 44.7046 0 38.2555V11.7447C0 5.29561 5.24678 0.0488281 11.6959 0.0488281H38.2066C44.6558 0.0488281 49.9025 5.29561 49.9025 11.7447V21.5888C49.7996 24.1751 46.1059 24.1732 46.0039 21.5888V11.7447C46.0039 7.44532 42.506 3.94746 38.2066 3.94746H11.6959C7.39649 3.94746 3.89864 7.44532 3.89864 11.7447V38.2555C3.89864 42.5549 7.39649 46.0527 11.6959 46.0527H28.8499C31.4363 46.1556 31.4343 49.8493 28.8499 49.9514ZM26.4319 17.212L32.47 11.1738C33.2313 10.4125 33.2312 9.17826 32.4699 8.41705C31.7088 7.65575 30.4744 7.65575 29.7132 8.41705L23.675 14.4553C23.3058 14.8245 22.8141 15.0241 22.2929 15.0262C21.7709 15.0252 21.2808 14.8206 20.9131 14.45L14.9314 8.42241C14.173 7.65818 12.9387 7.65351 12.1747 8.41189C11.4105 9.17027 11.4058 10.4045 12.1641 11.1686L18.1458 17.1962C19.249 18.3079 20.7192 18.9218 22.2855 18.9249H22.2971C23.8589 18.9248 25.327 18.3168 26.4319 17.212ZM11.2321 32.4116L15.4191 28.1654C17.6594 25.8934 17.6529 22.203 15.4047 19.9389L11.2272 15.7319C10.4686 14.968 9.2345 14.9636 8.47047 15.7221C7.70653 16.4807 7.70224 17.7149 8.46072 18.4788L12.6382 22.6859C13.3876 23.4405 13.3898 24.6708 12.643 25.4281L8.45595 29.6743C7.7001 30.4408 7.70867 31.675 8.47534 32.431C8.85507 32.8055 9.34961 32.9923 9.84396 32.9923C10.3475 32.9923 10.8507 32.7984 11.2321 32.4116ZM43.6426 47.9757C47.8611 42.6208 50 38.5358 50 35.8344C50 30.0753 45.3216 25.39 39.5712 25.39C33.8207 25.39 29.1423 30.0753 29.1423 35.8344C29.1423 38.5359 31.2812 42.6208 35.4997 47.9758C36.4888 49.2314 37.9728 49.9515 39.5712 49.9515C41.1695 49.9515 42.6535 49.2313 43.6426 47.9757ZM42.1113 46.7695H42.1123H42.1113ZM46.1014 35.8344C46.1014 37.1493 44.6509 40.3956 40.5801 45.5633C40.0484 46.221 39.0948 46.2219 38.5623 45.5633C34.4914 40.3956 33.0409 37.1493 33.0409 35.8344C33.0409 32.225 35.9704 29.2886 39.5712 29.2886C43.1719 29.2886 46.1014 32.225 46.1014 35.8344ZM11.7934 42.1541C10.0818 42.1644 9.18597 40.048 10.415 38.8264L38.7776 10.4638C39.5389 9.70253 40.7732 9.70253 41.5344 10.4638C42.2956 11.2251 42.2956 12.4594 41.5344 13.2206L13.1718 41.5831C12.7911 41.9637 12.2923 42.1541 11.7934 42.1541ZM37.1345 35.6239C37.1345 36.9696 38.2254 38.0605 39.5712 38.0605C42.8033 37.9322 42.8024 33.3151 39.5712 33.1872C38.2254 33.1872 37.1345 34.2782 37.1345 35.6239Z" fill="#0061DF"/>
</g>
<defs>
<clipPath id="clip0_0_6498">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>
`
  }
])
</script>