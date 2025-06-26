import { imageids } from './ids'
import imageDataURI from 'image-data-uri'

// Function to download a single image
async function downloadImage(id: string, index: number, total: number) {
  try {
    const imgRes = await (await fetch(`https://www.gstatic.com/prettyearth/assets/data/v3/${id}.json`)).json()
    const img = imgRes?.dataUri
    let filePath = `./images/${id}`;
    await imageDataURI.outputFile(img, filePath)
    console.log(`Image ${id}, ${index} of ${total} saved`)
  } catch (error) {
    console.error(`Failed to download image ${id}:`, error)
  }
}

// Process images in batches of 20
const batchSize = 20;
let processedCount = 0;

async function main() {
  for (let i = 0; i < imageids.length; i += batchSize) {
    const batch = imageids.slice(i, i + batchSize);
    console.log(`Processing batch ${i/batchSize + 1} (${batch.length} images)...`);
    
    await Promise.all(
      batch.map((id, index) => 
        downloadImage(id, processedCount + index + 1, imageids.length)
      )
    );
    
    processedCount += batch.length;
    console.log(`Batch complete. ${processedCount} of ${imageids.length} images processed.`);
  }
  
  console.log('All downloads complete.');
}

main().catch(error => console.error('Error in main process:', error));