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
    <!-- TOP BAR - Better arrangement for mobile -->
   <div
  v-show="!scrolledPastCarousel && !isHidden"
  :class="topBarClasses"
  class="text-sm py-1 px-3 md:px-6 transition-all duration-500 min-h-[40px] md:min-h-auto"
>
  <div class="flex flex-col sm:flex-row items-center justify-between gap-2 md:gap-0">
    
    <!-- Contact Info: Horizontal on small screens -->
    <div class="flex items-center gap-4 flex-wrap sm:flex-nowrap flex-1">
      <!-- Phone -->
      <div class="flex items-center gap-2">
        <a
          href="tel:+254700000000"
          class="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-lime-600 hover:bg-lime-700 text-white rounded-full shadow-md hover:scale-90 transition transform animate-bounce"
          aria-label="Call Us"
        >
          <i class="fa-solid fa-phone"></i>
        </a>
        <span class="text-xs md:text-sm whitespace-nowrap">0709005000</span>
      </div>

      <!-- Location -->
      <div class="flex items-center gap-2">
        <a
          href="https://maps.google.com/?q=Demulla+Headquarters"
          target="_blank"
          class="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-lime-600 hover:bg-lime-700 text-white rounded-full shadow-md hover:scale-90 transition transform animate-bounce"
          aria-label="Find Us"
        >
          <i class="fa-solid fa-location-dot"></i>
        </a>
        <span class="text-xs md:text-sm whitespace-nowrap">Kakamega</span>
      </div>
    </div>

    <!-- Social Media & Contact Button -->
    <div class="flex items-center gap-2 md:gap-3 mt-1 sm:mt-0">
      <!-- Social Icons hidden on small screens -->
      <div class="hidden md:flex items-center gap-2">
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
          class="w-8 h-8 flex items-center justify-center bg-lime-700 hover:bg-[#E4405F] text-white rounded-sm transition"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <a href="https://www.tiktok.com/@demulla.ke"
        class="w-8 h-8 flex items-center justify-center bg-lime-700 hover:bg-black text-white rounded-sm">
      <i class="fa-brands fa-tiktok"></i>
      
      </a>

      <!-- Contact Button -->
      <button
        class="bg-white text-lime-600 px-2 py-1 md:px-3 md:py-1 rounded text-xs md:text-sm font-semibold hover:bg-lime-700 hover:text-white transition whitespace-nowrap"
      >
        Contact Us
      </button>
    </div>
  </div>
</div>


    <!-- NAVIGATION - Minimal height on mobile -->
    <nav
      :class="[navBarClasses, 'justify-between px-3 md:px-8 py-2 md:py-4 flex items-center shadow-lg transition-all duration-500 backdrop-blur-md min-h-[50px] md:min-h-auto']"
    >
      <!-- LOGO -->
      <div class="flex items-center space-x-2">
        <img src="#" alt="Demulla Logo" class="h-8 md:h-10 w-auto" />
        <h1
          :class="scrolledPastCarousel ? 'text-lime-700' : 'text-white'"
          class="text-base md:text-2xl font-bold whitespace-nowrap"
        >
          Your<span
            :class="scrolledPastCarousel ? 'text-gray-800' : 'text-orange-400'"
            class="ml-1"
          >
            Reliable Partners
          </span>
        </h1>
      </div>

      <!-- DESKTOP LINKS -->
      <ul class="hidden md:flex space-x-8 font-semibold">
        <li>
          <a
            href="/"
            class="border border-orange-300 bg-orange-400 text-white px-4 py-2 rounded-md transition duration-300"
            >Home</a
          >
        </li>

        <li>
          <a
            href="/impact"
            class="border border-orange-300 bg-orange-400 text-white px-4 py-2 rounded-md transition duration-300"
            >Impact</a
          >
        </li>
        <li>
          <a
            href="/service"
            class="border border-transparent hover:border-orange-400 hover:bg-orange-400 hover:text-white px-4 py-2 rounded-md transition"
            >services</a
          >
        </li>
        <li><a href="/about" class="hover:text-lime-600 transition">About Us</a></li>
        <li><a href="#" class="hover:text-lime-600 transition">Career</a></li>
        <li><a href="/news" class="hover:text-lime-600 transition">News</a></li>
        <li><a href="/contact" class="hover:text-lime-600 transition">Contact</a></li>
      </ul>

      <!-- MOBILE MENU BUTTON -->
      <button @click="toggleMenu" class="md:hidden text-lime-700">
        <i class="fa fa-bars text-xl"></i>
      </button>
    </nav>

    <!-- MOBILE MENU -->
    <div
      v-if="menuOpen"
      class="md:hidden bg-lime-600 text-white text-center py-2 space-y-2"
    >
      <a href="/" class="block hover:bg-lime-700 py-3">Home</a>
      <a href="/impact" class="block hover:bg-lime-700 py-3">Impact</a>
      <a href="/service" class="block hover:bg-lime-700 py-3">Services</a>
      <a href="/about" class="block hover:bg-lime-700 py-3">About Us</a>
      <a href="#" class="block hover:bg-lime-700 py-3">Career</a>
      <a href="/news" class="block hover:bg-lime-700 py-3">News</a>
      <a href="/contact" class="block hover:bg-lime-700 py-3">Contact</a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const scrolledPastCarousel = ref(false);
const isHidden = ref(false);
const lastScrollY = ref(0);
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  const missionSection = document.getElementById("mission");

  // Navbar color change
  if (missionSection) {
    const sectionTop = missionSection.offsetTop;
    scrolledPastCarousel.value = scrollY >= sectionTop - 80;
  }

  // Show/hide navbar
  if (scrollY > lastScrollY.value && scrollY > 400) {
    // Scrolling down beyond 400px (past mission)
    isHidden.value = true
  } else {
    // Scrolling up or near top
    isHidden.value = false
  }

  lastScrollY.value = scrollY
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const appDiv = document.getElementById('app');
const headerTheme = appDiv.dataset.theme;

const topBarClasses = computed(() => {
  if (headerTheme === 'light') return "bg-black text-white";
  if (headerTheme === 'dark') return "bg-black text-white";
  if (headerTheme === 'colored') return "bg-white text-lime-700";
  return "bg-white text-black";
});

const navBarClasses = computed(() => {
  if (headerTheme === 'light') return "bg-white text-lime-700 shadow";
  if (headerTheme === 'dark') return "bg-white text-lime-700 shadow";
  if (headerTheme === 'colored') return "bg-orange-400 text-white shadow";
  return "bg-transparent text-white";
});
</script>

<style scoped>
header {
  font-family: "Roboto", sans-serif;
}

/* Ensure proper touch targets on mobile */
@media (max-width: 640px) {
  a, button {
    min-height: 40px;
    min-width: 40px;
  }
  
  /* Compact text on mobile */
  .text-xs {
    font-size: 0.7rem;
    line-height: 1;
  }
  
  .mobile-menu a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Better spacing for top bar items */
  .top-bar-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* Prevent horizontal overflow */
header {
  max-width: 100vw;
  overflow-x: hidden;
}

/* Make sure icons don't shrink */
i {
  flex-shrink: 0;
}
</style>