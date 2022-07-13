<script setup>
    import LayoutVue from '../components/Layout.vue';
    import { ref, watch, computed } from 'vue';
    import { truncateChars } from '../constant/index'

    const isShow = ref(false)
    const formRef = ref(null)

    const isShowMutation = ref(false)
    const mutationRef = ref(null)
    const mutationId = ref("")

    const dbDataBarang = ref([])
    const tanggal = ref("")
    const id = ref("")
    const nama = ref("")
    const jumlah = ref(0)
    const ket = ref("")

    const filterNama = ref("")


    const submitForm = () => {

        if(id.value === "") {

             dbDataBarang.value = [...dbDataBarang.value, {
                tanggal : tanggal.value,
                id : `#${Date.now()}-abc`,
                nama : nama.value,
                jumlah : jumlah.value,
                mutation : [ket.value]
            }]

            

        }else{

            const update = [...dbDataBarang.value].find((item) => item.id === id.value)
            update.id = id.value
            update.tanggal = tanggal.value
            update.nama = nama.value
            update.jumlah = jumlah.value
            update.mutation = [ket.value, ...update.mutation]
           
        }

        console.log(dbDataBarang.value[0].mutation)

        id.value = ""
        tanggal.value = ""
        nama.value = ""
        jumlah.value = 0
        ket.value = ""
    }

    

    const deleteBarang = (id) => {
        dbDataBarang.value = [...dbDataBarang.value].filter((item) => item.id !== id)
    }

    const editBarang = (ids) => {
        const barang = [...dbDataBarang.value].find((item)=> item.id === ids)
        id.value = barang.id
        tanggal.value = barang.tanggal
        nama.value = barang.nama
        jumlah.value = barang.jumlah
        ket.value = barang.mutation[0]

        isShow.value = true
    }

    const Barang = computed(()=> {
        return dbDataBarang.value.filter((item) => item.nama.toLowerCase().includes(filterNama.value))
    })

    const mutationHistory = (id) => {
        mutationId.value = id

        isShowMutation.value = !isShowMutation.value
    }

    watch(isShow, (current, prev) => {
        if(current === true) {
            formRef.value.classList.remove("-translate-y-[800px]")
        }else{
            formRef.value.classList.add("-translate-y-[800px]")
        }
    })




</script>

<template>
    <LayoutVue>
        <section class="relative text-white p-5" aria-label="user-product-wrapper">
            <div class="flex justify-between" aria-label="action-wrapper">
                <button @click="isShow=true" class="text-white bg-gray-500 w-max py-2 px-5 rounded-sm text-sm hover:bg-gray-600 transition duration-150">Add</button>
                <input v-model="filterNama" class="text-black px-2 py-2 w-[30%] rounded-sm " type="text" placeholder="cari barang ?">
            </div>

            <div arial-label="table-wrapper">
                <table class="text-center text-white mt-20">
                    <tr>
                        <th>Tanggal</th>
                        <th>ID Barang</th>
                        <th>Nama Barang</th>
                        <th>Jumlah</th>
                        <th>Keterangan</th>
                    </tr>
                    <tr v-for="data in Barang" class="py-2">
                        <td>{{data.tanggal}}</td>
                        <td>{{data.id}}</td>
                        <td>{{data.nama}}</td>
                        <td>{{data.jumlah}}</td>
                        <td>{{truncateChars(data.mutation[0])}}</td>
                        <td class="flex">
                            <button @click="mutationHistory(data.id)" class="text-white bg-gray-500 w-max py-1 px-3 rounded-sm text-sm hover:bg-gray-600 transition duration-150 mr-2">Mutation</button>
                            <button @click="editBarang(data.id)" class="text-white bg-gray-500 w-max  py-1 px-3 rounded-sm text-sm hover:bg-gray-600 transition duration-150 mr-2">Edit</button>
                            <button @click="deleteBarang(data.id)" class="text-white bg-gray-500 w-max  py-1 px-3 rounded-sm text-sm hover:bg-gray-600 transition duration-150">Hapus</button>
                        </td>
                    </tr>
                </table>
            </div>

            <form @submit.prevent="submitForm" ref="formRef" class="-translate-y-[800px] text-black absolute transition duration-300 ease-linear top-10 left-24 bg-gray-600 p-4 w-[70%] flex flex-col gap-1">
                <button @click="isShow = !isShow" class="w-max p-2 rounded-sm bg-white text-sm text-black absolute right-0 top-0">close</button>


                <div class="flex flex-col mt-1">
                    <label class="text-white my-1" for="">Tanggal</label>
                    <input v-model="tanggal" class="py-3 px-4 rounded-sm focus:outline-gray-300" type="date" required >
                </div>
                <div class="flex flex-col">
                    <label class="text-white my-1">Nama Barang</label>
                    <input v-model="nama" class="py-3 px-4 focus:outline-gray-300 rounded-sm " type="text" required>
                </div>
                <div class="flex flex-col">
                    <label  class="text-white my-1">Jumlah</label>
                    <input v-model="jumlah" class="py-3 px-4 focus:outline-gray-300 rounded-sm " type="number" required>
                </div>
                <div class="flex flex-col">
                    <label class="text-white my-1">Keterangan</label>
                    <textarea v-model="ket" class="p-3" cols="30" rows="5"></textarea>
                </div>
                <button @click="isShow = false" class="text-white mt-2 bg-gray-500 w-max py-3 px-8 rounded-sm text-sm hover:bg-gray-600 transition duration-150" type="submit">Simpan</button>
            </form>

            <div 
                ref="mutationRef" 
                :style="{ transform : isShowMutation ? 'translateX(0px)' : 'translateX(550px)'}" 
                class="fixed text-white w-[500px] right-4 rounded-sm bg-gray-600 p-4 transition duration-300 ease-linear" 
                arial-label="mutation-wrapper"
                v-for="datas in Barang.filter((item) => item.id == mutationId)"
                >
                <div class="my-3">
                    <p class="text-sm font-light">{{datas.id}}</p>
                    <h1 class="text-2xl font-semibold">{{datas.nama}}</h1>
                </div>
                <div class="flex flex-col gap-1" aria-label="mutation-history">
                    <div v-for="mutation in datas.mutation" class="flex gap-1 items-center border-l-[1px] w-max pl-2 pb-8" aria-label="mutation-history-wrapper">
                        <div class="h-3 w-3 rounded-full bg-sky-400"></div>
                        <h1 class="font-light">{{mutation}} | {{datas.tanggal}}</h1>
                    </div>
                </div>
            </div>

        </section>
    </LayoutVue>
</template>

<style scoped>
    th {
        border: 1px solid rgb(143, 142, 142);
        padding: 15px 40px 15px 40px;
    }

    td {
        text-align: center;
        padding: 10px 0px 10px 0px;
    }

    tr:nth-child(2n) {
    background-color: rgb(79, 79, 79);
   }
</style>