import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} from "langchain/prompts";
import { LLMChain } from "langchain/chains";

import dotenv from "dotenv";
dotenv.config();

const translationPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "you translate {input_language} to {output_language}"
  ),
  HumanMessagePromptTemplate.fromTemplate("{text}"),
]);

// const formattedPrompt = await translationPrompt.formatPromptValue({
//   input_language: "German",
//   output_language: "English",
//   text: "Ich bin sehr klug",
// });

const model = new ChatOpenAI({ temperature: 0 });

// const res = await model.generatePrompt([formattedPrompt]);

const chain = new LLMChain({ llm: model, prompt: translationPrompt });

const res = await chain.call({
  input_language: "German",
  output_language: "English",
  text: "Ich bin sehr klug",
});

console.log(res);
