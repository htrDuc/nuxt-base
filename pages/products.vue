<script setup lang="ts">
const { data: products, pending } = await useLazyFetch(
    'https://fakestoreapi.com/products?limit=1000'
)
</script>

<template>
    <div v-if="pending">Loading ...</div>
    <div v-else class="grid grid-cols-5 gap-4">
        <div
            v-for="product in products"
            :key="product.id"
            class="flex flex-col rounded-md bg-white shadow-md"
        >
            <UiImage
                :src="product.image"
                w="16"
                h="9"
                img-size="xs:300px sm:600 md:800px 1000px"
                alt="Logo"
                class="rounded-xl shadow-md transition-all hover:shadow-lg"
                preload
            ></UiImage>
            <h2 class="mt-auto text-base text-black">{{ product.title }}</h2>
            <UiButton>Click</UiButton>
        </div>
    </div>
</template>

<style scoped></style>
