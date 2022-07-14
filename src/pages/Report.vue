<script setup>
    import LayoutVue from '../components/Layout.vue';
    import { parseCurrency, dummyProduct } from '../constant';
    import { computed, ref } from 'vue';
    import { jsPDF } from 'jspdf'
    import autoTable from 'jspdf-autotable'; 

    const startPage = ref(0)
    const initialPage = ref(1)
    const endPage = ref(3)
    const search = ref("")
    const refTable = ref(null)
    const doc = new jsPDF()

    const toPDF = () => {
        autoTable(doc, { 
            html : refTable.value 
        })
        doc.save("report.pdf")
    }

    const prev = () => {
       startPage.value = startPage.value - 3
       endPage.value = endPage.value - 3
       initialPage.value--
    }

    const next = () => {
       startPage.value = startPage.value + 3
       endPage.value = endPage.value + 3
       initialPage.value++
    }

    const Product = computed(()=> {
        return dummyProduct.slice(startPage.value, endPage.value).filter(item => item.tanggal.includes(search.value))
    })

</script>


<template>
    <LayoutVue>
        <section class="w-max mx-auto" aria-label="report-wrapper">
            <table ref="refTable" class="text-center  text-white mt-20">      
                <input v-model="search" type="text" class="text-black py-2 px-2  mb-2 focus:outline-gray-700" placeholder="cth: 11/02/2022"/> 
                    <tr>
                        <th>Tanggal</th>
                        <th>ID transaksi</th>
                        <th>Pembeli</th>
                        <th>Nama Barang</th>
                        <th>Jumlah</th>
                        <th>Total</th>
                        <th>Keterangan</th>
                    </tr>
                    <tr v-for="data in Product">
                        <td>{{data.tanggal}}</td>
                        <td>{{data.id}}</td>
                        <td>{{data.pembeli}}</td>
                        <td>{{data.nama}}</td>
                        <td>{{data.jumlah}}</td>
                        <td>{{parseCurrency(data.total)}}</td>
                        <td>{{data.keterangan}}</td>
                    </tr>
            </table>
            <div class="flex gap-3 items-center mt-2 text-white">
                <button :disabled="initialPage === 1 && true" @click="prev()" class="p-2 rounded-sm bg-gray-600 hover:bg-gray-700 text-sm">prev</button>
                <h1 class="font-bold">{{initialPage}} of {{Math.ceil(dummyProduct.length / 3)}}</h1>
                <button :disabled="initialPage == Math.ceil(dummyProduct.length / 3) ? true : false" @click="next()" class="p-2 rounded-sm bg-gray-600 hover:bg-gray-700 text-sm">next</button>
            </div>
             <button @click="toPDF()" class="px-3 py-2 rounded-sm text-white bg-gray-500 hover:bg-gray-600 mt-2">Export PDF</button>
        </section>
    </LayoutVue>
</template>


<style scoped>

    th {
        border: 1px solid rgb(143, 142, 142);
        padding: 15px 25px 15px 25px;
    }

    td {
        text-align: center;
        padding: 10px 0px 10px 0px;
    }
    tr:nth-child(2n) {
        background-color: rgb(79, 79, 79);
    }
    
</style>