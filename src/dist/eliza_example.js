"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eliza_1 = require("@ai16z/eliza"); // Assuming you have the Eliza core package installed
async function runEliza() {
    const config = {
        name: "My Helpful Bot",
        greeting: "Hello there! How can I assist you today?",
        bye: "Goodbye! It was nice chatting with you.",
        initialTopics: ["greetings", "feelings"], // Example: Predefined topics
        // ... other custom config
    };
    try {
        const eliza = new eliza_1.Eliza(config);
        console.log(config.greeting); // Initial greeting
        // Simulate some user input and Eliza's responses
        const userInputs = [
            "I'm feeling a bit down today.",
            "That's interesting. Tell me more.",
            "So, what's your favorite color?", // Example custom question
            "I have to go now.",
        ];
        for (const input of userInputs) {
            console.log("You:", input);
            const response = await eliza.getResponse(input);
            console.log("Eliza:", response);
        }
        console.log(config.bye); // Final farewell
    }
    catch (error) {
        console.error("Error running Eliza:", error);
    }
}
runEliza();
