import React from 'react';
import "./skills.css";

const skills = () => {
    const skills_array = [
        {
            text: "Javascript",
            id: 1,
        },
        {
            text: "HTML5",
            id: 2,
        },
        {
            text: "CSS",
            id: 3,
        },
        {
            text: "React",
            id: 4,
        },
        {
            text: "Redux",
            id: 5,
        },
        {
            text: "Typescript",
            id: 6,
        },
        {
            text: "python",
            id: 7,
        },
        {
            text: "Express Js",
            id: 8,
        },
        {
            text: "Dart",
            id: 9,
        },
        {
            text: "NodeJs",
            id: 10,
        },
        {
            text: "MySQL",
            id: 11,
        },
        {
            text: "firebase",
            id: 12,
        },
        {
            text: "OOPs",
            id: 13,
        },
        {
            text: "Bootstrap",
            id: 14,
        },
        {
            text: "jQuery",
            id: 15,
        },
        {
            text: "webSockets",
            id: 16,
        },
        {
            text: "webRTC",
            id: 17,
        },
        {
            text: "AWS",
            id: 18,
        },
        {
            text: "Git",
            id: 19,
        },
        {
            text: "Material UI",
            id: 20,
        },
        {
            text: "MongoDB",
            id: 21,
        },

    ];

    const skills = skills_array.map((skill) => (
        <button
            className="skills-button"
            key={skill.id}
            style={{ cursor: "not-allowed" }}
        >
            {skill.text}
        </button>
    ));
    return (
        <>
            <div className="learning-options-container">{skills}</div>
        </>
    )
}

export default skills;