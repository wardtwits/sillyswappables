import React, { useRef } from 'react';
import DraggableImage from './components/DraggableImage'; // Import the DraggableImage component
import './App.css'; // Import your CSS styles

function App() {
  const containerRef = useRef(null);

  const images = [
    { src: '/images/image1.png', alt: 'Image 1', initialX: 50, initialY: 50 },
    { src: '/images/image2.png', alt: 'Image 2', initialX: 150, initialY: 100 },
    { src: '/images/image3.png', alt: 'Image 3', initialX: 250, initialY: 75 },
    //... more images
  ];

  return (
    <div className="app-container" ref={containerRef}>
      {images.map((image, index) => (
        <DraggableImage key={index} {...image} containerRef={containerRef} />
      ))}
    </div>
  );
}

export default App;