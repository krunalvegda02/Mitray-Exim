const sharp = require('sharp');
const fs = require('fs');

async function padImage() {
  const input = 'public/MItrayTab_original.png';
  const output = 'public/MItrayTab_padded.png';
  
  try {
    const metadata = await sharp(input).metadata();
    
    // Add 20% padding on all sides
    const paddingX = Math.round(metadata.width * 0.2);
    const paddingY = Math.round(metadata.height * 0.2);
    
    await sharp(input)
      .extend({
        top: paddingY,
        bottom: paddingY,
        left: paddingX,
        right: paddingX,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toFile(output);
      
    // Overwrite the working tab image with the padded one
    fs.copyFileSync(output, 'public/MItrayTab.png');
    // Also update the next.js icons
    fs.copyFileSync(output, 'src/app/icon.png');
    fs.copyFileSync(output, 'src/app/favicon.ico');
    
    console.log('Padding applied successfully and copied to icons.');
  } catch (error) {
    console.error('Error applying padding:', error);
  }
}

padImage();
