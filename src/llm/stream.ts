import { OpenAI } from "langchain/llms/openai";

import dotenv from "dotenv";
dotenv.config();

const model = new OpenAI({
  streaming: true,
  callbacks: [
    {
      handleLLMNewToken(token) {
        process.stdout.write(token);
      },
    },
  ],
});

await model.call("write a song about percieved reality");
