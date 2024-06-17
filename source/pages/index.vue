<script setup lang="ts"></script>

<template>
  <div class="w-full h-full m-0 p-3 flex-grow flex flex-col gap-3">
    <!-- Header -->
    <header class="w-full h-fit m-0 px-3 py-0">
      <HomeHeader />
    </header>

    <UDivider />

    <!-- Body -->
    <main class="w-full h-full m-0 px-3 py-0 grow flex flex-col gap-6">
      <HomeSectionOne />
      <UDivider />
      <HomeSectionTwo />
      <UDivider />
      <HomeSectionThree />
    </main>

    <UDivider />

    <!-- Footer -->
    <footer class="w-full h-fit m-0 px-3 py-0">
      <HomeFooter />
    </footer>
  </div>
</template>
