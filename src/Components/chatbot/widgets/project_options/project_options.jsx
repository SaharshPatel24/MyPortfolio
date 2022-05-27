import React from React;
import "./project_option.css"

const Projects = () => {
    const projects_array = [
        {
            text: "Portfolio",
            link: "https://www.saharshpatel.ml/",
            id: 1,
        },
        {
            text: "Mini Bank",
            link: "",
            id: 2,
        },
        {
            text: "Video Calling app",
            link: "",
            id: 3,
        },
        {
            text: "Finworld",
            link: "",
            id: 4,
        }
    ]

    const projects = projects_array.map((project) => (
        <a href={project.link}
            className="projects-button"
            key={project.id}
            style={{ cursor: "not-allowed" }}
        >
            {project.text}
        </a>
    ));
    return (
        <>
            <div className="learning-options-container">{projects}</div>
        </>
    )
}