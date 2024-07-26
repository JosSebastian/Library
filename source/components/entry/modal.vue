<script lang="ts" setup>
const props = defineProps({
  property: {
    type: String,
    default: undefined,
  },
});

const property = ref<string | undefined>(props.property);

const open = defineModel<boolean>("open");

const items = ["Create", "Update", "Delete"];
const action = defineModel<"Create" | "Update" | "Delete">("action");
</script>

<template>
  <div>
    <div @click="open = true">
      <slot />
    </div>

    <UModal v-model="open">
      <UCard>
        <div class="flex flex-col gap-3">
          <div class="flex flex-row gap-3 justify-between items-center">
            <p v-if="property != undefined" class="text-xl font-semibold">
              {{ property.at(0)?.toUpperCase() + property.slice(1) }}
            </p>

            <div class="flex gap-1.5 items-center">
              <USelectMenu v-model="action" :options="items" class="min-w-24" />
              <UButton
                icon="i-heroicons-x-mark"
                variant="ghost"
                @click="open = false"
              />
            </div>
          </div>
        </div>
      </UCard>
    </UModal>
  </div>
</template>
