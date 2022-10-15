import { StateProps, ActionProps } from './types';

export const initialState: StateProps = {};

export function reducer(state: StateProps, action: ActionProps) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return state;

    default:
      throw Error('You need to specify a dispatch action');
  }
}
