import { reqCategory, reqGetBannerList, reqGetFloorList } from '@/api'
//home 模块小仓库
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategory()
        if (result.code === 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList()
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqGetFloorList()
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}
const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}