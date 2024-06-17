<script setup lang="ts"></script>

<template>
  <section class="max-w-screen min-h-screen flex">
    <div class="grow flex flex-col justify-evenly items-center gap-6">
      <!-- Top -->
      <div class="w-full h-fit flex flex-col gap-6 text-center">
        <p class="text-lg text-violet-600 dark:text-violet-400">
          AUGUE ENIM ERAT
        </p>
        <p class="text-6xl font-bold">Proin luctus erat</p>
        <p class="text-lg">
          Ac mi dui parturient eleifend sociis purus suscipit nibh eget
        </p>
      </div>

      <!-- Middle -->
      <div
        class="w-full h-fit flex flex-col md:flex-row justify-center items-center gap-6 text-center"
      >
        <div
          class="w-full max-w-full md:max-w-96 h-fit flex justify-center items-center"
        >
          <UCard>
            <img
              src="https://placehold.co/300x450"
              width="100%"
              height="100%"
            />
          </UCard>
        </div>

        <div
          class="w-full md:max-w-96 flex flex-col gap-3 text-center md:text-start"
        >
          <div class="flex flex-col gap-3">
            <p class="text-3xl font-bold">Montes semper quam</p>
            <p class="text-lg">
              Mattis urna turpis nullam velit in vel feugiat malesuada orci eu
              auctor magnis odio nisi scelerisque adipiscing auctor.
            </p>
          </div>

          <UDivider />

          <div class="flex flex-col gap-3">
            <p class="text-3xl font-bold">Suscipit sit purus</p>
            <p class="text-lg">
              Porta pharetra lacinia risus gravida mus odio consequat ipsum
              dignissim dis rutrum etiam dolor duis nec mi euismod ultrices mi
              auctor col porttitor velit sed dignissim.
            </p>
          </div>

          <UDivider />

          <div class="flex flex-col gap-3">
            <p class="text-3xl font-bold">Gravida donec eget</p>
            <p class="text-lg">
              Viverra neque etiam gravida nulla hendrerit sit pharetra curae
              sodales sed aliquam primis nunc fusce ac fusce natoque.
            </p>
          </div>
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
