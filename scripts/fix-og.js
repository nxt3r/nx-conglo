const fs = require('fs');
const path = require('path');

const venturesDir = path.join(__dirname, '../out/ventures');

if (fs.existsSync(venturesDir)) {
  const folders = fs.readdirSync(venturesDir);
  folders.forEach(folder => {
    const ogPath = path.join(venturesDir, folder, 'opengraph-image');
    const newPath = path.join(venturesDir, folder, 'opengraph-image.png');
    
    if (fs.existsSync(ogPath)) {
      fs.renameSync(ogPath, newPath);
      console.log(`✅ Renamed OG image for ${folder}`);
    }
  });
}