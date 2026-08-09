<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-slate-800 mb-2">Properties</h2>
        <p class="text-gray-500 text-sm max-w-xl mx-auto">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row justify-between items-center mb-6 text-sm text-gray-600 gap-4">
        <span class="font-medium">13,474 results</span>
        <div class="flex items-center gap-2">
          <span>Sort by:</span>
          <select class="bg-transparent font-medium text-slate-800 cursor-pointer outline-none border-none pr-2">
            <option>Newest Listings</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
          </select>
        </div>
      </div>
<!-- 1 qotor -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="property in properties" 
          :key="property.id" 
          class="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div class="relative h-60 w-full bg-gray-200">
            <img 
              :src="property.image" 
              :alt="property.title" 
              class="w-full h-full object-cover"
            />
            <div class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
              FEATURED
            </div>
            <div class="absolute top-3 right-3 bg-slate-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded">
              FOR SALE
            </div>
            <div class="absolute -bottom-4 right-4 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow">
              <img :src="property.agentAvatar" alt="Agent" class="w-full h-full object-cover" />
            </div>
          </div>

          <div class="p-5 pt-6">
            <h3 class="text-lg font-bold text-slate-800 hover:text-blue-600 cursor-pointer transition-colors">
              {{ property.title }}
            </h3>
            <p class="text-xs text-gray-400 mt-1 mb-4">{{ property.location }}</p>

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
                <button class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-slate-800 hover:bg-gray-100 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-2V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
                <button class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-gray-100 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 2  qotor -->
            <div class="flex flex-col sm:flex-row justify-between items-center mb-6 text-sm text-gray-600 gap-4">
        <span class="font-medium">13,474 results</span>
        <div class="flex items-center gap-2">
          <span>Sort by:</span>
          <select class="bg-transparent font-medium text-slate-800 cursor-pointer outline-none border-none pr-2">
            <option>Newest Listings</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="property in properties" 
          :key="property.id" 
          class="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div class="relative h-60 w-full bg-gray-200">
            <img 
              :src="property.image" 
              :alt="property.title" 
              class="w-full h-full object-cover"
            />
            <div class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
              FEATURED
            </div>
            <div class="absolute top-3 right-3 bg-slate-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded">
              FOR SALE
            </div>
            <div class="absolute -bottom-4 right-4 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow">
              <img :src="property.agentAvatar" alt="Agent" class="w-full h-full object-cover" />
            </div>
          </div>

          <div class="p-5 pt-6">
            <h3 class="text-lg font-bold text-slate-800 hover:text-blue-600 cursor-pointer transition-colors">
              {{ property.title }}
            </h3>
            <p class="text-xs text-gray-400 mt-1 mb-4">{{ property.location }}</p>

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

            <div class="flex items-center justify-between mt-4">
              <div>
                <span class="text-xs text-gray-400 line-through block font-medium">${{ property.oldPrice }}/mo</span>
                <span class="text-lg font-bold text-slate-800">${{ property.price }}/mo</span>
              </div>
              <div class="flex items-center gap-2">
                <button class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-slate-800 hover:bg-gray-100 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-2V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
                <button class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-gray-100 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>    
      <!-- 3  qotor -->
        <div class="flex flex-col sm:flex-row justify-between items-center mb-6 text-sm text-gray-600 gap-4">
        <span class="font-medium">13,474 results</span>
        <div class="flex items-center gap-2">
          <span>Sort by:</span>
          <select class="bg-transparent font-medium text-slate-800 cursor-pointer outline-none border-none pr-2">
            <option>Newest Listings</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="property in properties" 
          :key="property.id" 
          class="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div class="relative h-60 w-full bg-gray-200">
            <img 
              :src="property.image" 
              :alt="property.title" 
              class="w-full h-full object-cover"
            />
            <div class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
              FEATURED
            </div>
            <div class="absolute top-3 right-3 bg-slate-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded">
              FOR SALE
            </div>
            <div class="absolute -bottom-4 right-4 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow">
              <img :src="property.agentAvatar" alt="Agent" class="w-full h-full object-cover" />
            </div>
          </div>

          <div class="p-5 pt-6">
            <h3 class="text-lg font-bold text-slate-800 hover:text-blue-600 cursor-pointer transition-colors">
              {{ property.title }}
            </h3>
            <p class="text-xs text-gray-400 mt-1 mb-4">{{ property.location }}</p>

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

            <div class="flex items-center justify-between mt-4">
              <div>
                <span class="text-xs text-gray-400 line-through block font-medium">${{ property.oldPrice }}/mo</span>
                <span class="text-lg font-bold text-slate-800">${{ property.price }}/mo</span>
              </div>
              <div class="flex items-center gap-2">
                <button class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-slate-800 hover:bg-gray-100 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-2V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
                <button class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-gray-100 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>    
      <!-- 4  qotor -->
        <div class="flex flex-col sm:flex-row justify-between items-center mb-6 text-sm text-gray-600 gap-4">
        <span class="font-medium">13,474 results</span>
        <div class="flex items-center gap-2">
          <span>Sort by:</span>
          <select class="bg-transparent font-medium text-slate-800 cursor-pointer outline-none border-none pr-2">
            <option>Newest Listings</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="property in properties" 
          :key="property.id" 
          class="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div class="relative h-60 w-full bg-gray-200">
            <img 
              :src="property.image" 
              :alt="property.title" 
              class="w-full h-full object-cover"
            />
            <div class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
              FEATURED
            </div>
            <div class="absolute top-3 right-3 bg-slate-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded">
              FOR SALE
            </div>
            <div class="absolute -bottom-4 right-4 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow">
              <img :src="property.agentAvatar" alt="Agent" class="w-full h-full object-cover" />
            </div>
          </div>

          <div class="p-5 pt-6">
            <h3 class="text-lg font-bold text-slate-800 hover:text-blue-600 cursor-pointer transition-colors">
              {{ property.title }}
            </h3>
            <p class="text-xs text-gray-400 mt-1 mb-4">{{ property.location }}</p>

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

            <div class="flex items-center justify-between mt-4">
              <div>
                <span class="text-xs text-gray-400 line-through block font-medium">${{ property.oldPrice }}/mo</span>
                <span class="text-lg font-bold text-slate-800">${{ property.price }}/mo</span>
              </div>
              <div class="flex items-center gap-2">
                <button class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-slate-800 hover:bg-gray-100 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-2V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
                <button class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-gray-100 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>    
      <!-- 5  qotor -->
        <div class="flex flex-col sm:flex-row justify-between items-center mb-6 text-sm text-gray-600 gap-4">
        <span class="font-medium">13,474 results</span>
        <div class="flex items-center gap-2">
          <span>Sort by:</span>
          <select class="bg-transparent font-medium text-slate-800 cursor-pointer outline-none border-none pr-2">
            <option>Newest Listings</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="property in properties" 
          :key="property.id" 
          class="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div class="relative h-60 w-full bg-gray-200">
            <img 
              :src="property.image" 
              :alt="property.title" 
              class="w-full h-full object-cover"
            />
            <div class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
              FEATURED
            </div>
            <div class="absolute top-3 right-3 bg-slate-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded">
              FOR SALE
            </div>
            <div class="absolute -bottom-4 right-4 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow">
              <img :src="property.agentAvatar" alt="Agent" class="w-full h-full object-cover" />
            </div>
          </div>

          <div class="p-5 pt-6">
            <h3 class="text-lg font-bold text-slate-800 hover:text-blue-600 cursor-pointer transition-colors">
              {{ property.title }}
            </h3>
            <p class="text-xs text-gray-400 mt-1 mb-4">{{ property.location }}</p>

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

            <div class="flex items-center justify-between mt-4">
              <div>
                <span class="text-xs text-gray-400 line-through block font-medium">${{ property.oldPrice }}/mo</span>
                <span class="text-lg font-bold text-slate-800">${{ property.price }}/mo</span>
              </div>
              <div class="flex items-center gap-2">
                <button class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-slate-800 hover:bg-gray-100 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-2V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
                <button class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-gray-100 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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

const properties = ref([
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
  }
]);
</script>