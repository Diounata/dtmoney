import { Table, Thead } from './styles';
import { useState } from 'react';

import { List } from '../List';

import { useTransaction } from '../../contexts/TransactionContext';

export function MoneyListing() {
  const {
    transactionState: { transactions },
  } = useTransaction();

  const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);

  window.addEventListener('resize', () => setDeviceWidth(window.innerWidth));

  return (
    <Table>
      <Thead>
        <tr>
          {deviceWidth < 750 ? (
            <>
              <th>List</th>
              <th>4 items</th>
            </>
          ) : (
            <>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Date</th>
            </>
          )}
        </tr>
      </Thead>

      <tbody>
        {transactions.map(transaction => (
          <List key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </Table>
  );
}
