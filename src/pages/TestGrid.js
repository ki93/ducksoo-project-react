import { DataGrid } from '@mui/x-data-grid';

const rows = [
  {
    id: 1,
    username: '@MUI',
    age: 480,
  },
  {
    id: 2,
    username: '@YEJI',
    age: 520,
  },
  {
    id: 3,
    username: '@9SEUL',
    age: 630,
  },
  {
    id: 4,
    username: '@BANG',
    age: 80,
  },
  {
    id: 5,
    username: '@HONG',
    age: 850,
  },
];

export default function TestGrid() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={[
          {
            field: 'username',
            headerName: 'Username',
            description:
              'The identification used by the person with access to the online service.',
          },
          { field: 'age', headerName: 'Age' },
        ]}
        rows={rows}
      />
    </div>
  );
}