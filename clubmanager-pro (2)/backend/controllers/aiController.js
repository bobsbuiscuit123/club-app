// controllers/aiController.js
const { Configuration, OpenAIApi } = require('openai');
const Event = require('../models/Event');
const Task = require('../models/Task');
const Post = require('../models/Post');

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

async function parseCommand(req, res) {
  const { text } = req.body;
  // Very simple NLP routing by keyword
  if (/schedule/i.test(text)) {
    // example: "Schedule meeting on 2025-08-01 at 3pm"
    // parse date/time/title here...
    const event = await Event.create({ title: text, date: new Date(), time: 'TBD' });
    return res.json({ message: `Event created: ${event.id}`, event });
  }
  if (/assign/i.test(text)) {
    const task = await Task.create({ title: text, dueDate: new Date() });
    return res.json({ message: `Task assigned: ${task.id}`, task });
  }
  if (/post/i.test(text)) {
    // generate caption via OpenAI
    const aiRes = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Write a social media post: ${text}`,
      max_tokens: 60
    });
    const post = await Post.create({ content: aiRes.data.choices[0].text.trim() });
    return res.json({ message: 'Post created', post });
  }
  res.json({ message: 'Command not recognized.' });
}

module.exports = { parseCommand };
