const Education = () => {
    const studyInfo = {
        title: "Studied at",
        place: "Ukraine, Ternopil",
        name: "Ternopil State 'Ivan Pul'uj'​ Technical University",
        status: "Finished 100%"
    }

    return (
        <section id="education">
            <div className="container row">
                <div className="col s12 m12">
                    <h2>{studyInfo.title}</h2>
                </div>
                <div className="col s12 m4 center">
                    <i className="large material-icons">pin_drop</i>
                    <font>{studyInfo.place}</font>
                </div>
                <div className="col s12 m4 center">
                    <i className="large material-icons">account_balance</i>
                    <font>{studyInfo.name}</font>
                </div>
                <div className="col s12 m4 center">
                    <i className="large material-icons">check</i>
                    <font>{studyInfo.status}</font>
                </div>
            </div>
        </section>
    );
}

export {Education}