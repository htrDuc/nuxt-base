<template>
    <div
        class="relative select-none overflow-hidden"
        :style="`aspect-ratio: ${w} / ${h}`"
    >
        <NuxtImg
            :src="src"
            class="h-full w-full select-none object-cover"
            :sizes="props.imgSize"
            :width="props.imgW"
            :height="props.imgH"
            quality="100"
            format="webp"
            fit="cover"
            :loading="!!preload ? 'eager' : 'lazy'"
            :preload="preload"
            placeholder="/images/null.png"
            :alt="props.alt"
            @load="onLoad"
        />

        <UiSkeleton
            v-if="!!loading"
            class="absolute left-0 top-0 h-full w-full rounded-none"
        ></UiSkeleton>
    </div>
</template>

<script setup>
const props = defineProps({
    src: { type: String, default: '' },
    imgSize: { type: [String, Number], default: '' },
    imgW: { type: [String, Number], default: '' },
    imgH: { type: [String, Number], default: '' },
    w: { type: [String, Number], default: '' },
    h: { type: [String, Number], default: '' },
    alt: { type: String, default: 'image' },
    preload: { type: Boolean, default: false },
})

const loading = ref(true)

const onLoad = () => (loading.value = false)
</script>
