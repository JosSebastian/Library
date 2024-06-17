<script setup lang="ts">
const open = ref<boolean>(false);
</script>

<template>
  <div class="w-full h-fit flex justify-between items-center">
    <ULink class="text-3xl font-semibold">Library</ULink>
    <UButton
      icon="i-heroicons-bars-3"
      variant="ghost"
      size="lg"
      @click="open = true"
    />

    <USlideover v-model="open">
      <div class="w-full h-full m-0 p-3">
        <div class="w-full h-fit m-0 px-3 py-0 flex justify-end">
          <UButton
            icon="i-heroicons-x-mark"
            variant="ghost"
            size="lg"
            @click="open = false"
          />
        </div>
      </div>
    </USlideover>
  </div>
</template>
