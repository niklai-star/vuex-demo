const store = {
  state: {
    grandPaValue: '',
    fatherValue: '',
    childAValue: '',
    childBValue: '',
    childValue: ''
  },

  setGrandPaValue(val) {
    this.state.grandPaValue = val
  },

  setFatherValue(val) {
    this.state.fatherValue = val
  },

  setChildAValue(val) {
    this.state.childAValue = val
  },

  setChildBValue(val) {
    this.state.childBValue = val
  },

  setChildValue(val) {
    this.state.childValue = val
  }
}

export default store
