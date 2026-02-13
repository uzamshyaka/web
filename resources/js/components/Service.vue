<template>
  <div class="min-h-screen mt-20 bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section -->
    <section class="relative bg-lime-900 text-white overflow-hidden min-h-[500px] sm:min-h-[600px]">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-lime-900 to-transparent"></div>
      <img 
        src="/images/demu25.jpeg" 
        alt="Microfinance background" 
        class="absolute inset-0 w-full h-full object-cover object-center mix-blend-overlay"
      />
      
      <div class="relative max-w-7xl mx-auto px-4 py-28 sm:py-32 md:py-40">
        <h1 class="text-5xl font-bold mb-6 animate-fade-in-up">
          Empowering Communities,<br>Transforming Lives
        </h1>
        <p class="text-xl mb-8 max-w-2xl text-blue-100">
          Providing accessible financial services to help small businesses and individuals thrive
        </p>
        <button class="bg-orange-400 text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 transition-all transform hover:scale-105 shadow-lg">
          Get Started Today
        </button>
      </div>
    </section>

    <!-- Main Services Section with Cards -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="mx-auto px-8">
        
        <!-- Centered Header Section -->
        <div class="text-center mb-16">
          
          <span class="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>

          <h2 class="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Financial Solutions Tailored for You
          </h2>

          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From small loans to financial education, we offer comprehensive services to help your business grow and thrive.
          </p>
        </div>

        <!-- Service Cards Container -->
        <div class="py-4 sm:py-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-6">
            
            <!-- Service Card -->
            <div v-for="(service, index) in services" :key="service.id">
              <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 h-full border border-gray-200 hover:border-lime-500 transition-all duration-300 group hover:shadow-2xl shadow-lg flex flex-col">
                
                <!-- Header with Icon Badge -->
                <div class="flex items-start justify-between mb-3 lg:mb-4">
                  <div class="flex-1">
                    <div class="inline-flex items-center gap-2 mb-2">
                      <div class="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <span class="text-xs sm:text-sm font-semibold uppercase tracking-wider text-yellow-600">
                        {{ service.category || 'Service' }}
                      </span>
                    </div>
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                      {{ service.title }}
                    </h3>
                  </div>
                  
                  <!-- Icon Badge -->
                  <div class="relative flex-shrink-0 ml-4">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-yellow-500 backdrop-blur-sm flex items-center justify-center text-2xl sm:text-3xl shadow-lg">
                      {{ service.icon }}
                    </div>
                  </div>
                </div>

                <!-- Image - Fixed Height -->
                <div class="relative overflow-hidden rounded-xl sm:rounded-2xl mb-3 lg:mb-4">
                  <img :src="service.image"
                    :alt="service.title"
                    class="w-full h-64 sm:h-72 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <!-- Content - Fixed Height with scroll if needed -->
                <p class="text-sm sm:text-base leading-relaxed text-gray-600 mb-4">
                  {{ service.detailedDesc }}
                </p>

                <!-- Benefits List - Uniform -->
                <div class="mb-4 flex-grow">
                  <h4 class="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul class="space-y-1.5">
                    <li v-for="benefit in service.benefits" :key="benefit" class="flex items-start text-xs sm:text-sm text-gray-600">
                      <svg class="w-4 h-4 text-lime-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      <span class="line-clamp-2">{{ benefit }}</span>
                    </li>
                  </ul>
                </div>

                <!-- CTA Button - Always at bottom -->
                <button class="w-full bg-lime-600 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base mt-auto">
                  Learn More
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

   

    <!-- Loan Calculator Preview -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">Estimate Your Loan</h2>
        
        <div class="space-y-6">
          <div>
            <label class="block text-gray-700 mb-2">Loan Amount (KSh)</label>
            <input 
              type="range" 
              v-model="loanAmount" 
              min="1000" 
              max="100000" 
              step="1000"
              class="w-full h-2 bg-lime-200 rounded-lg appearance-none cursor-pointer"
            />
            <div class="text-right font-semibold text-lime-900">KSh {{ formatNumber(loanAmount) }}</div>
          </div>
          
          <div>
            <label class="block text-gray-700 mb-2">Repayment Period (Months)</label>
            <select v-model="repaymentPeriod" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-lime-900">
              <option v-for="month in [1,2,4]" :key="month" :value="weeks">{{ month }} months</option>
            </select>
          </div>
          
          <div class="bg-lime-50 p-6 rounded-lg">
            <div class="text-center">
              <p class="text-gray-600">Estimated Monthly Payment</p>
              <p class="text-4xl font-bold text-lime-900">KSh {{ formatNumber(calculateMonthlyPayment) }}</p>
              <p class="text-sm text-gray-500 mt-2">*Interest rate: 26% per month</p>
            </div>
          </div>
          
          <button class="w-full bg-lime-600 text-white py-4 rounded-lg font-semibold hover:bg-orange-400 transition-colors">
            Apply for This Loan
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-lime-600 text-white py-20">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p class="text-xl mb-8 text-lime-100">Join thousands of entrepreneurs who have grown their businesses with us</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 transition-colors">
            Apply loan Today
          </button>
          <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MicrofinanceServices',
  data() {
    return {
      loanAmount: 50000,
      repaymentPeriod: 28,
      
      stats: [
        { value: '50K+', label: 'Active Clients' },
        { value: 'KSh 2B+', label: 'Loans Disbursed' },
        { value: '95%', label: 'Repayment Rate' },
        { value: '15+', label: 'Years of Service' }
      ],
      
      services: [
        {
          id: 1,
          icon: '💼',
          category: 'Financial Support',
          title: 'Business Loans',
          image: '/images/demu18.jpeg',
          shortDesc: 'Startup capital and expansion funding for small businesses',
          detailedDesc: 'Flexible business loans designed to help micro and small enterprises grow. Get funding for inventory, equipment, or working capital with competitive interest rates.',
          benefits: [
            'Amounts from KSh 5,000 to KSh 150000',
            'Flexible repayment terms',
            'Same-day approval possible',
            'No collateral required'
          ]
        },
        {
          id: 2,
          icon: '📚',
          category: 'Empowerment',
          title: 'financial literacy skills',
          image: '/images/demu20.jpeg',
          shortDesc: 'Building smart money management skills for entrepreneurs',
          detailedDesc: 'Equipping individuals with practical financial knowledge to manage income, savings, investments, and business finances confidently and sustainably.',
          benefits: [
            'Improved budgeting and money management',
            'Better understanding of savings and investments',
            'Debt management strategies',
            'Increased financial confidence and independence'
          ]
        },
        {
          id: 3,
          icon: '🤝',
          category: 'Community Impact',
          title: 'Strategic Community Partnerships',
          image: '/images/demu38.jpg',
          shortDesc: 'Collaborating with communities to drive sustainable impact',
          detailedDesc: 'Building strong partnerships with local organizations, leaders, and stakeholders to promote inclusive growth, shared resources, and long-term community development.',
          benefits: [
            'Stronger community engagement',
            'Shared knowledge and resources',
            'Sustainable development initiatives',
            'Expanded outreach and impact'
          ]
        },
      ],
      
      successStories: [
        {
          name: 'Mary Wanjiku',
          business: 'Fashion Boutique Owner',
          image: '/api/placeholder/100/100',
          quote: 'With a small business loan, I expanded my boutique and now employ three women from my community.'
        },
        {
          name: 'John Omondi',
          business: 'Farmer',
          image: '/api/placeholder/100/100',
          quote: 'The agricultural loan helped me buy better equipment and triple my harvest this season.'
        },
        {
          name: 'Grace Akinyi',
          business: 'Food Vendor',
          image: '/api/placeholder/100/100',
          quote: 'From a small food kiosk to a restaurant - my journey with microfinance made it possible.'
        }
      ]
    }
  },
  computed: {
    calculateMonthlyPayment() {
      const principal = this.loanAmount
      const monthlyRate = 0.26
      const weeks = this.repaymentPeriod
      const weeklyRate = monthlyRate / 4
      
      const payment = principal * weeklyRate * Math.pow(1 + weeklyRate, weeks) / (Math.pow(1 + weeklyRate, weeks) - 1)
      return Math.round(payment) || 0
    }
  },
  methods: {
    formatNumber(value) {
      return new Intl.NumberFormat('en-KE').format(value)
    }
  }
}
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

/* Custom scrollbar for loan calculator */
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #b9efd7;
  border-radius: 50%;
  cursor: pointer;
}

input[type=range]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #1e8a27;
  border-radius: 50%;
  cursor: pointer;
}
</style>