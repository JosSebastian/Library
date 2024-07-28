<script lang="ts" setup>
definePageMeta({
  middleware: [
    function (_to, _from) {
      return navigateTo("/");
    },
  ],
  layout: "home",
});
</script>

<template>
  <div></div>
</template>
