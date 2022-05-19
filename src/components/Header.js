import logo from "../images/logo.svg"

export default function Header() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" />
            <p>React Course-Project 3</p>
        </nav>
    )
}