export const actions = {
  increasePreloaderCounter: (context) => {
    context.commit('increasePreloaderCounter')
  },
  decreasePreloaderCounter: (context) => {
    context.commit('decreasePreloaderCounter')
  }
}

export default actions
