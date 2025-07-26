import { Button, Table } from 'react-bootstrap';

export default function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="table-responsive">
      <Table striped bordered hover className="w-100 align-middle text-nowrap">
        <thead className="table-dark">
          <tr>
            <th>name</th>
            <th>username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No users found.</td>
            </tr>
          ) : (
            users.map((u) => (
              <tr key={u.id}>
                {/* <td>{u.name}</td> */}
                <td style={{ wordBreak: 'break-word' }}>{u.name}</td>
                <td style={{ wordBreak: 'break-word' }}>{u.username}</td>
                <td style={{ wordBreak: 'break-word' }}>{u.email}</td>
                <td>
                  <Button
                    size="sm"
                    variant="warning"
                    className="me-2"
                    onClick={() => onEdit(u)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => onDelete(u.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}
