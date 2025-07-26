// src/pages/Layout.jsx
import { Link, Outlet } from 'react-router-dom';
import './layout.css'; // optional custom styling

export default function Layout() {
  return (
    <div className="d-flex">
      <nav className="bg-dark text-white vh-100 p-3" style={{ width: '220px' }}>
        <h4 className="mb-4">Admin Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/layout">Layout</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
