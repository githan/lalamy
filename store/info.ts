import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({ stateFactory: true, namespaced: true, name: 'info' })
export default class Info extends VuexModule {
  ytinfo = {}
  store: any

  @Mutation
  setYtinfo (data:any) {
    this.ytinfo = data
  }

  @Action
  async getYtinfo () {
    const docRef = await this.store.$fireStore.collection('info').doc('ytinfo')
    const ytdoc = await docRef.get()
    this.setYtinfo(ytdoc.data())
  }
}
