import {
    INCREMENT,
    DECREMENT
} from './types'
import getters from './getters'

const state = {
    count:20
}


const mutations = {    // 事件类型，回调函数
    [INCREMENT](state){
        state.count++;
    },
    [DECREMENT](state){
        state.count--;
    }
}

export default{
    state,
    mutations,
    getters
}




