import "./Header.css"
import logo from "../../imgs/logo.svg"
import Menu from "../Menu/Menu"
import AvatarWrapper from "../AvatarWrapper/AvatarWrapper"
import menuIcon from "../../imgs/icones/menu.svg"
function Header () {
    return (
        <header>
            <div className="container">
                <a href="/" className="logo">
                    <img src={logo} alt="Logo Task Hub" />
                </a>
                <Menu/>
                <div className="op">
                    <AvatarWrapper/>
                    <img src={menuIcon} alt="Menu" />
                </div>
            </div>
        </header>
    )
}
export default Header