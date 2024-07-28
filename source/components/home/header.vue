<script setup lang="ts">
const userstore = useUserStore();

const open = ref<boolean>(false);
</script>

<template>
  <div class="w-full h-fit flex justify-between items-center">
    <ULink class="text-3xl font-semibold" to="/">Library</ULink>
    <UButton
      icon="i-heroicons-bars-3"
      variant="ghost"
      size="lg"
      @click="open = true"
    />

    <USlideover v-model="open">
      <div class="w-full h-full m-0 p-3 flex flex-col">
        <div class="w-full h-fit m-0 px-3 py-0 flex flex-row justify-end">
          <UButton
            icon="i-heroicons-x-mark"
            variant="ghost"
            size="lg"
            @click="open = false"
          />
        </div>

        <div
          class="w-full h-fit m-0 px-3 py-0 grow flex flex-col justify-start items-center"
        >
          <div class="flex flex-col items-center text-xl font-medium">
            <div v-if="userstore.user">
              <ULink to="/app" @click="open = false"> App </ULink>
            </div>

            <div v-if="userstore.user">
              <ULink to="/home/authentication?sign=out" @click="open = false">
                Sign Out
              </ULink>
            </div>
            <div v-else-if="!userstore.user" class="flex gap-3">
              <ULink to="/home/authentication?sign=up" @click="open = false">
                Sign Up
              </ULink>
              <span>/</span>
              <ULink to="/home/authentication?sign=in" @click="open = false">
                Sign In
              </ULink>
            </div>
          </div>
        </div>
      </div>
    </USlideover>
  </div>
</template>
