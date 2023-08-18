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
            <RouterLink to="/dashboard">  Login in</RouterLink>
             
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
    <section
      class="relative pb-12 lg:pl-12 text-center px-4 mt-10 lg:flex lg:pr-0 lg:gap-8 lg:max-w-6xl ml-auto"
    >
      <div class="max-w-lg">
        <h1 class="text-accent-black font-medium text-3xl mb-4 lg:text-6xl font-serif lg:text-left">
          Run your <span class="text-accent-green font-medium">payroll </span>
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
  <section class="py-20 bg-light-grey bg-wave-mobile bg-no-repeat bg-cover lg:bg-wave-desktop px-3">
    <div class="mb-8 text-center">
      <h2 class="font-bold mb-2 font-serif text-dark-green text-3xl">
        For Individuals and Businesses
      </h2>
      <p>Join 200+ businesses using Eazipay's easy solution.</p>
    </div>
    <div class="flex flex-col lg:flex-row my-8 gap-4 lg:gap-0 justify-center text-white relative">
      <article class="p-8 bg-dark-green lg:shadow-card-sh rounded-2xl text-left">
        <h3 class="font-bold font-serif mb-4 text-lg">Tamper-proof Payroll for Life</h3>
        <p class="font-normal mb-3 text-base">
          Your staff payroll history is kept in one place forever.
        </p>
        <p class="font-normal mb-3 text-base">No more excel sheet or manual records.</p>
        <p class="font-normal text-base">Download your payroll history anytime you need it.</p>
      </article>
      <article
        class="p-8 bg-dark-green lg:shadow-card-sh rounded-2xl text-left lg:absolute lg:top-0 lg:bottom-0 lg:left-1/4 lg:w-6/12"
      >
        <h3 class="font-bold font-serif mb-4 text-lg">All Payroll, Anytime Anywhere</h3>
        <p class="font-normal mb-3 text-base">
          Wherever you are, Eazipay has got you covered on ALL your Payroll tasks.
        </p>
        <p class="font-normal text-base">
          Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your
          compliances in one place and easily, in seconds!
        </p>
      </article>
      <article
        class="p-8 bg-dark-green lg:shadow-card-sh rounded-2xl text-left lg:relative lg:left-0"
      >
        <h3 class="font-bold font-serif mb-4 text-lg">Payroll in Seconds</h3>
        <p class="font-normal text-base mb-3">
          Never again will you spend more than 2 minutes on payroll.
        </p>
        <p class="font-normal text-base mb-3">
          Just click on your staff and bulk-pay them at once.
        </p>
        <p class="font-normal text-base">Payment is done permanently.</p>
      </article>
    </div>
    <p class="text-center max-w-lg mx-auto">
      We are happy to answer your queries. Please, reach us at
      <span class="text-accent-red">hello@myeazipay.com</span> and expect our response shortly
      after.
    </p>
  </section>
  <section class="max-w-4xl mx-auto px-2 py-20">
    <div class="text-center mb-6">
      <h3 class="font-bold mb-2 font-serif text-dark-green text-3xl">How Eazipay Works</h3>
      <p>Get started in 3 simple steps.</p>
    </div>
    <div class="flex flex-col lg:flex-row lg:justify-between">
      <div class="relative flex items-center justify-center">
        <div class="hidden lg:block absolute z-0 border border-dark-green circle">
          <div class="hidden lightgreen">
            <div class="hidden bg-dark-green darkgreen"></div>
          </div>
        </div>
        <div class="relative z-20 w-80">
          <img class="radius" src="/img/onboarding.gif" alt="onbaording image" />
        </div>
      </div>
      <div class="my-8">
        <div class="relative mb-6 lg:mb-14 py-4 px-2 lg:pl-14">
          <p class="mb-6 py-3 px-5 font-bold rounded-xl bg-dark-green text-white inline-block">1</p>
          <div>
            <p class="mb-2">Create your free account</p>
            <p>Click here t set up your Eazipay account</p>
          </div>
          <img class="hidden lg:block absolute top-7 left-0" src="/img/stepone.png" alt="" />
        </div>
        <div class="relative mb-6 lg:mb-20 pb-4 px-2 lg:pl-14">
          <p
            class="mb-6 py-3 z-50 px-5 font-bold rounded-xl bg-dark-green text-white max-w-max relative"
          >
            2
          </p>
          <div>
            <p class="mb-2">Create your free account</p>
            <p>Click here t set up your Eazipay account</p>
          </div>
          <img
            class="hidden lg:block absolute top-5 right-0 lg:-right-16"
            src="/img/nextstep.png"
            alt=""
          />
        </div>
        <div class="relative mb-12 px-2 lg:pl-14">
          <p class="mb-6 py-3 mr-4 px-5 font-bold rounded-xl bg-dark-green text-white max-w-max">
            3
          </p>
          <div>
            <p class="mb-2">Create your free account</p>
            <p>Click here t set up your Eazipay account</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-pink-peach bg-circle-pattern bg-no-repeat bg-cover px-4">
    <div class="lg:ml-10">
      <img src="/img/red-dot.png" alt="red dots" />
    </div>
    <div class="lg:flex lg:items-center lg:justify-center container">
      <div class="text-center mb-6 lg:text-left">
        <h4 class="font-bold mb-4 text-3xl">
          Free forever for you
          <span class="font-bold mb-4 text-3xl block md:inline-block text-accent-red">
            salary payments</span
          >
        </h4>

        <div class="mt-4">
          <p class="mb-4">Subscribe to the Eazilife today</p>
          <div class="flex gap-4 items-center">
            <img
              class="h-16 shadow-app-sh rounded-lg"
              src="/img/google-play.png"
              alt="google play"
            />
            <img class="h-16 shadow-app-sh rounded-lg" src="/img/apple-store.png" alt="app store" />
          </div>
        </div>
      </div>
      <img class="mx-auto imgheight" src="/img/free-forever.png" alt="" />
    </div>
  </section>
  <section class="relative bg-contact-pattern bg-no-repeat bg-cover py-12 px-4">
    <div class="hidden lg:block absolute top-2 left-0">
      <img src="/img/greendot.png" alt="red dots" />
    </div>
    <div class="lg:flex gap-4 lg:items-center lg:justify-center container">
      <div class="mb-3 text-center lg:text-left">
        <h5 class="mb-2 font-bold font-serif text-dark-green text-3xl">
          Get an Exclusive Demo of Eazipay
        </h5>
        <p>
          Our greatest priority is to put you and your business first. Let’s show you how we can
          help.
        </p>
      </div>
      <form class="bg-white shadow-app-sh p-4">
        <div class="text-center mb-3">
          <p>First things first</p>
          <p>We want to serve you better. Tell us a bit about yourself or company</p>
        </div>

        <div class="flex items-center justify-center gap-2 mb-6">
          <button class="bg-dark-green text-white rounded-2xl px-3 py-1">Individual</button>
          <button class="bg-gray-200 text-accent-grey rounded-2xl px-3 py-1">Company</button>
        </div>
        <input
          type="text"
          class="block p-2 mb-3 rounded-2xl border border-slate-300 w-full"
          placeholder="First name"
        />
        <input
          type="text"
          class="block p-2 mb-3 rounded-2xl border border-slate-300 w-full"
          placeholder="First name"
        />
        <input
          type="text"
          class="block p-2 mb-3 rounded-2xl border border-slate-300 w-full"
          placeholder="First name"
        />
        <input
          type="text"
          class="block p-2 mb-3 rounded-2xl border border-slate-300 w-full"
          placeholder="First name"
        />
        <input
          type="text"
          class="block p-2 mb-3 rounded-2xl border border-slate-300 w-full"
          placeholder="First name"
        />
        <input
          type="submit"
          class="block p-2 mb-3 rounded-2xl border border-slate-300 w-full text-center text-white bg-dark-green"
          value="Request demo"
        />
      </form>
    </div>
  </section>
  <footer class="px-4 container py-12">
    <div>
      <div class="flex flex-col lg:flex-row-reverse lg:justify-between gap-10" >
        <div class="lg:w-6/12 flex flex-col  justify-center gap-y-8 lg:flex-row lg:gap-10">
          <div class="lg:w-1/4 text-center lg:text-left">
            <h3 class="" >Products</h3>
            <ul class="" >
              <li ><a href="/individual" > Individual </a></li>
              <li ><a href="/business" >Businesses</a></li>
            </ul>
          </div>
          <div
            class="lg:w-1/4 text-center lg:text-left">
            <h3 class="" >Legal</h3>
            <ul class="footer-list" >
              <li >
                <a href="/privacy-policy" >Privacy Policy</a>
              </li>
              <li >
                <a href="/terms-of-use" > Terms of Use </a>
              </li>
            </ul>
          </div>
          <div
            class="lg:w-1/4 legal text-center lg:text-left">
            <h3 class="" >Resource</h3>
            <ul class="footer-list" >
              <li >
                <a href="/privacy-policy" >FAQS</a>
              </li>
              <li >
                <a href="/terms-of-use" > Blogs </a>
              </li>
               <li >
                <a href="/terms-of-use" >Career</a>
              </li>
               <li >
                <a href="/terms-of-use" >Customer Stories</a>
              </li>
            </ul>
          </div>
          <div class="lg:w-2/4 lg:block text-center lg:text-left" >
            <h3 class="" >Contact Us</h3>
            <ul class="grid gap-2 mb-6 footer-list" >
              <li >
                <a href="mailto:hi@myeazipay.com" >hi@myeazipay.com</a>
              </li>
              <li >
                <a href="tel:+234 913 476 6185" >+234 913 476 6185</a>
              </li>
            </ul>
            <div class="relative">
              <form class="bg-gray-500 rounded-2xl flex max-w-md mx-auto">
                <div class="flex-1" >
                  <input
                    type="text"
                    class="w-full bg-gray-500"
                    placeholder="Your email address"
                    required
                   
                  />
                </div>
                <button class="flex-shrink-0 px-2 py-2 bg-transparent">
                 <img src="/img/sendmessage.svg" alt="arrow" />
                   </button>
              </form>
        
            </div>
          </div>
        </div>
        <div class="text-center lg:flex-row lg:text-left lg:w-3/12 flex-shrink-0">
          <div class="mb-6" >
            <img class="mx-auto" src="/img/logo-dark.png" alt="eazipay logo" />
          </div>
          <p class="mb-2" >Copyright © 2023 Eazipay.</p>
          <p class="mb-6" >All rights reserved</p>
          <div class="social-links inline-flex gap-3 justify-center" >
            <a
              href="https://www.instagram.com/myeazipay"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              
              >
              <img src="/img/instagram.svg"/></a
            ><a
              href="https://twitter.com/myeazipay"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              
              > <img src="/img/twitter.svg"/></a
            ><a
              href="https://www.linkedin.com/company/myeazipay"
              title="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              
              > <img src="/img/linkedin.svg"/></a
            ><a
              href="https://web.facebook.com/myeazipay"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link">
             <img src="/img/facebook.svg"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@media (min-width: 60rem) {
  .circle {
    background: #f0f7eb;
    width: 500px;
    height: 500px;
    border-radius: 100%;
    display: grid;
    place-items: center;
  }
  .lightgreen {
    background: #d9ebcd;
    width: 85%;
    height: 90%;
    border-radius: 100%;
    display: grid;
    place-items: center;
  }
  .darkgreen {
    background-color: #11453b;
    border-radius: 100%;
    width: 90%;
    height: 90%;
    display: grid;
    place-items: center;
  }
}
.radius {
  border-radius: 64px;
}
.imgheight {
  max-height: 500px;
}
.container {
  max-width: 1000px;
  margin: auto;
}
</style>
