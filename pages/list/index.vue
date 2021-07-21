<template>
  <div class="section-area">
    <Navbar :name="title" />
    <v-container class="my-py-0 custom-container">
      <div class=" d-flex align-end justify-end">
        <v-col class="select-otpions pb-0" lg="3" md="4" sm="12">
          <v-select
            :items="options"
            label="Select Area"
            dense
            outlined
          />
        </v-col>
      </div>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="toDetail(item.to)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
    <v-pagination
      v-model="page"
      :length="6"
      class="pagination-page"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Area List',
      selectedItem: null,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock', to: '1' },
        { text: 'Audience', icon: 'mdi-account', to: '2' },
        { text: 'Conversions', icon: 'mdi-flag', to: '3' }
      ],
      options: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      page: 1
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  methods: {
    toDetail (id) {
      this.$router.push('/list/detail/' + id)
    }
  }
}
</script>
