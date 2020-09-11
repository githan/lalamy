import { Middleware } from '@nuxt/types'

const authcheck: Middleware = (context) => {
  if (context.app.$fireAuth) {
    context.app.$fireAuth.onAuthStateChanged((user: any) => {
      if (user) {
        context.redirect('/')
      }
    })
  }
}

export default authcheck
