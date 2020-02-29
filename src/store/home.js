export default {
    namespaced: true,
    state: {
        num: 0,
        name: '杨紫'
    },
    getters: {
        GETname(state){
            return state.name;
        }
    },
    mutations: {
        SETnum(state, payload){
            state.num = payload;
        },
        CHANGEname(state, payload){
            state.name = payload;
        }
    },
    actions: {
        CHANGEname(context,payload){
            context.commit('CHANGEname', payload)
        }
    }
}