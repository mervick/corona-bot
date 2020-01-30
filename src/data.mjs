import { CORONA_METER, NEWS_RSS } from './config.mjs';
import { isAboutVirus } from './utils.mjs';
import Parser from 'rss-parser';
import axios from 'axios';
import cheerio from 'cheerio';

// rss parser
const parser = new Parser();

const getCoronaCountries = async () => {
  let response;
  try {
    response = await axios.get(CORONA_METER.url);
    if (response.status !== 200) {
      throw err;
    }
  } catch (err) {
    return null;
  }

  // to store parsed data
  const result = [];

  // get HTML and parse death rates
  const html = cheerio.load(response.data)
  const countriesTable = html('table#table3');
  const countriesTableCells = countriesTable.children('tbody').children('tr').children('td');

  for (let i=0; i<countriesTableCells.length; i+=1) {
    const cell = countriesTableCells[i];

    // get country
    if (i % 4 === 0) {
      let country = (
        cell.children[0].data ||
        cell.children[0].children[0].data ||
        // country name with link has another level
        cell.children[0].children[0].children[0].data
      );
      result.push({ country });
    }
    // get cases
    if (i % 4 === 1) {
      result[result.length-1].cases = cell.children[0].data;
    }
    // get deaths
    if (i % 4 === 2) {
      result[result.length-1].deaths = cell.children[0].data;
    }
    // get region
    if (i % 4 === 3) {
      result[result.length-1].region = (
        cell.children[0].children[0].data ||
        cell.children[0].children[0].children[0].data
      );
    }
  }

  return result;
};

const getCoronaOverall = async () => {
  let response;
  try {
    response = await axios.get(CORONA_METER.url);
    if (response.status !== 200) {
      throw err;
    }
  } catch (err) {
    return null;
  }

  // to store parsed data
  const result = {};

  // get HTML and parse death rates
  const html = cheerio.load(response.data)
  html('.maincounter-number').filter((i, el) => {
    let count = el.children[0].next.children[0].data;
    // first one is 
    if (i === 0) {
      result.cases = count;
    } else {
      result.deaths = count;
    }
  });

  return result;
};

// News
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

export { getAllNews, getCoronaCountries, getCoronaOverall, getLatestNews };
