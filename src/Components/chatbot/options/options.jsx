import React from "react";

import "./options.css";

function Options(props) {
    const data = [
        {
            text: "About Saharsh",
            handler: props.actionProvider.handleAboutSaharsh,
            id: 1
        },
        {
            text: "Docker",
            handler: props.actionProvider.handleHello,
            id: 2
        },
        {
            text: "Sql",
            handler: props.actionProvider.handleSqlQuiz,
            id: 3
        }
    ];
    const optionsList = data.map((option) => (
        <button key={option.id} onClick={option.handler}>
            {option.text}
        </button>
    ));
    return (
        <div className="option-button">
            <p>{optionsList}</p>
        </div>
    );
}
export default Options;
