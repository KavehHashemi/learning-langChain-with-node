import { OpenAI } from "langchain/llms/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { initializeAgentExecutorWithOptions } from "langchain/agents";

import dotenv from "dotenv";
dotenv.config();

const model = new OpenAI({ temperature: 0 });
const tools = [
  new SerpAPI(process.env.SERP_API_KEY, { hl: "fa", gl: "ir" }),
  new Calculator(),
];

const executer = await initializeAgentExecutorWithOptions(tools, model, {
  agentType: "zero-shot-react-description",
});

const res = await executer.call({
  input: "what is the produced horsepower of autozam az-1? times that by two.",
});

console.log(res.output);
