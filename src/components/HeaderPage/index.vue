<template>
  <b-card-group deck>
    <b-card bg-variant="light" :header="title" class="text-left">
      <b-card-text><slot /></b-card-text>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: "header-page",
  props: {
    title: { type: String, default: "" },
  },
};
</script>

<style></style>
