export default function ({ store, redirect }) {
  if (!store.$cookies.get('appData').isAuth) {
    return redirect('/login')

  }
}
