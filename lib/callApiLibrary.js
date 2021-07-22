export const callApiLibrary = {
  computed: {
    getPreloaderCounter () {
      return this.$store.getters['preloader/getPreloaderCounter']
    }
  },
  methods: {
    setPreloader (show = true) {
      this.$nextTick(() => {
        if (show) {
          this.$nuxt.$loading.start()
          this.$store.dispatch('preloader/increasePreloaderCounter')
        } else {
          this.$store.dispatch('preloader/decreasePreloaderCounter')
          if (this.getPreloaderCounter === 0) {
            this.$nuxt.$loading.finish()
          }
        }
      })
    },
    showNotificationMessage (message) {
      this.$notify({
        title: 'Notification',
        text: message,
        type: 'error',
        duration: 2000
      })
    },
    callApiGet (url, callbackSuccess, callbackFailed = null, callbackCatch = null, displayErrMsg = true, usePreloader = true) {
      if (usePreloader) {
        this.setPreloader(true)
      }

      this.$axios.get(url, {
        headers: { 'X-Auth-Token': '2de7535c91ba40b681946350fbb14a51' }
      })
        .then((response) => {
          if (parseInt(response.status) === 200) {
            callbackSuccess(response.data)
          } else {
            if (typeof callbackFailed === 'function') {
              callbackFailed(response.data)
            }
            if (displayErrMsg) {
              if (typeof response.data.message !== 'undefined') {
                // eslint-disable-next-line no-console
                console.log('err ', response)
              }
            }
          }
          if (usePreloader) {
            this.setPreloader(false)
          }
        })
        .catch((response) => {
          if (typeof callbackSuccess === 'function') {
            callbackCatch(response)
            this.showNotificationMessage(response.response.data.message)
          }
          if (usePreloader) {
            this.setPreloader(false)
          }
        })
    }
  }
}

export default callApiLibrary
