// src/components/Sidebar.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="bg-light border p-3" style={{ width: '220px', minHeight: '100vh' }}>
      <h5>Admin Panel</h5>
      <ul className="nav flex-column">
        <li className="nav-item"><Link className="nav-link" to="/">Dashboard</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/layout">Layout</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar
