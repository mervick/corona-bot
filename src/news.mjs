import { NEWS_RSS } from './config.mjs';
import { isAboutVirus } from './utils.mjs';
import Parser from 'rss-parser';

// rss parser
const parser = new Parser();

const getAllNews = async () => {
  const news = [];
  for (let source in NEWS_RSS) {
    let feed = await parser.parseURL(NEWS_RSS[source].url);
    feed.items.forEach(item => {
      if (isAboutVirus(item.title) || isAboutVirus(item.link)) {
        item.news_source = {
          id: NEWS_RSS[source].id,
          name: NEWS_RSS[source].name
        };
        news.push(item)
      }
    });
  }
  return news;
};

const getLatestNews = async (offset=8) => {
  const news = await getAllNews();
  const sortByLatest = (a, b) => {
    if (a.isoDate > b.isoDate) return -1;
    if (b.isoDate > a.isoDate) return 1;
    return 0;
  }
  news.sort(sortByLatest);
  return news.slice(0, offset);
};

export { getAllNews, getLatestNews };
