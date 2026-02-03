<template>
<section class="relative font-roboto">
  
  <!-- Hero Section with Background Image -->
  <div class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background Images Carousel -->
    <div class="absolute inset-0">
      <img 
        :src="demu2"
        alt="Demulla Impact Hero"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />
      <!-- Gradient overlays -->
      <div class="absolute inset-0 bg-gradient-to-r from-orange-900/60 via-black/70 to-orange-900/60"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Left: Impact Story -->
        <div class="text-white space-y-8">
          <div class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <div class="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span class="text-sm font-semibold tracking-wider">OUR IMPACT JOURNEY</span>
          </div>
          
          <h1 class="text-4xl leading-tight md:text-4xl lg:text-5xl font-bold leading-tight">
            Real Stories.<br>
            <span class="text-lime-400 leading-tight">Measurable Impact.</span>
          </h1>
          
          <p class="text-xl text-gray-200 max-w-xl leading-relaxed">
            From small beginnings to sustainable growth. See how Demulla is transforming lives and businesses across Kenya through strategic support and community-focused solutions.
          </p>
          
          <!-- Impact Stats Grid -->
          <div class="grid grid-cols-2 gap-6 mt-8">
            <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div class="text-4xl font-bold text-lime-600 mb-2">56K+</div>
              <div class="text-sm text-gray-300">MSMEs Transformed</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div class="text-4xl font-bold text-lime-600 mb-2">128M</div>
              <div class="text-sm text-gray-300">Capital Deployed</div>
            </div>
          </div>
        </div>
        
        <!-- Right: Featured Impact Story -->
        <div class="relative">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <iframe
  src="https://www.youtube.com/embed/UIzTRmCVpiI"
  title="Success Story - Sarah's Agri-business"
  class="w-full h-[500px] object-cover"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
            <!-- Story Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
              <div class="text-white">
                <div class="inline-flex items-center gap-2 mb-4">
                  <div class="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span class="text-sm font-semibold text-lime-300">FEATURED IMPACT STORY</span>
                </div>
                <h3 class="text-2xl font-bold mb-3"> </h3>
                <p class="text-gray-200 mb-4">300% growth in 2 years with strategic financing and capacity building</p>
                <div class="flex items-center gap-4">
                  <div class="text-center">
                    <div class="text-xl font-bold">$85K</div>
                    <div class="text-xs text-gray-300">Revenue Increase</div>
                  </div>
                  <div class="h-8 w-px bg-white/30"></div>
                  <div class="text-center">
                    <div class="text-xl font-bold">12</div>
                    <div class="text-xs text-gray-300">Jobs Created</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Floating Impact Badge -->
          <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-full bg-lime-100 flex items-center justify-center">
                <svg class="w-7 h-7 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <div class="text-2xl font-bold text-gray-900">32%</div>
                <div class="text-sm text-gray-600">Average Growth</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </div>

  <!-- Impact Stories Showcase -->
  <div class="py-24 bg-white">
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
            <img 
              :src="demu39" 
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
            <img 
              :src="demu1" 
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
            <img 
              :src="demu40" 
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

      <!-- View All Stories Button -->
      <div class="text-center">
        <button class="inline-flex items-center gap-3 bg-lime-600 hover:bg-lime-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          <span>View All Impact Stories</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Visual Impact Dashboard -->
  <div class="py-24 bg-gradient-to-b from-lime-50 to-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl leading-tight md:text-5xl font-bold text-lime-600 mb-6">Our Impact by Numbers</h2>
        <p class="text-xl leading-tight text-gray-600 max-w-3xl mx-auto">
          Data that tells the story of transformation across Kenya
        </p>
      </div>

      <!-- Big Impact Numbers -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div class="relative bg-white rounded-3xl p-8 shadow-xl border border-lime-100 group hover:shadow-2xl transition-all duration-300">
          <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl bg-lime-500 flex items-center justify-center shadow-lg">
            <UsersIcon class="w-8 h-8 text-white" />
          </div>
          <div class="text-center pt-6">
            <div class="text-4xl font-bold text-lime-600 mb-2">56K+</div>
            <div class="text-lg leading-tight text-gray-700 font-medium">MSMEs Empowered</div>
            <div class="text-sm leading-tight text-gray-500 mt-2">Across 48 branches nationwide</div>
          </div>
          <div class="mt-6 pt-6 border-t border-gray-100">
            <img 
              :src="demu2" 
              alt="MSMEs Empowered"
              class="w-full h-32 object-cover rounded-xl"
            />
          </div>
        </div>

        <div class="relative bg-white rounded-3xl p-8 shadow-xl border border-lime-100 group hover:shadow-2xl transition-all duration-300">
          <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div class="text-center pt-6">
            <div class="text-4xl font-bold text-lime-600 mb-2">128M</div>
            <div class="text-lg leading-tight text-gray-700 font-medium">Capital Deployed</div>
            <div class="text-sm leading-tight text-gray-500 mt-2">Driving sustainable growth</div>
          </div>
          <div class="mt-6 pt-6 border-t border-gray-100">
            <img 
              :src="demu36" 
              alt="Capital Deployed"
              class="w-full h-32 object-cover rounded-xl"
            />
          </div>
        </div>

        <div class="relative bg-white rounded-3xl p-8 shadow-xl border border-lime-100 group hover:shadow-2xl transition-all duration-300">
          <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl bg-lime-600 flex items-center justify-center shadow-lg">
            <MapPinIcon class="w-8 h-8 text-white" />
          </div>
          <div class="text-center pt-6">
            <div class="text-4xl font-bold text-lime-600 mb-2">83%</div>
            <div class="text-lg leading-tight text-gray-700 font-medium">Rural Coverage</div>
            <div class="text-sm leading-tight text-gray-500 mt-2">Financial inclusion reach</div>
          </div>
          <div class="mt-6 pt-6 border-t border-gray-100">
            <img 
              :src="demu14" 
              alt="Rural Coverage"
              class="w-full h-32 object-cover rounded-xl"
            />
          </div>
        </div>

        <div class="relative bg-white rounded-3xl p-8 shadow-xl border border-lime-100 group hover:shadow-2xl transition-all duration-300">
          <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl bg-lime-200 flex items-center justify-center shadow-lg">
            <ChartBarIcon class="w-8 h-8 text-white" />
          </div>
          <div class="text-center pt-6">
            <div class="text-4xl font-bold text-lime-600 mb-2">32%</div>
            <div class="text-lg leading-tight text-gray-700 font-medium">Avg. Growth</div>
            <div class="text-sm leading-tight text-gray-500 mt-2">Year-on-year MSME performance</div>
          </div>
          <div class="mt-6 pt-6 border-t border-gray-100">
            <img 
              :src="demu15" 
              alt="Growth Performance"
              class="w-full h-32 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <!-- Regional Impact Map Visualization -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
        <div class="p-8 border-b border-gray-200">
          <h3 class="text-2xl font-bold text-lime-600">Impact Across Kenya</h3>
          <p class="text-gray-600 mt-2">Our footprint covers major economic regions</p>
        </div>
        <div class="grid lg:grid-cols-2 gap-8 p-8">
          <div>
            <img 
              :src="demu37" 
              alt="Kenya Map Impact Visualization"
              class="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center flex-shrink-0">
                <MapPinIcon class="w-6 h-6 text-lime-600" />
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900">Western Kenya</h4>
                <p class="text-gray-600">21,450 MSMEs supported across agriculture and trade sectors</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                <MapPinIcon class="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900">Rift Valley</h4>
                <p class="text-gray-600">18,320 businesses in agribusiness and manufacturing</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <MapPinIcon class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900">Nyanza and Central</h4>
                <p class="text-gray-600">Tech startups, services, and retail businesses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Three Pillars of Impact -->
  <div class="py-24 bg-gradient-to-br from-lime-600 to-lime-700">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
          <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span class="text-sm font-semibold tracking-wider text-white">OUR IMPACT APPROACH</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Three Pillars of Sustainable Impact</h2>
        <p class="text-xl text-lime-100 max-w-3xl mx-auto">
          Our methodology for creating lasting change in businesses and communities
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Pillar 1 -->
        <div v-for="impact in impacts" :key="impact.id" class="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div class="relative h-48 mb-6 overflow-hidden rounded-2xl">
            <img 
              :src="impact.image" 
              :alt="impact.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute top-4 left-4">
              <span class="bg-white text-lime-700 px-4 py-2 rounded-full text-sm font-bold">0{{ impact.id }}</span>
            </div>
          </div>
          
          <div class="flex items-center gap-3 mb-4">
            <div class="w-3 h-3 bg-orange-400 rounded-full"></div>
            <span class="text-sm font-semibold text-lime-300 uppercase tracking-wider">{{ impact.pillar }}</span>
          </div>
          
          <h3 class="text-2xl font-bold text-white mb-4">{{ impact.title }}</h3>
          <p class="text-lime-100 mb-6">{{ impact.longText }}</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div v-for="stat in impact.stats.slice(0, 2)" :key="stat.label" class="text-center p-3 bg-white/10 rounded-xl">
              <div class="text-xl font-bold text-white">{{ stat.value }}</div>
              <div class="text-sm text-lime-200">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Community Impact Gallery -->
  <div class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-lime-600 mb-6">Community Transformation Gallery</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Visual stories of change from across our network of impact
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="relative overflow-hidden rounded-2xl group h-64">
          <img 
            :src="demu30" 
            alt="Community Training"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
            <span class="text-sm font-semibold text-lime-300 mb-2">FINANCIAL LITERACY</span>
            <h4 class="text-xl font-bold text-white">Empowering Through Education</h4>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-2xl group h-64">
          <img 
            :src="demu12" 
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
            :src="demu33" 
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
            :src="demu22" 
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
            :src="demu15" 
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
  </div>

  <!-- Call to Action -->
  <div class="relative py-24 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img 
        :src="demu23" 
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
 
import demu1 from '@images/demu1.jpg';
import demu14 from '@images/demu14.jpeg';
import demu12 from '@images/demu12.jpeg';
import demu11 from '@images/demu11.jpg';
import demu15 from '@images/demu15.jpeg';
import demu23 from '@images/demu23.jpg';
import demu24 from '@images/demu24.jpg';
import demu25 from '@images/demu25.jpeg';
import demu10 from '@images/demu10.jpg';
import demu16 from '@images/demu16.jpeg';
import demu30 from '@images/demu30.jpg';
import demu33 from '@images/demu33.jpg';
import demu22 from '@images/demu22.jpeg';
import demu36 from '@images/demu36.jpg';
import demu2 from '@images/demu2.jpg';
import demu37 from '@images/demu37.png';
import demu40 from '@images/demu40.jpg';
import demu39 from '@images/demu39.jpg'
</script>