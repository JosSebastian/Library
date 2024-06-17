<script setup lang="ts"></script>

<template>
  <section class="max-w-screen min-h-screen flex">
    <div
      class="grow flex flex-col md:flex-row justify-evenly items-center gap-6"
    >
      <!-- Top -->
      <div
        class="w-full md:max-w-96 h-fit flex flex-col items-center md:items-start gap-6 text-center md:text-start"
      >
        <p class="text-lg text-violet-600 dark:text-violet-400">
          AUGUE ENIM ERAT
        </p>
        <p class="text-6xl font-bold">Sapien est urna amet venenatis</p>
        <p class="text-lg">
          Elit vis eleifend integer mi odio posuere duis mattis vestibulum
          penatibus libero mi felis massa vivamus porta viverra.
        </p>
        <UButton variant="outline" size="lg" class="w-fit h-fit">
          <p class="text-lg">Magna etiam lorem</p>
        </UButton>
      </div>

      <!-- Bottom -->
      <div class="w-full md:max-w-96 h-fit flex justify-center items-center">
        <UCard>
          <img src="https://placehold.co/300x450" width="100%" height="100%" />
        </UCard>
      </div>
    </div>
  </section>
</template>
