import logo from '../images/logo.svg';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="Travel journal logo" />
            <p>my travel journal</p>
        </nav>
    )
}