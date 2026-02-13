<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  />

  <header
    class="{{ $headerTheme ?? 'default' }} w-full fixed top-0 left-0 z-50 transition-all duration-500"
    :class="{
      '-translate-y-full': isHidden,
    }"
  >
    <!-- TOP BAR - Always visible on all pages -->
    <div
      :class="topBarClasses"
      class="text-sm py-2 px-3 md:px-6 transition-all duration-500"
    >
      <div class="flex flex-wrap items-center justify-between gap-2">
        
        <!-- Contact Info: Compact on mobile -->
        <div class="flex items-center gap-2 sm:gap-4">
          <!-- Phone -->
          <div class="flex items-center gap-1.5">
            <a
              href="https://demulla.ras.yeastar.com/live_chat.v1.0.0.js?channelNumber=LC00000"
              class="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-lime-600 hover:bg-lime-700 text-white rounded-full shadow-md hover:scale-110 transition-transform"
              aria-label="Call Us"
            >
              <i class="fa-solid fa-phone text-xs sm:text-sm"></i>
            </a>
            <span class="text-xs sm:text-sm whitespace-nowrap hidden sm:inline">0709005000</span>
          </div>

          <!-- Location -->
          <div class="flex items-center gap-1.5">
            <a
              href="https://maps.google.com/?q=Demulla+Headquarters"
              target="_blank"
              class="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-lime-600 hover:bg-lime-700 text-white rounded-full shadow-md hover:scale-110 transition-transform"
              aria-label="Find Us"
            >
              <i class="fa-solid fa-location-dot text-xs sm:text-sm"></i>
            </a>
            <span class="text-xs sm:text-sm whitespace-nowrap hidden sm:inline">Kakamega</span>
          </div>
        </div>

        <!-- Social Media & Contact Button -->
        <div class="flex items-center gap-2">
          <!-- Social Icons - Desktop only -->
          <div class="hidden lg:flex items-center gap-2">
            <a
              href="https://www.facebook.com/Demulla17/"
              class="w-8 h-8 flex items-center justify-center bg-lime-700 hover:bg-[#3b5998] text-white rounded-sm transition"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.youtube.com/@Demulla"
              class="w-8 h-8 flex items-center justify-center bg-lime-700 hover:bg-[#1DA1F2] text-white rounded-sm transition"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/demulla"
              class="w-8 h-8 flex items-center justify-center bg-lime-700 hover:bg-[#0077B5] text-white rounded-sm transition"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.tiktok.com/@demulla.ke"
              class="w-8 h-8 flex items-center justify-center bg-lime-700 hover:bg-black text-white rounded-sm transition"
            >
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </div>

          <!-- Contact Button -->
          <a
            href="/contact"
            class="bg-white text-lime-600 px-3 py-1.5 md:px-4 md:py-2 rounded text-xs sm:text-sm font-semibold hover:bg-lime-700 hover:text-white transition whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>


    <!-- NAVIGATION - Minimal height on mobile -->
    <nav
      :class="[navBarClasses, 'justify-between px-4 md:px-8 py-3 md:py-4 flex items-center shadow-lg transition-all duration-500 backdrop-blur-md border-b border-white/20']"
    >
      <!-- LOGO -->
      <div class="flex items-center space-x-1 sm:space-x-2 max-w-[60%] md:max-w-none">
        <img src="/images/demu58.png" alt="Demulla Logo" class="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0" />
        <h1
          class="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-tight"
        >
          Your<span
            class="text-orange-400 ml-1"
          >
            Reliable Partners
          </span>
        </h1>
      </div>

      <!-- DESKTOP LINKS -->
      <ul class="hidden lg:flex items-center space-x-2 xl:space-x-3 font-semibold text-sm">
        <li>

          <a
            href="/"
          class="border border-transparent hover:border-orange-400 hover:bg-orange-400 hover:text-white px-4 py-2 rounded-md transition"
            >Home</a
          >

        </li>
        <li>
            <a
            href="/impact"
          class="border border-transparent hover:border-orange-400 hover:bg-orange-400 hover:text-white px-4 py-2 rounded-md transition"
            >Impact</a
          >
        </li>
        <li>
          <a href="/service"
            :class="isActive('service') ? 'bg-orange-400 text-white border-orange-400' : 'border-transparent hover:bg-orange-400 hover:text-white'"
            class="border px-4 py-2 rounded-md transition duration-300"
          >Services</a>
        </li>
        <li>
          <a href="/about"
            :class="isActive('about') ? 'bg-orange-400 text-white border-orange-400' : 'border-transparent hover:bg-orange-400 hover:text-white'"
            class="border px-4 py-2 rounded-md transition duration-300"
          >About Us</a>
        </li>
        <li>
          <a href="#"
            class="border border-transparent px-4 py-2 rounded-md transition duration-300 hover:bg-orange-400 hover:text-white"
          >Career</a>
        </li>
        <li>
          <a href="/news"
            :class="isActive('news') ? 'bg-orange-400 text-white border-orange-400' : 'border-transparent hover:bg-orange-400 hover:text-white'"
            class="border px-4 py-2 rounded-md transition duration-300"
          >News</a>
        </li>
        <li>
          <a href="/contact"
            :class="isActive('contact') ? 'bg-orange-400 text-white border-orange-400' : 'border-transparent hover:bg-orange-400 hover:text-white'"
            class="border px-4 py-2 rounded-md transition duration-300"
          >Contact</a>
        </li>
      </ul>

      <!-- MOBILE MENU BUTTON -->
      <button 
        @click="toggleMenu" 
        class="lg:hidden z-50 p-2 rounded-lg hover:bg-gray-100/10 transition-colors flex-shrink-0 text-white"
        aria-label="Toggle menu"
      >
        <i :class="menuOpen ? 'fa fa-times' : 'fa fa-bars'" class="text-xl sm:text-2xl transition-transform duration-300"></i>
      </button>
    </nav>

    <!-- MOBILE MENU -->
    <div
      v-show="menuOpen"
      class="fixed top-[100px] left-0 right-0 w-full bg-gradient-to-b from-lime-600 to-lime-700 text-white shadow-2xl z-[100] max-h-[80vh] overflow-y-auto lg:hidden"
      :style="{ display: menuOpen ? 'block' : 'none' }"
    >
      <nav class="px-4 py-4 space-y-1">
        <a href="/" @click="closeMenu" :class="isActive('home') ? 'bg-orange-400' : 'hover:bg-lime-800'" class="block px-4 py-3 rounded-lg transition-colors font-medium">Home</a>
        <a href="/impact" @click="closeMenu" :class="isActive('impact') ? 'bg-orange-400' : 'hover:bg-lime-800'" class="block px-4 py-3 rounded-lg transition-colors font-medium">Impact</a>
        <a href="/service" @click="closeMenu" :class="isActive('service') ? 'bg-orange-400' : 'hover:bg-lime-800'" class="block px-4 py-3 rounded-lg transition-colors font-medium">Services</a>
        <a href="/about" @click="closeMenu" :class="isActive('about') ? 'bg-orange-400' : 'hover:bg-lime-800'" class="block px-4 py-3 rounded-lg transition-colors font-medium">About Us</a>
        <a href="#" @click="closeMenu" class="block px-4 py-3 rounded-lg hover:bg-lime-800 transition-colors font-medium">Career</a>
        <a href="/news" @click="closeMenu" :class="isActive('news') ? 'bg-orange-400' : 'hover:bg-lime-800'" class="block px-4 py-3 rounded-lg transition-colors font-medium">News</a>
        <a href="/contact" @click="closeMenu" :class="isActive('contact') ? 'bg-orange-400' : 'hover:bg-lime-800'" class="block px-4 py-3 rounded-lg transition-colors font-medium">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const scrolledPastCarousel = ref(false);
const isHidden = ref(false);
const lastScrollY = ref(0);
const menuOpen = ref(false);
const currentPage = ref(window.page || 'home');

const isActive = (page) => currentPage.value === page;

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  // Prevent body scroll when menu is open
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  menuOpen.value = false;
  document.body.style.overflow = '';
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  const currentPage = window.page || 'home';

  // On home page, change navbar when scrolled past carousel
  if (currentPage === 'home') {
    const missionSection = document.getElementById("mission");
    if (missionSection) {
      const sectionTop = missionSection.offsetTop;
      scrolledPastCarousel.value = scrollY >= sectionTop - 80;
    } else {
      // If no mission section found, switch after 300px scroll
      scrolledPastCarousel.value = scrollY > 300;
    }
  } else {
    // Non-home pages always have the solid header
    scrolledPastCarousel.value = true;
  }

  // Show/hide navbar
  if (scrollY > lastScrollY.value && scrollY > 400) {
    isHidden.value = true
  } else {
    isHidden.value = false
  }

  lastScrollY.value = scrollY
}

onMounted(() => {
  // Set initial state for non-home pages
  if ((window.page || 'home') !== 'home') {
    scrolledPastCarousel.value = true;
  }
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const appDiv = document.getElementById('app');

const topBarClasses = computed(() => {
  return "bg-white text-black";
});

const navBarClasses = computed(() => {
  return "bg-gradient-to-r from-lime-700 to-lime-800 text-white shadow-lg";
});
</script>

<style scoped>
header {
  font-family: "Roboto", sans-serif;
}b 



/* Prevent horizontal overflow */
header {
  /* max-width: 100vw; */
  overflow-x: hidden;
}

/* Make sure icons don't shrink */
i {
  flex-shrink: 0;
}
</style>