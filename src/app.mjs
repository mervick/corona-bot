import { ABOUT_VIRUS, GITHUB_URL } from './config.mjs';
import { getCoronaMeter, getLatestNews } from './data.mjs';
import { getBot, shouldReply } from './utils.mjs';

// get bot instant
const bot = getBot();

bot.onText(/\/check/, msg => {
  if (shouldReply(msg)) {
    getCoronaMeter()
      .then(result => {
        if (!result) {
          bot.sendMessage(msg.chat.id, 'Failed to get the information.');
        } else {
          let reply = `<b>Current Satistic Data</b>\n\n`;
          reply += `<b>Cases</b>: ${result.cases}\n`;
          reply += `<b>Deaths</b>: ${result.deaths}\n`;

          bot.sendMessage(msg.chat.id, reply, {parse_mode : "HTML"});
        }
      })
  }
})

bot.onText(/\/news/, msg => {
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

bot.onText(/\/help/, msg => {
  if (shouldReply(msg)) {
    let reply = '';
    reply += '<i><b>/news</b></i> to get latest news about coronavirus\n';
    reply += '<i><b>/check</b></i> to get the number of coronavirus cases\n\n';
    reply += `Learn more about <a href="${ABOUT_VIRUS}">Coronavirus</a>\n`;
    reply += `This bot is open source and can find the code on <a href="${GITHUB_URL}">Github</a>`;

    bot.sendMessage(msg.chat.id, reply, {parse_mode: "HTML", disable_web_page_preview: true})
  }
});

bot.on("polling_error", (err) => console.log(err));