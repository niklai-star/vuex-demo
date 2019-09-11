const state = {
  inputValue: '',
  value: ''
}

const getters = {
  grandPaValue: (state, getters, rootState) => {
    return `来自GrandPa的数据：${state.value}`
  }
}

const actions = {
  action: ({ state, commit, rootState }) => {
    commit('mutation')
  }
}

const mutations = {
  changeGrandPaValue: (state, payload) => {
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
