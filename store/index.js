export const state = () => ({
  isAuthenticated: false,
  currentUser: null
})

export const mutations = {
  SET_USER: (state, userData) => {
    state.currentUser = {
      ...userData
    }
  },
  CLEAR_USER: (state) => {
    state.currentUser = {}
  },
  TOGGLE_IS_AUTH: (state) => {
    state.isAuthenticated = !state.isAuthenticated
  }
}

export const actions = {
  LOG_IN: async function ({commit}, id) {
    try {
      const response = await this.$axios.$get('/api/mockData.json')
      const [user] = response.filter(({_id}) => id === _id)
      commit('SET_USER', user)
      commit('TOGGLE_IS_AUTH')
    } catch (e) {
      console.log(e)
    }
  },
  LOG_OUT: function ({commit}) {
    commit('CLEAR_USER')
    commit('TOGGLE_IS_AUTH')
  }
}

export const getters = {
  GET_USER_DATA: (state) => {
    const userData = state.currentUser
    delete userData.password
    return userData
  },
  GET_USER_ID: (state) => state.currentUser._id
}


