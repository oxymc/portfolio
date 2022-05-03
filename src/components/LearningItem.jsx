const learning = [
    "React",
    "Redux",
]
const progress = {
    react: {
        filled: "■".repeat(6),
        empty: "□".repeat(4)
    },
    redux: {
        filled: "■".repeat(2),
        empty: "□".repeat(8)
    }
}

const LearningItem = () => {
    return (   
        <>
            <div className="col s12">
                <div className="foFlex">
                    <div>{learning[0]}<span className="material-icons">javascript</span></div>
                    <div className="my_progress">
                        <div className="my_progress__graph">
                            {progress.react.filled + progress.react.empty}
                        </div>
                        <div className="my_progress__percent">
                            {progress.react.filled.length*10}%
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12">
                <div className="foFlex">
                    <div>
                        {learning[1]} <span className="material-icons smaller">webhook</span>
                    </div>
                    <div className="my_progress">
                        <div className="my_progress__graph">
                            {progress.redux.filled + progress.redux.empty}
                        </div>
                        <div className="my_progress__percent">
                            {progress.redux.filled.length*10}%
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {LearningItem}