import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Boards from '~/store/boards'
import Users from '~/store/users'
import Commons from '~/store/commons'
import Info from '~/store/info'

// eslint-disable-next-line import/no-mutable-exports
let boardsStore: Boards
// eslint-disable-next-line import/no-mutable-exports
let usersStore: Users
// eslint-disable-next-line import/no-mutable-exports
let commonsStore: Commons
// eslint-disable-next-line import/no-mutable-exports
let infoStore: Info

function initialiseStores (store: Store<any>): void {
  boardsStore = getModule(Boards, store)
  usersStore = getModule(Users, store)
  commonsStore = getModule(Commons, store)
  infoStore = getModule(Info, store)
}

export { initialiseStores, boardsStore, usersStore, commonsStore, infoStore }
