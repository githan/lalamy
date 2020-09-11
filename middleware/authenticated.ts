import { Middleware } from '@nuxt/types'

const authenticated: Middleware = (context) => {
  if (context.app.$fireAuth) {
    context.app.$fireAuth.onAuthStateChanged((user: any) => {
      if (user) {
        context.store.commit('users/setLogin', true)
      } else {
        context.store.commit('users/setLogin', false)
      }
      context.store.dispatch('users/getUser', user)
    })
  }
}

export default authenticated
