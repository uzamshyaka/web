<template>
    <div class="w-[600px] h-[200px] flex items-center justify-center ">
<canvas ref="chartCanvas"></canvas>
</div>
</template>
<script setup>
    import { onMounted, ref} from 'vue';
    import { Chart,
              LineController,
              LineElement,
              PointElement,
              LinearScale,
              CategoryScale,
              Filler,
              Tooltip,
          
     } from 'chart.js';

      Chart.register(
        LineController,
        LineElement,
        PointElement,
        LinearScale,
        CategoryScale,
        Filler,
        Tooltip,
      )
      const chartCanvas = ref(null);
        onMounted(() => {
            const ctx = chartCanvas.value.getContext('2d');
            const gradient= ctx.createLinearGradient(0,0,0,400);
            gradient.addColorStop(0,'rgba(251,140,0,0.5)');
            gradient.addColorStop(1,'rgba(251,140,0,0)');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                    datasets: [
                        { 
                            data: [120, 190,200,300,400,500,600],
                            borderColor: '#FB8C00',
                            fill: true,
                            tension: 0.4,
                            backgroundColor: gradient,
                            pointRadius: 2,
                            pointBackgroundColor: '#FB8C00',
                            borderWidth: 2,
                            pointHoverBackgroundColor: "#FB8C00"

                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animations:{
                        tension: {
                            duration: 1000,
                            easing: 'linear',
                            from: 0.4,
                            to: 0.4,
                            loop: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: false  
                        },

                    }


                }
            })
        })
</script>