import type { User } from "../model/user.model";

interface UserTableProps {
  users: User[];
}

const UserTable = ({ users }: UserTableProps) => {
  return (
    <table border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
