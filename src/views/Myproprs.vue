<template>
    <div>
<div class="w-full bg-gray-50 min-h-screen p-6 text-slate-800 font-sans">
  <div class="max-w-6xl mx-auto">
    
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-2xl font-bold text-slate-900">My properties</h1>
      
      <div class="relative w-64">
        <input
          type="text"
          placeholder="Search"
          class="w-full bg-transparent border-b border-gray-300 py-1 px-2 text-sm text-slate-700 outline-none focus:border-slate-800 transition-colors placeholder-gray-400"
        />
      </div>
    </div>

    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      
      <div class="grid grid-cols-12 gap-4 pb-4 border-b border-gray-100 font-bold text-slate-800 text-sm items-center">
        <div class="col-span-5">Listing Title</div>
        <div class="col-span-2">Date Published</div>
        <div class="col-span-2">Status</div>
        <div class="col-span-1">View</div>
        <div class="col-span-2 text-right">Action</div>
      </div>

      <div class="divide-y divide-gray-50">

        <div class="grid grid-cols-12 gap-4 py-5 items-center hover:bg-slate-50/50 transition-colors rounded-xl px-2">
          <div class="col-span-5 flex gap-4 items-center">
            <div class="relative w-28 h-24 rounded-lg overflow-hidden bg-gray-200 shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=300&auto=format&fit=crop" 
                alt="Property" 
                class="w-full h-full object-cover"
              />
              <span class="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm">
                FEATURED
              </span>
            </div>

            <div class="space-y-1">
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="font-bold text-slate-900 text-sm leading-tight hover:text-blue-600 cursor-pointer transition">
                  New Apartment Nice View
                </h3>
                <span class="bg-slate-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase">
                  FOR SALE
                </span>
              </div>
              <p class="text-xs text-gray-400">Quincy St, Brooklyn, NY, USA</p>
              <div class="pt-1">
                <span class="line-through text-xs text-gray-400 mr-1">$2,800/mo</span>
                <span class="font-bold text-slate-900 text-sm">$7,500/mo</span>
              </div>
            </div>
          </div>

          <div class="col-span-2 text-xs text-gray-500 font-medium">
            30 December 2022
          </div>

          <div class="col-span-2 text-xs text-gray-500 font-medium">
            Pending
          </div>

          <div class="col-span-1 text-xs text-gray-500 font-medium">
            5933
          </div>

          <div class="col-span-2 flex items-center justify-end gap-2">
            <button class="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-blue-600 flex items-center justify-center transition">
              <i class="fas fa-pencil-alt text-xs"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_9349)">
<path d="M15.0624 0.937688C14.4577 0.333 13.6538 0 12.7987 0C11.9436 0 11.1397 0.333 10.535 0.937656L1.5883 9.88441C1.51218 9.96053 1.45702 10.055 1.42815 10.1587L0.0228983 15.2074C-0.0376954 15.4252 0.0239608 15.6587 0.184242 15.8181C0.302992 15.9362 0.462117 16 0.625055 16C0.681992 16 0.73943 15.9922 0.795773 15.9762L5.84443 14.5421C6.05743 14.4816 6.22256 14.3129 6.27843 14.0986C6.33431 13.8843 6.27262 13.6565 6.11627 13.4996L2.9334 10.3071L10.3495 2.89097L13.1076 5.64903L7.43024 11.3109C7.18584 11.5546 7.18531 11.9503 7.42906 12.1947C7.67277 12.4392 8.06856 12.4397 8.31293 12.196L15.0623 5.46497C15.667 4.86031 16 4.05641 16 3.20131C16 2.34622 15.667 1.54231 15.0624 0.937688ZM4.48109 13.6299L1.52584 14.4694L2.35349 11.4959L4.48109 13.6299ZM14.1791 4.58047L13.9927 4.76638L11.2334 2.00709L11.419 1.82153C11.7875 1.45297 12.2775 1.25 12.7987 1.25C13.3199 1.25 13.8099 1.45297 14.1785 1.82156C14.547 2.19009 14.75 2.68009 14.75 3.20131C14.75 3.72253 14.547 4.21253 14.1791 4.58047Z" fill="#696969"/>
</g>
<defs>
<clipPath id="clip0_0_9349">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
</i>
            </button>
            <button class="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-red-600 flex items-center justify-center transition">
              <i class="fas fa-trash-alt text-xs"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.25 2H10.5V1.5C10.5 0.672906 9.82709 0 9 0H7C6.17291 0 5.5 0.672906 5.5 1.5V2H2.75C2.06075 2 1.5 2.56075 1.5 3.25V5C1.5 5.27612 1.72387 5.5 2 5.5H2.27325L2.70522 14.5713C2.74338 15.3725 3.4015 16 4.2035 16H11.7965C12.5985 16 13.2567 15.3725 13.2948 14.5713L13.7268 5.5H14C14.2761 5.5 14.5 5.27612 14.5 5V3.25C14.5 2.56075 13.9392 2 13.25 2ZM6.5 1.5C6.5 1.22431 6.72431 1 7 1H9C9.27569 1 9.5 1.22431 9.5 1.5V2H6.5V1.5ZM2.5 3.25C2.5 3.11216 2.61216 3 2.75 3H13.25C13.3878 3 13.5 3.11216 13.5 3.25V4.5C13.3459 4.5 3.13853 4.5 2.5 4.5V3.25ZM12.2959 14.5238C12.2832 14.7908 12.0638 15 11.7965 15H4.2035C3.93616 15 3.71678 14.7908 3.70409 14.5238L3.27437 5.5H12.7256L12.2959 14.5238Z" fill="#696969"/>
<path d="M8 14C8.27613 14 8.5 13.7761 8.5 13.5V7C8.5 6.72387 8.27613 6.5 8 6.5C7.72387 6.5 7.5 6.72387 7.5 7V13.5C7.5 13.7761 7.72384 14 8 14Z" fill="#696969"/>
<path d="M10.5 14C10.7761 14 11 13.7761 11 13.5V7C11 6.72387 10.7761 6.5 10.5 6.5C10.2239 6.5 10 6.72387 10 7V13.5C10 13.7761 10.2238 14 10.5 14Z" fill="#696969"/>
<path d="M5.5 14C5.77613 14 6 13.7761 6 13.5V7C6 6.72387 5.77613 6.5 5.5 6.5C5.22387 6.5 5 6.72387 5 7V13.5C5 13.7761 5.22384 14 5.5 14Z" fill="#696969"/>
</svg>
</i>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-4 py-5 items-center hover:bg-slate-50/50 transition-colors rounded-xl px-2">
          <div class="col-span-5 flex gap-4 items-center">
            <div class="relative w-28 h-24 rounded-lg overflow-hidden bg-gray-200 shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=300&auto=format&fit=crop" 
                alt="Property" 
                class="w-full h-full object-cover"
              />
              <span class="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm">
                FEATURED
              </span>
            </div>

            <div class="space-y-1">
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="font-bold text-slate-900 text-sm leading-tight hover:text-blue-600 cursor-pointer transition">
                  New Apartment Nice View
                </h3>
                <span class="bg-slate-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase">
                  FOR SALE
                </span>
              </div>
              <p class="text-xs text-gray-400">Quincy St, Brooklyn, NY, USA</p>
              <div class="pt-1">
                <span class="line-through text-xs text-gray-400 mr-1">$2,800/mo</span>
                <span class="font-bold text-slate-900 text-sm">$7,500/mo</span>
              </div>
            </div>
          </div>

          <div class="col-span-2 text-xs text-gray-500 font-medium">
            30 December 2022
          </div>

          <div class="col-span-2 text-xs text-gray-500 font-medium">
            Pending
          </div>

          <div class="col-span-1 text-xs text-gray-500 font-medium">
            5933
          </div>

          <div class="col-span-2 flex items-center justify-end gap-2">
            <button class="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-blue-600 flex items-center justify-center transition">
              <i class="fas fa-pencil-alt text-xs"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_9376)">
<path d="M15.0624 0.937688C14.4577 0.333 13.6538 0 12.7987 0C11.9436 0 11.1397 0.333 10.535 0.937656L1.5883 9.88441C1.51218 9.96053 1.45702 10.055 1.42815 10.1587L0.0228983 15.2074C-0.0376954 15.4252 0.0239608 15.6587 0.184242 15.8181C0.302992 15.9362 0.462117 16 0.625055 16C0.681992 16 0.73943 15.9922 0.795773 15.9762L5.84443 14.5421C6.05743 14.4816 6.22256 14.3129 6.27843 14.0986C6.33431 13.8843 6.27262 13.6565 6.11627 13.4996L2.9334 10.3071L10.3495 2.89097L13.1076 5.64903L7.43024 11.3109C7.18584 11.5546 7.18531 11.9503 7.42906 12.1947C7.67277 12.4392 8.06856 12.4397 8.31293 12.196L15.0623 5.46497C15.667 4.86031 16 4.05641 16 3.20131C16 2.34622 15.667 1.54231 15.0624 0.937688ZM4.48109 13.6299L1.52584 14.4694L2.35349 11.4959L4.48109 13.6299ZM14.1791 4.58047L13.9927 4.76638L11.2334 2.00709L11.419 1.82153C11.7875 1.45297 12.2775 1.25 12.7987 1.25C13.3199 1.25 13.8099 1.45297 14.1785 1.82156C14.547 2.19009 14.75 2.68009 14.75 3.20131C14.75 3.72253 14.547 4.21253 14.1791 4.58047Z" fill="#696969"/>
</g>
<defs>
<clipPath id="clip0_0_9376">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
</i>
            </button>
            <button class="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-red-600 flex items-center justify-center transition">
              <i class="fas fa-trash-alt text-xs"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.25 2H10.5V1.5C10.5 0.672906 9.82709 0 9 0H7C6.17291 0 5.5 0.672906 5.5 1.5V2H2.75C2.06075 2 1.5 2.56075 1.5 3.25V5C1.5 5.27612 1.72387 5.5 2 5.5H2.27325L2.70522 14.5713C2.74338 15.3725 3.4015 16 4.2035 16H11.7965C12.5985 16 13.2567 15.3725 13.2948 14.5713L13.7268 5.5H14C14.2761 5.5 14.5 5.27612 14.5 5V3.25C14.5 2.56075 13.9392 2 13.25 2ZM6.5 1.5C6.5 1.22431 6.72431 1 7 1H9C9.27569 1 9.5 1.22431 9.5 1.5V2H6.5V1.5ZM2.5 3.25C2.5 3.11216 2.61216 3 2.75 3H13.25C13.3878 3 13.5 3.11216 13.5 3.25V4.5C13.3459 4.5 3.13853 4.5 2.5 4.5V3.25ZM12.2959 14.5238C12.2832 14.7908 12.0638 15 11.7965 15H4.2035C3.93616 15 3.71678 14.7908 3.70409 14.5238L3.27437 5.5H12.7256L12.2959 14.5238Z" fill="#696969"/>
<path d="M8 14C8.27613 14 8.5 13.7761 8.5 13.5V7C8.5 6.72387 8.27613 6.5 8 6.5C7.72387 6.5 7.5 6.72387 7.5 7V13.5C7.5 13.7761 7.72384 14 8 14Z" fill="#696969"/>
<path d="M10.5 14C10.7761 14 11 13.7761 11 13.5V7C11 6.72387 10.7761 6.5 10.5 6.5C10.2239 6.5 10 6.72387 10 7V13.5C10 13.7761 10.2238 14 10.5 14Z" fill="#696969"/>
<path d="M5.5 14C5.77613 14 6 13.7761 6 13.5V7C6 6.72387 5.77613 6.5 5.5 6.5C5.22387 6.5 5 6.72387 5 7V13.5C5 13.7761 5.22384 14 5.5 14Z" fill="#696969"/>
</svg>
</i>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-4 py-5 items-center hover:bg-slate-50/50 transition-colors rounded-xl px-2">
          <div class="col-span-5 flex gap-4 items-center">
            <div class="relative w-28 h-24 rounded-lg overflow-hidden bg-gray-200 shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=300&auto=format&fit=crop" 
                alt="Property" 
                class="w-full h-full object-cover"
              />
              <span class="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm">
                FEATURED
              </span>
            </div>

            <div class="space-y-1">
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="font-bold text-slate-900 text-sm leading-tight hover:text-blue-600 cursor-pointer transition">
                  New Apartment Nice View
                </h3>
                <span class="bg-slate-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase">
                  FOR SALE
                </span>
              </div>
              <p class="text-xs text-gray-400">Quincy St, Brooklyn, NY, USA</p>
              <div class="pt-1">
                <span class="line-through text-xs text-gray-400 mr-1">$2,800/mo</span>
                <span class="font-bold text-slate-900 text-sm">$7,500/mo</span>
              </div>
            </div>
          </div>

          <div class="col-span-2 text-xs text-gray-500 font-medium">
            30 December 2022
          </div>

          <div class="col-span-2 text-xs text-gray-500 font-medium">
            Pending
          </div>

          <div class="col-span-1 text-xs text-gray-500 font-medium">
            5933
          </div>

          <div class="col-span-2 flex items-center justify-end gap-2">
            <button class="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-blue-600 flex items-center justify-center transition">
              <i class="fas fa-pencil-alt text-xs"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_9349)">
<path d="M15.0624 0.937688C14.4577 0.333 13.6538 0 12.7987 0C11.9436 0 11.1397 0.333 10.535 0.937656L1.5883 9.88441C1.51218 9.96053 1.45702 10.055 1.42815 10.1587L0.0228983 15.2074C-0.0376954 15.4252 0.0239608 15.6587 0.184242 15.8181C0.302992 15.9362 0.462117 16 0.625055 16C0.681992 16 0.73943 15.9922 0.795773 15.9762L5.84443 14.5421C6.05743 14.4816 6.22256 14.3129 6.27843 14.0986C6.33431 13.8843 6.27262 13.6565 6.11627 13.4996L2.9334 10.3071L10.3495 2.89097L13.1076 5.64903L7.43024 11.3109C7.18584 11.5546 7.18531 11.9503 7.42906 12.1947C7.67277 12.4392 8.06856 12.4397 8.31293 12.196L15.0623 5.46497C15.667 4.86031 16 4.05641 16 3.20131C16 2.34622 15.667 1.54231 15.0624 0.937688ZM4.48109 13.6299L1.52584 14.4694L2.35349 11.4959L4.48109 13.6299ZM14.1791 4.58047L13.9927 4.76638L11.2334 2.00709L11.419 1.82153C11.7875 1.45297 12.2775 1.25 12.7987 1.25C13.3199 1.25 13.8099 1.45297 14.1785 1.82156C14.547 2.19009 14.75 2.68009 14.75 3.20131C14.75 3.72253 14.547 4.21253 14.1791 4.58047Z" fill="#696969"/>
</g>
<defs>
<clipPath id="clip0_0_9349">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
</i>
            </button>
            <button class="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-red-600 flex items-center justify-center transition">
              <i class="fas fa-trash-alt text-xs"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.25 2H10.5V1.5C10.5 0.672906 9.82709 0 9 0H7C6.17291 0 5.5 0.672906 5.5 1.5V2H2.75C2.06075 2 1.5 2.56075 1.5 3.25V5C1.5 5.27612 1.72387 5.5 2 5.5H2.27325L2.70522 14.5713C2.74338 15.3725 3.4015 16 4.2035 16H11.7965C12.5985 16 13.2567 15.3725 13.2948 14.5713L13.7268 5.5H14C14.2761 5.5 14.5 5.27612 14.5 5V3.25C14.5 2.56075 13.9392 2 13.25 2ZM6.5 1.5C6.5 1.22431 6.72431 1 7 1H9C9.27569 1 9.5 1.22431 9.5 1.5V2H6.5V1.5ZM2.5 3.25C2.5 3.11216 2.61216 3 2.75 3H13.25C13.3878 3 13.5 3.11216 13.5 3.25V4.5C13.3459 4.5 3.13853 4.5 2.5 4.5V3.25ZM12.2959 14.5238C12.2832 14.7908 12.0638 15 11.7965 15H4.2035C3.93616 15 3.71678 14.7908 3.70409 14.5238L3.27437 5.5H12.7256L12.2959 14.5238Z" fill="#696969"/>
<path d="M8 14C8.27613 14 8.5 13.7761 8.5 13.5V7C8.5 6.72387 8.27613 6.5 8 6.5C7.72387 6.5 7.5 6.72387 7.5 7V13.5C7.5 13.7761 7.72384 14 8 14Z" fill="#696969"/>
<path d="M10.5 14C10.7761 14 11 13.7761 11 13.5V7C11 6.72387 10.7761 6.5 10.5 6.5C10.2239 6.5 10 6.72387 10 7V13.5C10 13.7761 10.2238 14 10.5 14Z" fill="#696969"/>
<path d="M5.5 14C5.77613 14 6 13.7761 6 13.5V7C6 6.72387 5.77613 6.5 5.5 6.5C5.22387 6.5 5 6.72387 5 7V13.5C5 13.7761 5.22384 14 5.5 14Z" fill="#696969"/>
</svg>
</i>
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

</script>

<style lang="scss" scoped>

</style>