import { FormEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { useTransaction } from '../../contexts/TransactionContext';
import { TransactionProps } from '../../contexts/TransactionContext/types';
import { useModal } from '../../contexts/ModalContext';

const TRANSACTION_INITIAL_STATE: TransactionProps = {
  id: '',
  title: '',
  price: 0,
  type: '',
  category: '',
  date: 0,
};

export function logic() {
  const { dispatch } = useTransaction();
  const { isOpen, closeModal } = useModal();

  const [transaction, setTransaction] = useState<TransactionProps>(TRANSACTION_INITIAL_STATE);

  const handleRadioButtonSelection = () => {
    const radioButtons = document.getElementsByName('type') as NodeListOf<HTMLInputElement>;

    radioButtons.forEach(btn => {
      const label = btn.closest('label')!;

      if (btn.checked) {
        label.style.borderColor = 'transparent';
        label.style.backgroundColor =
          btn.value === 'income' ? 'rgba(18, 164, 84, 0.1)' : 'rgba(229, 46, 77, 0.1)';
      } else {
        label.style.borderColor = '#969CB2';
        label.style.backgroundColor = 'inherit';
      }
    });
  };

  const handlePrice = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'e' || e.key === '-') e.preventDefault();
    else handleChange(e);
  };

  const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;

    if (target.type === 'radio') handleRadioButtonSelection();

    setTransaction(prev => ({ ...prev, [target.name]: target.value }));
  }, []);

  const handleAddition = () => {
    const { title, price, type, category } = transaction;

    if (!title || !price || !type || !category) return;

    closeModal();
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: { transaction: { ...transaction, id: uuid(), date: Date.now() } },
    });
  };

  useEffect(() => {
    if (!isOpen) setTransaction(TRANSACTION_INITIAL_STATE);
  }, [isOpen]);

  return { handleChange, handlePrice, handleAddition };
}
