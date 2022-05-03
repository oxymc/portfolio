import { LearningItem } from "./LearningItem"

const Way = ({translate, isTranslated}) => {
    const title = "Learning now"
    const text = !isTranslated ?
        "У самурая немає цілі, є тільки шлях..." :
        'The samurai has no goal, there is only a way...'

    return (
        <section id="way">
            <div className="container row center">
                <h2>{title}</h2>     
                <LearningItem />
                <div className="col s12"> 
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