const Social = ({social}) => {
    return (  
        <div className="foFlex">               
            <a target="_blank" 
                rel="noreferrer" 
                href={social.telegram}>
                    <img className="responsive-img" src="./telegram-brands.svg" alt="telegram"/>
            </a>
            <a target="_blank" 
                rel="noreferrer" 
                href={social.skype}>
                    <img className="responsive-img" src="./skype-brands.svg" alt="skype"/>
            </a>
            <a target="_blank" 
                rel="noreferrer" 
                href={social.linkedin}>
                    <img className="responsive-img" src="./linkedin-brands.svg" alt="linkedin"/>
            </a>
            <a target="_blank" 
                rel="noreferrer" 
                href={social.email}>
                    <img className="responsive-img" src="./envelope-solid.svg" alt="email"/>
            </a>
        </div>
    );
}

export {Social}