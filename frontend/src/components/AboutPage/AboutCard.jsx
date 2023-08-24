const AboutCard = ({info}) => {

    return (
        <div className="about-card">
            <img src={info?.image} />
            <div>
                <p>{info?.name}</p>
                <p>{info?.role}</p>
                <a href = "mailto: abc@example.com">{info?.email}</a>
                <div>
                    <a href={info?.github} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href={info?.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutCard;