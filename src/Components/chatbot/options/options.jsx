import React from "react";
import "./options.css";

const LearningOptions = (props) => {
    const options = [
        {
            text: "About Saharsh",
            handler: () => props.actionProvider.handleAboutSaharsh(),
            id: 1,
        },
        {
            text: "Skills",
            handler: () => props.actionProvider.handleSkill(),
            id: 2,
        },
        {
            text: "Projects",
            handler: () => props.actionProvider.handleProjects(),
            id: 3,
        },
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;