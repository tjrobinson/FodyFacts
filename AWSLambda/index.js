'use strict';

var Alexa = require('alexa-sdk');

var APP_ID = 'amzn1.ask.skill.c8bfdaa2-ff53-4433-ba4a-4e12ccc1ac07';
var SKILL_NAME = 'Mauritius Fody Facts';

var FACTS = [
    "The bird is a weaver, the male and female cooperating to weave each nest, from material like grass, moss and small twigs.",
    "The Mauritius fody (Foudia rubra) is a rare species of bird in the weaver family.",
    "It is endemic to the island of Mauritius.",
    "Nest failure may occur when it is infested with tropical nest fly.",
    "Beginning in the 1970s much of its habitat was lost when the land was cleared for plantations.",
    "It is classified by BirdLife International as being endangered.",
    "The Mauritius fody is threatened by the loss of its habitat and predation from introduced predators.",
    "It is on the United States' Endangered Species List with an endangered status.",
    "Breeding males are olive brown with a red head, breast and rump patch and black lores.",
    "Females, non-breeding males and juveniles are olive brown with white wing bars and a brown bill.",
    "The bird lives in several types of forest, including degraded areas, as well as plantations.",
    "This bird is 14 centimeters long.",
    "Île aux Aigrettes, an islet off the main island of Mauritius, is now home to a number of Mauritius fodies and other threatened species that have been translocated there.",
    "Conservation efforts include the control of rats and macaques.",
    "It feeds on nectar regularly, using its specialised brush-tipped tongue.",
    "It feeds on insects like grasshoppers, beetle larvae, caterpillars, and also spiders.",
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random fody fact from the fody facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fody fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a fody fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};