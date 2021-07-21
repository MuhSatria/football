<template>
  <div class="section-area">
    <Navbar :name="data.name" />
    <v-container class="my-py-0 custom-container">
      <div class="box-head">
        <div v-if="data.ensignUrl !== null" class="img-logo" :style="{ 'background-image': 'url(' + data.ensignUrl + ')' }" />
        <div v-else class="img-logo" />
        <div class="desc">
          <h2 class="title-name" v-text="data.name" />
          <label for="countryCode">Country Code</label>
          <p id="countryCode" class="data-text" v-text="data.countryCode" />
          <label for="parentAre">Continent </label>
          <p id="parentArea" class="data-text" v-text="data.parentArea" />
        </div>
      </div>
      <h3 class="title-list mt-6 mb-3">
        Area
      </h3>
      <v-list v-if="dataNull === false">
        <v-list-item
          v-for="(area, index_area) in data.childAreas"
          :key="index_area"
          @click="toDetail(data.childAreas[index_area].id)"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ data.childAreas[index_area].parentArea }} - {{ data.childAreas[index_area].name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div v-else class="data-null">
        <div class="box-null">
          <img src="@/assets/images/no_data.svg" alt="">
          <p class="mb-0">
            Data Kosong!
          </p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import CallApiLibrary from '@/lib/callApiLibrary'
// import axios from 'axios'

export default {
  mixins: [
    CallApiLibrary
  ],
  data () {
    return {
      title: 'Area Local',
      selectedItem: null,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock', to: '1' },
        { text: 'Audience', icon: 'mdi-account', to: '2' },
        { text: 'Conversions', icon: 'mdi-flag', to: '3' }
      ],
      options: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      data: [],
      dataNull: false,
      noImage: 'no-image.png'
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  created () {
    this.getData()
  },
  methods: {
    toDetail (id) {
      this.$router.push('/list/detail/' + id)
    },
    getData () {
      const idArea = this.$route.params.id
      this.callApiGet(`v2/areas/${idArea}`, (responseData) => {
        this.data = responseData
        if (this.data.childAreas.length === 0) {
          this.dataNull = true
        }
      }, (responseData) => {
      }, (responseData) => {
      }, true, true)
    }
  }
}
</script>
