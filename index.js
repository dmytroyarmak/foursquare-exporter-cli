require('isomorphic-fetch');
const {getFoursqureVenuesByListName} = require('./lib/foursquare-api');

let userId = 60752501;
let listName = 'Stockholm';

getFoursqureVenuesByListName(userId, listName)
  .then(venues => console.log(venues));
