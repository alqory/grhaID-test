<script setup>
    import LayoutVue from '../components/Layout.vue';
    import Chart from "chart.js/auto"
    import { onMounted, ref } from 'vue';


    const refPie = ref(null)
    const pieConfig = {
         type: 'doughnut',
         data: {
            labels : ["Hendri", "Alqory", "Alqurun"],
            datasets : [{
                label : "Selling",
                data: [300, 50, 100],
                borderColor : "#3a3a3b",
                backgroundColor: [
                '#7746e0',
                '#fcf87b',
                '#36477f'
                ],
            }]
         },
    }

    const refBar = ref(null)
    const barConfig = {
         type: 'bar',
         data: {
            labels : ["Kursi", "Meja", "Lemari", "Ranjang", "Cermin"],
            datasets : [{
                label : "Selling",
                data: [300, 50, 100, 70, 120],
                backgroundColor: [
                '#089f8f',
                '#64c987',
                '#c4ec74',
                "#843861",
                "#582a57"
                ],
                hoverOffset: 1
            }]
         },
    }

onMounted(()=> {

    Chart.defaults.color = "#ffffff"
    Chart.defaults.borderColor = "#77776a"
    
     new Chart(refPie.value, pieConfig)
     new Chart(refBar.value, barConfig)
})
    
</script>

<template>
    <LayoutVue>
        <section class="p-5">
            <div class="flex gap-10" aria-label="chart-container">
                <div class="w-[30%] rounded-md shadow-sm p-2" aria-label="pie-container">
                    <canvas ref="refPie"></canvas>
                </div>
                <div class="w-[65%]"  aria-label="pie-container">
                    <canvas ref="refBar"></canvas>
                </div>
            </div>
            <div class="flex gap-10 text-gray-300 mt-20" aria-label="table-sum-container">
                <div class="bg-gray-700 w-max rounded-md p-5 border-l-4" aria-label="sumary-wrapper">
                    <p class="font-light">Summary</p>
                    <h1 class="text-3xl">Rp 23.000.000 ,-</h1>
                </div>
                <div arial-label="table-wrapper">
                    <table class="text-center">
                        <tr>
                            <th>Nama Barang</th>
                            <th>Harga</th>
                            <th>qty</th>
                            <th>total</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Mexico</td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    </LayoutVue>
</template>


<style scoped>
    th {
        border: 1px solid gray;
        padding: 30px 65px 30px 65px;
    }
</style>