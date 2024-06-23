import React, { useState } from 'react';
import Navbar from './Navbar';

function Users() {

  const initialUsers = [
    { id: '1', userName: 'John Doe', email: 'john.doe@example.com', phoneNumber: '123-456-7890', designation: 'Manager', accessStatus: 'Active' },
    { id: '2', userName: 'Jane Smith', email: 'jane.smith@example.com', phoneNumber: '987-654-3210', designation: 'Developer', accessStatus: 'Inactive' },
    { id: '3', userName: 'Alice Johnson', email: 'alice.johnson@example.com', phoneNumber: '555-123-4567', designation: 'Designer', accessStatus: 'Active' },
    { id: '4', userName: 'Bob Brown', email: 'bob.brown@example.com', phoneNumber: '444-555-6666', designation: 'Tester', accessStatus: 'Inactive' },
    { id: '5', userName: 'Charlie White', email: 'charlie.white@example.com', phoneNumber: '333-222-1111', designation: 'Developer', accessStatus: 'Active' },
    { id: '6', userName: 'David Green', email: 'david.green@example.com', phoneNumber: '222-333-4444', designation: 'Manager', accessStatus: 'Inactive' },
    { id: '7', userName: 'Eve Black', email: 'eve.black@example.com', phoneNumber: '111-222-3333', designation: 'Designer', accessStatus: 'Active' },
    { id: '8', userName: 'Frank Blue', email: 'frank.blue@example.com', phoneNumber: '666-777-8888', designation: 'Tester', accessStatus: 'Inactive' },
    { id: '9', userName: 'Grace Yellow', email: 'grace.yellow@example.com', phoneNumber: '777-888-9999', designation: 'Developer', accessStatus: 'Active' },
    { id: '10', userName: 'Henry Red', email: 'henry.red@example.com', phoneNumber: '888-999-0000', designation: 'Manager', accessStatus: 'Inactive' },
    { id: '11', userName: 'Ivy Orange', email: 'ivy.orange@example.com', phoneNumber: '999-000-1111', designation: 'Designer', accessStatus: 'Active' },
    { id: '12', userName: 'Jack Purple', email: 'jack.purple@example.com', phoneNumber: '000-111-2222', designation: 'Tester', accessStatus: 'Inactive' },
    { id: '13', userName: 'Kate Cyan', email: 'kate.cyan@example.com', phoneNumber: '111-222-3334', designation: 'Developer', accessStatus: 'Active' },
    { id: '14', userName: 'Liam Pink', email: 'liam.pink@example.com', phoneNumber: '222-333-4445', designation: 'Manager', accessStatus: 'Inactive' },
    { id: '15', userName: 'Mia Lime', email: 'mia.lime@example.com', phoneNumber: '333-444-5556', designation: 'Designer', accessStatus: 'Active' },
    { id: '16', userName: 'Noah Teal', email: 'noah.teal@example.com', phoneNumber: '444-555-6667', designation: 'Tester', accessStatus: 'Inactive' },
    { id: '17', userName: 'Olivia Violet', email: 'olivia.violet@example.com', phoneNumber: '555-666-7778', designation: 'Developer', accessStatus: 'Active' },
    { id: '18', userName: 'Paul Magenta', email: 'paul.magenta@example.com', phoneNumber: '666-777-8889', designation: 'Manager', accessStatus: 'Inactive' },
    { id: '19', userName: 'Quinn Indigo', email: 'quinn.indigo@example.com', phoneNumber: '777-888-9990', designation: 'Designer', accessStatus: 'Active' },
    { id: '20', userName: 'Ruth Gold', email: 'ruth.gold@example.com', phoneNumber: '888-999-0001', designation: 'Tester', accessStatus: 'Inactive' },
  ];

  const [users] = useState(initialUsers);
  const [search, setSearch] = useState('');
  const filteredUsers = users.filter(user =>
    user.userName.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.phoneNumber.includes(search) ||
    user.designation.toLowerCase().includes(search.toLowerCase()) ||
    user.accessStatus.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <div className="container mt-0">
      <h2>Users</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ height: '80vh', overflowY: 'scroll' }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Designation</th>
              <th>Access Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.designation}</td>
                <td>{user.accessStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></>
  );
}

export default Users;
