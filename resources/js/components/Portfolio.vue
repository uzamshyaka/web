<template>
  <div
    class="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center fixed bottom-10 right-5 shadow-lg hover:scale-110 transition-transform cursor-pointer"
    @click="openChat"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-7 h-7 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M20.52 3.48A11.91 11.91 0 0012.03 0C5.4 0 .02 5.38.02 12c0 2.11.55 4.16 1.6 5.97L0 24l6.2-1.63A11.95 11.95 0 0012.03 24c6.63 0 12.01-5.38 12.01-12 0-3.2-1.25-6.2-3.52-8.52z"
      />
    </svg>
  </div>
</template>

<script setup>
const openChat = () => {
  // 1. Load script if not already loaded
  if (!document.getElementById('yeastar-chat')) {
    const script = document.createElement('script');
    script.id = 'yeastar-chat';
    script.src =
      "https://demulla.ras.yeastar.com/live_chat.v1.0.0.js?channelNumber=LC00000";
    script.async = true;

    script.onload = () => {
      showChat();
    };

    document.body.appendChild(script);
  } else {
    // 2. If already loaded → just show it
    showChat();
  }
};

// function to show chat
const showChat = () => {
  const interval = setInterval(() => {
    const chat = document.getElementById('ys-chatbot-container');

    if (chat) {
      chat.style.display = 'block';

    
      chat.style.position = 'fixed';
      chat.style.bottom = '20px';
      chat.style.right = '20px';

      // keep it above everything
      chat.style.zIndex = '999999';

      clearInterval(interval);
    }
  }, 300);
};
</script>