export interface IStore {
    state: IState;
}

export interface IState {
    sources: IIncomeSource[]
} 

export interface IIncomeSource {
    name: string,
    savings: number,
    roi: number,
    initial: number
}