const FOURSQUARE_LISTS_URL = 'https://api.foursquare.com/v2/users/USER_ID/lists?group=created&oauth_token=AUTH_TOKEN&v=20170102';
const FOURSQUARE_LIST_ITEMS_URL = 'https://api.foursquare.com/v2/lists/LIST_ID?oauth_token=AUTH_TOKEN&v=20170102';

exports.getFoursqureLists = getFoursqureLists;
function getFoursqureLists(userId) {
  let url = FOURSQUARE_LISTS_URL
    .replace('AUTH_TOKEN', process.env.FOURSQUARE_AUTH_TOKEN)
    .replace('USER_ID', userId);

  return fetch(url)
    .then(response => response.json())
    .then(data => data.response.lists.items);
}

exports.getFoursqureListByName = getFoursqureListByName;
function getFoursqureListByName(userId, listName) {
  return getFoursqureLists(userId)
    .then(lists => {
      return lists.find(list => list.name === listName);
    });
}

exports.getFoursqureListItems = getFoursqureListItems;
function getFoursqureListItems(listId) {
  let url = FOURSQUARE_LIST_ITEMS_URL
    .replace('AUTH_TOKEN', process.env.FOURSQUARE_AUTH_TOKEN)
    .replace('LIST_ID', listId);

  return fetch(url)
    .then(response => response.json())
    .then(data => data.response.list.listItems.items);
}

exports.getFoursqureVenuesByListName = getFoursqureVenuesByListName;
function getFoursqureVenuesByListName(userId, listName) {
  return getFoursqureListByName(userId, listName)
    .then(list => getFoursqureListItems(list.id))
    .then(items => items.map(item => item.venue))
}
