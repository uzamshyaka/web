 <template>
<section class="relative bg-cover bg-center bg-no-repeat text-white -mt-5 overflow-hidden h-120 pb-16"
  style="background-image: url('${demu17}');"
>
  <div class="absolute inset-0 bg-lime-700 mix-blend-multiply shadow-transparent"></div>

   <div class="details-container mt-5 relative z-20 w-full h-full flex items-center justify-center text-center">
  <div class="details p-6 md:p-10 lg:p-16 max-w-3xl">

    <!-- Central box for description + label -->
    
      
      <!-- Short central description -->
      <p class="text-lg md:text-2xl text-white mb-4 leading-relaxed drop-shadow-lg">
        We help communities thrive through technology, innovation, and meaningful connections.
      </p>

      <!-- Label -->
      <div class="inline-flex items-center px-6 py-2 rounded-full border-2 border-orange-400 justify-center mx-auto mt-4 animate-pulse bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20">
        <span class="w-2 h-2 bg-orange-400 rounded-full mr-4 animate-ping"></span>
        <span class="text-sm font-medium text-white">Teamwork</span>
      </div>

    </div>

  </div>
</section>

<!-- ===================== HERO IMAGE ===================== -->
<section class="relative -mt-50 z-20 px-6">
  <div class="flex justify-center">
    <img
      :src="demu17"
      alt="Team working"
      class="w-full max-w-6xl h-80 object-cover rounded-xl shadow-2xl"
    />
  </div>
</section>

<section class="bg-white -mt-5 font-roboto max-w-6xl mx-auto p-12 md:p-16 transform">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    <!-- Left Content: Title + Short Description + Features -->
    <div class="flex-1 flex flex-col justify-center space-y-6">
      
      <!-- Title -->
      <h2 class="text-4xl md:text-4xl font-bold leading-snug text-gray-900">
        When You 
        <span class="inline-block bg-lime-600 px-4 py-1 text-black font-bold text-xl rounded-l-2xl rounded-r-none">Need</span>
        It Most Urgent 
        <span class="bg-lime-200 px-2 rounded">Financial Solution</span>
      </h2>

      <!-- Short Description -->
      <p class="text-gray-600 text-lg max-w-lg">
        Quick, reliable, and affordable financial aid when you need it the most. Our team ensures comfort, efficiency, and lasting results.
      </p>

      <!-- Feature Grid: Horizontal layout -->
      <div class="grid grid-cols-2 gap-6 mt-4">
        <div class="flex gap-4 items-start">
          <i class="fa-regular fa-clock text-green-700 text-2xl"></i>
          <div>
            <h3 class="font-semibold text-lg">Quick Cash</h3>
            <p class="text-gray-600 text-sm">Get instant loan with minimal waiting time.</p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <i class="fa-solid fa-percent text-green-700 text-2xl"></i>
          <div>
            <h3 class="font-semibold text-lg">Efficiency</h3>
            <p class="text-gray-600 text-sm">Streamlined Process for maximum clients efficiency.</p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <i class="fa-solid fa-unlock text-green-700 text-2xl"></i>
          <div>
            <h3 class="font-semibold text-lg">Unsecured loan access</h3>
            <p class="text-gray-600 text-sm">Our financial aid is fully collateral-free, giving you easy access without security requirements.</p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <i class="fa-regular fa-smile text-green-700 text-2xl"></i>
          <div>
            <h3 class="font-semibold text-lg">Comfort</h3>
            <p class="text-gray-600 text-sm">Client-focused financial support for a smooth and stress-free experience.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Image -->
    <div class="flex-1 relative">
      <img
        :src="demu1"
        alt="Demulla"
        class="rounded-2xl object-cover w-full h-[480px]"
      />
      <div class="absolute -bottom-10 -left-10 bg-lime-600 text-white rounded-lg p-8">
        <i class="fa-solid  fa-hand-holding-dollar text-4xl md:text-10xl"></i>
      </div>
    </div>
  </div>
</section>

  <section class="bg-gray-50 py-20 font-roboto px-6 md:px-12">

  <!-- Header -->
  <div class="text-center mb-16">
    <h2 class="text-4xl font-bold text-black">Our Services</h2>
    <p class="max-w-2xl mx-auto text-black mt-3">
      We craft smart microfinance solutions that elevate your financial wellbeing and deliver real impact.
From assessment to support, we bring your financial needs to life with care and expertise
    </p>
  </div>

  <!-- SERVICE ROWS -->
  <div class="max-w-7xl mx-auto space-y-20">

    <div
      v-for="(service, index) in services"
      :key="service.title"
      class="flex flex-col md:flex-row items-center gap-10 p-6"
      :class="index % 2 === 1 ? 'md:flex-row-reverse' : ''"
    >
      <!-- TEXT -->
      <div class="flex-1 pl-6 rounded-2xl p-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all border-r-8 border-r-lime-600 flex gap-6">
        <div class="absolute left-0 top-0 h-full w-1 bg-gradient-to-r from-orange-500/70 via-orange-500/20 to-transparent rounded-full"></div>
        <h3 class="text-2xl font-semibold text-orange-600 mb-6">
          {{ service.title }}
        </h3>

        <ul class="space-y-3">
          <li
            v-for="feature in service.features"
            :key="feature"
            class="text-black flex items-start gap-2"
          >
            <span class="text-blue-400 text-lg leading-none mt-1">•</span>
            <span>{{ feature }}</span>
          </li>
        </ul>
      </div>

      <!-- IMAGE -->
      <div class="flex-1 rounded-2xl overflow-hidden relative  backdrop-blur-2xl ">
        <img
          :src= service.image
          class="rounded-xl w-full object-cover"
          :alt="service.title"
        />
        <div class="absolute inset-0 rounded-xl border border-lime-600 pointer-events-none"></div>
      </div>
    </div>

  </div>

    <div class="text-center mt-10">
  <a href="tel:*123#" 
     class="inline-block bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all">
    Dial *658*55# Now
  </a>
</div>

</section>

<!-- TITTLE -->
  <div class="py-24 bg-gray-50 px-3">
     
        <div class="section-title text-center">
          <div class="title-effect">
            <div class="bar bar-top"></div>
            <div class="bar bar-right"></div>
            <div class="bar bar-bottom"></div>
            <div class="bar bar-left"></div>
          </div>
          <h2 class="font-bold text-3xl">How It Work</h2>
          <h2 class="title">Three Simple Step To Started Working Process</h2>
        </div>
        </div>


   <section class="relative -mt-30 py-20 bg-gray-50 overflow-hidden">
  <!-- Top Decorative Wave -->
  <div class="w-full h-40 md:h-60 lg:h-80 relative overflow-hidden">
    <svg class="w-full h-full" viewBox="0 0 620 120" preserveAspectRatio="xMidYMid meet">
      <path
        d="M62.9 14.9c-25-7.74-56.6 4.8-60.4 24.3-3.73 19.6 21.6 35 39.6 37.6 42.8 6.2 72.9-53.4 116-58.9 65-18.2 191 101 215 28.8 5-16.7-7-49.1-34-44-34 11.5-31 46.5-14 69.3 9.38 12.6 24.2 20.6 39.8 22.9 91.4 9.05 102-98.9 176-86.7 18.8 3.81 33 17.3 36.7 34.6 2.01 10.2.124 21.1-5.18 30.1"
        fill="none"
        stroke="rgba(192, 255, 0, 0.4)"
        stroke-width="1.2"
        stroke-dasharray="5,10"
      />
    </svg>
  </div>

  <!-- Steps -->
  <div class="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row items-start justify-between md:space-x-8 space-y-12 md:space-y-0 relative">

    <div
      v-for="(step, index) in steps"
      :key="index"
      class="flex-1 flex flex-col items-center text-center relative px-4"
    >
      <!-- Leaf-shaped icon -->
      <div
        class="relative w-24 h-24 flex items-center justify-center text-white text-3xl font-bold shadow-lg bg-lime-700 rounded-[30%] rotate-6 hover:rotate-0 transition-all duration-500"
      >
        <div class="absolute inset-0 bg-lime-600 rounded-[30%] rotate-12 -z-10"></div>
        <i :class="step.icon"></i>
      </div>

      <!-- Step Number -->
      <div class="mt-4 text-lime-700 font-bold text-xl tracking-wide">
        Step {{ step.number }}
      </div>

      <!-- Step Title + Description -->
      <div class="mt-2">
        <h4 class="font-semibold text-gray-900 text-lg">{{ step.title }}</h4>
        <p class="text-gray-500 text-sm mt-1 leading-relaxed">{{ step.desc }}</p>
      </div>

      <!-- Arrow Between Steps -->
      <div
        v-if="index !== steps.length - 1"
        class="hidden md:flex items-center absolute top-14 right-[-12%] w-24"
      >
        <div class="flex-grow h-[2px] bg-lime-300"></div>
        <div class="w-0 h-0 border-t-6 border-b-6 border-l-8 border-t-transparent border-b-transparent border-l-lime-400"></div>
      </div>
    </div>

  </div>
</section>

<section class="bg-gray-50 py-20 px-6 md:px-12">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-black">Our Featured Work</h2>
      <p class="max-w-2xl mx-auto text-black-400 mt-3">
        Discover how our financial aid solutions blend strategy with real impact. See how we support clients with accessible, transparent, and effective microfinance services.
Follow us on our social platforms to keep up with the latest trends.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
      <div
        v-for="(item, idx) in works"
        :key="idx"
        class="bg-lime-600 rounded-2xl p-4 shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      >
        <img :src="demImage" :alt="item.title" class="rounded-xl w-full object-cover" />
        <div class="flex flex-wrap gap-2 mt-4">
          <span v-for="tag in item.tags" :key="tag" class="text-xs bg-white/10 text-gray-300 py-1 px-3 rounded-full">
            {{ tag }}
          </span>
        </div>
        <h3 class="text-white text-xl font-semibold mt-4">{{ item.title }}</h3>
        <a :href="item.link" target="_blank" class="text-white text-sm mt-2 inline-block hover:underline">Subscribe To our NewsLetter →</a>
      </div>
    </div>
  </section>






    <!-- Optional CTA -->
    <div class="text-center mt-12">
      <a href="#contact" class="inline-block bg-lime-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-lime-600 transition-all">
        Share Your Experience
      </a>
    </div>


  </template>

  <script setup>



import { ref } from "vue";


const steps = [
  {
    number: 1,
    title: "Apply",
    desc: "Fill in your loan application with accurate personal and business information.",
    icon: "fas fa-file-edit"
  },
  {
    number: 2,
    title: "Submit Documents",
    desc: "Provide the required identification and supporting financial documents.",
    icon: "fas fa-folder-open"
  },
  {
    number: 3,
    title: "Approval",
    desc: "Our team reviews your application and verifies your details.",
    icon: "fas fa-check-circle"
  },
  {
    number: 4,
    title: "Disbursement",
    desc: "Once approved, funds are released directly into your account.",
    icon: "fas fa-hand-holding-usd"
  }
];


const services = ref([
  {
    title: "Financial Support",
    image: demu18,
    features: [
      "Collateral-Free Loans",
      "Fast Loan Approval",
      "Affordable Repayment Plans",
      "Emergency Financial Aid",
      "Business & Personal Loans",
    ],
  },
  {
    title: "Client Education",
    image: demu10,
    features: [
      "Financial Literacy Programs",
      "Understanding Loan Terms",
      "Credit Awareness",
      "Safe Borrowing Practices",
      "Emergency Fund Planning",
    ],
  },
  {
    title: "Advisory & Guidance Support",
    image: demu11,
    features: [
      "Personalized Financial Planning",
      "Loan Eligibility Guidance",
      "Debt Management Support",
      "Business Advisory",
    ],
  },
]);

const currentStep = ref(0);

const nextStep = () => {
  if (currentStep.value < steps.length - 1) currentStep.value++;
};

const prevStep = () => {
  if (currentStep.value > 0) currentStep.value--;
};






</script>


<style>
/* Arrow animation: moving glow */
@keyframes flowArrow {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-flowArrow {
  animation: flowArrow 2s linear infinite;
}

/* Pulse effect on triangle arrow tip */
@keyframes pulseArrow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.animate-pulseArrow {
  animation: pulseArrow 1s ease-in-out infinite;
}

body {font-family: 'Roboto', sans-serif; }


.pos-r {
    position: relative;
}
section{padding: 80px 0;}
.section-title{margin-bottom:50px; position: relative;}
.section-title p{font-size: 16px;}
.title-effect {width: 50px; height: 50px; top: 0; position: absolute; left: 0; opacity: 0.5; animation: rotation 12.8s steps(1) 0s infinite;}
.text-center .title-effect{left: 50%; margin-left: -25px;}
.text-center .section-title h6{padding: 15px 0;}

.title-effect .bar {background: #25fc2c;}
.title-effect .bar-top {width: 100%; height: 7px; position: absolute; top: 0; left: 0; transform-origin: left top; transform: scale(0, 1); animation: bar-top 3.2s linear 0s infinite;}
.title-effect .bar-right {width: 7px; height: 100%; position: absolute; top: 0; right: 0; transform-origin: left top; transform: scale(1, 0); animation: bar-right 3.2s linear 0s infinite;}
.title-effect .bar-bottom {width: 100%; height: 7px; position: absolute; right: 0; bottom: 0; transform-origin: right top; transform: scale(0, 1); animation: bar-bottom 3.2s linear 0s infinite;}
.title-effect .bar-left {width: 7px; height: 100%; position: absolute; left: 0; bottom: 0; transform-origin: left bottom; transform: scale(1, 0); animation: bar-left 3.2s linear 0s infinite;}

.title {position: relative; color: #1c1d3e; margin-bottom: 0;}
.section-title h2{margin-bottom: 15px;}

/* ------------------------
    How It Work
------------------------*/
.work-process{position: relative;}
.step-num {background: #fff; border-radius: 50%; box-shadow: 0 12px 20px 0 rgba(117, 178, 240, 0.4); color: #005bea; display: inline-block; font-size: 18px; font-weight: 600; height: 50px; right: 0; line-height: 55px; position: absolute; text-align: center; top: 0; width: 50px;}
.theme-bg .work-process h4, .theme-bg .work-process p{color: #ffffff;}
.step-icon {background: #ffffff; width:140px; height:140px; position: relative; border: 3px solid #fafaff; border-radius: 50%; line-height: 140px; font-size: 40px; text-align: center; color: #1c1d3e;}
.step-icon span {position: relative;}
.step-icon span::after, .step-icon span::before {border-radius: 50%; content: ""; height: 40px; position: absolute; width: 40px; z-index: -1;}
.step-icon span::after {background: #cdf3f6; height: 25px; left: -10px; top: 5px; width: 25px;}
.step-icon span::before {background: #d4f8e6; bottom: 0; right: -10px;}
.dark-bg .step-icon{color: rgba(255,255,255,0.9); background: none;}
.dark-bg .step-desc h4{color: #2575fc;}
.dark-bg .step-icon{border-color: rgba(255,255,255,0.1);}
.dark-bg .step-desc p{color: rgba(255,255,255,0.7);}
.step-num-box{position: relative; display: inline-block; margin-bottom: 20px;}
.work-process .box-loader{position: absolute; top: 30%; right: -15%; left: inherit;}
.work-process.style-2 {padding: 0; display: flex; align-items: center;}
.work-process.style-2:before{display: none;}
.work-process.style-2 .step-num-box {margin-bottom: 0; margin-right: 30px;}
.work-process.style-3 {padding: 70px 30px 0;}
.work-process.style-3 .step-num {background: none; box-shadow: none; color: rgba(255, 255, 255, 0.1); font-size: 120px; height: auto; left: 50%; line-height: 120px; margin-bottom: 0; position: absolute; top: 0; transform: translateX(-50%); width: auto;}
#svg-container {position: absolute; width: 100%; left: 52%;  z-index: -1; transform: translateX(-50%); width: 75%;}
#svgC {margin: 0 auto; width: 100%;}


/* ------------------------
    box-loader
------------------------*/
.box-loader {border-radius: 100%; margin: 0 auto; position: absolute; top: 15px; left: 15px;}
.box-loader span{display: inline-block; width: 10px; height: 10px; border-radius: 100%; background: #2575fc; margin: 0 5px; opacity: 0;}
.box-loader span:nth-child(1){animation: opacitychange 1s ease-in-out infinite;}
.box-loader span:nth-child(2){animation: opacitychange 1s ease-in-out 0.33s infinite;}
.box-loader span:nth-child(3){animation: opacitychange 1s ease-in-out 0.66s infinite;}


/*--rotation--*/

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes bar-top {
  0% {
    transform: scale(0, 1);
  }
  12.5% {
    transform: scale(1, 1);
  }
  87.5% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(0, 1);
  }
}
@keyframes bar-right {
  0% {
    transform: scale(1, 0);
  }
  12.5% {
    transform: scale(1, 0);
  }
  25% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(1, 1);
  }
  87.5% {
    transform: scale(1, 0);
  }
  100% {
    transform: scale(1, 0);
  }
}
@keyframes bar-bottom {
  0% {
    transform: scale(0, 1);
  }
  25% {
    transform: scale(0, 1);
  }
  37.5% {
    transform: scale(1, 1);
  }
  62.5% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(0, 1);
  }
  100% {
    transform: scale(0, 1);
  }
}
@keyframes bar-left {
  0% {
    transform: scale(1, 0);
  }
  37.5% {
    transform: scale(1, 0);
  }
  50% {
    transform: scale(1, 1);
  }
  62.5% {
    transform: scale(1, 0);
  }
  100% {
    transform: scale(1, 0);
  }
}

/*--opacitychange--*/

@keyframes opacitychange{
  0%, 100%{
    opacity: 0;
  }

  60%{
    opacity: 1;
  }
}

/* responsive */
@media (max-width: 1200px){
	#svg-container { width: 85%; }
}
@media (max-width: 992px){
	.md-mt-5 { margin-top: 50px !important; }
	/*Step*/
	.work-process .box-loader{display: none;}
	.step-desc p {max-width: 300px;  margin: 0 auto;}
	#svg-container {width: 100%; transform: rotate(90deg); left: 0; top: 50%;}
}


</style>