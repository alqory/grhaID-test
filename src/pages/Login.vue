<script setup>
    import { useRouter } from 'vue-router'
    import Logo from '../assets/Logo.svg'

    const router = useRouter()

    const submit = () => {
        router.push('/')
    }

</script>

<template>
    <section class="w-[100vw] bg-gray-600 h-[100vh] flex flex-col justify-center items-center">
        <div class="bg-gray-900 w-max p-1 rounded-md mb-10 -translate-x-[8rem]">
             <img :src="Logo" alt="logo">
        </div>
        <form class="bg-gray-100 rounded-md p-5" @submit.prevent="submit">
            <div class="flex flex-col">
                <label class="font-light my-2" for="">username</label>
                <input class="w-[350px] p-3 rounded-md focus:outline-sky-300" type="text">
            </div>
            <div class="flex flex-col">
                <label class="font-light my-2" for="">password</label>
                <input class="w-[350px] p-3 rounded-md focus:outline-sky-300" type="password">
            </div>
            <button 
                 type="submit"
                 class="w-max bg-gray-700 rounded-sm px-7 font-light hover:bg-gray-800 py-1 text-white my-4"
            >Login</button>
        </form>
    </section>
</template>