import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Saharsh`s bot';

const chatbot_config = {
    botName: botName,
    initialMessages: [
        createChatBotMessage(
            `Hi I'm ${botName}. I’m here to help you to get more information regarding saharsh.`
        ),
        createChatBotMessage(
            "I will give you information about the saharsh, his projects and contact information .",
            {
                withAvatar: false,
                delay: 600,
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

};

export default chatbot_config;