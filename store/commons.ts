import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

@Module({ stateFactory: true, namespaced: true, name: 'commons' })
export default class Commons extends VuexModule {
  siteJpFlg: Boolean = false
  navDrawerFlg: Boolean = false
  dialogConfirmFlg: Boolean = false

  @Mutation
  setNavDrawer (val:boolean) {
    this.navDrawerFlg = val
  }

  get navDrawer () {
    return this.navDrawerFlg
  }

  get dialogConfirm () {
    return this.dialogConfirmFlg
  }
}
