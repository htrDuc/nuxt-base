<script setup lang="ts"></script>

<template>
    <div class="default-header flex h-10 justify-between">
        <div>
            <img src="~assets/images/favicon.png" alt="" />
            <!-- <UiImage
                src=""
                w="16"
                h="9"
                img-size="xs:300px sm:600 md:800px 1000px"
                alt="Logo"
                class="rounded-xl shadow-md transition-all hover:shadow-lg"
                preload
            ></UiImage> -->
        </div>
        <nav class="flex gap-4 text-base font-bold underline">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/products">Products</NuxtLink>
        </nav>
    </div>
</template>

<style scoped></style>
