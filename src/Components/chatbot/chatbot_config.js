import { createChatBotMessage } from 'react-chatbot-kit';
import Projects_option from './widgets/project_options'

import LearningOptions from './options/options';
import Skills from './widgets/skills/skills';

const botName = 'Saharsh`s bot';

const chatbot_config = {
    botName: botName,
    initialMessages: [
        createChatBotMessage(
            `Hi I'm ${botName}. I’m here to help you to get more information about saharsh.`
        ),
        createChatBotMessage(
            "I will give you information about the saharsh biodata, his projects and contact information .",
            {
                withAvatar: false,
                delay: 600,
                widget: "learningOptions",
            }
        ),
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
    state: {
        about_saharsh: [],
        sql: [],
        docker: []
    },
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },
        {
            widgetName: "skills",
            widgetFunc: () => <Skills />,
        },
        {
            widgetName: "projectsOption",
            widgetFunc: () => <Projects_option />,
        }
    ],

};

export default chatbot_config;