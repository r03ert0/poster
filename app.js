const sharp = require('sharp');

sharp('doge.jpg')
  .png()
  .tile({
    size: 256
  })
  .toFile('doge', function(err, info) {
    console.log(err, info);
  });
