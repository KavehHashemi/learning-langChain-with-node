import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

import dotenv from "dotenv";
dotenv.config();

///PROMPT
const template =
  "What would be a good name for a company that makes {product}?";

const promptTemplate = new PromptTemplate({
  template: template,
  inputVariables: ["product"],
});

// const formattedPrompt = await promptTemplate.format({
//   product: "gummy bear powered cars",
// });

///MODEL

const model = new OpenAI({
  temperature: 0.9,
});

///CHAIN

const chain = new LLMChain({ llm: model, prompt: promptTemplate });

const res = await chain.call({ product: "cars powered by cars" });

console.log(res);
