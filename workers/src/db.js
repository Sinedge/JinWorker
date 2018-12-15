const request = require('request');

module.exports.diff = async (items) => {
  let newItems = [];
try {
    items.forEach(async (item) => {
      return await request.post(`http://localhost:3001/findArticle/`, { json: true, body: { guid: item.guid } }, (err, resp) => {
      if (err) {
          console.warn(err);
        } else if (resp.body === null) {
          newItems.push(item);
        }
      });
    });
    return newItems;
  }
  catch(e) {
    console.warn(e.message || e);
    return [];
  }
}

module.exports.saveItems = async (items) => {
  try {
    const resp = await request.post('http://localhost:3001/articles/', { json: true, body: { items } }, (err, resp) => {
      if (err) { 
        console.warn(err);
        return [];
      }
      return resp;
    });
    return resp;
  } catch(e) {
    console.warn(e);
    return [];
  }
}