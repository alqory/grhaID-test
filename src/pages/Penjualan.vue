<script setup>
    import LayoutVue from '../components/Layout.vue';
    import { ref } from 'vue';

    const Tanggal = ref("")
    const Nama = ref("")
    const Jumlah = ref(0)
    const Harga = ref(0)
    const dbData = ref([])

    const submitForm = (e) => {
        dbData.value = [
            ...dbData.value,
            {
                id : Date.now() + "POW",
                tanggal : Tanggal,
                nama : Nama,
                jumlah : Jumlah,
                harga : Harga
            }
        ]

        Tanggal.value = ""
        Nama.value = ""
        Jumlah.value = 0
        Harga.value = 0
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
                    <label class="text-white my-2">Nama Barang / ID Barang</label>
                    <input v-model="Nama" class="py-3 px-4 focus:outline-gray-300 rounded-sm " type="text" required>
                </div>
                <div class="flex flex-col">
                    <label class="text-white my-2">Jumlah</label>
                    <input v-model="Jumlah" class="py-3 px-4 focus:outline-gray-300 rounded-sm " type="number" required>
                </div>
                <div class="flex flex-col">
                    <label class="text-white my-2">Harga</label>
                    <input v-model="Harga" class="py-3 px-4 focus:outline-gray-300 rounded-sm" type="number" required>
                </div>
                <button class="text-white bg-gray-500 w-max py-3 px-8 rounded-sm text-sm hover:bg-gray-600 transition duration-150" type="submit">Simpan</button>
            </form>
            <div arial-label="table-wrapper">
                    <table class="text-center text-white mt-20">
                        <tr>
                            <th>ID Penjualan</th>
                            <th>Tanggal</th>
                            <th>Nama/ID Barang</th>
                            <th>Jumlah</th>
                            <th>Harga</th>
                        </tr>
                        <tr v-for="data in dbData" class="mt-3">
                            <td>{{data.id}}</td>
                            <td>{{data.tanggal}}</td>
                            <td>{{data.nama}}</td>
                            <td>{{data.jumlah}}</td>
                            <td>{{data.harga}}</td>
                            <td class="flex">
                                <button  class="text-white bg-gray-500 w-max py-2 px-5 rounded-sm text-sm hover:bg-gray-600 transition duration-150 mr-2">Edit</button>
                                <button  class="text-white bg-gray-500 w-max py-2 px-5 rounded-sm text-sm hover:bg-gray-600 transition duration-150">Hapus</button>
                            </td>
                        </tr>
                    </table>
                </div>
        </section>
    </LayoutVue>
</template>

<style scoped>
    th {
        border: 1px solid white;
        padding: 30px 40px 30px 40px;
    }

    td {
        text-align: center;
        padding: 10px 0px 0px 40px;
    }
</style>