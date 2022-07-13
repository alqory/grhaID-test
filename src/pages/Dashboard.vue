<script setup>
    import LayoutVue from '../components/Layout.vue';
    import Chart from "chart.js/auto"
    import { onMounted, ref, computed } from 'vue';
    import { dummyProduct, parseCurrency } from '../constant';


    const refPie = ref(null)
    const pieConfig = {
         type: 'doughnut',
         data: {
            labels : ["Kursi", "Meja", "Lemari", "Ranjang", "Cermin"],
            datasets : [{
                label : "Selling",
                data: [300, 50, 100, 70, 120],
                borderColor : "#3a3a3b",
                 backgroundColor: [
                '#089f8f',
                '#64c987',
                '#c4ec74',
                "#843861",
                "#582a57"
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

    const Product = computed(()=> {
        return dummyProduct
    })

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
            <div class="flex flex-row items-start gap-10 text-gray-300 mt-20" aria-label="table-sum-container">
                <div class="bg-gray-700 w-max rounded-md p-5 border-l-4" aria-label="sumary-wrapper">
                    <p class="font-light">Summary</p>
                    <h1 class="text-2xl font-bold">Rp 23.000.000 ,-</h1>
                </div>
                <div arial-label="table-wrapper">
                    <table ref="refTable" class="text-center text-white ">      
                            <tr>
                                <th>Tanggal</th>
                                <th>ID transaksi</th>
                                <th>Pembeli</th>
                                <th>Nama Barang</th>
                                <th>Jumlah</th>
                                <th>Total</th>
                            </tr>
                            <tr v-for="data in Product">
                                <td>{{data.tanggal}}</td>
                                <td>{{data.id}}</td>
                                <td>{{data.pembeli}}</td>
                                <td>{{data.nama}}</td>
                                <td>{{data.jumlah}}</td>
                                <td>{{parseCurrency(data.total)}}</td>
                            </tr>
                    </table>
                </div>
            </div>
        </section>
    </LayoutVue>
</template>


<style scoped>
   
    th {
        border: 1px solid rgb(143, 142, 142);
        padding: 10px 27px 10px 27px;
    }

    td {
        text-align: center;
        padding: 10px 0px 10px 0px;
    }
    tr:nth-child(2n) {
        background-color: rgb(79, 79, 79);
    }
</style>