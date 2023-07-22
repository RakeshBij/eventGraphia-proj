import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";

const PhotoGrid = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchImages = () => {
    const baseUrl = "http://via.placeholder.com/200x200?text=";
    const startIndex = images.length + 1;
    const endIndex = startIndex + 30;

    let newImages = [];
    for (let i = startIndex; i < endIndex; i++) {
      newImages.push({
        thumbnail: `${baseUrl}${i}`,
        thumbnailAlt: `Image ${i}`,
      });
    }

    setImages([...images, ...newImages]);

    if (newImages.length < 30) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      scrollThreshold={0.9}
    >
      <div className="photo-grid">
        {images.map((image, index) => (
          <div key={index} className="photo-item">
            <img
              src={image.thumbnail}
              alt={image.thumbnailAlt}
              onClick={() => {
                navigate("/details/" + (index + 1));
              }}
            />
          </div>
        ))}
        {/* <div className="top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="1.5em"
            viewBox="0 0 384 512"
          >
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </div> */}
      </div>
    </InfiniteScroll>
  );
};

export default PhotoGrid;
