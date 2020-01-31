// credentials
const TOKEN = '';
const BOT_USERNAME = 'coronaexe_bot';

// extra info
const ABOUT_VIRUS = 'https://www.who.int/health-topics/coronavirus';
const GITHUB_URL = 'https://github.com/the-robot/corona-bot';

// Numerical Data Source
const CORONA_METER = {
  url: 'https://www.worldometers.info/coronavirus/',
};

// News Sources
const NEWS_RSS = {
  bbc: {
    id: 'BBC',
    name: 'British Broadcasting Corporation',
    url: 'http://feeds.bbci.co.uk/news/world/rss.xml',
  },
  cna: {
    id: 'CNA',
    name: 'Channel News Asia',
    url: 'https://www.channelnewsasia.com/rssfeeds/8395986'
  },
  cnbc: {
    id: 'CNBC',
    name: 'Consumer News and Business Channel',
    url: 'https://www.cnbc.com/id/100727362/device/rss/rss.html',
  },
  cnn: {
    id: 'CNN',
    name: 'Cable News Network',
    url: 'http://rss.cnn.com/rss/edition.rss',
  },
  guardian: {
    id: 'The Guardian',
    name: 'The Guardian',
    url: 'https://www.theguardian.com/world/rss'
  },
//   mail_online: {
//     id: 'Mail Online',
//     name: 'Mail Online',
//     url: 'https://www.dailymail.co.uk/articles.rss',
//   },
  ny_times: {
    id: 'New York Times',
    name: 'New York Times',
    url: 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml',
  },
  rfa: {
    id: 'RFA',
    name: 'Radio Free Asia',
    url: 'https://www.rfa.org/english/feed/rss2.xml',
  },
  strait_times: {
    id: 'Strait Times',
    name: 'Strait Times',
    url: 'https://www.straitstimes.com/news/asia/rss.xml'
  },
  the_independent: {
    id: 'The Independent',
    name: 'The Independent',
    url: 'http://www.independent.co.uk/news/world/rss',
  },
  yahoo: {
    id: 'Yahoo Singapore',
    name: 'Yahoo Singapore',
    url: 'https://sg.news.yahoo.com/rss/'
  },
};

// Reddit RSS
const REDDIT_RSS = {
  china: {
    id: 'r/china',
    name: 'China',
    url: 'https://www.reddit.com/r/China/.rss',
  },
  china_flu: {
    id: 'r/china_flu',
    name: 'China Flu',
    url: 'https://www.reddit.com/r/china_flu/.rss',
  },
  coronavirus: {
    id: 'r/coronavirus',
    name: 'Coronavirus',
    url: 'https://www.reddit.com/r/coronavirus/.rss',
  },
  news: {
    id: 'r/news',
    name: 'Reddit News',
    url: 'https://www.reddit.com/r/news/.rss',
  },
  singapore: {
    id: 'r/singapore',
    name: 'Singapore',
    url: 'https://www.reddit.com/r/singapore/.rss',
  },
};

// Twitter username
const TWITTER_RSS = {
  wuhanvirus: {
    id: '@thewuhanvirus',
    name: 'the_wuhan_virus',
    url: 'https://twitrss.me/twitter_user_to_rss/?user=thewuhanvirus',
  },
};

export { ABOUT_VIRUS, BOT_USERNAME, CORONA_METER, GITHUB_URL, NEWS_RSS, REDDIT_RSS, TOKEN, TWITTER_RSS };

