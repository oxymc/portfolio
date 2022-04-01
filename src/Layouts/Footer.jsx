import { Social } from "../components/Social";


const Footer = ({social}) => {
    return (
      <footer className="teal darken-2">
          <div className="footer-copyright">
            <div className="container foFlex">
            <span>© {new Date().getFullYear()} OXYG</span>
            <Social social={social} />
            <a 
              className="grey-text text-lighten-4 right" 
              target="_blank" 
              rel="noreferrer"
              href="https://github.com/oxymc/portfolio">
                GitHub
            </a>
            </div>
          </div>
        </footer>
    );
}

export {Footer}