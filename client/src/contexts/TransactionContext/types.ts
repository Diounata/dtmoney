interface StateProps {}

interface TransactionProps {}

type ActionProps = { type: 'ADD_TRANSACTION'; payload: { transaction: TransactionProps } };

export type { StateProps, ActionProps };
