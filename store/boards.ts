import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import Board from '~/models/Board'

@Module({ stateFactory: true, namespaced: true, name: 'boards' })
export default class Boards extends VuexModule {
  board = {} as Board
  boards: Board[] = []
  covidBoards: Board[] = []
  content: string = ''
  store: any

  get getCommunityBoards () {
    return this.boards.filter(item => item.category === '1')
  }

  get getFreeMarketBoards () {
    return this.boards.filter(item => item.category === '2')
  }

  get getCovidBoards () {
    return this.boards.filter(item => item.category === '3')
  }

  @Mutation
  setContent (content: string) {
    this.content = content
  }

  @Mutation
  setBoards (data: Board[]) {
    this.boards = data
  }

  @Mutation
  setBoard (data: Board) {
    this.board = data
  }

  @Action
  async getBoards () {
    const boardArr: Board[] = []
    const boardRef = await this.store.$fireStore.collection('boards').orderBy('createdAt', 'desc').get()
    const querySnapshot = boardRef.docs
    querySnapshot.forEach((doc: { data: () => any; id: string }) => {
      let board = {} as Board
      board = doc.data()
      board.id = doc.id
      boardArr.push(board)
    })
    this.setBoards(boardArr)
  }

  @Action
  async getBoard (id:string) {
    const boardDocRef = await this.store.$fireStore.collection('boards').doc(id)
    const boardDoc = await boardDocRef.get()
    this.setBoard(boardDoc.data())
  }

  @Action
  async addBoard (board:Board) {
    const boardDocRef = await this.store.$fireStore.collection('boards').add(board)
    return boardDocRef
  }

  @Action
  async deleteBoard (id:string) {
    const boardDocRef = await this.store.$fireStore.collection('boards').doc(id).delete()
    return boardDocRef
  }
}
