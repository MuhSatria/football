<template>
  <v-app dark>
    <v-main>
      <Nuxt />
      <Loading />
      <notifications position="top right" width="100%" classes="my-custom-class" style="color: #fff"/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.my-py-0 {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>
