<script setup lang="ts"></script>

<template>
  <div class="w-full h-full m-0 p-3 flex-grow flex flex-col gap-3">
    <!-- Header -->
    <header class="w-full h-fit m-0 px-3 py-0">
      <HomeHeader />
    </header>

    <UDivider />

    <!-- Body -->
    <main
      class="w-full h-full m-0 p-3 grow flex flex-col justify-center items-center gap-6"
    >
      <!-- Section #1 -->
      <section class="w-full h-full grow flex justify-center items-center">
        <div
          class="flex flex-col gap-3 justify-center items-center text-center"
        >
          <p class="text-3xl text-violet-600 dark:text-violet-400">
            Welcome to Library!
          </p>
          <div class="flex flex-col gap-1.5 justify-center items-center">
            <p>Please Check Your Inbox to Confirm Your Account.</p>
            <ULink to="/authentication?sign=in">
              <UButton class="w-fit h-fit" size="lg">Sign In</UButton>
            </ULink>
          </div>
        </div>
      </section>
    </main>

    <UDivider />

    <!-- Footer -->
    <footer class="w-full h-fit m-0 px-3 py-0">
      <HomeFooter />
    </footer>
  </div>
</template>
