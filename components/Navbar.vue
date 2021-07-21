<template>
  <div class="header">
    <v-btn
      icon
      @click="$router.go(-1)"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-toolbar-title class="pl-3">
      {{ name }}
    </v-toolbar-title>
  </div>
</template>

<script>
export default {
  props: { name }
}
</script>
