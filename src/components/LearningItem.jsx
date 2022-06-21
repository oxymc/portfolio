const learning = [
    "Svelte",
    "SvelteKit",
]
const progress = {
    item_1: {
        filled: "■".repeat(7),
        empty: "□".repeat(3)
    },
    item_2: {
        filled: "■".repeat(5),
        empty: "□".repeat(5)
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
                            {progress.item_1.filled + progress.item_1.empty}
                        </div>
                        <div className="my_progress__percent">
                            {progress.item_1.filled.length*10}%
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12">
                <div className="foFlex">
                    <div>
                        {learning[1]}
                    </div>
                    <div className="my_progress">
                        <div className="my_progress__graph">
                            {progress.item_2.filled + progress.item_2.empty}
                        </div>
                        <div className="my_progress__percent">
                            {progress.item_2.filled.length*10}%
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {LearningItem}