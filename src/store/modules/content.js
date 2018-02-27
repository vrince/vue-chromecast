
// initial state
// shape: [{ id, quantity }]
const state = {
  apps: []
}

// getters
const getters = {
  apps: state => state.apps
}

// actions
const actions = {
}

// mutations
const mutations = {
  addAppContent (state, { app }) {
    state.app.push(app)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
