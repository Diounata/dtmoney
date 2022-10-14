import { Table, Thead } from './styles';
import { useState } from 'react';

import { List } from '../List';

export function MoneyListing() {
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
        <List />
        <List />
        <List />
      </tbody>
    </Table>
  );
}
