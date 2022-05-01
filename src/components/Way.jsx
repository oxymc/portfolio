

const Way = ({translate, isTranslated}) => {
    const title = "Learning now"
    const text = !isTranslated ?
        "У самурая немає цілі, є тільки шлях..." :
        'The samurai has no goal, there is only a way...'
    const learning = "Redux"

    return (
        <section id="way">
            <div className="container row center">
                <div className="col s12">
                    <h2>{title}</h2>
                    <font>
                        {learning}
                        <div className="progress">
                            <div className="indeterminate"></div>
                        </div>
                    </font>
                </div>
                <div className="col s12">
                    <i className="large material-icons">all_inclusive</i>
                    <font>{text}</font>
                </div>
                {!isTranslated ?
                    <button className="btn" onClick={translate}>
                        TRANSLATE IT NOW!
                    </button> : <button className="btn disabled" onClick={translate}>
                        It was last action!
                    </button>
                }   
            </div>
        </section>
    );
}

export {Way}