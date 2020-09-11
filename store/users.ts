import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import User from '~/models/User'

@Module({ stateFactory: true, namespaced: true, name: 'users' })
export default class Users extends VuexModule {
  users = {} as User
  isLogin: Boolean = false
  store: any

  @Mutation
  setUser (user: User) {
    this.users = user
  }

  @Mutation
  setLogin (val: boolean) {
    this.isLogin = val
  }

  @Action
  async getUser (user: User) {
    if (user) {
      let userData = {} as User
      if (this.users.uid) {
        return
      } else {
        const userDocRef = await this.store.$fireStore.collection('users').doc(user.uid)
        const getDoc = await userDocRef.get()
        if (!getDoc.exists) {
          userData = {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
            authority: "3"
          }
        } else {
          const docData = getDoc.data()
          userData = {
            uid: user.uid,
            displayName: docData.displayName,
            photoURL: user.photoURL,
            email: user.email,
            authority: docData.authority
          }
        }
      }
      this.setUser(userData)
    } else {
      const userData = {} as User
      this.setUser(userData)
    }
  }

  @Action
  async addUser (user:User) {
    const userDocRef = await this.store.$fireStore.collection('users').add(user)
    return userDocRef
  }
}
