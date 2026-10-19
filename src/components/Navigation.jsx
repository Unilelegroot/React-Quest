import { NavLink } from "react-router"
import "./navigation.css"

function Navigation() {

    return (
        <nav className="navigation">
            <NavLink to="/">
                Dashboard
            </NavLink>

            <NavLink to="/mission">
                Missões
            </NavLink>

            <NavLink to="/project">
                Projetos
            </NavLink>

            <NavLink to="/evolution">
                Evolução
            </NavLink>
        </nav>
    );
}

export default Navigation