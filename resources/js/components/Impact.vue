<template>
  <!-- HERO SECTION -->
  <section class="relative h-screen min-h-[700px] w-full overflow-hidden">

    <img
      src="/images/demu8.jpg"
      alt="Impact cinematic"
      class="absolute inset-0 w-full h-full object-cover scale-105"
    />

    <div class="absolute inset-0 bg-gradient-to-r from-orange-900 via-black/70 to-black/80"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full h-full flex items-center">
      <div class="max-w-2xl text-white space-y-8">

        <!-- Badge -->
        <div class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
          <div class="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <span class="text-sm font-semibold tracking-wider">
            OUR IMPACT JOURNEY
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Real Stories.<br>
          <span class="text-lime-400">Measurable Impact.</span>
        </h1>

        <!-- Description -->
        <p class="text-xl text-gray-200 leading-relaxed">
          From small beginnings to sustainable growth. See how Demulla is transforming lives and businesses across Kenya.
        </p>

      </div>
    </div>

  </section>

  <!-- IMPACT STORIES SECTION -->
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 mb-6">
          <div class="w-16 h-1 bg-lime-500 rounded-full"></div>
          <h2 class="text-4xl md:text-5xl font-bold text-lime-600">Impact in Action</h2>
          <div class="w-16 h-1 bg-lime-500 rounded-full"></div>
        </div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Real businesses, real growth. Explore how our partners are transforming their communities.
        </p>
      </div>

      <!-- Impact Stories Grid -->
      <div class="grid lg:grid-cols-3 gap-8 mb-20">
        <!-- Story 1 -->
        <div class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
          <div class="h-64 overflow-hidden">
            <img src="/images/demu39.jpg" 
              alt="Agriculture Impact Story"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute top-4 left-4">
              <span class="bg-lime-500 text-white px-4 py-2 rounded-full text-sm font-semibold">SERVICE</span>
            </div>
          </div>
          <div class="p-8 bg-white">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center">
                <UsersIcon class="w-5 h-5 text-lime-600" />
              </div>
              <span class="text-sm font-semibold text-gray-600">BEAUTY AND PERSONAL CARE</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Sarah Beauty Salon</h3>
            <p class="text-gray-600 mb-6">
              With Demulla’s tailored financing, business training, and ongoing customer support, the salon increased production capacity by 150%, expanded its range of services, and attracted a larger customer base, leading to stronger and more sustainable business growth..
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-3 bg-lime-50 rounded-xl">
                <div class="text-xl font-bold text-lime-700">+150%</div>
                <div class="text-sm text-gray-600">Production</div>
              </div>
              <div class="text-center p-3 bg-lime-50 rounded-xl">
                <div class="text-xl font-bold text-lime-700">5</div>
                <div class="text-sm text-gray-600">Employees</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Story 2 -->
        <div class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
          <div class="h-64 overflow-hidden">
            <img src="/images/demu1.jpg" 
              alt="Retail Impact Story"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute top-4 left-4">
              <span class="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">RETAIL</span>
            </div>
          </div>
          <div class="p-8 bg-white">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <BuildingOfficeIcon class="w-5 h-5 text-orange-600" />
              </div>
              <span class="text-sm font-semibold text-gray-600">LOCAL RETAIL SHOP</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4"> Store</h3>
            <p class="text-gray-600 mb-6">
              Expanded from a small kiosk to a full retail shop, creating 3 jobs and serving 500+ customers daily.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-3 bg-orange-50 rounded-xl">
                <div class="text-xl font-bold text-orange-700">3x</div>
                <div class="text-sm text-gray-600">Business Size</div>
              </div>
              <div class="text-center p-3 bg-orange-50 rounded-xl">
                <div class="text-xl font-bold text-orange-700">8</div>
                <div class="text-sm text-gray-600">Jobs Created</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Story 3 -->
        <div class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
          <div class="h-64 overflow-hidden">
            <img src="/images/demu40.jpg" 
              alt="Manufacturing Impact Story"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute top-4 left-4">
              <span class="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">RETAIL</span>
            </div>
          </div>
          <div class="p-8 bg-white">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <BriefcaseIcon class="w-5 h-5 text-blue-600" />
              </div>
              <span class="text-sm font-semibold text-gray-600">BUTCHERY</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Hezbon Butchery</h3>
            <p class="text-gray-600 mb-6">
              Fast financing reduced stock-outs and drove 30–40% sales growth, improving cash flow and customer retention.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-3 bg-blue-50 rounded-xl">
                <div class="text-xl font-bold text-blue-700">200%</div>
                <div class="text-sm text-gray-600">Capacity</div>
              </div>
              <div class="text-center p-3 bg-blue-50 rounded-xl">
                <div class="text-xl font-bold text-blue-700">30-40%</div>
                <div class="text-sm text-gray-600">growth in daily sales</div>
              </div>
            </div>
            </div>
          </div>
          </div>
    </div>
  </section>

 <!-- Impact Visual Metrics -->
<section class="py-28 bg-gradient-to-b from-lime-50/60 to-white">
  <div class="max-w-7xl mx-auto px-6">

    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-20">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our Impact by the Numbers
      </h2>
      <div class="w-24 h-1 bg-gradient-to-r from-lime-500 to-orange-400 mx-auto mb-6 rounded-full"></div>
      <p class="text-lg text-gray-600">
        Real metrics powering transformation across Kenya.
      </p>
    </div>

    <!-- Cards -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <!-- CARD -->
      <div class="relative group rounded-3xl overflow-hidden shadow-xl">

        <!-- Background Image -->
        <img
          src="/images/demu2.jpg"
          alt="MSMEs Empowered"
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <!-- Glass Metric Content -->
        <div class="relative z-10 p-8 h-72 flex flex-col justify-end">

          <div class="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">

            <div class="text-4xl font-bold text-lime-400 mb-2">
              56K+
            </div>

            <div class="text-lg font-semibold text-white">
              MSMEs Empowered
            </div>

            <p class="text-sm text-gray-300 mt-2">
              Across 48 branches nationwide
            </p>

            <!-- Accent -->
            <div class="mt-4 h-1 w-12 bg-orange-400 rounded-full"></div>

          </div>
        </div>
      </div>


      <!-- CARD -->
      <div class="relative group rounded-3xl overflow-hidden shadow-xl">
        <img
          src="/images/demu36.jpg"
          alt="Capital Deployed"
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div class="relative z-10 p-8 h-72 flex flex-col justify-end">
          <div class="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">

            <div class="text-4xl font-bold text-lime-400 mb-2">
              128M
            </div>

            <div class="text-lg font-semibold text-white">
              Capital Deployed
            </div>

            <p class="text-sm text-gray-300 mt-2">
              Driving sustainable growth
            </p>

            <div class="mt-4 h-1 w-12 bg-orange-400 rounded-full"></div>

          </div>
        </div>
      </div>

      
       <div class="relative group rounded-3xl overflow-hidden shadow-xl">
        <img
          src="/images/demu57.png"
          alt="Jobs Created"
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
         <div class="relative z-10 p-8 h-72 flex flex-col justify-end">
          <div class="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
            <div class="text-4xl font-bold text-lime-400 mb-2">
              12,500+
            </div>
            <div class="text-lg font-semibold text-white">
              Jobs Created
            </div>
            <p class="text-sm  text-gray-300 mt-2">Across all supported regions</p>
            <div class="mt-4 h-1 w-12 rounded-full bg-orange-400"></div>
          </div>
         </div>
       </div>

       <div class="relative rounded-3xl overflow-hidden shadow-xl">
        <img 
         src="/images/demu33.jpg" alt="mileston" 
         class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-750">
         <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
         <div class="relative z-10 p-8 h-72 flex flex-col justify-end">
          <div class="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
            <div class="text-4xl font-bold text-lime-400 mb-2">12,500+</div>
            <div class="text-lg font-semibold text-white">Jobs Created</div>
            <p class="text-sm text-gray-300 mt-2">Across all Supported Regions</p>
            <div class="mt-4 h-1 w-12 rounded-full bg-orange-400"></div>
          </div>
         </div>

       </div>

      
    </div>
  </div>
</section>
<!-- Regional Impact Section -->
<section class="py-28 bg-gradient-to-b from-white to-lime-50/40">
  <div class="max-w-7xl mx-auto px-6">

    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-20">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Impact Across Kenya
      </h2>
      <div class="w-24 h-1 bg-gradient-to-r from-lime-500 to-orange-400 mx-auto mb-6 rounded-full"></div>
      <p class="text-lg text-gray-600">
        Our footprint spans major economic regions, driving measurable growth.
      </p>
    </div>

    <!-- Content Grid -->
    <div class="grid lg:grid-cols-2 gap-16 items-center">

      <!-- Map -->
      <div class="relative group">
        <div class="rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="/images/demu37.png" 
            alt="Kenya Impact Map"
            class="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
          />
        </div>

        <!-- Subtle Overlay Accent -->
        <div class="absolute inset-0 rounded-3xl border border-lime-200 pointer-events-none"></div>
      </div>

      <!-- Regional Stats -->
      <div class="space-y-8">

        <!-- Region Card -->
        <div class="backdrop-blur-md bg-white/70 border border-lime-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
          <div class="flex items-start gap-5">
            <div class="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center flex-shrink-0">
              <MapPinIcon class="w-6 h-6 text-lime-600" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900">
                Western Kenya
              </h4>
              <p class="text-gray-600 mt-2">
                21,450 MSMEs supported across agriculture and trade sectors.
              </p>
            </div>
          </div>
          <div class="mt-4 h-1 w-14 bg-orange-400 rounded-full"></div>
        </div>

        <!-- Region Card -->
        <div class="backdrop-blur-md bg-white/70 border border-lime-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
          <div class="flex items-start gap-5">
            <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
              <MapPinIcon class="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900">
                Rift Valley
              </h4>
              <p class="text-gray-600 mt-2">
                18,320 businesses in agribusiness and manufacturing.
              </p>
            </div>
          </div>
          <div class="mt-4 h-1 w-14 bg-orange-400 rounded-full"></div>
        </div>

        <!-- Region Card -->
        <div class="backdrop-blur-md bg-white/70 border border-lime-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
          <div class="flex items-start gap-5">
            <div class="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center flex-shrink-0">
              <MapPinIcon class="w-6 h-6 text-lime-600" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900">
                Nyanza & Central
              </h4>
              <p class="text-gray-600 mt-2">
                Strong growth in tech startups, retail, and service industries.
              </p>
            </div>
          </div>
          <div class="mt-4 h-1 w-14 bg-orange-400 rounded-full"></div>
        </div>

      </div>

    </div>
  </div>
</section>

<section class="py-24 bg-white">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-lime-500 mb-6">Community Transformation Gallery</h2>
    </div>

    <div class="grid  md:grid-cols-2  lg:grid-cols-3 gap-6">
      <div class="relative overflow-hidden rounded-2xl group h-64">
        <img
          src="/images/demu24.jpg"
          alt="community transformation"
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
>

<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
            <span class="text-sm font-semibold text-lime-300 mb-2">FINANCIAL LITERACY</span>
            <h4 class="text-xl font-bold text-white">Empowering Through Education</h4>
          </div>
      </div>

       
        

        <div class="relative overflow-hidden rounded-2xl group h-64">
          <img 
            src="/images/demu12.jpeg" 
            alt="Business Growth"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
            <span class="text-sm font-semibold text-orange-300 mb-2">BUSINESS EXPANSION</span>
            <h4 class="text-xl font-bold text-white">From Small to Scale</h4>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-2xl group h-64">
          <img 
            src="/images/demu33.jpg" 
            alt="Women Empowerment"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
            <span class="text-sm font-semibold text-blue-300 mb-2">WOMEN-LED MSMEs</span>
            <h4 class="text-xl font-bold text-white">47% of Our Portfolio</h4>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-2xl group h-64 lg:col-span-2">
          <img 
            src="/images/demu22.jpeg" 
            alt="Small business Impact"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
            <span class="text-sm font-semibold text-green-300 mb-2">AGRICULTURAL TRANSFORMATION</span>
            <h4 class="text-xl font-bold text-white">Feeding Growth, Building Futures</h4>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-2xl group h-64">
          <img 
            src="/images/demu15.jpeg" 
            alt="Youth Engagement"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
            <span class="text-sm font-semibold text-purple-300 mb-2">YOUTH ENTREPRENEURS</span>
            <h4 class="text-xl font-bold text-white">32% Youth Participation</h4>
          </div>
        </div>
      </div>
  </div>

      
<div class="relative py-24 mt-20 mb-0 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img 
        src="/images/demu23.jpg" 
        alt="Join Our Impact"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-800/80"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
        Ready to Create Your<br>
        <span class="text-lime-400">Impact Story?</span>
      </h2>
      <p class="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
        Join thousands of successful MSMEs who are transforming their businesses and communities with Demulla.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <button class="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl">
          Start Your Application
        </button>
        <button class="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 border border-white/30">
          Speak with Our Team
        </button>
      </div>
      
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-lime-300 mb-2">98.2%</div>
          <div class="text-sm text-gray-300">Client Satisfaction</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-lime-300 mb-2">4.2s</div>
          <div class="text-sm text-gray-300">Avg. Response Time</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-lime-300 mb-2">92%</div>
          <div class="text-sm text-gray-300">Retention Rate</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-lime-300 mb-2">24/7</div>
          <div class="text-sm text-gray-300">Support Available</div>
        </div>
      </div>
    </div>
  </div>






</section>















</template>
<script setup>
import { MapPinIcon,UsersIcon,BuildingOfficeIcon,BriefcaseIcon } from '@heroicons/vue/16/solid';



</script>
