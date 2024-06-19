import OpenAI from 'openai';
import readline from 'readline';

const openai = new OpenAI({
  
});

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

userInterface.on("line", async (input) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    });
    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error(error);
  }
  userInterface.prompt();
});
