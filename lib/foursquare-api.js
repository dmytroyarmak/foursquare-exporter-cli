const FOURSQUARE_LISTS_URL = 'https://api.foursquare.com/v2/users/USER_ID/lists?group=created&oauth_token=AUTH_TOKEN&v=20170102';

function getFoursqureLists(userId) {
  let url = FOURSQUARE_LISTS_URL.replace('USER_ID', userId);
  return fetch(url)
    .then(response => response.json())
    .then(data => data.response.lists.items);
}

exports.getFoursqureLists = getFoursqureLists;
