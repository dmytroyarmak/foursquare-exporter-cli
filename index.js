require('isomorphic-fetch');
const {getFoursqureLists} = require('./lib/foursquare-api');

let userId = 60752501;

getFoursqureLists(userId)
  .then(lists => {
    lists.forEach((list, index) => console.log(`${index + 1}.\t${list.name}`));
  });
