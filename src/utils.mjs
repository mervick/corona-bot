import { TOKEN, BOT_USERNAME } from './config.mjs';
import TelegramBot from 'node-telegram-bot-api';

const getBot = () => {
  return new TelegramBot(TOKEN, {polling: true});
};

const isAboutVirus = text => {
  // to check if the text is about wuhan/corona virus
  return (
    new RegExp('wuhan', 'ig').test(text) ||
    new RegExp('coronavirus', 'ig').test(text) ||
    new RegExp('corona virus', 'ig').test(text)
  );
};

const shouldReply = msg => {
  const isMentionedInGroup = msg => {
    const pattern = new RegExp(`[@]${BOT_USERNAME}\\b`, 'g');
    return pattern.test(msg.text) && (msg.chat.type === 'group' || msg.chat.type === 'supergroup');
  };

  const isPrivateChat = msg => {
    return msg.chat.type === 'private';
  };

  return isMentionedInGroup(msg) || isPrivateChat(msg);
};


export { getBot, isAboutVirus, shouldReply };
