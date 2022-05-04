import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from './options/options';

class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
        this.createChatbotMessage = createChatbotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    handleHello() {
        const message = createChatBotMessage('Hello. Nice to meet you.');

        this.setChatbotMessage(message);

    }

    handleHowAreYou() {
        const message = createChatBotMessage('I am fine, tell about your`s.');

        this.setChatbotMessage(message);
    }

    handleAboutSaharsh() {

        const message = createChatBotMessage(
            ' Saharsh Patel is passionate and enthusiastic web-developer. From his schools he was very good in the computers and had started learning basics of web-development.Currently, he is about to complete his Computer Programming and Analysis course from the Seneca College.He had gain good skills in the field of web developemt. He has some good projects in his portfolio Would you like to check it out ?',
            {
                widget: LearningOptions,
            }
        );

        this.setChatbotMessage(message);
    }

    handleSkill() {

        const message = createChatBotMessage(
            'Skill are very important to know. Here are some of the skills of Saharsh',
            {
                widget: "learningOptions",
            }
        );

        this.setChatbotMessage(message);
    }

    handleProjects() {

        const message = createChatBotMessage(
            'Here are some projects of saharsh',
            {
                widget: "learningOptions",
            }
        );

        this.setChatbotMessage(message);
    }

    handleUnknown() {
        const message = createChatBotMessage('Sorry, I don`t know about it .');

        this.setChatbotMessage(message);
    }

    setChatbotMessage(messages) {
        this.setState((state) => ({
            ...state,
            messages: [...state.messages, messages]
        }));
    };
}



export default ActionProvider;