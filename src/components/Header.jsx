import "./header.css"

function Header(){
    return(
        <header className="header">
            <div>
                <p className="header_logo">React Quest</p>
                <span className="header_subtitle">Central de Missões e Evolução Dev</span>
            </div>

            <button className="header_button">Meu Perfil</button>
        </header>
    )        
}

export default Header