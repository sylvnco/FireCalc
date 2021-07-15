export interface IApp {
    targetYear: number,
    targetRent: number,
    plan: { index: number, value: number}[],
    ans: number,
    isEditMode: boolean,
    inflation: number,
    isInflationAdjusted: boolean,
    editInflation: boolean,   
}