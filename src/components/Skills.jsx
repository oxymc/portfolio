

const Skills = () => {
    return (
        <section id="skills">
            <div className="container row">
                <div className="col s12"><h2>My skills</h2></div>
                <div className="col s12 m6">
                    <div className="section">
                        <h5>HTML5 <span className="material-icons">html</span></h5>
                        <small>semantic layout, microdata, webflow</small>
                    </div>
                    <div className="divider"></div>
                </div>
                <div className="col s12 m6">
                    <div className="section">
                        <h5>CSS3 <span className="material-icons">css</span></h5>
                        <small>Flexbox, Grid, SCSS, CSS @media</small>
                    </div>
                    <div className="divider"></div>
                </div>        
                <div className="col s12 m6">
                    <div className="section">
                        <h5>JavaScript<span className="material-icons nomarginleft">javascript</span></h5>
                        <small>vanilla JS, JQuery, ES6+</small>
                    </div>
                    <div className="divider"></div>
                </div>
                <div className="col s12 m6">
                    <div className="section">
                        <h5>React<span className="material-icons nomarginleft">javascript</span> <small><small>[in process]</small></small></h5>
                        <small>Classes, Hooks, Routing</small>
                    </div>
                    <div className="divider"></div>
                </div>
                <div className="col s12 m6">
                    <div className="section">
                        <h5>BEM<span className="material-icons smaller">token</span></h5>
                    </div>
                    <div className="divider"></div>
                </div>
                <div className="col s12 m6">
                    <div className="section">
                        <h5>TypeScript<span className="smaller typescript">ts</span></h5>
                    </div>
                    <div className="divider"></div>
                </div>
                <div className="col s12 m6">
                    <div className="section">
                        <h5>GIT<span className="material-icons smaller">account_tree</span></h5>
                        <small>github <small>+gh-pages</small>, gitlab, bitbucket</small>
                    </div>
                    <div className="divider"></div>
                </div>
                <div className="col s12 m6">
                    <div className="section">
                        <h5>REST API <span className="material-icons smaller">compare_arrows</span></h5>
                        <small>JSON</small>
                    </div>
                    <div className="divider"></div>
                </div>
            </div>
        </section>
    );
}

export {Skills}