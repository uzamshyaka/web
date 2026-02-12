<template>
  <div>
  <!-- Carousel Section -->
  <section id="carousel" class="relative font-roboto overflow-hidden">
    <!-- Main Carousel Container -->
    <div class="slider-container relative w-full">
      <!-- Slider -->
      <div 
        class="slider flex transition-transform duration-500 ease-out h-full"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >

        <!-- Slide 1 -->
        <div class="w-full h-full flex-shrink-0 relative">
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/70 to-orange-900/70 z-10"></div>
          <img src="/images/demu.jpg" alt="Slide 1" class="absolute inset-0 w-full h-full object-cover object-center"/>
          
          <!-- Text slightly higher -->
          <div class="relative z-20 h-full flex items-center md:items-start justify-center px-4 md:pt-32 lg:pt-40">
            <div class="max-w-7xl mx-auto w-full">
              <div class="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                <div class="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-orange-500/30 border border-orange-400/40 mb-4 sm:mb-6 md:mb-8">
                  <span class="w-2 h-2 bg-orange-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  <span class="text-xs sm:text-sm font-semibold text-orange-200">Innovation</span>
                </div>
                <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-white">
                  From Malaba to Africa:
                  <span class="text-lime-400 block mt-2 sm:mt-4">Transforming MSMEs</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="w-full h-full flex-shrink-0 relative">
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/70 to-lime-600/70 z-10"></div>
          <img src="/images/demu1.jpg" alt="Slide 2" class="absolute inset-0 w-full h-full object-cover object-center"/>
          <div class="relative z-20 h-full flex items-center md:items-start justify-center px-4 md:pt-32 lg:pt-40">
            <div class="max-w-7xl mx-auto w-full">
              <div class="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                <div class="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-lime-500/30 border border-lime-400/40 mb-4 sm:mb-6 md:mb-8">
                  <span class="w-2 h-2 bg-lime-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  <span class="text-xs sm:text-sm font-semibold text-lime-200">Honesty</span>
                </div>
                <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-white">
                  Empowering Growth,
                  <span class="text-lime-400 block mt-2 sm:mt-4">Driving Impact</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="w-full h-full flex-shrink-0 relative">
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/70 to-lime-600/50 z-10"></div>
          <img src="/images/demu15.jpeg" alt="Slide 3" class="absolute inset-0 w-full h-full object-cover object-center"/>
          <div class="relative z-20 h-full flex items-center md:items-start justify-center px-4 md:pt-32 lg:pt-40">
            <div class="max-w-7xl mx-auto w-full">
              <div class="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                <div class="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-lime-500/30 border border-lime-400/40 mb-4 sm:mb-6 md:mb-8">
                  <span class="w-2 h-2 bg-lime-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  <span class="text-xs sm:text-sm font-semibold text-lime-200">Team Work</span>
                </div>
                <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-white">
                  48 Branches. 56,000+ MSMEs.
                  <span class="text-lime-400 block mt-2 sm:mt-4">One Goal: Transformation</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 4 -->
        <div class="w-full h-full flex-shrink-0 relative">
          <div class="absolute inset-0 bg-gradient-to-r  from-black/60 via-black/70 to-orange-900/90 z-10"></div>
          <img src="/images/demu2.jpg" alt="Slide 4" class="absolute inset-0 w-full h-full object-cover object-center"/>
          <div class="relative z-20 h-full flex items-center md:items-start justify-center px-4 md:pt-32 lg:pt-40">
            <div class="max-w-7xl mx-auto w-full">
              <div class="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                <div class="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-orange-500/30 border border-orange-400/40 mb-4 sm:mb-6 md:mb-8">
                  <span class="w-2 h-2 bg-orange-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  <span class="text-xs sm:text-sm font-semibold text-orange-200">Technology</span>
                </div>
                <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-white">
                  Fueling Innovation
                  <span class="text-orange-400 block mt-2 sm:mt-4">That Expands Access</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 5 -->
        <div class="w-full h-full flex-shrink-0 relative">
          <div class="absolute inset-0 bg-gradient-to-r  from-black/60 via-black/70 to-orange-900/90 z-10"></div>
          <img src="/images/demu14.jpeg" alt="Slide 5" class="absolute inset-0 w-full h-full object-cover object-center"/>
          <div class="relative z-20 h-full flex items-center md:items-start justify-center px-4 md:pt-32 lg:pt-40">
            <div class="max-w-7xl mx-auto w-full">
              <div class="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                <div class="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-lime-500/30 border border-lime-400/40 mb-4 sm:mb-6 md:mb-8">
                  <span class="w-2 h-2 bg-lime-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  <span class="text-xs sm:text-sm font-semibold text-lime-200">Empowerment</span>
                </div>
                <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-white">
                  Empowering Communities
                  <span class="text-lime-400 block mt-2 sm:mt-4">Through Digital Finance</span>
                </h1>
                
  
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Navigation Arrows -->
      <button @click="prevSlide" class="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center z-30 border border-white/30 hover:border-white/50 transition-all duration-300">
        <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button @click="nextSlide" class="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center z-30 border border-white/30 hover:border-white/50 transition-all duration-300">
        <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      <!-- Progress Bar -->
      <div class="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-30 w-48 sm:w-56 md:w-64">
        <div class="bg-white/30 rounded-full h-1 sm:h-1.5">
          <div class="bg-white h-1 sm:h-1.5 rounded-full transition-all duration-300 ease-out" :style="{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }"></div>
        </div>
      </div>

      <!-- Slide Dots (hidden on small screens) -->
      <div class="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-3 md:gap-4 z-30 hidden md:flex">
        <div v-for="(slide, index) in totalSlides" :key="index" @click="goToSlide(index)" class="cursor-pointer flex flex-col items-center">
          <div :class="currentSlide === index ? 'w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-lime-400 scale-125' : 'w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white/60'"></div>
          <span :class="currentSlide === index ? 'text-lime-400 text-xs mt-2' : 'text-white/60 text-xs mt-2'">Slide {{ index + 1 }}</span>
        </div>
      </div>

    </div>
  </section>

<!-- Floating "Who We Are" Section - OUTSIDE the carousel section -->
<div class="relative z-40 -mt-16 sm:-mt-24 md:-mt-40 lg:-mt-48 px-4 md:px-6 lg:px-8 pb-8 sm:pb-12">
  <div class="max-w-7xl mx-auto">
    <div class="bg-lime-600 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 transition-all duration-500">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        
        <!-- Left Column -->
        <div class="space-y-6 lg:space-y-8">
          <div>
            <div class="inline-flex items-center px-5 py-2 rounded-full bg-orange-500/30 border border-orange-400/40 mb-4">
              <span class="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
              <span class="text-sm font-semibold text-orange-200">Our Story</span>
            </div>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Born in <span class="text-orange-400">Malaba.</span>
              <span class="block">Built for <span class="text-white">Africa</span></span>
            </h2>
          </div>
          <p class="text-white/90 text-lg lg:text-xl leading-relaxed">
            Founded in the bustling border town of Malaba, where informal commerce thrives but financial access was limited, we aim to empower every MSME with the tools to grow.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#" class="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              Learn Our Story
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-full transition-all duration-300">
              Watch Video
            </a>
          </div>
        </div>

        <!-- Right Column (Simplified Design) -->
        <div class="space-y-6 lg:space-y-8">
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 flex flex-col gap-6">
            <!-- Mission -->
            <div class="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/30 flex items-center justify-center">
                <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl lg:text-2xl font-bold text-white">Mission</h3>
                <p class="text-white/90 text-base lg:text-lg">Empowering MSMEs through innovative financial solutions to foster growth and sustainability.</p>
              </div>
            </div>

            <!-- Vision -->
            <div class="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-lime-500/30 flex items-center justify-center">
                <svg class="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl lg:text-2xl font-bold text-white">Vision</h3>
                <p class="text-white/90 text-base lg:text-lg">To be Africa’s leading force in MSME transformation, enabling sustainable economic growth.</p>
              </div>
            </div>

            <!-- Goal -->
            <div class="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/30 flex items-center justify-center">
                <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl lg:text-2xl font-bold text-white">Goal</h3>
                <p class="text-white/90 text-base lg:text-lg">Ensure no entrepreneur faces unfair financial barriers, creating a thriving ecosystem for all.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</div>

  </div>
</template>

<script>


export default {
  name: 'ProfessionalSlider',
  data() {
    return {
      currentSlide: 0,
      totalSlides: 5,
      autoPlayInterval: null,
      intervalDuration: 6000,
    };
  },
  mounted() { this.startAutoPlay(); },
  beforeUnmount() { this.stopAutoPlay(); },
  methods: {
    nextSlide() { this.currentSlide = (this.currentSlide + 1) % this.totalSlides; },
    prevSlide() { this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides; },
    goToSlide(index) { this.currentSlide = index; },
    startAutoPlay() { this.autoPlayInterval = setInterval(this.nextSlide, this.intervalDuration); },
    stopAutoPlay() { if(this.autoPlayInterval) clearInterval(this.autoPlayInterval); }
  }
};
</script>

<style scoped>
.slider-container { height: 100vh; min-height: 600px; max-height: 900px; }

@media (max-width: 768px) {
  .slider-container { height: 55vh; min-height: 350px; max-height: 500px; }
}

@media (max-width: 640px) {
  .slider-container { height: 50vh; min-height: 300px; max-height: 450px; }
}
</style>
