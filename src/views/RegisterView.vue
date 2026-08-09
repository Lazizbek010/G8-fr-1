<template>
  <div class="flex min-h-[70vh] items-center justify-center bg-[#f3f3f3] px-4 py-12">
    <div class="w-full max-w-[480px] rounded-md border border-slate-200 bg-[#f7f7f7] px-7 py-6 shadow-sm">
      <h1 class="mb-6 text-center text-[22px] font-normal text-slate-800">Registration</h1>

      <form class="space-y-4">
        <div>
          <label for="name" class="mb-2 block text-[15px] text-slate-700">Full name</label>
          <input id="name" type="text" class="w-full border-0 border-b border-sky-500 bg-transparent pb-2 text-base text-slate-700 focus:outline-none focus:ring-0" />
        </div>

        <div>
          <label for="email" class="mb-2 block text-[15px] text-slate-700">Email</label>
          <input id="email" type="email" class="w-full border-0 border-b border-sky-500 bg-transparent pb-2 text-base text-slate-700 focus:outline-none focus:ring-0" />
        </div>

        <div>
          <label for="register-password" class="mb-2 block text-[15px] text-slate-700">Password</label>
          <input id="register-password" type="password" class="w-full border-0 border-b border-sky-500 bg-transparent pb-2 text-base text-slate-700 focus:outline-none focus:ring-0" />
        </div>

        <div>
          <label for="confirm-password" class="mb-2 block text-[15px] text-slate-700">Confirm password</label>
          <input id="confirm-password" type="password" class="w-full border-0 border-b border-sky-500 bg-transparent pb-2 text-base text-slate-700 focus:outline-none focus:ring-0" />
        </div>

        <button type="submit" class="mt-4 w-full rounded-md bg-blue-500 px-4 py-3 text-base font-medium text-white transition hover:bg-blue-600">
          Create account
        </button>

        <p class="text-center text-sm text-slate-600">
          Already have an account?
          <router-link to="/login" class="font-medium text-sky-600 hover:text-sky-700">Login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
</script>
