require('dotenv').config();
const feedparser = require('feedparser-promised');
const actions = require('./db.js');

module.exports.fetchNewItems = async function (url) {
  let items;
  try {
    const rawItems = await feedparser.parse(url);
    items = rawItems.map(item => ({
      title: item.title || null,
      guid: item.guid,
      pubDate: item.pubDate || new Date(),
      link: item.link || null,
      image: item.image.url || item.content && item.content.img || null,
      description: item.description || null
    }));
  } catch (e) {
    return e.message;
  }

  console.info(`Fetched ${items.length} item${items.length > 1 ? 's' : ''}\n`);

  let newItems = await actions.diff(items);

  if (newItems.length > 0) {
    console.info(`Found ${newItems.length} item${newItems.length > 1 ? 's' : ''} to add\n`);

    let resp = await actions.saveItems(newItems);

    let added = JSON.parse(resp.body);
    if (added.items.length > 0) {
      return `Added ${added.items.length} item${added.items.length > 1 ? 's' : ''}\n`;
    } else {
      return 'Error occurred, unable to save';
    }
  } else {
    return 'Nothing to add\n';
  }
}