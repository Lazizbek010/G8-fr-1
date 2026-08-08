<template>
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
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans relative">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-10">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1a2b49] mb-3">
          Category
        </h2>
        <p class="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </div>

      <div class="relative px-8 sm:px-12">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="20"
          :navigation="{
            prevEl: '.custom-prev',
            nextEl: '.custom-next'
          }"
          :pagination="{
            el: '.custom-pagination',
            clickable: true
          }"
          :breakpoints="{
            '640': { slidesPerView: 2, spaceBetween: 20 },
            '768': { slidesPerView: 3, spaceBetween: 24 },
            '1024': { slidesPerView: 4, spaceBetween: 24 }
          }"
          class="category-swiper"
        >
          <swiper-slide
            v-for="item in categories"
            :key="item.id"
            class="h-auto"
          >
            <div class="relative h-96 rounded-lg overflow-hidden group cursor-pointer shadow-md">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>

              <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div class="mb-4 transform transition-transform duration-300 group-hover:scale-110" v-html="item.icon"></div>
                <h3 class="text-xl font-semibold text-white tracking-wide">
                  {{ item.title }}
                </h3>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <button
          class="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all duration-200 focus:outline-none"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          class="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all duration-200 focus:outline-none"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div class="custom-pagination flex justify-center gap-2 mt-8"></div>
      </div>
    </div>
  </div>
  
</template>
<script setup>
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
