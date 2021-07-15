import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        sources: [{
            name: "Savings Account #1",
            savings: 200,
            roi: 8,
            initial: 5000
          },
          {
            name: "Savings Account #2",
            savings: 350,
            roi: 4,
            initial: 2500
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
        },
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
        },
    }
  })
  
export default store