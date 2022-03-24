import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  {
    id: 1,
    username: 'MSLEE',
    age: 31,
    height: 180
  },
  {
    id: 2,
    username: 'YEJI',
    age: 28,
    height: 180
  },
  {
    id: 3,
    username: '9SEUL',
    age: 25,
    height: 180
  },
  {
    id: 4,
    username: 'CYBANG',
    age: 29,
    height: 180
  },
  {
    id: 5,
    username: 'HONG',
    age: 8,
    height: 180
  },
];

export default function HeaderColumnsGrid() {
  return (
    <div style={{ height:400, width: '100%' }}>
      <DataGrid
        columns={[
          { field: 'username', headerName: 'Username'},
          { field: 'age', headerName: 'Age' },
          { field: 'height', headerName: 'Height'}
        ]}
        rows={rows}
      />
    </div>
  );
}