import { About } from "../components/About";
import { Education } from "../components/Education";
import { Way } from "../components/Way";
import { Skills } from "../components/Skills";

const Main = ({mode, translate, isTranslated, social}) => {
    return (
        <main className={mode}>
              <div className="flow-text">
                  <About social={social} />
                  <Education />
                  <Skills />
                  <Way translate={translate} isTranslated={isTranslated} />
              </div>
        </main>
    );
}

export {Main}