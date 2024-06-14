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
    <main class="flex-grow">
      <section />
    </main>

    <UDivider />

    <!-- Footer -->
    <footer class="flex justify-center items-center">
      <ULink>@Library</ULink>
    </footer>
  </div>
</template>
