<script setup lang="ts"></script>

<template>
  <section class="max-w-screen min-h-screen flex">
    <div class="grow flex flex-col justify-evenly items-center gap-6">
      <!-- Top -->
      <div class="w-full h-fit flex flex-col gap-6 text-center">
        <p class="text-lg text-violet-600 dark:text-violet-400">
          AUGUE ENIM ERAT
        </p>
        <p class="text-6xl font-bold">Auctor magnis tempus</p>
        <p class="text-lg">
          Mus leo nunc nullam lacus ata nibh tempor fermentum ultrices
        </p>
      </div>

      <!-- Middle -->
      <div
        class="w-full h-fit flex flex-col md:flex-row justify-center gap-6 text-center"
      >
        <!-- Left -->
        <div class="w-full md:max-w-80 h-full flex flex-col items-center gap-6">
          <UCard>
            <img src="https://placehold.co/300" />
          </UCard>
          <p class="text-3xl font-bold">Eget lobortis</p>
          <p class="text-lg">
            Elit vis eleifend integer mi odio posuere duis mattis vestibulum
            penatibus libero mi felis massa vivamus porta viverra.
          </p>
        </div>

        <!-- Middle -->
        <div class="w-full md:max-w-80 h-full flex flex-col items-center gap-6">
          <UCard>
            <img src="https://placehold.co/300" />
          </UCard>
          <p class="text-3xl font-bold">Nascetur magna</p>
          <p class="text-lg">
            Ata vis ridiculus quis elementum ipsum ligula purus porta egestas
            nulla lorem rutrum massa pretium vis amet rhoncus id.
          </p>
        </div>

        <!-- Right -->
        <div class="w-full md:max-w-80 h-full flex flex-col items-center gap-6">
          <UCard>
            <img src="https://placehold.co/300" />
          </UCard>
          <p class="text-3xl font-bold">Dis vivamus</p>
          <p class="text-lg">
            Tortor sed donec etiam euismod fusce magnis malesuada nisi erat
            lorem magna nulla rhoncus cep luctus non fringilla.
          </p>
        </div>
      </div>

      <!-- Bottom -->
      <div class="w-full h-hit flex justify-center">
        <UButton variant="outline" size="lg" class="w-fit h-fit">
          <p class="text-lg">Magna etiam lorem</p>
        </UButton>
      </div>
    </div>
  </section>
</template>
