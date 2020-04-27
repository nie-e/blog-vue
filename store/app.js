export const state = () => ({
  theme: 'light',
  isShowSearch: true,
})

export const mutations = {
  setTheme(state, theme) {
    document.body.id = theme
    window.localStorage.setItem('THEME', theme)
    state.theme = theme
  },

  setShowSearch(state, isShowSearch) {
    state.isShowSearch = isShowSearch
  }
}
