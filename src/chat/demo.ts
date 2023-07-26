import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, SystemMessage } from "langchain/schema";

import dotenv from "dotenv";
dotenv.config();

const model = new ChatOpenAI({ temperature: 0 });

////model.call takes an array
// const res = await model.call([
//   new SystemMessage("you translate german to english"),
//   new HumanMessage("translate this message to english. ich bin sehr klug"),
// ]);

////model.generate takes an array of arrays
const res = await model.generate([
  [
    new SystemMessage("you translate german to english"),
    new HumanMessage("translate this message to english. ich bin sehr klug"),
  ],
  [
    new SystemMessage("you translate german to farsi"),
    new HumanMessage("translate this message to farsi. ich bin sehr klug"),
  ],
]);

console.log(res.generations);
