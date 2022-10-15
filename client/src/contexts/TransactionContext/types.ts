interface StateProps {
  transactions: TransactionProps[];
}

interface TransactionProps {
  id: string;
  title: string;
  price: number;
  type: 'income' | 'expense' | '';
  category: string;
  date: number;
}

type ActionProps = { type: 'ADD_TRANSACTION'; payload: { transaction: TransactionProps } };

export type { StateProps, ActionProps, TransactionProps };
