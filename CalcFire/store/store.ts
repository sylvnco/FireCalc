import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        sources: [{
            name: "PEA",
            savings: 1000,
            roi: 8,
            initial: 17000
          },
          {
            name: "Assurance Vie",
            savings: 1000,
            roi: 8,
            initial: 10000
          },
          {
            name: "Crypto",
            savings: 500,
            roi: 12,
            initial: 14000
          }]
      }
    },
    mutations: {
        add(state, source){
            state.sources.push(source)
        },
        remove(state, index){
            state.sources.splice(index,1);
        },
        set(state, payload){
          state.sources = payload;
        }
    },
    actions: {
        add({commit}, payload){
            commit('add', payload)
        },
        remove({commit}, payload){
            commit('remove', payload)
        },
        set({commit}, payload) {
          commit('set', payload)
        }
    }
  })
  
export default store