<script setup lang="ts"></script>

<template>
  <div class="w-full h-full m-0 p-3 flex-grow flex flex-col gap-3">
    <!-- Header -->
    <header class="px-3 py-0 flex justify-between items-center">
      <ULink class="text-3xl font-semibold">Library</ULink>
      <UButton icon="i-heroicons-bars-3" variant="ghost" size="lg" />
    </header>

    <UDivider />

    <!-- Body -->
    <main class="p-3 flex-grow flex flex-col gap-6">
      <!-- Section #1 -->
      <section class="max-w-screen min-h-screen flex">
        <div
          class="p-0 md:px-24 md:py-12 flex-grow flex flex-col md:flex-row justify-evenly items-center gap-6"
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

      <UDivider />

      <!-- Section #2 -->
      <section class="max-w-screen min-h-screen flex">
        <div
          class="p-0 md:px-24 md:py-12 flex-grow flex flex-col justify-evenly items-center gap-12"
        >
          <!-- Top -->
          <div>
            <div class="flex flex-col gap-6 text-center">
              <p class="text-lg text-violet-600 dark:text-violet-400">
                AUGUE ENIM ERAT
              </p>
              <p class="text-6xl font-bold">Auctor magnis tempus</p>
              <p class="text-lg">
                Mus leo nunc nullam lacus ata nibh tempor fermentum ultrices
              </p>
            </div>
          </div>

          <!-- Bottom -->
          <div class="flex flex-col items-center gap-12">
            <div class="flex flex-col md:flex-row gap-12 text-center">
              <!-- Left -->
              <div class="w-full md:w-1/3 h-fit flex flex-col gap-6">
                <img src="https://placehold.co/150" />
                <p class="text-3xl font-semibold">Eget lobortis</p>
                <p class="text-lg">
                  Elit vis eleifend integer mi odio posuere duis mattis
                  vestibulum penatibus libero mi felis massa vivamus porta
                  viverra.
                </p>
              </div>

              <!-- Middle -->
              <div class="w-full md:w-1/3 h-fit flex flex-col gap-6">
                <img src="https://placehold.co/150" />
                <p class="text-3xl font-semibold">Nascetur magna</p>
                <p class="text-lg">
                  Ata vis ridiculus quis elementum ipsum ligula purus porta
                  egestas nulla lorem rutrum massa pretium vis amet rhoncus id.
                </p>
              </div>

              <!-- Right -->
              <div class="w-full md:w-1/3 h-fit flex flex-col gap-6">
                <img src="https://placehold.co/150" />
                <p class="text-3xl font-semibold">Dis vivamus</p>
                <p class="text-lg">
                  Tortor sed donec etiam euismod fusce magnis malesuada nisi
                  erat lorem magna nulla rhoncus cep luctus non fringilla.
                </p>
              </div>
            </div>

            <div>
              <UButton variant="outline" size="lg" class="w-fit h-fit">
                <p class="text-lg">Magna etiam lorem</p>
              </UButton>
            </div>
          </div>
        </div>
      </section>

      <UDivider />

      <!-- Section #3 -->
      <section class="max-w-screen min-h-screen flex">
        <div
          class="p-0 md:px-24 md:py-12 flex-grow flex flex-col justify-evenly items-center gap-12"
        >
          <!-- Top -->
          <div>
            <div class="flex flex-col gap-6 text-center">
              <p class="text-lg text-violet-600 dark:text-violet-400">
                AUGUE ENIM ERAT
              </p>
              <p class="text-6xl font-bold">Auctor magnis tempus</p>
              <p class="text-lg">
                Mus leo nunc nullam lacus ata nibh tempor fermentum ultrices
              </p>
            </div>
          </div>

          <!-- Bottom -->
          <div class="w-full h-fit flex flex-col items-center gap-12">
            <div
              class="w-full h-fit flex flex-col md:flex-row justify-evenly items-center gap-12 text-center"
            >
              <!-- Left -->
              <div class="w-full md:w-1/2 h-fit flex justify-center">
                <div class="w-full md:w-3/4 md:min-w-60 md:max-w-96">
                  <img
                    src="https://placehold.co/450x600"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>

              <!-- Right -->
              <div
                class="w-full md:w-1/2 h-full flex flex-col justify-evenly gap-6"
              >
                <div class="w-full h-fit flex flex-col gap-6">
                  <p class="text-3xl font-semibold">Montes semper quam</p>
                  <p class="text-lg">
                    Mattis urna turpis nullam velit in vel feugiat malesuada
                    orci eu auctor magnis odio nisi scelerisque adipiscing
                    auctor.
                  </p>
                </div>

                <UDivider />

                <div class="w-full h-fit flex flex-col gap-6">
                  <p class="text-3xl font-semibold">Montes semper quam</p>
                  <p class="text-lg">
                    Mattis urna turpis nullam velit in vel feugiat malesuada
                    orci eu auctor magnis odio nisi scelerisque adipiscing
                    auctor.
                  </p>
                </div>

                <UDivider />

                <div class="w-full h-fit flex flex-col gap-6">
                  <p class="text-3xl font-semibold">Montes semper quam</p>
                  <p class="text-lg">
                    Mattis urna turpis nullam velit in vel feugiat malesuada
                    orci eu auctor magnis odio nisi scelerisque adipiscing
                    auctor.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <UButton variant="outline" size="lg" class="w-fit h-fit">
                <p class="text-lg">Magna etiam lorem</p>
              </UButton>
            </div>
          </div>
        </div>
      </section>
    </main>

    <UDivider />

    <!-- Footer -->
    <footer class="px-3 py-0 flex justify-center items-center">
      <ULink>@Library</ULink>
    </footer>
  </div>
</template>
