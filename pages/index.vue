<template>
  <v-container class="my-py-0">
    <div class="section-content">
      <div class="bg-tumb" />
      <div class="section-welcome">
        <div class="section-welcome__tumb" />
        <div class="section-welcome__info">
          <h1 class="title-page">
            Football Club Information
          </h1>
          <p class="desc">
            Check your Favorite Football club on here!
          </p>
          <v-btn
            to="/list"
            depressed
          >
            See All
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: 'Information'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
