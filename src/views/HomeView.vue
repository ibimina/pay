<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'
const isMenuOpen = ref(false)
const windowWidth = ref(window.innerWidth)

window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth
})
console.log(windowWidth.value)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const toggleMenuText = computed(() => {
  return isMenuOpen.value ? 'Close' : 'Open'
})
</script>

<template>
  <main class="bg-color-gradient bg-no-repeat bg-cover">
    <header class="flex items-center font-Aeonik justify-between p-4 lg:justify-center lg:gap-8">
      <img src="/img/logo-dark.png" alt="eazipay logo" />
      <button
        @click="toggleMenu"
        :aria-label="toggleMenuText"
        class="w-5 h-5 bg-cover bg-no-repeat transition-all z-20 lg:hidden"
        :class="isMenuOpen ? 'bg-close-menu' : 'bg-open-menu'"
      >
        <span class="sr-only">{{ toggleMenuText }}</span>
      </button>
      <nav
        v-if="isMenuOpen || windowWidth > 1000"
        class="fixed left-0 top-0 right-0 bottom-0 w-full h-full transition-all bg-nav-bg lg:relative lg:w-auto lg:h-auto lg:bg-transparent"
      >
        <div
          class="bg-white fixed top-0 right-0 bottom-0 w-9/12 pt-4 px-3 md:w-6/12 lg:relative lg:w-auto lg:bg-transparent lg:flex lg:items-center lg:gap-20 lg:pt-0 lg:px-0 lg:justify-between"
        >
          <img class="mb-4 lg:hidden" src="/img/logo-dark.png" alt="eazipay logo" />
          <ul class="mb-8 lg:flex lg:mb-0 lg:items-center lg:gap-12">
            <li class="font-bold mb-2 lg:mb-0 lg:font-normal">Individual</li>
            <li class="font-bold mb-2 lg:mb-0 lg:font-normal">Business</li>
            <li class="font-bold mb-2 lg:mb-0 lg:font-normal">Pricing</li>
            <li class="font-bold mb-2 lg:mb-0 lg:font-normal">Set your payroll</li>
          </ul>
          <ul class="lg:flex lg:items-center lg:gap-6">
            <li
              class="font-bold mb-8 lg:mb-0 lg:font-normal lg:border-dark-green border lg:py-2 lg:px-8 rounded-3xl"
            >
              Login in
            </li>
            <li
              class="text-white bg-dark-green text-center p-2 rounded-3xl font-bold lg:font-normal lg:py-2 lg:px-8 shadow-register-sh"
            >
              Register
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <section class="relative pb-12 lg:pl-12 text-center px-4 mt-10 lg:flex lg:pr-0 lg:gap-8 lg:max-w-6xl ml-auto">
      <div class="max-w-lg">
        <h1 class="text-accent-black font-medium text-3xl mb-4 lg:text-6xl font-serif lg:text-left">
          Run your <span class="text-accent-green  font-medium">payroll </span>
          <span class="text-accent-brown font-medium">easily</span> in
          <span class="text-accent-red font-medium">seconds</span>
        </h1>
        <p class="text-accent-grey text-center lg:text-left mb-4 lg:text-2xl">
          We’ve built an all-inclusive simple solution for individual and businesses to manage
          staff, pay salaries, bills, and relevant taxes all at once.
        </p>
        <button
          class="text-white mt-8 bg-dark-green text-center block mx-auto p-2 rounded-3xl font-bold lg:font-normal lg:py-2 lg:px-8 shadow-register-sh"
        >
          Start Using Free, Forever
        </button>
        <div class="mt-4">
          <p class="mb-4">Download the Eazipay Pay</p>
          <div class="flex gap-4 items-center justify-center">
            <img
              class="h-16 shadow-app-sh rounded-lg"
              src="/img/google-play.png"
              alt="google play"
            />
            <img class="h-16 shadow-app-sh rounded-lg" src="/img/apple-store.png" alt="app store" />
          </div>
        </div>
      </div>
      <div class="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:w-6/12">
        <img class="" src="/img/hero-media-desktop.png" alt="phone" />
      </div>
    </section>
  </main>
</template>
