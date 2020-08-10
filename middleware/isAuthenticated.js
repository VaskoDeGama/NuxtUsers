export default function ({ store, redirect }) {
  if (!store.state.currentUser.isAuthenticated) {
    return redirect('/login')
  }
}
