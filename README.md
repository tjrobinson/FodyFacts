# Fody Facts

Mauritius Fody Facts Amazon Alexa Skill

## Sample usage

* Alexa, tell me a fody fact
* Alexa, give me a fody fact
* Alexa, tell me a fody trivia
* Alexa, give me a fody trivia

## Details

* Store URL: https://www.amazon.co.uk/tjrobinson-net-Mauritius-Fody-Facts/dp/B06XTZVF8H
* Skill ID: `amzn1.ask.skill.c8bfdaa2-ff53-4433-ba4a-4e12ccc1ac07`
* AWS Lambda ARN: `1arn:aws:lambda:us-east-1:737184954114:function:fodyFacts1`

## Building/Publishing

1. Build the AWS Lambda function
    1. Open `AWSLambda`
    1. Run `npm install`
    1. Increment the version number in `package.json` if required
    1. Run `npm run build`
    1. Upload `fodyFacts.zip` to the [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask/build/custom/amzn1.ask.skill.c8bfdaa2-ff53-4433-ba4a-4e12ccc1ac07/development/en_IN/dashboard)

Other files:

* `.png` files - images used in the app store
* `intent-schema.json` - the latest export of from the Alexa Developer Console
* `GetNewFactIntent-utterances.csv` - sample utterances exported from the Alexa Developer Console