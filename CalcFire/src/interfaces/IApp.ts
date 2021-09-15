export interface IApp {
    startAge: number,
    targetYear: number,
    targetRent: number,
    plan: { index: number, value: number}[],
    ans: number,
    isEditMode: boolean,
    inflation: number,
    isInflationAdjusted: boolean,
    editInflation: boolean,
    isEditSwrMode: boolean,
    swr: number,
}