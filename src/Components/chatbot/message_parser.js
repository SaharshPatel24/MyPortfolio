class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        message = message.toLowerCase();
        if (message.includes('hello')) {
            this.actionProvider.handleHello();
        } else if (message.includes('about saharsh')) {
            this.actionProvider.handleAboutSaharsh();
        } else if (message.includes('how are you')) {
            this.actionProvider.handleHowAreYou();
        } else {
            this.actionProvider.handleUnknown();
        }
    }
}

export default MessageParser;