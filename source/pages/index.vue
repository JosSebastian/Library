<script setup lang="ts"></script>

<template>
  <div class="w-full h-full m-0 p-3 flex-grow flex flex-col gap-3">
    <!-- Header -->
    <header class="flex justify-between items-center">
      <ULink class="text-3xl font-semibold">Library</ULink>
      <UButton icon="i-heroicons-bars-3" variant="ghost" size="lg" />
    </header>

    <UDivider />

    <!-- Body -->
    <main class="p-3 flex-grow flex flex-col gap-6">
      <!-- Section #1 -->
      <section class="max-w-screen min-h-screen flex">
        <div
          class="p-0 md:p-24 flex-grow flex flex-col md:flex-row justify-evenly items-center gap-6"
        >
          <!-- Top -->
          <div class="w-full h-fit flex justify-center">
            <div class="flex flex-col gap-6">
              <p class="text-lg text-violet-600 dark:text-violet-400">
                UNTITLED
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
          </div>

          <!-- Bottom -->
          <div class="w-full h-fit flex justify-center">
            <div class="w-full md:w-3/4 md:min-w-60 md:max-w-96">
              <img
                src="https://placehold.co/450x600"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </section>
    </main>

    <UDivider />

    <!-- Footer -->
    <footer class="flex justify-center items-center">
      <ULink>@Library</ULink>
    </footer>
  </div>
</template>
