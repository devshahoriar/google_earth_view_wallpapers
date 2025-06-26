
# 🌍  Earth's Beauty Downloader 🖼️

> **Download stunning Earth wallpapers from Google's Pretty Earth collection with ease!** 🚀

## ✨ What is this?

This is a powerful TypeScript utility that automatically downloads high-quality Earth imagery from Google's Pretty Earth data collection. Perfect for creating stunning wallpaper collections, design projects, or simply appreciating our beautiful planet! 🌎

## 🔥 Features

- 🎯 **Batch Processing** - Downloads images in efficient batches of 20
- 📊 **Progress Tracking** - Real-time console updates on download progress
- 🛡️ **Error Handling** - Robust error handling for failed downloads
- 🏃‍♂️ **Fast & Efficient** - Concurrent downloads for maximum speed
- 📁 **Organized Output** - Saves images to a clean `/images` directory

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd wallpaperids

# Install dependencies
npm install
```

### Usage

```bash
# Run the downloader
npm start
# or
node index.ts
```

## 📋 How it Works

1. 📝 **Image IDs** - The app reads from a collection of image IDs (`ids.ts`)
2. 🌐 **API Calls** - Fetches image data from Google's Pretty Earth API
3. 💾 **Download** - Converts and saves images to your local `/images` folder
4. 📊 **Progress** - Shows real-time progress updates in your console

## 🏗️ Project Structure

```
wallpaperids/
├── 📄 index.ts          # Main downloader script
├── 📄 ids.ts            # Collection of image IDs
├── 📁 images/           # Downloaded wallpapers (created automatically)
└── 📄 README.md         # You are here! 👋
```

## 🎨 Sample Output

```
Processing batch 1 (20 images)...
Image abc123, 1 of 100 saved
Image def456, 2 of 100 saved
...
Batch complete. 20 of 100 images processed.
All downloads complete. 🎉
```

## 🛠️ Technical Details

- **Language**: TypeScript 💙
- **Image Processing**: `image-data-uri` package
- **API Source**: Google's Pretty Earth collection
- **Batch Size**: 20 concurrent downloads (configurable)

## 🤝 Contributing

Found a bug? Have a feature request? Feel free to open an issue or submit a pull request! 

## 📜 License

This project is open source. Please respect Google's terms of service when using their Pretty Earth data.

## ⭐ Show Your Support

If this project helped you create amazing wallpaper collections, give it a star! ⭐

---

**Happy downloading!** 🎉 May your desktop be forever beautiful! 🖥️✨
