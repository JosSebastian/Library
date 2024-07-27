<script lang="ts" setup>
import { useGenresStore, type Genre } from "~/stores/entry/genre";

const open = defineModel<boolean>("open");
const action = defineModel<"Create" | "Update" | "Delete">("action");
watch([open, action], () => {
  if (open.value === false) {
    selection.value = genresstore.defaultGenre();
  }
});

const toast = useToast();

const genresstore = useGenresStore();
const genres = computed(() => genresstore.genres);

const genre = ref<Genre>(genresstore.defaultGenre());

const selection = ref<Genre>(genresstore.defaultGenre());
watch(selection, () => {
  genre.value.genre_id = selection.value.genre_id;
  genre.value.user_id = selection.value.user_id;
  genre.value.genre_name = selection.value.genre_name;
});

const handleCancel = () => {
  open.value = false;
};
const handleConfirm = async () => {
  let value: Genre | undefined = undefined;

  switch (action.value) {
    case "Create":
      value = await genresstore.createGenre(genre.value);
      break;
    case "Update":
      value = await genresstore.updateGenre(genre.value);
      break;
    case "Delete":
      value = await genresstore.deleteGenre(genre.value);
      break;
    default:
      break;
  }

  if (value == undefined) return;
  toast.add({ title: "Genre", description: "Success!" });

  selection.value = genresstore.defaultGenre();
  open.value = false;
};
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex flex-col gap-1.5">
      <USelectMenu
        v-if="action != 'Create'"
        v-model="selection"
        :options="genres"
        option-attribute="genre_name"
        by="genre_id"
        placeholder="Genre..."
        :searchable="genresstore.searchGenres"
        :debounce="150"
        clear-search-on-close
      />
      <UInput
        v-model="genre.genre_name"
        placeholder="Genre Name..."
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
