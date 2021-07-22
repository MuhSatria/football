export const mutations = {
  increasePreloaderCounter: (state) => {
    return state.preloaderCounter++
  },
  decreasePreloaderCounter: (state) => {
    return state.preloaderCounter--
  }
}

export default mutations
