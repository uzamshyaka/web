<template>
  <Section class="relative bg-lime-600 py-15">
    <div class="max-w-7xl mx-auto px-6">
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-30">
    <div
      v-for="item in news"
      :key="item.id"
      class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
    >
      <!-- Image -->
      <div class="h-56 overflow-hidden">
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <!-- Content -->
      <div class="p-6 flex flex-col justify-between h-44">
        <h3 class="text-lime-600 font-semibold text-lg leading-snug">
          {{ item.title }}
        </h3>

        <div class="mt-6 text-sm text-gray-500 flex gap-2">
          <span class="uppercase">{{ item.category }}</span>
          <span>|</span>
          <span>{{ item.date }}</span>
        </div>
      </div>
    </div>
  </div>
  </div>
  </section>
</template>


<script setup>


const news = [
  {
    id: 1,
    title: "Africa Tech Summit – Driving Financial Inclusion Through Innovation",
    image: "/images/demu71.jpg",
    category: "TRENDING",
    date: "11 FEB 2026"
  },
  {
    id: 2,
    title: "Expansion: January 12, 2026",
    image: "/images/demu72.jpg",
    category: "BUSINESS",
    date: "15 JAN 2026"
  },
  {
    id: 3,
    title: "End-of-Year Recognition: December, 2025",
    image: "/images/demu73.jpg",
    category: "RECOGNITION",
    date: "17 NOV 2025"
  }
]
</script>