import { Table, Thead, EmptyTransactions } from './styles'
import { useState } from 'react'

import { List } from '../List'

import { useTransaction } from '../../contexts/TransactionContext'
import { TransactionLoading } from '../TransactionLoading'

export function MoneyListing() {
  const { transactionState: { transactions } } = useTransaction()

  const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth)

  window.addEventListener('resize', () => setDeviceWidth(window.innerWidth))

  return (
    <>
      <TransactionLoading>
        {!transactions.length ? (
          <EmptyTransactions>Opss... You haven't added transactions yet ;(</EmptyTransactions>
        ) : (
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
                    <th>Actions</th>
                  </>
                )}
              </tr>
            </Thead>

            <tbody>
              {transactions.map(transaction => (
                <List key={transaction._id} transaction={transaction} />
              ))}
            </tbody>
          </Table>
        )}
      </TransactionLoading>
    </>
  )
}
