import { Nav } from "../components/Nav";

const Header = ({isDark, changeMode, mode}) => {
    return (   
        <header className={mode}>
            <Nav isDark={isDark} changeMode={changeMode}/>
        </header>
    );
}

export {Header}