export const state = () => ({
  count: 0
})

export const mutations = {
  setCount:  (state, { count }) => state.count = count
}

export const getters = {
  count: state => state.count,
}

export const actions = {
  async increment({ commit, state }, {}) {
    commit("setCount", { count: state.count + 1 })
  },
}
