<script setup>
    import LayoutVue from '../components/Layout.vue';
    import { ref } from 'vue';
    import { parseCurrency } from '../constant/index'

    const ID = ref("")
    const Tanggal = ref("")
    const Pembeli = ref("")
    const Barang = ref("")
    const Jumlah = ref(0)
    const Harga = ref(0)
    const Keterangan = ref("")
    const dbData = ref([])

    const submitForm = (e) => {
        
        if(ID.value === "") {
            dbData.value = [
            ...dbData.value,
            {
                id : Date.now() + "POW",
                tanggal : Tanggal.value,
                pembeli : Pembeli.value,
                barang : Barang.value,
                jumlah : Jumlah.value,
                harga : Harga.value,
                total : Jumlah.value * Harga.value,
                keterangan : Keterangan.value
            }
         ]
        }else {
            
            const update = [...dbData.value].find((item) => item.id === ID.value)
            update.id = ID.value
            update.tanggal = Tanggal.value
            update.pembeli = Pembeli.value
            update.Barang = Barang.value
            update.jumlah = Jumlah.value
            update.harga = Harga.value
            update.keterangan = Keterangan.value

        }

        ID.value = ""
        Tanggal.value = ""
        Pembeli.value = ""
        Barang.value = ""
        Jumlah.value = 0
        Harga.value = 0
        Keterangan.value = ""
    }

    const handleEdit = (id) => {
        const Data = dbData.value.find((item) => item.id === id)
 
        ID.value = Data.id
        Tanggal.value = Data.tanggal
        Pembeli.value = Data.pembeli
        Barang.value = Data.barang
        Jumlah.value = Data.jumlah
        Harga.value = Data.harga
        Keterangan.value = Data.keterangan
    }
    const handleRemove = (id) => {
        // alert(id)
        dbData.value = [...dbData.value].filter((data) => data.id !== id )
    }


</script>

<template>
    <LayoutVue>
        <section class="p-5">
            <form class="w-[70%] flex flex-col gap-4" @submit.prevent="submitForm">
                <div class="flex flex-col">
                    <label class="text-white my-2" for="">Tanggal</label>
                    <input v-model="Tanggal" class="py-3 px-4 rounded-sm focus:outline-gray-300" type="date" required >
                </div>
                <div class="flex flex-col">
                    <label class="text-white my-2">Pembeli</label>
                    <input v-model="Pembeli" class="py-3 px-4 focus:outline-gray-300 rounded-sm " type="text" required>
                </div>
                <div class="flex flex-col">
                    <label class="text-white my-2">Nama Barang</label>
                    <input v-model="Barang" class="py-3 px-4 focus:outline-gray-300 rounded-sm " type="text" required>
                </div>
                <div class="flex flex-col">
                    <label class="text-white my-2">Jumlah</label>
                    <input v-model="Jumlah" class="py-3 px-4 focus:outline-gray-300 rounded-sm " type="number" required>
                </div>
                <div class="flex flex-col">
                    <label class="text-white my-2">Harga</label>
                    <input v-model="Harga" class="py-3 px-4 focus:outline-gray-300 rounded-sm" type="number" required>
                </div>
                <div class="flex flex-col">
                     <label class="text-white my-2">Keterangan</label>
                    <input v-model="Keterangan" class="py-3 px-4 focus:outline-gray-300 rounded-sm " type="text" required>
                </div>
                <button class="text-white bg-gray-500 w-max py-3 px-8 rounded-sm text-sm hover:bg-gray-600 transition duration-150" type="submit">Simpan</button>
            </form>
            <div arial-label="table-wrapper">
                    <table class="text-center text-white mt-20">
                        <tr>
                            <th>ID</th>
                            <th>Tanggal</th>
                            <th>Pembeli</th>
                            <th>Barang</th>
                            <th>Jumlah</th>
                            <th>Harga</th>
                            <th>Total</th>
                            <th>Ket.</th>
                        </tr>
                        <tr v-for="data in dbData" class="py-2">
                            <td>{{data.id}}</td>
                            <td>{{data.tanggal}}</td>
                            <td>{{data.pembeli}}</td>
                            <td>{{data.barang}}</td>
                            <td>{{data.jumlah}}</td>
                            <td>{{parseCurrency(data.harga)}}</td>
                            <td>{{parseCurrency(data.total)}}</td>
                            <td>{{data.keterangan}}</td>
                            <td class="flex">
                                <button @click="handleEdit(data.id)"  class="text-white bg-gray-500 w-max py-2 px-5 rounded-sm text-sm hover:bg-gray-600 transition duration-150 mr-2">Edit</button>
                                <button @click="handleRemove(data.id)" class="text-white bg-gray-500 w-max py-2 px-5 rounded-sm text-sm hover:bg-gray-600 transition duration-150">Hapus</button>
                            </td>
                        </tr>
                    </table>
                </div>
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

    td:nth-child(1) {
        font-size: .8rem;
    }

    tr:nth-child(2n) {
    background-color: rgb(79, 79, 79);
   }
</style>