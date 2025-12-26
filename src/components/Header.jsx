import { FaArrowRight } from 'react-icons/fa';

export default function Header() {
  return (
    <header id="header">
      <nav className="navbar">
        <a href="#" className="logo">
          EduBridge
        </a>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="account">
          <a href="#" className="login">
            Login
          </a>
          <a href="#" className="btn-join">
            Join Us
            <FaArrowRight />
          </a>
        </div>
      </nav>
    </header>
  );
}
