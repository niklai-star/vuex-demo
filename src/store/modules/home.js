const state = {
  count: 1
};

const getters = {
  countToString: (state, getters, rootState) => {
    return '第' + state.count + '个';
  }
};

const actions = {
  increment: ({ state, commit, rootState }) => {
    commit('increment');
  }
};

const mutations = {
  increment: (state, rootState) => {
    state.count++;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
