import { Social } from "./Social";

const About = ({social}) => {
    const staticInfo = {
        title: "About me",
        name: "Maxym Balagur",
        position: "Frontend Web Developer",
        photoPath: "./photo.jpg",
        aboutText: "Hello, I am a front-end developer using Javascript as a core technology. Recently, I decided to study ReactJS in my free time. Now I have a lot of this time, since I left my last job, where I did everything in a row and made no headway :)",
        blockquote: "ReactJS beginner, HTML+CSS master, Na'Vi fan",
    }
    return (  
        <section id="about">
            <div className="container row">
                <div className="col s12"><h1>{staticInfo.title}</h1></div>
                <div className="col s12 m4">
                    <img className="responsive-img" src={staticInfo.photoPath} alt="my face"/>
                    <div className="center">
                        <h4>{staticInfo.name}</h4>
                        <small>{staticInfo.position}</small>
                    </div>
                </div>
                <div className="col s12 m8 contact">
                    <font>{staticInfo.aboutText}</font>
                    <blockquote>
                    <small>{staticInfo.blockquote}</small>
                        <i className="material-icons">accessible</i>
                    </blockquote>
                    <h5>{social.title}</h5>
                    <Social social={social}/>
                </div>
            </div>
        </section> 
    );
}

export {About}