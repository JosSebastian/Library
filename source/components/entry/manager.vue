<script lang="ts" setup>
const props = defineProps({
  property: {
    type: String,
    default: undefined,
  },
});

const property = ref<string | undefined>(props.property);

const open = ref<boolean>(false);

const items = [
  [
    {
      label: "Create",
      icon: "i-heroicons-plus",
      click: () => {
        action.value = "Create";
        open.value = true;
      },
    },
    {
      label: "Update",
      icon: "i-heroicons-pencil-square",
      click: () => {
        action.value = "Update";
        open.value = true;
      },
    },
    {
      label: "Delete",
      icon: "i-heroicons-x-mark",
      click: () => {
        action.value = "Delete";
        open.value = true;
      },
    },
  ],
];
const action = ref<"Create" | "Update" | "Delete">();
</script>

<template>
  <div>
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
      <slot>
        <UButton
          color="white"
          label="Options"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        />
      </slot>
    </UDropdown>

    <EntryModal
      v-model:open="open"
      v-model:action="action"
      :property="property"
    />
  </div>
</template>
