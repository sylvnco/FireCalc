import {IIncomeSource} from './IStore'

type Add = {
    type: 'Add',
    value: IIncomeSource
  }
  
  type Remove = {
    type: 'Remove',
    value: number
  }

  type Set = {
    type: 'Set',
    value: number
  }
  
  // Declare the union type of actions
  export type Action = Add | Remove | Set