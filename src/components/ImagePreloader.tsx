import { useEffect } from 'react';

// List of all images used in the application
const PRELOAD_IMAGES = [
  // HSEQ Images
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
  'https://images.unsplash.com/photo-1564182842519-8a3b2af3e228',
  'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc',
  'https://images.unsplash.com/photo-1504813184591-01572f98c85f',
  'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
  'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d',
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
  // Home page carousel images
  'https://bolt.new/api/upload/files%2F1969447-1753710682363-oak-terminal-1.png.png',
  'https://bolt.new/api/upload/files%2F1969447-1753710683034-oak-terminal-2.png.png',
  'https://bolt.new/api/upload/files%2F1969447-1753710682586-oak-terminal-3.png.png',
  'https://bolt.new/api/upload/files%2F1969447-1753710682513-oak-terminal-5.png.png'
].map(url => `${url}?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80`);

function ImagePreloader() {
  useEffect(() => {
    // Preload images immediately when component mounts
    PRELOAD_IMAGES.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return null;
}

export default ImagePreloader;