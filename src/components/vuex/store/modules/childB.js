const state = {}

const getters = {
  getter: (state, getters, rootState) => {}
}

const actions = {
  action: ({ state, commit, rootState }) => {
    commit('mutation')
  }
}

const mutations = {
  mutation: (state, payload) => {}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
