// app/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/tasks">Tasks</Link></li>
      </ul>
    </nav>
  );
}
