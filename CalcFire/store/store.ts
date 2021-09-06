import { createStore , Store} from 'vuex'
import { InjectionKey } from 'vue'
import { IIncomeSource } from '../src/interfaces/IIncomeSource'

export interface IStore {
  state: IState;
}

export interface IState {
  targetRent: number,
  swr: number,
  inflation: number,
  sources: IIncomeSource[]
} 

export const key: InjectionKey<Store<IState>> = Symbol()


export const store = createStore({
    state () {
      return {
        targetRent: 2000,
        inflation: 2,
        swr: 4,
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
        add(state: IState, source: IIncomeSource){
            state.sources.push(source)
        },
        remove(state: IState, index: number){
            state.sources.splice(index,1);
        },
        set(state: IState, payload: IIncomeSource[]){
          state.sources = payload;
        },
        setSwr(state: IState, payload: number){
          state.swr = payload;
        },
        setInflation(state: IState, payload: number){
          state.inflation = payload;
        },
        setTargetRent(state: IState, payload: number){
          state.targetRent = payload;
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
        setSwr({commit}, payload) {
          commit('setSwr', payload)
        },
        setInflation({commit}, payload) {
          commit('setInflation', payload)
        },
        setTargetRent({commit}, payload) {
          commit('setTargetRent', payload)
        },
    }
  })
  
export default store