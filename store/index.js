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
  SET_IS_AUTH: (state, status) => {
    state.isAuthenticated = status
  },

}

export const actions = {
  LOG_IN: async function ({commit}, id) {
    try {
      const response = await this.$axios.$get('/api/mockData.json')
      const [user] = response.filter(({_id}) => id === _id)
      commit('SET_USER', user)
      commit('SET_IS_AUTH', true)
    } catch (e) {
      console.log(e)
    }
  },
  LOG_OUT: function ({commit}) {
    commit('CLEAR_USER')
    commit('SET_IS_AUTH', false)
  },
  SET_COOKIES: function ({commit}, appData) {
    this.$cookies.set('appData', appData)
  },
  GET_COOKIES:async function ({dispatch}) {
    const appData = this.$cookies.get('appData')
    if (appData.isAuth && appData.userId.length === 24) {
      await dispatch('LOG_IN', appData.userId)
    }
  },
  async nuxtServerInit ({ dispatch }, { req }) {
    //await dispatch('GET_COOKIES')
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


