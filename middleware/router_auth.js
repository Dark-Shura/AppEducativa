export default function ({ store, redirect, route }) {
  // eslint-disable-next-line no-unused-expressions
  store.state.user != null && route.name === 'index' ? redirect('/home') : ''
  // eslint-disable-next-line no-unused-expressions
  store.state.user != null && isAdminRoute(route) ? redirect('/index') : ''
}

function isAdminRoute (route) {
  if (route.matched.some(record => record.path === '/home')) {
    return true
  }
}
