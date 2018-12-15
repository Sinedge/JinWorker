const cycles = require('./src/cycles');

async function worker () {
  console.info('Starting worker\n');
  const urls = [
    "http://www.jeuxvideo.com/rss/rss.xml",
    "http://www.jeuxvideo.com/rss/rss-news.xml",
    "http://www.jeuxvideo.com/rss/itunes-chroniques.xml",
    "https://news.google.com/news?ned=fr&num=100&output=rss&q=(%22starwars%22)",
    'http://www.jeuxvideo.com/rss/rss-videos.xml',
    'http://www.numerama.com/feed/',
    'https://news.ycombinator.com/rss',
  ];
  try {
    for (url of urls) {
      console.info(`URL: ${url}\n`);
      let res = await cycles.fetchNewItems(url);
      console.info(res);  
    }
  } catch (e) {
    console.warn(e);
  }
  console.info('Done\n\n');
}

// WORKER TO DO
worker();