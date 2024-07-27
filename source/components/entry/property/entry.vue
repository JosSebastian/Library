<script lang="ts" setup>
import { useEntriesStore, type Entry } from "~/stores/entry/entry";

const open = defineModel<boolean>("open");
const action = defineModel<"Create" | "Update" | "Delete">("action");
watch([open, action], () => {
  if (open.value === false) {
    selection.value = entriesstore.defaultEntry();
  }
});

const toast = useToast();

const entriesstore = useEntriesStore();
const entries = computed(() => entriesstore.entries);

const entry = ref<Entry>(entriesstore.defaultEntry());

const selection = ref<Entry>(entriesstore.defaultEntry());
watch(selection, () => {
  entry.value.entry_id = selection.value.entry_id;
  entry.value.user_id = selection.value.user_id;
  entry.value.entry_name = selection.value.entry_name;
  entry.value.entry_description = selection.value.entry_description;
  entry.value.entry_time_first = selection.value.entry_time_first;
  entry.value.entry_time_last = selection.value.entry_time_last;
});

const handleCancel = () => {
  open.value = false;
};
const handleConfirm = async () => {
  let value: Entry | undefined = undefined;

  switch (action.value) {
    case "Create":
      value = await entriesstore.createEntry(entry.value);
      break;
    case "Update":
      value = await entriesstore.updateEntry(entry.value);
      break;
    case "Delete":
      value = await entriesstore.deleteEntry(entry.value);
      break;
    default:
      break;
  }

  if (value == undefined) return;
  toast.add({ title: "Entry", description: "Success!" });

  selection.value = entriesstore.defaultEntry();
  open.value = false;
};
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex flex-col gap-1.5">
      <USelectMenu
        v-if="action != 'Create'"
        v-model="selection"
        :options="entries"
        option-attribute="entry_name"
        by="entry_id"
        placeholder="Entry..."
        :searchable="entriesstore.searchEntries"
        :debounce="150"
        clear-search-on-close
      />
      <UInput
        v-model="entry.entry_name"
        placeholder="Entry Name..."
        :disabled="action === 'Delete'"
      />
      <UTextarea
        v-model="entry.entry_description"
        placeholder="Entry Name..."
        :disabled="action === 'Delete'"
      />
    </div>

    <div class="w-full h-fit flex gap-3 justify-center">
      <UButton size="lg" variant="outline" @click="handleCancel">
        Cancel
      </UButton>
      <UButton size="lg" variant="solid" @click="handleConfirm">
        Confirm
      </UButton>
    </div>
  </div>
</template>
