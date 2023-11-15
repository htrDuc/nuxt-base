<script setup lang="ts"></script>

<template>
    <Html>
        <Body class="antialiased">
            <NuxtLayout>
                <NuxtLoadingIndicator
                    :height="5"
                    :duration="3000"
                    :throttle="400"
                />
                <NuxtPage />
            </NuxtLayout>
        </Body>
    </Html>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
