//搜索数据    
    // initial state
    const state = {
        searchData:[]
    }
    
    // getters
    const getters = {}
    
    // actions
    const actions = {}
    
    // mutations
    const mutations = {
        set_search_data(state, searchData) { //设置参数
            state.searchData = searchData;
        }
    }
    
    export default {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
    }