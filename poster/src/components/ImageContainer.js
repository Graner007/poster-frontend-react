const ImageContainer = ({ images }) => {
  const imageCount = images.length;
  return (
    <div className="post-image-container">
      {imageCount <= 2 && (
        <div className="single-image-container">
          {images.map((image) => (
            <img src={image.mediaRoute} />
          ))}
        </div>
      )}
      {imageCount == 3 && (
        <div className="double-image-container">
          <div className="double-image-first">
            <img src={images[0].mediaRoute} />
          </div>
          <div className="double-image-second">
            <div className="double-image-top-right">
              <img src={images[1].mediaRoute} />
            </div>
            <div className="double-image-bottom-right">
              <img src={images[2].mediaRoute} />
            </div>
          </div>
        </div>
      )}
      {imageCount == 4 && (
        <div className="double-image-container">
          <div className="double-image-first">
            <div className="double-image-top-left">
              <img src={images[0].mediaRoute} />
            </div>
            <div className="double-image-top-left">
              <img src={images[1].mediaRoute} />
            </div>
          </div>
          <div className="double-image-second">
            <div className="double-image-top-right">
              <img src={images[2].mediaRoute} />
            </div>
            <div className="double-image-bottom-right">
              <img src={images[3].mediaRoute} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
