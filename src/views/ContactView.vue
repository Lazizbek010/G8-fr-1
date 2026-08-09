<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-slate-800 mb-2">Favourite</h2>
        <p class="text-gray-500 text-sm max-w-xl mx-auto">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="property in favouriteProperties" 
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
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2372 8.62462V4.39349C17.2372 3.46067 16.4782 2.70174 15.5454 2.70174H3.45459C2.52177 2.70174 1.76284 3.46067 1.76284 4.39349V8.62462C0.74768 8.90565 0 9.8371 0 10.9404V14.1553C0 14.4668 0.252566 14.7194 0.564062 14.7194H1.76284V15.7341C1.76284 16.0456 2.01541 16.2982 2.32691 16.2982C2.6384 16.2982 2.89097 16.0456 2.89097 15.7341V14.7194H16.109V15.7341C16.109 16.0456 16.3616 16.2982 16.6731 16.2982C16.9846 16.2982 17.2372 16.0456 17.2372 15.7341V14.7194H18.4359C18.7474 14.7194 19 14.4668 19 14.1553V10.9404C19 9.8371 18.2523 8.90565 17.2372 8.62462ZM2.89097 4.39349C2.89097 4.08273 3.14383 3.82987 3.45459 3.82987H15.5455C15.8562 3.82987 16.1091 4.08273 16.1091 4.39349V8.53734H14.7874V7.4051C14.7874 6.42055 13.9864 5.61958 13.0019 5.61958H10.7215C10.2493 5.61958 9.81966 5.80412 9.50004 6.10453C9.18041 5.80416 8.75076 5.61958 8.27858 5.61958H5.99817C5.01362 5.61958 4.21266 6.42059 4.21266 7.4051V8.53734H2.89097V4.39349ZM13.6593 7.4051V8.53734H10.0641V7.4051C10.0641 7.04258 10.359 6.7477 10.7215 6.7477H13.0019C13.3644 6.7477 13.6593 7.04261 13.6593 7.4051ZM8.9359 7.4051V8.53734H5.34067V7.4051C5.34067 7.04258 5.63562 6.7477 5.99806 6.7477H8.27847C8.64099 6.7477 8.9359 7.04261 8.9359 7.4051ZM17.8719 13.5913H1.12812V10.9404C1.12812 10.2374 1.70005 9.66547 2.40309 9.66547H16.5969C17.2999 9.66547 17.8719 10.2374 17.8719 10.9404V13.5913Z" fill="#696969"/>
</svg>

                <span>{{ property.beds }} Beds</span>
              </div>
              <div class="flex flex-col items-center gap-1">
<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_8691)">
<path d="M18.7622 11.0558C18.7622 10.7426 18.5082 10.4886 18.195 10.4886H17.0597V2.75501C17.0597 1.23589 15.8238 0 14.3047 0C12.7856 0 11.5497 1.23589 11.5497 2.75501V3.78902C11.5497 4.10226 11.8037 4.35624 12.1169 4.35624C12.4301 4.35624 12.6841 4.10226 12.6841 3.78902V2.75501C12.6841 1.86141 13.4111 1.13444 14.3047 1.13444C15.1983 1.13444 15.9253 1.86141 15.9253 2.75501V10.4886H0.805499C0.492258 10.4886 0.238281 10.7426 0.238281 11.0558C0.238281 13.6158 1.8574 15.8044 4.12527 16.6522C3.68901 17.1108 3.41919 17.7397 3.41919 18.4328C3.41919 18.746 3.67317 19 3.98641 19C4.29965 19 4.55363 18.746 4.55363 18.4328C4.55363 17.6583 5.1446 17.0282 5.87105 17.0282C5.89773 17.0282 13.1028 17.0282 13.1294 17.0282C13.8559 17.0282 14.4469 17.6583 14.4469 18.4328C14.4469 18.746 14.7009 19 15.0141 19C15.3274 19 15.5813 18.746 15.5813 18.4328C15.5813 17.7397 15.3115 17.1108 14.8753 16.6522C17.1431 15.8044 18.7622 13.6158 18.7622 11.0558ZM12.7898 15.8938H6.21068C3.73481 15.8938 1.68741 14.0245 1.40578 11.6231H17.5947C17.3131 14.0245 15.2656 15.8938 12.7898 15.8938Z" fill="#696969"/>
<path d="M12.116 5.34033C11.8028 5.34033 11.5488 5.59431 11.5488 5.90755V6.39914C11.5488 6.71238 11.8028 6.96636 12.116 6.96636C12.4293 6.96636 12.6833 6.71238 12.6833 6.39914V5.90755C12.6832 5.59427 12.4293 5.34033 12.116 5.34033Z" fill="#696969"/>
<path d="M12.116 8.06348C11.8028 8.06348 11.5488 8.31745 11.5488 8.63069V9.12228C11.5488 9.43552 11.8028 9.6895 12.116 9.6895C12.4293 9.6895 12.6833 9.43552 12.6833 9.12228V8.63069C12.6832 8.31742 12.4293 8.06348 12.116 8.06348Z" fill="#696969"/>
</g>
<defs>
<clipPath id="clip0_0_8691">
<rect width="19" height="19" fill="white"/>
</clipPath>
</defs>
</svg>

                <span>{{ property.baths }} Baths</span>
              </div>
              <div class="flex flex-col items-center gap-1">
<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2733 7.61184L17.8592 7.17338L16.4058 3.25564C16.1581 2.59389 15.5248 2.15543 14.8184 2.15137H4.43739C3.73098 2.15137 3.09765 2.59389 2.85 3.25564L1.41688 7.12466L0.820086 7.67679C0.300427 8.11932 0 8.76889 0 9.45094V15.1591C0.00405983 16.0928 0.763248 16.8479 1.69701 16.8479H2.7688C3.70256 16.8479 4.46175 16.0928 4.46581 15.1591V14.3309H14.5342V15.1591C14.5382 16.0928 15.2974 16.8479 16.2312 16.8479H17.303C18.2368 16.8479 18.9959 16.0928 19 15.1591V9.30073C18.9959 8.66333 18.7361 8.05436 18.2733 7.61184ZM3.61325 3.53171C3.74316 3.18662 4.07201 2.96333 4.43739 2.96333H14.8224C15.1878 2.96333 15.5167 3.19068 15.6466 3.53171L16.9132 6.94197H15.9673C15.744 5.41953 14.3271 4.36803 12.8047 4.59538C11.5908 4.77402 10.6368 5.72808 10.4581 6.94197H2.34658L3.61325 3.53171ZM15.1391 6.94197H11.2782C11.5015 5.87423 12.5489 5.19218 13.6167 5.41547C14.3799 5.57786 14.9767 6.17466 15.1391 6.94197ZM3.65385 15.1591C3.64979 15.6462 3.25598 16.036 2.7688 16.036H1.69701C1.20983 16.036 0.816026 15.6462 0.811966 15.1591V14.0954C1.05556 14.2537 1.37628 14.3309 1.69701 14.3309H3.65385V15.1591ZM18.188 15.1591C18.184 15.6462 17.7902 16.036 17.303 16.036H16.2312C15.744 16.036 15.3502 15.6422 15.3462 15.1591V14.3309H17.303C17.6237 14.3309 17.9444 14.2537 18.188 14.0954V15.1591ZM17.303 13.5189H1.69701C1.21389 13.5229 0.816026 13.1373 0.811966 12.6501V9.45094C0.811966 9.00436 1.0109 8.57808 1.35192 8.28983C1.35598 8.28577 1.3641 8.27765 1.36816 8.27359L1.9203 7.75393H17.2949L17.6846 8.17209C17.6887 8.18021 17.7009 8.18427 17.7049 8.19239C18.0094 8.48064 18.184 8.88256 18.184 9.30073V12.6501H18.188C18.184 13.1332 17.7861 13.5229 17.303 13.5189Z" fill="#696969"/>
<path d="M5.35906 9.37842H2.31419C2.0909 9.37842 1.9082 9.56111 1.9082 9.7844V11.8955C1.9082 12.1188 2.0909 12.3015 2.31419 12.3015H5.35906C5.58235 12.3015 5.76504 12.1188 5.76504 11.8955V9.7844C5.76504 9.56111 5.58235 9.37842 5.35906 9.37842ZM4.95308 11.4895H2.72017V10.1904H4.95308V11.4895Z" fill="#696969"/>
<path d="M16.6862 9.37842H13.6413C13.418 9.37842 13.2354 9.56111 13.2354 9.7844V11.8955C13.2354 12.1188 13.418 12.3015 13.6413 12.3015H16.6862C16.9095 12.3015 17.0922 12.1188 17.0922 11.8955V9.7844C17.0922 9.56111 16.9095 9.37842 16.6862 9.37842ZM16.2802 11.4895H14.0473V10.1904H16.2802V11.4895Z" fill="#696969"/>
<path d="M11.4606 11.0835H7.5388C7.3155 11.0835 7.13281 11.2662 7.13281 11.4895C7.13281 11.7128 7.3155 11.8955 7.5388 11.8955H11.4606C11.6839 11.8955 11.8666 11.7128 11.8666 11.4895C11.8666 11.2662 11.6839 11.0835 11.4606 11.0835Z" fill="#696969"/>
<path d="M11.4606 9.82471H7.5388C7.3155 9.82471 7.13281 10.0074 7.13281 10.2307C7.13281 10.454 7.3155 10.6367 7.5388 10.6367H11.4606C11.6839 10.6367 11.8666 10.454 11.8666 10.2307C11.8666 10.0074 11.6839 9.82471 11.4606 9.82471Z" fill="#696969"/>
</svg>

                <span>{{ property.garage }} Garage</span>
              </div>
              <div class="flex flex-col items-center gap-1">
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1481 0.146667L0.146617 16.1481C-0.166826 16.4616 0.0555315 17 0.499447 17H16.5009C16.7765 17 16.9999 16.7766 16.9999 16.501V0.499531C16.9999 0.0562469 16.462 -0.167208 16.1481 0.146667ZM16.0019 16.002H1.70418L4.24202 13.4641L4.93711 14.1592C5.03454 14.2567 5.16226 14.3054 5.28994 14.3054C5.73053 14.3054 5.95804 13.7688 5.64277 13.4535L4.94769 12.7584L6.37108 11.335L7.06616 12.0301C7.1636 12.1276 7.29132 12.1763 7.41899 12.1763C7.85958 12.1763 8.0871 11.6397 7.77182 11.3244L7.07678 10.6294L8.50017 9.20596L9.19526 9.90104C9.29269 9.99848 9.42041 10.0472 9.54809 10.0472C9.98868 10.0472 10.2162 9.51058 9.90092 9.19531L9.20587 8.50026L10.6293 7.07686L11.3243 7.77195C11.4218 7.86939 11.5495 7.91809 11.6772 7.91809C12.1178 7.91809 12.3453 7.38149 12.03 7.06622L11.335 6.37117L12.7584 4.94777L13.4534 5.64285C13.5509 5.74029 13.6786 5.789 13.8063 5.789C14.2469 5.789 14.4744 5.2524 14.1591 4.93713L13.4641 4.24208L16.0019 1.70423V16.002H16.0019Z" fill="#696969"/>
<path d="M12.9209 8.39664L8.39662 12.921C8.08317 13.2344 8.30553 13.7728 8.74945 13.7728H13.2738C13.5493 13.7728 13.7728 13.5494 13.7728 13.2738V8.7495C13.7728 8.30622 13.2348 8.08276 12.9209 8.39664ZM12.7748 12.7748H9.95418L12.7748 9.9542V12.7748Z" fill="#696969"/>
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