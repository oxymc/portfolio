const Nav = ({isDark, changeMode}) => {
    const toggleMenu = () => {
        document.getElementById('nav-mobile').classList.toggle('open')
    }
    const links = {
        about: "About",
        education: "Education",
        skills: "Skills",
        way: "Way"
    }

    return (
        <nav className="teal">
            <div className="container center foFlex nav-wrapper">
                <i 
                    className="material-icons"
                    onClick={toggleMenu}>
                        menu
                </i>
                <ul id="nav-mobile" className="links">
                    <li><a href="/#about">{links.about}</a></li>
                    <li><a href="/#education">{links.education}</a></li>
                    <li><a href="/#skills">{links.skills}</a></li>
                    <li><a href="/#way">{links.way}</a></li>
                </ul>
                <div 
                    className="mode"
                    onClick={changeMode}
                    >
                    {
                        !isDark ?
                        <i className="material-icons">wb_sunny</i> :
                        <i className="material-icons">brightness_3</i>
                    }
                </div>
            </div>
        </nav>
    );
}

export {Nav}

