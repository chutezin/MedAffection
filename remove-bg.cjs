const fs = require('fs');
let Jimp;
try {
  Jimp = require('jimp');
} catch (e) {
  process.exit(1);
}

const dir = 'C:/Users/lucas/.gemini/antigravity/brain/7854888a-2943-4ece-8861-a422677f7a6c/';

async function processImage(prefix, outName, isGreenScreen) {
  const file = fs.readdirSync(dir).find(f => f.startsWith(prefix) && f.endsWith('.png'));
  if (!file) {
    console.log(`No file found for ${prefix}`);
    return;
  }
  const inputPath = dir + file;
  const outputPath = `assets/${outName}.png`;
  try {
    console.log(`Processing ${inputPath}...`);
    const image = await Jimp.read(inputPath);
    
    // Slight tolerance since 3D renders have anti-aliasing on edges
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx+0], g = this.bitmap.data[idx+1], b = this.bitmap.data[idx+2];
      
      if (isGreenScreen) {
        // Bright green background: G dominates R and B
        if (g > 150 && r < 120 && b < 120) {
          this.bitmap.data[idx + 3] = 0; // Pure Transparent
        }
      } else {
        // White background for the chest
        if (r > 240 && g > 240 && b > 240) {
          this.bitmap.data[idx + 3] = 0; // Pure Transparent
        }
      }
    });
    
    await image.writeAsync(outputPath);
    console.log(`Saved transparent asset: ${outputPath}`);
  } catch(err) {
    console.error(err);
  }
}

async function runAll() {
  await processImage('char_happy_v2', 'char-happy-v2', true);
  await processImage('char_brave_v2', 'char-brave-v2', true);
  await processImage('char_bald_v2', 'char-bald-v2', true);
}

runAll();
