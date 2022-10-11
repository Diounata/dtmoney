import { Table, Thead, Tbody } from './styles';

import { List } from '../List';

export function MoneyListing() {
  return (
    <Table>
      <Thead>
        <tr>
          <th>List</th>
          <th>4 items</th>
        </tr>
      </Thead>

      <Tbody>
        <List />
        <List />
        <List />
      </Tbody>
    </Table>
  );
}
