<template>
  <header class="bg-[#0b3358] text-white shadow-md">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-8">
      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-full borderbg-white/10">
          <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.32205 17.7038V10.4231L15.1946 5.96333C17.8217 7.44993 20.443 8.93653 23.0672 10.4231V21.6982H8.94887H1.63392C1.36661 21.1001 1.09356 20.5106 0.872243 19.8984C-0.036018 17.385 -0.234341 14.6827 0.274401 12.0846C0.826255 9.25247 2.22026 6.55289 4.45068 4.36671C7.41977 1.45557 11.3086 0 15.1946 0C19.0863 0 22.9752 1.45557 25.9385 4.36671C28.9047 7.28068 30.3879 11.0973 30.3879 14.9111C30.3879 18.7278 28.9047 22.5473 25.9385 25.4556L15.1946 36L4.45068 25.4584C3.99655 25.0127 3.56541 24.5331 3.17164 24.0339H6.35918L15.1946 32.708L24.2628 23.8082C26.7634 21.354 28.0166 18.1298 28.0166 14.9111C28.0166 11.6925 26.7634 8.47109 24.2628 6.0141C21.7594 3.5543 18.4741 2.32722 15.1946 2.32722C11.9151 2.32722 8.6327 3.55712 6.12924 6.01128C4.24373 7.86178 3.07104 10.1354 2.60541 12.5162C2.15703 14.7955 2.35823 17.1678 3.20038 19.3625H20.693V11.7602C18.8564 10.7193 17.0255 9.68124 15.1946 8.64316L9.69905 11.7602V17.7094H7.32205V17.7038Z" fill="white"/>
            </svg>

        </div>
        <span class="text-lg font-semibold tracking-wide">Houzing</span>
      </div>

      <nav class="hidden items-center gap-8 text-sm md:flex">
        <router-link to="/" class="transition hover:text-sky-300">Home</router-link>
        <router-link to="/properties" class="transition hover:text-sky-300">Properties</router-link>
        <router-link to="/contact" class="transition hover:text-sky-300">Contacts</router-link>
      </nav>

      <button class="rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/20">
        Login
      </button>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
router-link {
  text-decoration: none;
}
</style>