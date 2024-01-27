import "./Menu.css"
function Menu () {
    return (
        <ul className="menu">
            <li><a className="menu-link" href="/">Home</a></li>
            <li><a className="menu-link" href="/servicos">Serviços</a></li>
            <li><a className="menu-link" href="/precos">Preços</a></li>
        </ul>
    )
}
export default Menu