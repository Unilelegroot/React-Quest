import "./profileCard.css"

function ProfileCard({name, codiname, favoriteArea, level}){
    return(
        <section className="profileCard">
            <div className="profile-card_avatar">
                {name.charAt(0).toUpperCase()} 
            </div>

            <div className="profile-card_content">
                <p className="profile-card_label"> 
                    Perfil do Desenvolvedor
                </p>
                <h2>{name}</h2>
                <p className="profile-card_codiname">Codinome: {codiname}</p>
                <p className="profile-card_favoriteArea">Área Favorita: {favoriteArea}</p>
                <p className="profile-card_level">Nível Atual: {level}</p>
            </div>
        </section>
    )
}

export default ProfileCard