<template>

<footer class="bg-black text-white font-roboto border-t border-gray-800 p-6 sm:p-8 md:p-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">

      <!-- Brand -->
      <div>
        <h2 class="text-lg sm:text-xl font-semibold text-lime-600 mb-3 sm:mb-4">
          Demulla Your Reliable Partner
        </h2>
        <p class="text-sm text-gray-400 leading-relaxed">
          Providing responsible financial solutions through data-driven
          lending and long-term customer relationships.
        </p>
      </div>

      <!-- Company -->
      <div>
        <h3 class="text-sm font-semibold text-lime-600 uppercase tracking-wide mb-3 sm:mb-4">
          Company
        </h3>
        <ul class="space-y-2 sm:space-y-3 text-sm text-gray-300">
          <li><a href="/about" class="hover:text-white transition">About Us</a></li>
          <li><a href="#" class="hover:text-white transition">Careers</a></li>
          <li><a href="/news" class="hover:text-white transition">News & Insights</a></li>
          <li><a href="/contact" class="hover:text-white transition">Contact</a></li>
        </ul>
      </div>

      <!-- Services -->
      <div>
        <h3 class="text-sm font-semibold text-lime-600 uppercase tracking-wide mb-3 sm:mb-4">
          Services
        </h3>
        <ul class="space-y-2 sm:space-y-3 text-sm text-gray-300">
          <li><a href="/service" class="hover:text-white transition">Personal Loans</a></li>
          <li><a href="/service" class="hover:text-white transition">Business Financing</a></li>
          <li><a href="/service" class="hover:text-white transition">Credit Assessment</a></li>
          <li><a href="/service" class="hover:text-white transition">Risk Analytics</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-sm font-semibold text-lime-600 uppercase tracking-wide mb-3 sm:mb-4">
          Contact
        </h3>
        <ul class="space-y-2 sm:space-y-3 text-sm text-gray-300">
          <li class="flex items-start sm:items-center gap-2 sm:gap-3">
            <i class="fas fa-envelope text-lime-500 mt-1 sm:mt-0 flex-shrink-0"></i>
            <span class="break-words">customer@demulla.co.ke</span>
          </li>
          <li class="flex items-center gap-2 sm:gap-3">
            <i class="fas fa-phone text-lime-500 flex-shrink-0"></i>
            <span>+254 709 005 000</span>
          </li>
          <li class="flex items-start sm:items-center gap-2 sm:gap-3">
            <i class="fas fa-map-marker-alt text-lime-500 mt-1 sm:mt-0 flex-shrink-0"></i>
            <span>Kakamega, Kenya</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom -->
    <div class="border-t border-gray-800 py-4 sm:py-5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-gray-500 gap-4">
        <span class="text-center md:text-left">
          © {{ new Date().getFullYear() }} Demulla MicroFinance. All rights reserved.
        </span>

        <!-- Social -->
        <div class="flex space-x-4 sm:space-x-5">
          <a href="https://www.linkedin.com/company/demulla" class="text-lime-500 hover:text-lime-400 transition" aria-label="LinkedIn">
            <i class="fab fa-linkedin text-lg sm:text-xl"></i>
          </a>
          <a href="https://www.facebook.com/Demulla17/" class="text-lime-500 hover:text-lime-400 transition" aria-label="Facebook">
            <i class="fab fa-facebook text-lg sm:text-xl"></i>
          </a>
          <a href="https://www.youtube.com/@Demulla" class="text-lime-500 hover:text-lime-400 transition" aria-label="YouTube">
            <i class="fab fa-youtube text-lg sm:text-xl"></i>
          </a>
          <a href="https://www.tiktok.com/@demulla.ke" class="text-lime-500 hover:text-lime-400 transition" aria-label="TikTok">
            <i class="fab fa-tiktok text-lg sm:text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
    


</script>
