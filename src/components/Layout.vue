<script setup>
    import SidebarVue from './Sidebar.vue';

</script>

<template>
    <main class="flex h-[800px] " aria-label="main-container">
        <section class="w-[20%] h-[100vh] fixed bg-gray-600">
            <SidebarVue />
        </section>
        <section class="w-[80%] ml-auto mr-0 bg-gray-800" aria-label="body-wrapper">
            <slot></slot>
        </section>
    </main>
</template>
