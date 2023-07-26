import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  MessagesPlaceholder,
} from "langchain/prompts";
import dotenv from "dotenv";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
dotenv.config();

const model = new ChatOpenAI({});

const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "The following is a friendly conversation between a human and an AI, The AI is ver helpful and provides lots of data from its context"
  ),
  new MessagesPlaceholder("history"),
  HumanMessagePromptTemplate.fromTemplate("{input}"),
]);

const chain = new ConversationChain({
  memory: new BufferMemory({ returnMessages: true, memoryKey: "history" }),
  prompt: chatPrompt,
  llm: model,
});

const res = await chain.call({ input: "Hello from Tehran" });

console.log(res);

const res2 = await chain.call({ input: "Do you know which country I am in?" });

console.log(res2);
