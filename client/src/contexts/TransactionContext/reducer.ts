import { StateProps, ActionProps } from './types';

export const initialState: StateProps = {
  transactions: [],
};

export function reducer(state: StateProps, { type, payload }: ActionProps): StateProps {
  switch (type) {
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [payload.transaction, ...state.transactions] };

    default:
      return state;
  }
}
