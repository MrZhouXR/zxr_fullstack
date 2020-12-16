const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
export default {
  // 点击进入下一题
  [ADD_ITEMNUM](state,num) {
    state.itemNum += num
  },
  [REMBER_ANSWER] (state, id) {
    state.answerId.push(id)
  }
}