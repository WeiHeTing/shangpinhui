import { reqGetSearchInfo } from "@/api"
//search模块小仓库
const state = {
    searchList: {}
}
const actions = {
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
//计算属性：简化数据
const getters = {
    attrsList(state) {
        return state.searchList.attrsList || []
    },
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}