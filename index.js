import OpenAI from 'openai';

const openai = new OpenAI({
  
});
const chatCompletion = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [{"role": "user", "content": "Hello!"}],
});
console.log(chatCompletion.choices[0].message);
const stream = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [{"role": "user", "content": "Hello!"}],
  stream: true,
});
for await (const part of stream) {
  console.log(part.choices[0].delta);
}
const completion = await openai.completions.create({
  model: "text-davinci-003",
  prompt: "This story begins",
  max_tokens: 30,
});
console.log(completion.choices[0].text);
const { data, response } = openai.chat.completions.create(params).withResponse()
response.headers.get('x-ratelimit-remaining-tokens')
data.id