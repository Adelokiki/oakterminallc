import { useEffect } from 'react';

// List of all images used in the application
const PRELOAD_IMAGES = [
  // Your uploaded Oak Terminal images
  '/oak-terminal-1.png.jpg',
  '/oak-terminal-2.png.jpg',
  '/oak-terminal-3.png.jpg',
  '/oak-terminal-4.png.jpg',
  '/oak-terminal-5.png.jpg',
  '/oak-terminal-7.png.jpg',
  '/oak-terminal-8.png.jpg',
  '/oak-terminal-9.png.jpg',
  '/oak-terminal-10.png.jpg',
  '/oak-terminal-11.png.jpg',
  '/oak-terminal-12.png.jpg',
  '/oak-terminal-13.png.jpg',
  '/oak-terminal-14.png.jpg',
  '/oak-terminal-16.png.jpg'
];

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