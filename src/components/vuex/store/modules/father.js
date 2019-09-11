const state = {
  inputValue: '',
  value: ''
}

const getters = {
  fatherValue: (state, getters, rootState) => {
    return `来自Father的数据：${state.value}`
  }
}

const actions = {
  action: ({ state, commit, rootState }) => {
    commit('mutation')
  }
}

const mutations = {
  changeFatherValue: (state, payload) => {
    state.value = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
