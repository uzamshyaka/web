<template>
<!-- HERO SECTION -->
<section class="relative overflow-hidden bg-gradient-to-br from-orange-600 via-lime-600 to-lime-700 text-gray-900">

  <!-- Soft background blur blobs -->
  <div class="absolute -top-32 -left-32 w-[500px] h-[500px] bg-lime-200 rounded-full blur-3xl opacity-40"></div>
  <div class="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-lime-100 rounded-full blur-3xl opacity-40"></div>

  <div class="relative max-w-7xl mx-auto px-6 pt-24 pb-32">

    <!-- Badge -->
    <div class="flex justify-center">
      <span class="bg-white/60 backdrop-blur-md text-lime-700 text-sm px-4 py-1 rounded-full font-medium shadow-sm">
        Supporting the People Behind Financial Excellence
      </span>
    </div>

    <!-- Heading -->
    <h1 class="mt-8 text-center text-5xl md:text-6xl font-bold leading-tight tracking-tight">
      Building Financial Experiences 
      <span class="text-white">People Trust</span>
    </h1>

    <!-- Subtext -->
    <p class="mt-6 max-w-2xl mx-auto text-center text-lg text-gray-800/80">
      We support finance teams to build, scale, and deliver impactful financial services trusted across 47+ counties.
    </p>

    <!-- CTA -->
    <div class="mt-10 flex justify-center gap-4">
      <button class="bg-orange-400 text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
        Get Started
      </button>

      <button class="bg-white text-orange-700 px-6 py-3 rounded-xl font-medium shadow hover:scale-105 transition">
        Learn More
      </button>
    </div>

    <!-- Stats Grid -->
    <div class="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[20rem]">

      <!-- Story Card -->
      <div class="relative rounded-3xl overflow-hidden group shadow-lg">

        <img
          src="/images/demu45.jpg"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative z-10 h-full flex flex-col justify-between p-8 text-white">
          <p class="text-sm">
            A multicultural team bringing diverse thinking into every solution.
          </p>

          <div>
            <h2 class="text-3xl font-bold">47+</h2>
            <p class="text-white/90">Counties represented</p>
          </div>
        </div>
      </div>

      <!-- Main Visual -->
      <div class="md:col-span-2 rounded-3xl overflow-hidden shadow-xl group">
        <img
          src="/images/demu3.jpg"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <!-- Trust Card -->
      <div class="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-xl">

        <div>
          <h2 class="text-4xl font-bold text-lime-600">3000+</h2>
          <p class="text-gray-600">Trusted Clients</p>
        </div>

        <p class="text-sm text-gray-500 mt-4">
          Our platform powers teams across 49 counties continuously improving through real feedback.
        </p>
      </div>

    </div>

  </div>
</section>

<section class="relative bg-[#f8fafc] py-28 overflow-hidden">

  <!-- TITLE -->
  <div class="text-center max-w-3xl mx-auto mb-24">

    <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
      What <span class="text-lime-600">Defines Us</span>
    </h2>

    <p class="text-gray-500 text-lg leading-relaxed">
      Our work is shaped by the people we serve, the communities we empower,
      and the culture we build together. These pillars guide how we create
      opportunities and lasting partnerships.
    </p>

  </div>


 <div class="relative w-[500px] h-[500px] mx-auto">

  <!-- CONNECTORS: Use SVG curves for nicer look -->
  <svg class="absolute inset-0 w-full h-full">
    <path d="M250,250 Q250,150 250,60" stroke="#84cc16" stroke-width="3" fill="none" />
    <path d="M250,250 Q350,120 440,160" stroke="#84cc16" stroke-width="3" fill="none" />
    <path d="M250,250 Q150,120 60,160" stroke="#84cc16" stroke-width="3" fill="none" />
    <path d="M250,250 Q370,300 420,360" stroke="#84cc16" stroke-width="3" fill="none" />
    <path d="M250,250 Q130,300 80,360" stroke="#84cc16" stroke-width="3" fill="none" />
  </svg>

  <!-- CENTER CIRCLE -->
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
    <img src="/images/demu10.jpg" class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-black/40 flex items-center justify-center
      text-white font-bold text-lg text-center px-4">
      What Defines Us
    </div>
  </div>

  <!-- NODE: Top -->
  <div class="node absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center group">
    <img src="/images/dem.jpg" class="w-16 h-16 rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-110">
    <p class="mt-2 text-sm font-semibold">Customers</p>
  </div>

  <!-- NODE: Right -->
  <div class="node absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center group">
    <img src="/images/demu33.jpg" class="w-16 h-16 rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-110">
    <p class="mt-2 text-sm font-semibold">Communities</p>
  </div>

  <!-- NODE: Left -->
  <div class="node absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center group">
    <img src="/images/demu31.jpg" class="w-16 h-16 rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-110">
    <p class="mt-2 text-sm font-semibold">Our People</p>
  </div>

  <!-- NODE: Bottom Right -->
  <div class="node absolute right-12 bottom-0 flex flex-col items-center group">
    <img src="/images/demu36.jpg" class="w-16 h-16 rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-110">
    <p class="mt-2 text-sm font-semibold">Culture</p>
  </div>

  <!-- NODE: Bottom Left -->
  <div class="node absolute left-12 bottom-0 flex flex-col items-center group">
    <img src="/images/demu38.jpg" class="w-16 h-16 rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-110">
    <p class="mt-2 text-sm font-semibold">Trust</p>
  </div>

</div>

</section>




      

      <!-- CORE VALUES: Introduction + value cards -->
      <section class="mt-32 font-roboto">
        <!-- Values intro -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-lime-600 font-bold text-sm uppercase tracking-[0.3em]">Our foundation</span>
          <h3 class="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">Core values that guide our capital</h3>
          <p class="text-lg text-grey-600 leading-relaxed">
            We invest where values align. Every partnership reflects these principles.
          </p>
        </div>

        <!-- Values grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Value 1: Integrity -->
          <div class="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/60 hover:border-lime-600/20">
            <div class="w-14 h-14 bg-lime-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span class="text-3xl text-lime-700">⚖️</span>
            </div>
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Integrity</h4>
            <p class="text-slate-600 leading-relaxed">We uphold the highest standards of honesty and accountability in our lending practices. Our customers trust us to be transparent, fair, and responsible in every financial decision we make..</p>
          </div>

          <!-- Value 2: Accountability -->
          <div class="group bg-orange-400 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/60 hover:border-lime-600/20">
            <div class="w-14 h-14 bg-lime-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span class="text-3xl text-lime-700">📊</span>
            </div>
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Accountability</h4>
            <p class="text-slate-600 leading-relaxed">We take responsibility for our actions and decisions. We are committed to delivering on our promises and ensuring our customers receive reliable and trustworthy financial services..</p>
          </div>

          <!-- Value 3: Teamwork-->
          <div class="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/60 hover:border-lime-600/20">
            <div class="w-14 h-14 bg-lime-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span class="text-3xl text-lime-700">⏳</span>
            </div>
            <h4 class="text-xl font-semibold text-slate-900 mb-3">TeamWork</h4>
            <p class="text-slate-600 leading-relaxed">We collaborate across teams to deliver reliable and efficient lending services. By working together, 
              we ensure our customers receive the best support and solutions..</p>
          </div>

          <!-- Value 4: Innovation -->
          <div class="group bg-orange-400 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/60 hover:border-lime-600/20">
            <div class="w-14 h-14 bg-lime-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span class="text-3xl text-lime-700">🤝</span>
            </div>
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Innovation</h4>
            <p class="text-slate-600 leading-relaxed">We embrace new ideas and technologies to improve our lending services. By thinking creatively, 
              we deliver smarter and more efficient solutions for our customers..</p>
          </div>
        </div>
    
  </section>

<section class="py-24 bg-gray-50 mt-10">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <!-- Title -->
      <span class="text-orange-400 font-semibold tracking-widest text-sm">OUR STORY</span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
        Our <span class="text-lime-600">Journey</span>
      </h2>
      <p class="text-gray-500 text-base md:text-lg mb-12">
        From humble beginnings to transforming communities through financial empowerment.
      </p>

      <!-- Carousel -->
      <div class="relative w-full max-w-md mx-auto">
        <transition name="fade-slide" mode="out-in">
          <div
            v-if="slides[currentIndex]"
            :key="currentIndex"
            class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <!-- Year -->
            <div class="text-lime-600 font-bold text-2xl mb-4 animate-pulse">
              {{ slides[currentIndex].year }}
            </div>

            <!-- Image -->
            <img
              :src="slides[currentIndex].image"
              class="rounded-xl w-full h-48 object-cover mb-4"
              alt="Slide image"
            />

            <!-- Description -->
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                {{ slides[currentIndex].title }}
              </h3>
              <p class="text-gray-600 text-sm">{{ slides[currentIndex].text }}</p>
            </div>
          </div>
        </transition>

       
      </div>
    </div>
  </section>







<div class="relative  flex bg-gray-50 justify-center">

  <!-- glow background -->
  <div class="absolute -bottom-5 w-[500px] h-[200px] bg-lime-400/20 blur-3xl rounded-full"></div>

  <!-- glass card -->
  <div class="relative bg-white/40 backdrop-blur-xl border border-white/40
              shadow-2xl rounded-2xl px-10 py-10 max-w-4xl w-full">

    <!-- title -->
    <div class="text-center mb-8">
      <h3 class="text-2xl font-bold text-gray-800">
        Empowering Financial Growth
      </h3>

      <p class="text-gray-600 mt-2">
        Delivering innovative financial services that transform communities
        and empower businesses to thrive.
      </p>
    </div>

    <!-- statistics -->
    <div class="grid grid-cols-3 gap-8 text-center mb-8">

      <div>
        <h4 class="text-3xl font-bold text-lime-600">10K+</h4>
        <p class="text-gray-600 text-sm">Clients Served</p>
      </div>

      <div>
        <h4 class="text-3xl font-bold text-lime-600">50M+</h4>
        <p class="text-gray-600 text-sm">Loans Disbursed</p>
      </div>

      <div>
        <h4 class="text-3xl font-bold text-lime-600">15+</h4>
        <p class="text-gray-600 text-sm">Years Experience</p>
      </div>

    </div>

    <!-- avatars -->
    <div class="flex items-center justify-between flex-wrap gap-6">

      <div class="flex items-center gap-4">

        <div class="flex -space-x-3">
          <img src="/images/demu40.jpg" class="w-10 h-10 rounded-full border-2 border-white">
          <img src="/images/demu40.jpg" class="w-10 h-10 rounded-full border-2 border-white">
          <img src="/images/demu40.jpg" class="w-10 h-10 rounded-full border-2 border-white">
        </div>

        <span class="text-gray-600 text-sm">
          Trusted by thousands of customers
        </span>

      </div>

      <button class="bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-lg font-semibold transition">
        Learn More
      </button>

    </div>

  </div>

</div>
    
 




<section class="bg-gray-50 py-24">
    <div class="max-w-7xl mx-auto px-6">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div
          v-for="member in team"
          :key="member.name"
          class="text-left"
        >
          <!-- Image -->
          <div class="overflow-hidden rounded-xl w-56 aspect-[3/4]">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover grayscale"
            />
          </div>

          <!-- Name -->
          <h3 class="mt-5 text-xl font-semibold text-teal-900">
            {{ member.name }}
          </h3>

          <!-- Role -->
          <p class="text-gray-500 text-sm mt-1 leading-relaxed">
            {{ member.role }}
          </p>
        </div>

      </div>
    </div>
  </section>



  <section
    class="relative h-[720px] flex items-center justify-center overflow-hidden"
  >
    <!-- Background Image -->
    <img
      src="/images/demu33.jpg"
      class="absolute inset-0 w-full h-full object-cover"
      alt="background"
    />

    <!-- Green Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-lime-900/80 via-lime-800/70 to-teal-900/90"></div>

    <!-- Content Card -->
    <div
      class="relative max-w-lg p-8 rounded-xl  justify-center bg-white/10 backdrop-blur-md shadow-xl text-white"
    >
      <h2 class="text-3xl text-center font-bold mb-4">
        Ready to Access the Financing You Need?
      </h2>

      <p class="text-lg text-gray-200 text-center mb-6 leading-relaxed">
       We specialize in empowering financial institutions with modern lending solutions. 
       From loan application and approval to disbursement and repayment management, 
       our platform helps streamline and automate the entire lending process.
      </p>

      <button
        class="px-6 py-2 bg-orange-400 hover:bg-lime-600 block mx-auto  text-white text-lg font-semibold rounded"
      >
        GET STARTED
      </button>
    </div>
  </section>

  </template>


<script setup>

import { ref, onMounted } from "vue";

// Slides array
const slides = ref([
  {
    year: "2017",
    image: "/images/demu16.jpeg",
    title: "Our Beginning",
    text: "The organization was founded to expand financial access and empower communities.",
  },
  {
    year: "2018",
    image: "/images/demu10.jpg",
    title: "Growing Our Community",
    text: "We reached our first thousand customers, strengthening our mission for financial growth.",
  },
  {
    year: "2021",
    image: "/images/demu40.jpg",
    title: "Digital Transformation",
    text: "Introduced digital financial solutions for more accessibility and efficiency.",
  },
  {
    year: "2024",
    image: "/images/demu36.jpg",
    title: "Expanding Our Impact",
    text: "Empowering individuals and businesses across regions as we continue to grow.",
  },
]);

// Reactive current slide
const currentIndex = ref(0);

// Next/Previous slide
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

// Auto slide every 5 seconds
const startAutoSlide = () => {
  setInterval(nextSlide, 5000);
};

onMounted(() => {
  startAutoSlide();
});
</script>


  







<style scoped>

@keyframes orbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes reverse-orbit {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes float {
  0%,100%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(-8px);
  }
}

.animate-orbit{
  animation: orbit 45s linear infinite;
}

.animate-reverse{
  animation: reverse-orbit 45s linear infinite;
}

.animate-float{
  animation: float 6s ease-in-out infinite;
}

.connector{
  stroke:#84cc16;
  stroke-width:2;
  stroke-dasharray:300;
  stroke-dashoffset:300;
  animation:drawLine 2s ease forwards;
}

@keyframes drawLine{
  to{
    stroke-dashoffset:0;
  }
}

.node{
  text-align:center;
}

.node img{
  width:110px;
  height:110px;
  border-radius:9999px;
  object-fit:cover;
  border:4px solid white;
  box-shadow:0 15px 35px rgba(0,0,0,0.15);
  animation:pulse 5s ease-in-out infinite;
}

.node p{
  margin-top:10px;
  font-weight:600;
  color:#374151;
}

.connector{
  stroke:#84cc16;
  stroke-width:2;
  stroke-dasharray:300;
  stroke-dashoffset:300;
  animation:drawLine 2s ease forwards;
  filter:drop-shadow(0 0 6px rgba(132,204,22,0.6));
}

@keyframes drawLine{
  to{
    stroke-dashoffset:0;
  }
}


/* Fade and slide animations for the card */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Year fade-up */
.fade-up-enter-active {
  transition: all 0.5s ease 0.1s;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

/* Image fade-up delayed */
.fade-up-delay-enter-active {
  transition: all 0.5s ease 0.3s;
}
.fade-up-delay-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

/* Text fade-up delayed longer */
.fade-up-delay-long-enter-active {
  transition: all 0.5s ease 0.5s;
}
.fade-up-delay-long-enter-from {
  opacity: 0;
  transform: translateY(20px);
}


</style>