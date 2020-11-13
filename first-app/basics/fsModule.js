const fs = require('fs');
const CURRENT_LOCATION = './';

// const files = fs.readdirSync(CURRENT_LOCATION);
// console.log(files);

fs.readdir(CURRENT_LOCATION, function(err, files) {
  if (err) console.log('Error ', err);

  console.log(files);
});