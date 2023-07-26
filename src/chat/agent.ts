import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { ChatAgent, AgentExecutor } from "langchain/agents";
import dotenv from "dotenv";
dotenv.config();

const model = new ChatOpenAI({ temperature: 0 });
const tools = [new SerpAPI(process.env.SERP_API_KEY, { hl: "fa", gl: "ir" })];
const agent = ChatAgent.fromLLMAndTools(model, tools);
const executer = AgentExecutor.fromAgentAndTools({
  agent: agent,
  tools: tools,
});

const res = await executer.run("How many people live in Iran in 2023?");

console.log(res);
