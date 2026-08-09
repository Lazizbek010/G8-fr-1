<template>
  <div class="flex min-h-[70vh] items-center justify-center bg-[#f3f3f3] px-4 py-12">
    <div class="w-full max-w-[420px] rounded-md border border-slate-200 bg-[#f7f7f7] px-7 py-6 shadow-sm">
      <h1 class="mb-6 text-center text-[22px] font-normal text-slate-800">Sign in</h1>

      <form class="space-y-5">
        <div>
          <label for="login" class="mb-2 block text-[15px] text-slate-700">Login</label>
          <input
            id="login"
            type="text"
            value=""
            class="w-full border-0 border-b border-sky-500 bg-transparent pb-2 text-base text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-0"
          />
        </div>

        <div>
          <label for="password" class="mb-2 block text-[15px] text-slate-700">Password</label>
          <input
            id="password"
            type="password"
            class="w-full border-0 border-b border-sky-500 bg-transparent pb-2 text-base text-slate-700 focus:outline-none focus:ring-0"
          />
        </div>

        <div class="flex items-center justify-between pt-1 text-sm">
          <label class="flex items-center gap-2 text-slate-600">
            <input type="checkbox" class="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
            Remember me
          </label>

          <a href="#" class="text-sky-600 hover:text-sky-700">Forgot</a>
        </div>

        <button type="submit" class="mt-4 w-full rounded-md bg-blue-500 px-4 py-3 text-base font-medium text-white transition hover:bg-blue-600">
          Login
        </button>

        <p class="text-center text-sm text-slate-600">
          Don’t have an account?
          <router-link to="/register" class="font-medium text-sky-600 hover:text-sky-700">Register</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
</script>
