<template>
  <div class="min-h-screen mt-20 bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section -->
    <section class="relative bg-lime-900 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-lime-900 to-transparent"></div>
      <img 
        src="/images/demu25.jpeg" 
        alt="Microfinance background" 
        class="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      
      <div class="relative max-w-7xl mx-auto px-4 py-28">
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
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2 mb-4">Financial Solutions Tailored for You</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From small loans to savings accounts, we offer comprehensive financial services to help your business grow
          </p>
        </div>

        <!-- Interactive Service Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="service.id"
            class="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
            @mouseenter="activeService = index"
            @mouseleave="activeService = null"
          >
            <!-- Image Container -->
            <div class="relative h-56 overflow-hidden">
              <img 
                :src="service.image" 
                :alt="service.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <!-- Service Icon -->
              <div class="absolute top-4 right-4 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                {{ service.icon }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
              <p class="text-gray-600 mb-4">{{ service.shortDesc }}</p>
              
              <!-- Expandable Details -->
              <transition 
                enter-active-class="transition-all duration-500 ease-in-out"
                enter-from-class="max-h-0 opacity-0"
                enter-to-class="max-h-96 opacity-100"
                leave-active-class="transition-all duration-300 ease-in-out"
                leave-from-class="max-h-96 opacity-100"
                leave-to-class="max-h-0 opacity-0"
              >
                <div v-if="activeService === index" class="mt-4 space-y-3">
                  <p class="text-gray-700 text-sm">{{ service.detailedDesc }}</p>
                  <div class="border-t pt-3">
                    <h4 class="font-semibold text-lime-600 mb-2">Key Benefits:</h4>
                    <ul class="space-y-2">
                      <li v-for="benefit in service.benefits" :key="benefit" class="flex items-center text-sm text-gray-600">
                        <svg class="w-4 h-4 text-lime-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        {{ benefit }}
                      </li>
                    </ul>
                  </div>
                  
                  <!-- CTA Button -->
                  <button class="w-full mt-4 bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-lime-600 transition-colors">
                    Apply Now
                  </button>
                </div>
              </transition>

              <!-- Toggle Indicator -->
              <div class="mt-4 flex items-center text-lime-600 font-semibold">
                <span>{{ activeService === index ? 'Show Less' : 'Learn More' }}</span>
                <svg 
                  class="w-5 h-5 ml-2 transition-transform duration-300" 
                  :class="{ 'rotate-180': activeService === index }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
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
      activeService: null,
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
          icon: '👩‍🌾',
          title: 'financial  literacy skills',
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