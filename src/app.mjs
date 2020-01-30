import { getLatestNews } from './news.mjs';
import { getBot, shouldReply } from './utils.mjs';

// get bot instant
const bot = getBot();

bot.onText(/\/hello/, (msg) => {
  if (shouldReply(msg)) {
    bot.sendMessage(msg.chat.id, "Hello  " + msg.from.first_name);
  }
 });


bot.onText(/\/news/, (msg) => {
  const buildToMarkdown = news => {
    let reply = `<b>Latest News</b>\n\n`;
    for (let i=0; i<news.length; i+=1) {
      reply += `${i+1}. <a href="${news[i].link}">${news[i].title}</a> <code>(${news[i].news_source.id})</code>\n\n`;
    }
    reply += `<pre>The latest news is published on ${news[0].pubDate}</pre>`;
    return reply;
  }

  if (shouldReply(msg)) {
    getLatestNews()
      .then(news => {
        if (news.length > 0) {
          bot.sendMessage(msg.chat.id, buildToMarkdown(news), {parse_mode : "HTML", disable_web_page_preview: true});
        } else {
          bot.sendMessage(msg.chat.id, 'No latest news at the moment.');
        }
      });
  }
});

bot.on("polling_error", (err) => console.log(err));