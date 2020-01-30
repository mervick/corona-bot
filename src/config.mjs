// credentials
const TOKEN = '';
const USERNAME = 'coronaexe_bot';

// extra info
const ABOUT_VIRUS = 'https://www.who.int/health-topics/coronavirus';
const GITHUB_URL = 'https://github.com/the-robot/corona-bot';

// Numerical Data Source
const CORONA_METER = {
  url: 'https://www.worldometers.info/coronavirus/',
};

// News Sources
const NEWS_RSS = {
  cna: {
    id: 'CNA',
    name: 'Channel News Asia',
    url: 'https://www.channelnewsasia.com/rssfeeds/8395986'
  },
  cnn: {
    id: 'CNN',
    name: 'Cable News Network',
    url: 'http://rss.cnn.com/rss/edition.rss',
  },
  guardian: {
    id: 'Guardian',
    name: 'Guardian',
    url: 'https://www.theguardian.com/world/rss'
  },
  ny_times: {
    id: 'New York Times',
    name: 'New York Times',
    url: 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml',
  },
  strait_times: {
    id: 'Strait Times',
    name: 'Strait Times',
    url: 'https://www.straitstimes.com/news/asia/rss.xml'
  },
  yahoo: {
    id: 'Yahoo Singapore',
    name: 'Yahoo Singapore',
    url: 'https://sg.news.yahoo.com/rss/'
  },
};

export { ABOUT_VIRUS, CORONA_METER, GITHUB_URL, NEWS_RSS, TOKEN, USERNAME };
