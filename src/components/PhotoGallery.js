import { useState, useEffect } from "react";


// Helper function to dynamically import all images from a folder
const importAllImages = (requireContext) => {
  return requireContext.keys().map((key) => ({
    path: key, // Store the relative path of the image
    src: requireContext(key), // Import the image source
  }));
};

export const PhotoGallery = ({ topic }) => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null); // State to track the currently viewed image
  const topicClass = topic.path.split("/")[0]; // Get the main folder (e.g., 'painting', 'photography')
  const topicSubClass = topic.path.split("/")[1]; // Get the subfolder (e.g., 'landscape', 'Architecture')

  useEffect(() => {
    const loadedImages = importAllImages(require.context('../assets/img/gallery/', true, /\.(png|jpe?g|svg)$/));

    // Filter the images based on the topic class and sub-class
    const filteredImages = loadedImages.filter((image) => {
      const imagePathArray = image.path.split("/"); // Split the image path into an array
      const imageClass = imagePathArray[1]; // Get the main folder
      const imageSubClass = imagePathArray[2]; // Get the subfolder

      // Match image paths with the current topic
      return imageClass === topicClass && imageSubClass === topicSubClass;
    });

    setImages(filteredImages); // Set the filtered images
  }, [topicClass, topicSubClass]); // Run effect when the topic changes

  // Function to open modal with the clicked image
  const openModal = (index) => {
    setCurrentImageIndex(index);
  };

  // Function to close the modal
  const closeModal = () => {
    setCurrentImageIndex(null);
  };

  // Function to go to the previous image
  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Function to go to the next image
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <h2 className="section__title">{topic.group}</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src.default || image.src}
            alt={`Image ${index}`}
            className="gallery__image"
            onClick={() => openModal(index)} // Open modal on image click
          />
        ))}
      </div>

      {/* Modal for displaying the large image */}
      {currentImageIndex !== null && (
        <div className="modal">
          <button className="close" onClick={closeModal}><i className="uil uil-times"></i></button>
          <button className="prev" onClick={showPreviousImage}><i className="uil uil-angle-left-b"></i></button>
          <img
            src={images[currentImageIndex].src.default || images[currentImageIndex].src}
            alt={`Image ${currentImageIndex}`}
            className="modal__image"
          />
          <button className="next" onClick={showNextImage}><i className="uil uil-angle-right-b"></i></button>
        </div>
      )}
    </>
  );
};
