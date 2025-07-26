import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserTable from '../components/UserTable';
import UserFormModal from '../components/UserFormModal';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const usersPerPage = 5;

  useEffect(() => {
    axios.get('http://localhost:5000/api/getAllUsers')
      .then(res => {setUsers(res.data);
        console.log(users)
      })
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setShowModal(true);
  };

  const handleSave = (newUser) => {
    if (newUser.id) {
      setUsers(users.map(user => user.id === newUser.id ? newUser : user));
    } else {
      const newId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
      setUsers([...users, { ...newUser, id: newId }]);
    }
    setShowModal(false); // ✅ Close modal
  };

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);

  return (
    <div>
      <h2>Users</h2>
      <div className="d-flex justify-content-between mb-2">
        <input
          type="text"
          placeholder="Search by name or email"
          className="form-control w-50"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => {
          setCurrentUser(null);
          setShowModal(true);
        }}>Add User</button>
      </div>

      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />

      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-secondary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
        >Previous</button>

        <span>Page {currentPage}</span>

        <button
          className="btn btn-secondary"
          disabled={indexOfLast >= filteredUsers.length}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >Next</button>
      </div>

      <UserFormModal
        show={showModal}
        handleClose={() => setShowModal(false)}    // ✅ working close
        handleSubmit={handleSave}                 // ✅ working save
        user={currentUser}                        // ✅ passed user
      />
    </div>
  );
};

export default Users;
